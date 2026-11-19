/* ==========================================================
   SHIFTLY · SERVICIO OPENAI (CHATGPT) PARA EJERCICIOS
   Genera ejercicios en JSON con la API de OpenAI
   (POST /v1/chat/completions, modelo gpt-4o-mini,
   response_format: json_object) y los valida antes de usarlos.

   La API Key NO va en el código: el usuario la guarda en
   localStorage ("shiftly_openai_api_key") desde el modal de
   configuración de Ejercicios. Para producción conviene mover
   la llamada a un endpoint propio de Laravel con la clave en .env
   para que nunca llegue al navegador.

   Interfaz pública (window.ServicioIA):
     ServicioIA.tieneApiKey()
     await ServicioIA.generar({ carrera, leccion, nivel, temas, cantidad })
   ========================================================== */
(function (global) {
    "use strict";

    const NOMBRE = "ChatGPT";
    const STORAGE_KEY = "shiftly_openai_api_key";
    const CLAVE_ANTERIOR = "shiftly_gemini_api_key"; // servicio reemplazado
    const MODELO = "gpt-4o-mini";
    const ENDPOINT = "https://api.openai.com/v1/chat/completions";
    const TIEMPO_LIMITE_MS = 30000;
    const TIPOS = ["opcion", "completar", "ordenar", "emparejar", "escuchar"];

    // La clave de Gemini ya no se usa: se elimina para no dejarla guardada
    try { localStorage.removeItem(CLAVE_ANTERIOR); } catch (e) { /* sin acceso a storage */ }

    // ----------------------------------------------------------
    // API Key en localStorage
    // ----------------------------------------------------------
    function obtenerApiKey() {
        try {
            return (localStorage.getItem(STORAGE_KEY) || "").trim();
        } catch (e) {
            return "";
        }
    }

    function guardarApiKey(clave) {
        localStorage.setItem(STORAGE_KEY, String(clave || "").trim());
    }

    function borrarApiKey() {
        localStorage.removeItem(STORAGE_KEY);
    }

    function tieneApiKey() {
        return obtenerApiKey().length > 0;
    }

    function enmascarar(clave) {
        const k = String(clave || "");
        return k.length > 10 ? `${k.slice(0, 6)}••••••${k.slice(-4)}` : "••••";
    }

    // ----------------------------------------------------------
    // Mensajes para ChatGPT (json_object exige mencionar JSON)
    // ----------------------------------------------------------
    const MENSAJE_SISTEMA = `Eres un profesor de inglés técnico para hispanohablantes en la plataforma Shiftly.
Respondes SIEMPRE con un único objeto JSON válido, sin texto adicional, con esta forma:
{"ejercicios": [ { ...ejercicio }, ... ]}

Cada ejercicio tiene "tipo", "enunciado" (español) y "explicacion" (español, máximo 120 caracteres), más los campos de su tipo:
- "opcion": "frase" en inglés con exactamente un hueco escrito como ___ ; "opciones" = 4 palabras o expresiones en inglés; "correcta" = índice (0-3) de la correcta.
- "emparejar": "pares" = 4 objetos {"en": término en inglés, "es": traducción al español}.
- "completar": "antes" y "despues" = texto en inglés alrededor del hueco; "respuestas" = 1 a 3 respuestas válidas en minúsculas; "pista" en español.
- "ordenar": "palabras" = la oración en inglés dividida en 5 a 9 palabras en orden correcto (sin punto final, una palabra por elemento); "distractores" = 2 palabras incorrectas parecidas.
- "escuchar": "audio" = una oración en inglés; "opciones" = 3 traducciones al español (solo una correcta); "correcta" = índice de la correcta.`;

    function construirPrompt({ carrera, leccion, nivel, temas, cantidad }) {
        return `Crea ${cantidad} ejercicios NUEVOS e inéditos de inglés profesional en formato JSON.

Contexto:
- Carrera: ${carrera}
- Lección: ${leccion}
- Temas de la lección: ${temas || leccion}
- Nivel del alumno (MCER): ${nivel}

Reglas:
- Usa vocabulario técnico real y natural del trabajo en ${carrera}.
- Incluye exactamente un ejercicio de cada tipo, en este orden: opcion, emparejar, completar, ordenar, escuchar.`;
    }

    // ----------------------------------------------------------
    // Validación y normalización de cada ejercicio
    // ----------------------------------------------------------
    const texto = (v, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");
    const listaTexto = (v, max = 120) => (Array.isArray(v) ? v.map((x) => texto(x, max)).filter(Boolean) : []);
    const indice = (v) => (typeof v === "string" && /^\d+$/.test(v) ? Number(v) : v);

    function normalizar(ej) {
        if (!ej || !TIPOS.includes(ej.tipo)) return null;
        const base = {
            tipo: ej.tipo,
            enunciado: texto(ej.enunciado, 140) || "Resuelve el ejercicio",
            explicacion: texto(ej.explicacion, 200)
        };

        switch (ej.tipo) {
            case "opcion": {
                const opciones = [...new Set(listaTexto(ej.opciones, 80))];
                const frase = texto(ej.frase, 220);
                const correcta = indice(ej.correcta);
                if (!frase.includes("___") || opciones.length < 3 || opciones.length > 5) return null;
                if (!Number.isInteger(correcta) || correcta < 0 || correcta >= opciones.length) return null;
                return { ...base, frase, opciones, correcta };
            }
            case "completar": {
                const respuestas = listaTexto(ej.respuestas, 60).map((r) => r.toLowerCase());
                const antes = texto(ej.antes, 200);
                const despues = texto(ej.despues, 200);
                if (!respuestas.length || (!antes && !despues)) return null;
                return { ...base, antes, despues, respuestas, pista: texto(ej.pista, 140) };
            }
            case "ordenar": {
                const palabras = listaTexto(ej.palabras, 30).filter((p) => !/\s/.test(p));
                if (palabras.length < 3 || palabras.length > 10) return null;
                const distractores = listaTexto(ej.distractores, 30)
                    .filter((d) => !/\s/.test(d) && !palabras.includes(d))
                    .slice(0, 3);
                return { ...base, palabras, distractores, sufijo: "." };
            }
            case "emparejar": {
                const pares = (Array.isArray(ej.pares) ? ej.pares : [])
                    .map((p) => ({ en: texto(p && p.en, 60), es: texto(p && p.es, 60) }))
                    .filter((p) => p.en && p.es);
                const unicos = pares.filter((p, i) => pares.findIndex((q) => q.en === p.en || q.es === p.es) === i);
                if (unicos.length < 3) return null;
                return { ...base, pares: unicos.slice(0, 5) };
            }
            case "escuchar": {
                const opciones = [...new Set(listaTexto(ej.opciones, 160))];
                const audio = texto(ej.audio, 220);
                const correcta = indice(ej.correcta);
                if (!audio || opciones.length < 2 || opciones.length > 4) return null;
                if (!Number.isInteger(correcta) || correcta < 0 || correcta >= opciones.length) return null;
                return { ...base, audio, opciones, correcta };
            }
            default:
                return null;
        }
    }

    // ----------------------------------------------------------
    // Llamada REST a OpenAI
    // ----------------------------------------------------------
    function crearError(codigo, mensaje) {
        const error = new Error(mensaje);
        error.codigo = codigo;
        return error;
    }

    async function generar({ carrera, leccion, nivel = "B1 Intermedio", temas = "", cantidad = 5 } = {}) {
        const apiKey = obtenerApiKey();
        if (!apiKey) throw crearError("sin_clave", "No hay una API Key de OpenAI configurada.");
        if (!navigator.onLine) throw crearError("sin_conexion", "Sin conexión a internet.");

        const controlador = new AbortController();
        const temporizador = setTimeout(() => controlador.abort(), TIEMPO_LIMITE_MS);

        let respuesta;
        try {
            respuesta = await fetch(ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: MODELO,
                    response_format: { type: "json_object" },
                    temperature: 0.9,
                    messages: [
                        { role: "system", content: MENSAJE_SISTEMA },
                        { role: "user", content: construirPrompt({ carrera, leccion, nivel, temas, cantidad }) }
                    ]
                }),
                signal: controlador.signal
            });
        } catch (e) {
            throw e.name === "AbortError"
                ? crearError("tiempo", "ChatGPT tardó demasiado en responder.")
                : crearError("red", "No se pudo conectar con OpenAI.");
        } finally {
            clearTimeout(temporizador);
        }

        if (!respuesta.ok) {
            if (respuesta.status === 401 || respuesta.status === 403) {
                throw crearError("clave_invalida", "La API Key de OpenAI no es válida o no tiene permisos.");
            }
            if (respuesta.status === 429) {
                throw crearError("cuota", "Se alcanzó el límite de uso o el saldo de tu cuenta de OpenAI.");
            }
            throw crearError("servidor", `OpenAI respondió con un error (${respuesta.status}).`);
        }

        let datos;
        try {
            const json = await respuesta.json();
            datos = JSON.parse(json?.choices?.[0]?.message?.content || "");
        } catch (e) {
            throw crearError("formato", "La respuesta de ChatGPT no tenía un formato JSON válido.");
        }

        const ejercicios = (Array.isArray(datos?.ejercicios) ? datos.ejercicios : [])
            .map(normalizar)
            .filter(Boolean)
            .slice(0, cantidad);

        if (!ejercicios.length) {
            throw crearError("formato", "ChatGPT no devolvió ejercicios válidos.");
        }
        return ejercicios;
    }

    global.ServicioIA = {
        NOMBRE,
        MODELO,
        STORAGE_KEY,
        obtenerApiKey,
        guardarApiKey,
        borrarApiKey,
        tieneApiKey,
        enmascarar,
        generar
    };
})(window);
