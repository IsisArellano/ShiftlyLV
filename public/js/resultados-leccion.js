/* ==========================================================
   SHIFTLY · RESULTADOS DE LECCIÓN
   Muestra los resultados reales guardados por /ejercicios en
   shiftly_progreso_<carrera>.ejercicios (vía shiftly-progreso.js):
   puntuación global (retos resueltos a la primera), un botón por
   ruta practicada y un modal con aciertos, tiempo y lecciones.
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const P = window.ShiftlyProgreso;
    const contadorPuntaje = document.getElementById("contadorPuntaje");
    const lista = document.getElementById("listaResultados");
    const sinResultados = document.getElementById("sinResultados");
    const textoResumen = document.getElementById("textoResumenResultados");

    const modal = new bootstrap.Modal(document.getElementById("modalDetalles"));
    const modalTitulo = document.getElementById("modalTitulo");
    const modalAciertos = document.getElementById("modalAciertos");
    const modalTiempo = document.getElementById("modalTiempo");
    const modalLecciones = document.getElementById("modalLecciones");
    const modalDetalle = document.getElementById("modalDetalleLecciones");
    const BASE = (document.body.dataset.urlBase || "").replace(/\/$/, "");

    const escaparHTML = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));

    function animarPuntaje(meta) {
        let valor = 0;
        contadorPuntaje.textContent = "0";
        if (!meta) return;
        const paso = Math.max(1, Math.round(meta / 50));
        const intervalo = setInterval(() => {
            valor = Math.min(meta, valor + paso);
            contadorPuntaje.textContent = valor;
            if (valor >= meta) clearInterval(intervalo);
        }, 20);
    }

    if (!P) return;
    const global = P.resumenGlobal();
    const practicadas = global.porCarrera.filter((c) => c.practicas > 0 || c.completadas > 0);

    if (!practicadas.length) {
        sinResultados.classList.remove("d-none");
        textoResumen.textContent = "Aún no hay resultados guardados.";
        animarPuntaje(0);
        return;
    }

    animarPuntaje(global.precision || 0);
    textoResumen.textContent =
        `Resolviste a la primera el ${global.precision ?? 0}% de los retos · ${global.lecciones} lecciones completadas · ` +
        `${P.formatoTiempo(global.segundos)} de práctica. Toca una ruta para ver el detalle.`;

    lista.innerHTML = practicadas.map((c, i) => `
        <button type="button" class="btn btn-modulo-detalle ${i === 0 ? "destacado" : ""} btn-detalle" data-slug="${escaparHTML(c.slug)}">
            <span class="d-flex align-items-center gap-2">
                <span class="rounded-circle icon-area d-flex align-items-center justify-content-center" style="width: 32px; height: 32px; background-color: var(--orange-light); color: var(--orange-bright);">
                    <i class="bi ${escaparHTML(c.icono)}"></i>
                </span>
                Detalle ${escaparHTML(c.nombre)}
                <span class="badge rounded-pill ms-1" style="background-color: var(--purple-soft); color: var(--purple-main);">${c.porcentaje}%</span>
            </span>
            <i class="bi bi-chevron-right small"></i>
        </button>`).join("");

    lista.addEventListener("click", (evento) => {
        const boton = evento.target.closest(".btn-detalle");
        if (!boton) return;
        const c = P.resumenCarrera(boton.dataset.slug);

        modalTitulo.innerHTML = `<i class="bi ${escaparHTML(c.icono)} text-warning"></i> ${escaparHTML(c.nombre)}`;
        modalAciertos.textContent = c.ejerciciosRespondidos ? `${c.aciertosPrimerIntento}/${c.ejerciciosRespondidos}` : "--";
        modalTiempo.textContent = c.segundos ? P.formatoTiempo(c.segundos) : "--";
        modalLecciones.textContent = `${c.completadas}/${c.total}`;

        const filas = c.lecciones.filter((l) => l.resultado).map((l) => `
            <div class="d-flex justify-content-between align-items-center p-2 rounded-3" style="background-color: var(--purple-soft);">
                <span class="fw-semibold" style="color: var(--purple-dark);">${escaparHTML(l.titulo)}</span>
                <span class="text-muted">${Number(l.resultado.aciertosPrimerIntento)}/${Number(l.resultado.total)} · ${Number(l.resultado.vidas)} <i class="bi bi-heart-fill text-danger"></i></span>
            </div>`);
        modalDetalle.innerHTML = filas.join("") +
            `<a href="${BASE}/ruta-${escaparHTML(c.slug)}" class="btn btn-modulo-detalle destacado justify-content-center mt-2">
                <span><i class="bi bi-diagram-3 me-1"></i> Ir a la ruta de ${escaparHTML(c.nombre)}</span>
            </a>`;

        modal.show();
    });
});
