/* ==========================================================
   SHIFTLY · SERVICE WORKER (PWA)
   - Páginas y archivos propios (CSS, JS, imágenes): red primero; si no hay
     conexión, la última copia guardada (así los cambios se ven al instante).
   - CDNs con versión fija (Bootstrap, fuentes, fotos): caché primero y se
     actualizan en segundo plano.
   - Nunca guarda peticiones a APIs (OpenAI) ni peticiones que no sean GET.
   Al cambiar archivos importantes, sube VERSION para limpiar el caché viejo.
   ========================================================== */
const VERSION = "shiftly-v1";
const CACHE_PAGINAS = `${VERSION}-paginas`;
const CACHE_RECURSOS = `${VERSION}-recursos`;

// Rutas relativas al alcance del service worker (funciona en / o en /ShiftlyLV/public/)
const PRECARGA = [
    "dashboard",
    "ejercicios",
    "glosario",
    "recomendaciones",
    "js/rutas-catalogo.js",
    "js/shiftly-progreso.js",
    "js/voz-femenina.js",
    "js/ejercicios-leccion.js",
    "img/pwa/icono-192.png"
];

const ORIGENES_CDN = [
    "https://cdn.jsdelivr.net",
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://images.unsplash.com"
];

self.addEventListener("install", (evento) => {
    evento.waitUntil(
        caches.open(CACHE_RECURSOS)
            .then((cache) => Promise.allSettled(PRECARGA.map((ruta) => cache.add(new Request(ruta, { cache: "reload" })))))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", (evento) => {
    evento.waitUntil(
        caches.keys()
            .then((claves) => Promise.all(claves.filter((c) => !c.startsWith(VERSION)).map((c) => caches.delete(c))))
            .then(() => self.clients.claim())
    );
});

function esRecurso(url) {
    return /\.(css|js|png|jpe?g|svg|webp|gif|woff2?|ttf|json|webmanifest)$/i.test(url.pathname)
        || ORIGENES_CDN.includes(url.origin);
}

// Recursos: caché inmediato + actualización en segundo plano
async function cacheYActualizar(peticion) {
    const cache = await caches.open(CACHE_RECURSOS);
    const guardada = await cache.match(peticion);
    const red = fetch(peticion)
        .then((respuesta) => {
            if (respuesta && (respuesta.ok || respuesta.type === "opaque")) cache.put(peticion, respuesta.clone());
            return respuesta;
        })
        .catch(() => guardada);
    return guardada || red;
}

// Archivos propios: red primero, copia guardada si no hay conexión
async function recursoRedPrimero(peticion) {
    const cache = await caches.open(CACHE_RECURSOS);
    try {
        const respuesta = await fetch(peticion);
        if (respuesta.ok) cache.put(peticion, respuesta.clone());
        return respuesta;
    } catch (e) {
        const guardada = await cache.match(peticion) || await cache.match(peticion, { ignoreSearch: true });
        if (guardada) return guardada;
        throw e;
    }
}

// Páginas: red primero, copia guardada si no hay conexión
async function redPrimero(peticion) {
    const cache = await caches.open(CACHE_PAGINAS);
    try {
        const respuesta = await fetch(peticion);
        if (respuesta.ok) cache.put(peticion, respuesta.clone());
        return respuesta;
    } catch (e) {
        const guardada = await cache.match(peticion, { ignoreSearch: true })
            || await caches.match(peticion, { ignoreSearch: true });
        return guardada || new Response(
            "<!doctype html><meta charset='utf-8'><meta name='viewport' content='width=device-width'>" +
            "<title>Sin conexión · Shiftly</title><body style='font-family:system-ui;text-align:center;padding:3rem;background:#F6F1FA;color:#1B1035'>" +
            "<h1>Sin conexión</h1><p>Esta página aún no está guardada para usarse sin internet. Vuelve a intentarlo cuando tengas conexión.</p></body>",
            { headers: { "Content-Type": "text/html; charset=utf-8" }, status: 503 }
        );
    }
}

self.addEventListener("fetch", (evento) => {
    const { request } = evento;
    if (request.method !== "GET") return;

    const url = new URL(request.url);
    const mismoOrigen = url.origin === self.location.origin;
    if (!mismoOrigen && !ORIGENES_CDN.includes(url.origin)) return; // APIs externas: siempre a la red

    if (request.mode === "navigate" && mismoOrigen) {
        evento.respondWith(redPrimero(request));
    } else if (mismoOrigen && esRecurso(url)) {
        evento.respondWith(recursoRedPrimero(request));
    } else if (!mismoOrigen) {
        evento.respondWith(cacheYActualizar(request));
    }
});
