/* ==========================================================
   SHIFTLY · RESULTADO DEL DIAGNÓSTICO
   Lee "shiftlyDiagnosticoResultado" (guardado por diagnostico.js)
   y muestra el nivel real, la recomendación con la lección inicial
   de la carrera y la revisión de respuestas.
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const P = window.ShiftlyProgreso;
    const BASE = (document.body.dataset.urlBase || "").replace(/\/$/, "");
    const $ = (id) => document.getElementById(id);
    const escaparHTML = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));

    const d = P ? P.diagnostico() : null;

    // Sin diagnóstico: invitar a hacerlo
    if (!d) {
        $("nivel-resultado").textContent = "?";
        $("nombre-nivel").textContent = "Aún no tienes diagnóstico";
        $("descripcion-nivel").textContent = "Haz el examen diagnóstico de 10 preguntas para estimar tu nivel de inglés profesional.";
        $("texto-recomendacion").textContent = "Cuando lo termines, aquí verás tu nivel y la lección de tu carrera en la que conviene empezar.";
        $("btnRevisarRespuestas").classList.add("d-none");
        const continuar = $("btnContinuarDiagnostico");
        continuar.href = `${BASE}/diagnostico`;
        continuar.innerHTML = 'Hacer diagnóstico <i class="bi bi-arrow-right ms-1"></i>';
        return;
    }

    $("nivel-resultado").textContent = d.nivel;
    $("nombre-nivel").textContent = d.nombre;
    $("descripcion-nivel").textContent = d.descripcion;

    const leccion = d.leccionRecomendada;
    $("texto-recomendacion").textContent = leccion
        ? `${d.recomendacion} En tu ruta de ${d.carreraNombre} te recomendamos empezar en la Lección ${leccion.numero}: «${leccion.titulo}».`
        : d.recomendacion;

    const continuar = $("btnContinuarDiagnostico");
    const carrera = P.resumenCarrera(d.slug);
    if (leccion && carrera && carrera.completadas >= leccion.numero && carrera.siguiente) {
        // Ya avanzó más allá de la lección recomendada: continuar donde va
        continuar.href = `${BASE}/ejercicios?carrera=${encodeURIComponent(d.slug)}&leccion=${encodeURIComponent(carrera.parametroSiguiente)}`;
        continuar.innerHTML = `Continuar mi ruta <i class="bi bi-arrow-right ms-1"></i>`;
    } else if (leccion && !(carrera && carrera.completa)) {
        continuar.href = `${BASE}/ejercicios?carrera=${encodeURIComponent(d.slug)}&leccion=${leccion.numero}`;
        continuar.innerHTML = `Empezar Lección ${leccion.numero} <i class="bi bi-arrow-right ms-1"></i>`;
    } else {
        continuar.href = `${BASE}/ruta-${encodeURIComponent(d.slug)}`;
    }

    // Revisión de respuestas en el modal
    $("resumen-revision").textContent =
        `Obtuviste ${Number(d.aciertos)} de ${Number(d.total)} aciertos en el área de ${d.carreraNombre}.`;
    const revision = Array.isArray(d.revision) ? d.revision : [];
    $("lista-revision").innerHTML = revision.map((item, i) => `
        <div class="p-3 rounded-4" style="background-color: ${item.correcta ? "#F0FDF4" : "#FEF2F2"}; border: 2px solid ${item.correcta ? "#86EFAC" : "#FECACA"};">
            <div class="d-flex justify-content-between align-items-start gap-2 mb-1">
                <strong class="small" style="color: var(--purple-dark);">Pregunta ${i + 1}: ${escaparHTML(item.pregunta)}</strong>
                <span class="badge rounded-pill ${item.correcta ? "bg-success" : "bg-danger"}">${item.correcta ? "Correcta" : "Incorrecta"}</span>
            </div>
            <div class="small mb-1">
                <strong>Tu respuesta:</strong> ${escaparHTML(item.respuestaElegida)}
                ${item.correcta ? "" : ` · <strong class="text-success">Correcta:</strong> ${escaparHTML(item.respuestaCorrecta)}`}
            </div>
            <div class="small text-muted"><i class="bi bi-info-circle-fill me-1"></i>${escaparHTML(item.explicacion)}</div>
        </div>`).join("");
});
