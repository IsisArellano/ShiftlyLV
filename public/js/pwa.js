/* ==========================================================
   SHIFTLY · REGISTRO DE LA PWA
   Registra public/sw.js y muestra un botón "Instalar app"
   cuando el navegador permite instalar Shiftly.
   Cargar con <script src="…/js/pwa.js" defer></script>.
   ========================================================== */
(function () {
    "use strict";

    if (!("serviceWorker" in navigator) || !window.isSecureContext) return;

    // sw.js vive en la raíz de /public (un nivel arriba de /js)
    const script = document.currentScript;
    const urlSw = new URL("../sw.js", script ? script.src : window.location.href);

    window.addEventListener("load", () => {
        navigator.serviceWorker.register(urlSw.href).catch((error) => {
            console.warn("No se pudo registrar el service worker de Shiftly.", error);
        });
    });

    // ---------------- Botón "Instalar app" ----------------
    let eventoInstalacion = null;

    function crearBoton() {
        if (document.getElementById("btnInstalarShiftly")) return;
        const boton = document.createElement("button");
        boton.id = "btnInstalarShiftly";
        boton.type = "button";
        boton.innerHTML = '<i class="bi bi-download me-1"></i> Instalar app';
        boton.setAttribute("aria-label", "Instalar Shiftly en este dispositivo");
        Object.assign(boton.style, {
            position: "fixed",
            left: "16px",
            bottom: "16px",
            zIndex: "1080",
            border: "none",
            borderRadius: "1rem",
            padding: "0.6rem 1rem",
            fontWeight: "800",
            fontFamily: "inherit",
            color: "#FFFFFF",
            background: "#FF6A2B",
            boxShadow: "0 4px 0 #C9440E"
        });
        boton.addEventListener("click", async () => {
            if (!eventoInstalacion) return;
            eventoInstalacion.prompt();
            await eventoInstalacion.userChoice;
            eventoInstalacion = null;
            boton.remove();
        });
        document.body.appendChild(boton);
    }

    window.addEventListener("beforeinstallprompt", (evento) => {
        evento.preventDefault();
        eventoInstalacion = evento;
        crearBoton();
    });

    window.addEventListener("appinstalled", () => {
        const boton = document.getElementById("btnInstalarShiftly");
        if (boton) boton.remove();
    });
})();
