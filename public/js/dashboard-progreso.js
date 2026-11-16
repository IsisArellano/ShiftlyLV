/* ==========================================================
   SHIFTLY · PANEL DE PROGRESO DEL DASHBOARD
   Usa window.ShiftlyProgreso (shiftly-progreso.js):
   progreso global, racha, meta del día, diagnóstico,
   insignias y avance de cada una de las 6 rutas.
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const P = window.ShiftlyProgreso;
    if (!P) return;

    const BASE = (document.body.dataset.urlBase || "").replace(/\/$/, "");
    const urlRuta = (slug) => `${BASE}/ruta-${slug}`;
    const urlEjercicios = (slug, leccion) => `${BASE}/ejercicios?carrera=${encodeURIComponent(slug)}&leccion=${encodeURIComponent(leccion)}`;
    const urlRepaso = (slug) => `${BASE}/ejercicios?carrera=${encodeURIComponent(slug)}&repaso=1`;
    const $ = (id) => document.getElementById(id);

    const escaparHTML = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));

    // ----------------------------------------------------------
    // 1. Progreso global y racha
    // ----------------------------------------------------------
    function pintarGlobal() {
        const g = P.resumenGlobal();
        const r = P.racha();

        $("xpGlobal").textContent = g.xp;
        $("leccionesGlobal").textContent = `${g.lecciones}/${g.totalLecciones}`;
        $("rachaActual").textContent = r.actual;
        $("mejorRacha").textContent = r.mejor;
        $("precisionGlobal").textContent = g.precision === null ? "—" : `${g.precision}%`;
        $("porcentajeGlobal").textContent = `${g.porcentaje}%`;
        $("barraGlobal").style.width = `${g.porcentaje}%`;
        $("nivelGlobal").textContent = `Nivel: ${g.nivel}`;

        $("semanaRacha").innerHTML = P.semana().map((d) => `
            <div class="dia-racha ${d.activo ? "activo" : ""} ${d.hoy ? "hoy" : ""}" title="${escaparHTML(d.fecha)} · ${d.xp} XP">
                <span class="dia-icono"><i class="bi ${d.activo ? "bi-fire" : "bi-circle"}"></i></span>
                <span class="dia-etiqueta">${escaparHTML(d.etiqueta)}</span>
            </div>`).join("");
        return g;
    }

    // ----------------------------------------------------------
    // 2. Meta del día y botón "Continuar"
    // ----------------------------------------------------------
    function pintarMeta(global) {
        const m = P.metaDiaria();
        const r = P.racha();
        $("metaXpHoy").textContent = m.xpHoy;
        $("metaObjetivo").textContent = m.meta;
        $("metaAnillo").style.setProperty("--avance", m.porcentaje);
        $("metaAnillo").classList.toggle("cumplida", m.cumplida);
        $("selectMeta").value = String(m.meta);

        let mensaje = "Completa una lección para empezar tu racha.";
        if (m.cumplida) mensaje = "¡Meta cumplida! Tu racha está a salvo hoy.";
        else if (m.xpHoy > 0) mensaje = `Te faltan ${m.meta - m.xpHoy} XP para tu meta de hoy.`;
        else if (r.actual > 0) mensaje = `¡No pierdas tu racha de ${r.actual} día${r.actual === 1 ? "" : "s"}! Practica hoy.`;
        $("metaMensaje").textContent = mensaje;

        // Continuar: carrera del usuario (perfil, sesión o diagnóstico) o la más avanzada
        const slug = P.carreraDelUsuario()
            || (global.porCarrera.filter((c) => c.iniciada && !c.completa).sort((a, b) => b.porcentaje - a.porcentaje)[0] || {}).slug;
        const carrera = slug ? global.porCarrera.find((c) => c.slug === slug) : null;
        const boton = $("btnContinuarRuta");
        if (carrera && carrera.siguiente) {
            boton.href = urlEjercicios(carrera.slug, carrera.parametroSiguiente);
            $("textoContinuarRuta").textContent = `Continuar: ${carrera.siguiente.titulo}`;
        } else if (carrera) {
            boton.href = urlRuta(carrera.slug);
            $("textoContinuarRuta").textContent = `Ver ruta de ${carrera.nombre}`;
        }
    }

    $("selectMeta").addEventListener("change", (e) => {
        P.cambiarMeta(e.target.value);
        pintarTodo();
    });

    // ----------------------------------------------------------
    // 3. Diagnóstico conectado con las rutas
    // ----------------------------------------------------------
    function pintarDiagnostico() {
        const contenedor = $("contenidoDiagnostico");
        const d = P.diagnostico();

        if (!d) {
            contenedor.innerHTML = `
                <p class="text-muted small">Aún no haces el examen diagnóstico. En 10 preguntas estimamos tu nivel y te recomendamos dónde empezar tu ruta.</p>
                <a href="${BASE}/diagnostico" class="btn-nav-item destacado">
                    <span><i class="bi bi-clipboard2-check me-2"></i>Hacer examen diagnóstico</span>
                    <i class="bi bi-arrow-right-short fs-5"></i>
                </a>`;
            return;
        }

        const carrera = P.resumenCarrera(d.slug);
        const leccion = d.leccionRecomendada;
        const yaAvanzado = carrera && leccion && carrera.completadas >= leccion.numero - 1;
        const puedeSaltar = leccion && leccion.numero > 1 && !yaAvanzado;

        contenedor.innerHTML = `
            <div class="d-flex align-items-center gap-3 mb-3">
                <div class="nivel-diagnostico">${escaparHTML(d.nivel)}</div>
                <div>
                    <div class="fw-bold" style="color: var(--purple-dark);">${escaparHTML(d.nombre)}</div>
                    <div class="small text-muted">${escaparHTML(d.carreraNombre)} · ${Number(d.aciertos)}/${Number(d.total)} aciertos</div>
                </div>
            </div>
            ${leccion ? `
            <div class="recomendacion-box mb-3">
                <div class="small fw-bold text-uppercase" style="color: var(--orange-bright);">Te recomendamos empezar en</div>
                <div class="fw-bold" style="color: var(--purple-dark);">Lección ${leccion.numero}: ${escaparHTML(leccion.titulo)}</div>
                ${yaAvanzado ? '<div class="small text-success fw-semibold mt-1"><i class="bi bi-check-circle-fill me-1"></i>Tu ruta ya va en ese punto o más adelante.</div>' : ""}
            </div>` : ""}
            <div class="d-flex flex-column gap-2">
                <a href="${urlRuta(d.slug)}" class="btn-nav-item destacado">
                    <span><i class="bi bi-diagram-3 me-2"></i>Ir a mi ruta de ${escaparHTML(d.carreraNombre)}</span>
                    <i class="bi bi-arrow-right-short fs-5"></i>
                </a>
                ${puedeSaltar ? `
                <button type="button" class="btn-nav-item" id="btnAplicarUbicacion">
                    <span><i class="bi bi-skip-forward-fill me-2"></i>Saltar a la lección ${leccion.numero} según mi nivel</span>
                    <i class="bi bi-chevron-right small"></i>
                </button>` : ""}
                <a href="${BASE}/diagnostico" class="small text-muted text-decoration-none mt-1">
                    <i class="bi bi-arrow-repeat me-1"></i>Repetir diagnóstico
                </a>
            </div>`;

        const btn = $("btnAplicarUbicacion");
        if (btn) {
            btn.addEventListener("click", () => {
                const ok = window.confirm(
                    `Se marcarán como completadas las lecciones 1 a ${leccion.numero - 1} de ${d.carreraNombre} ` +
                    `(examen de ubicación, nivel ${d.nivel}). ¿Continuar?`
                );
                if (!ok) return;
                P.aplicarUbicacion(d.slug, leccion.numero);
                pintarTodo();
            });
        }
    }

    // ----------------------------------------------------------
    // 4. Insignias
    // ----------------------------------------------------------
    function pintarInsignias() {
        const lista = P.insignias();
        $("contadorInsignias").textContent = `${lista.filter((i) => i.obtenida).length}/${lista.length}`;
        $("gridInsignias").innerHTML = lista.map((i) => `
            <div class="insignia ${i.obtenida ? "obtenida" : ""}" title="${escaparHTML(i.descripcion)}">
                <div class="insignia-icono"><i class="bi ${escaparHTML(i.icono)}"></i></div>
                <div class="insignia-nombre">${escaparHTML(i.nombre)}</div>
                <div class="insignia-desc">${escaparHTML(i.descripcion)}</div>
            </div>`).join("");
    }

    // ----------------------------------------------------------
    // 5. Avance por carrera
    // ----------------------------------------------------------
    function pintarCarreras(global) {
        $("progresoCarreras").innerHTML = global.porCarrera.map((c) => `
            <div class="col-sm-6 col-lg-4">
                <div class="carrera-progreso h-100">
                    <a href="${urlRuta(c.slug)}" class="d-flex align-items-center gap-2 text-decoration-none mb-2">
                        <span class="carrera-icono"><i class="bi ${escaparHTML(c.icono)}"></i></span>
                        <span class="fw-bold" style="color: var(--purple-dark);">${escaparHTML(c.nombre)}</span>
                        <i class="bi bi-chevron-right small ms-auto" style="color: var(--purple-main);"></i>
                    </a>
                    <div class="d-flex justify-content-between small text-muted mb-1">
                        <span>${c.completadas}/${c.total} lecciones</span>
                        <span>${c.xp} XP</span>
                    </div>
                    <div class="progress progress-carrera mb-2" role="progressbar" aria-label="Avance de ${escaparHTML(c.nombre)}">
                        <div class="progress-bar ${c.completa ? "bg-success" : ""}" style="width: ${c.porcentaje}%;"></div>
                    </div>
                    <div class="small">
                        ${c.completa
                            ? '<span class="text-success fw-bold"><i class="bi bi-trophy-fill me-1"></i>Ruta completada</span>'
                            : `<a class="enlace-mini" href="${urlEjercicios(c.slug, c.parametroSiguiente)}"><i class="bi bi-play-fill"></i> ${escaparHTML(c.siguiente.titulo)}</a>`}
                        ${c.errores ? `<a class="enlace-mini errores" href="${urlRepaso(c.slug)}"><i class="bi bi-arrow-repeat"></i> Repasar ${c.errores} error${c.errores === 1 ? "" : "es"}</a>` : ""}
                    </div>
                </div>
            </div>`).join("");
    }

    function pintarTodo() {
        const g = pintarGlobal();
        pintarMeta(g);
        pintarDiagnostico();
        pintarInsignias();
        pintarCarreras(g);
    }

    pintarTodo();

    // Si otra pestaña cambia el progreso, se actualiza el panel
    window.addEventListener("storage", (e) => {
        if (e.key && (e.key.startsWith("shiftly_") || e.key === "shiftlyDiagnosticoResultado")) pintarTodo();
    });
});
