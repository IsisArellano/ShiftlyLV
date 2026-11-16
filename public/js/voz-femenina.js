/* ==========================================================
   SHIFTLY · VOZ FEMENINA PARA PRONUNCIACIÓN EN INGLÉS
   Función global: reproducirAudioIngles(texto, opciones?)

   1) Modo premium automático (OpenAI TTS):
      si existe localStorage "shiftly_openai_api_key", usa
      POST https://api.openai.com/v1/audio/speech con el modelo
      "tts-1" y la voz femenina "nova". Cada frase se guarda en un
      caché en memoria (Map) para no repetir peticiones.
   2) Respaldo en el navegador (speechSynthesis):
      si no hay clave o la petición falla, elige la mejor voz
      femenina en-US disponible (Aria, Jenny, Google US English,
      Samantha, Victoria, Zira o cualquier Natural/Neural/Female).

   Opciones: { velocidad: 0.90, lang: "en-US", soloNavegador: false }
   Cargar ANTES de los scripts que reproducen audio.
   ========================================================== */
(function (global) {
    "use strict";

    // ----------------------------------------------------------
    // Configuración
    // ----------------------------------------------------------
    const CLAVE_API = "shiftly_openai_api_key";
    const ENDPOINT_TTS = "https://api.openai.com/v1/audio/speech";
    const MODELO_TTS = "tts-1";
    const VOZ_OPENAI = "nova";
    const VELOCIDAD = 0.90;
    const TONO = 1.05;
    const MAX_CACHE = 80;
    const TIEMPO_LIMITE_MS = 15000;

    // Orden de preferencia de voces femeninas del navegador
    const VOCES_PREFERIDAS = [
        "Microsoft Aria",
        "Microsoft Jenny",
        "Google US English",
        "Samantha",
        "Victoria",
        "Zira"
    ];

    // Voces masculinas comunes que se evitan en el respaldo genérico
    const VOCES_MASCULINAS = /\b(david|mark|guy|davis|tony|jason|eric|roger|christopher|andrew|brian|steffan|alex|fred|daniel|tom|male)\b/i;

    const soportaVozNavegador ="speechSynthesis" in global && "SpeechSynthesisUtterance" in global;

    // ----------------------------------------------------------
    // Estado
    // ----------------------------------------------------------
    const cacheAudio = new Map();   // "velocidad|texto" → URL del audio (blob)
    let audioActual = null;          // <audio> de OpenAI en reproducción
    let turno = 0;                   // descarta respuestas de clics anteriores
    let openaiDeshabilitado = false; // clave inválida o sin saldo: no reintentar en esta visita
    let vozElegida = null;
    let ultimoModo = null;

    // ----------------------------------------------------------
    // Selección de voz femenina del navegador
    // ----------------------------------------------------------
    const esIdioma = (voz, lang) => String(voz.lang || "").replace("_", "-").toLowerCase().startsWith(lang.toLowerCase());

    function elegirVoz(lang = "en-US") {
        if (!soportaVozNavegador) return null;
        const voces = global.speechSynthesis.getVoices();
        if (!voces.length) return null;

        const delIdioma = voces.filter((v) => esIdioma(v, lang));
        for (const nombre of VOCES_PREFERIDAS) {
            const voz = delIdioma.find((v) => v.name.includes(nombre))
                || (lang === "en-US" ? voces.find((v) => v.name.includes(nombre)) : null);
            if (voz) return voz;
        }
        return delIdioma.find((v) => /natural|neural|female/i.test(v.name) && !VOCES_MASCULINAS.test(v.name))
            || delIdioma.find((v) => !VOCES_MASCULINAS.test(v.name))
            || delIdioma[0]
            || voces.find((v) => esIdioma(v, lang.split("-")[0]))
            || null;
    }

    function actualizarVoz() {
        vozElegida = elegirVoz("en-US");
    }

    if (soportaVozNavegador) {
        actualizarVoz();
        // Algunos navegadores cargan las voces de forma asíncrona
        global.speechSynthesis.addEventListener("voiceschanged", actualizarVoz);
    }

    // ----------------------------------------------------------
    // Utilidades
    // ----------------------------------------------------------
    function obtenerApiKey() {
        try {
            return (global.localStorage.getItem(CLAVE_API) || "").trim();
        } catch (e) {
            return "";
        }
    }

    function detenerAudioIngles() {
        turno++;
        if (soportaVozNavegador) global.speechSynthesis.cancel();
        if (audioActual) {
            audioActual.pause();
            audioActual.currentTime = 0;
            audioActual = null;
        }
    }

    function guardarEnCache(clave, url) {
        if (cacheAudio.size >= MAX_CACHE) {
            const masAntigua = cacheAudio.keys().next().value;
            URL.revokeObjectURL(cacheAudio.get(masAntigua));
            cacheAudio.delete(masAntigua);
        }
        cacheAudio.set(clave, url);
    }

    // ----------------------------------------------------------
    // Modo premium: OpenAI TTS (voz "nova")
    // ----------------------------------------------------------
    async function obtenerAudioOpenAI(texto, velocidad, apiKey) {
        const clave = `${velocidad}|${texto}`;
        if (cacheAudio.has(clave)) return cacheAudio.get(clave);

        const controlador = new AbortController();
        const temporizador = setTimeout(() => controlador.abort(), TIEMPO_LIMITE_MS);
        try {
            const respuesta = await fetch(ENDPOINT_TTS, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: MODELO_TTS,
                    voice: VOZ_OPENAI,
                    input: texto,
                    speed: velocidad,
                    response_format: "mp3"
                }),
                signal: controlador.signal
            });

            if (!respuesta.ok) {
                // Clave inválida, sin permisos o sin saldo: usar solo el navegador en esta visita
                if ([401, 403, 429].includes(respuesta.status)) openaiDeshabilitado = true;
                throw new Error(`OpenAI TTS respondió ${respuesta.status}`);
            }

            const url = URL.createObjectURL(await respuesta.blob());
            guardarEnCache(clave, url);
            return url;
        } finally {
            clearTimeout(temporizador);
        }
    }

    // ----------------------------------------------------------
    // Respaldo: voz del navegador
    // ----------------------------------------------------------
    function hablarConNavegador(texto, velocidad, lang) {
        if (!soportaVozNavegador) return false;
        global.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = lang;
        utterance.rate = velocidad;
        utterance.pitch = TONO;

        const voz = lang === "en-US" ? (vozElegida || elegirVoz("en-US")) : elegirVoz(lang);
        if (voz) utterance.voice = voz;

        global.speechSynthesis.speak(utterance);
        ultimoModo = "navegador";
        return true;
    }

    // ----------------------------------------------------------
    // Función global
    // ----------------------------------------------------------
    async function reproducirAudioIngles(texto, opciones = {}) {
        const frase = String(texto ?? "").replace(/\s+/g, " ").trim();
        if (!frase) return null;

        const velocidad = Number(opciones.velocidad) || VELOCIDAD;
        const lang = opciones.lang || "en-US";

        // Cancela cualquier audio previo (navegador u OpenAI)
        detenerAudioIngles();
        const miTurno = turno;

        const apiKey = obtenerApiKey();
        const usarOpenAI = apiKey && !openaiDeshabilitado && !opciones.soloNavegador && lang.startsWith("en");

        if (usarOpenAI) {
            try {
                const url = await obtenerAudioOpenAI(frase, velocidad, apiKey);
                if (miTurno !== turno) return null; // el usuario ya pidió otro audio
                const audio = new Audio(url);
                audioActual = audio;
                await audio.play();
                ultimoModo = "openai";
                return "openai";
            } catch (error) {
                if (miTurno !== turno) return null;
                console.warn("Voz premium no disponible; se usa la voz del navegador.", error.message);
            }
        }

        if (hablarConNavegador(frase, velocidad, lang)) return "navegador";
        if (opciones.avisarSinSoporte !== false) {
            console.warn("Este navegador no admite reproducción de voz.");
        }
        return null;
    }

    global.reproducirAudioIngles = reproducirAudioIngles;
    global.detenerAudioIngles = detenerAudioIngles;
    global.VozFemenina = {
        reproducir: reproducirAudioIngles,
        detener: detenerAudioIngles,
        vozNavegador: () => (vozElegida ? `${vozElegida.name} (${vozElegida.lang})` : null),
        ultimoModo: () => ultimoModo,
        soportado: () => soportaVozNavegador || Boolean(obtenerApiKey()),
        tamanoCache: () => cacheAudio.size
    };
})(window);
