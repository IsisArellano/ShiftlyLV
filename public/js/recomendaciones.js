/* ==========================================================
   SHIFTLY · LECCIÓN RECOMENDADA
   Elige automáticamente el estado de la página según el
   progreso real (shiftly-progreso.js):
   1) Lección disponible  2) Ruta completada  3) Sin ruta
   y lista las lecciones de la carrera con su estado.
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const P = window.ShiftlyProgreso;
    if (!P) return;

    const BASE = (document.body.dataset.urlBase || "").replace(/\/$/, "");
    const $ = (id) => document.getElementById(id);
    const escaparHTML = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
    const urlEjercicios = (slug, leccion) => `${BASE}/ejercicios?carrera=${encodeURIComponent(slug)}&leccion=${encodeURIComponent(leccion)}`;

    // ---------------- Usuario en el encabezado ----------------
    const usuario = P.usuario();
    const global = P.resumenGlobal();
    const diag = P.diagnostico();
    $("nombreUsuario").textContent = usuario.nombre;
    $("inicialesUsuario").textContent = usuario.nombre
        .split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0].toUpperCase()).join("") || "?";
    $("nivelUsuario").textContent = diag ? `Nivel ${diag.nivel} · ${global.nivel}` : `Nivel: ${global.nivel}`;

    // ---------------- Selector de carrera ----------------
    const selector = $("selectorCarrera");
    const carreraInicial = new URLSearchParams(location.search).get("carrera")
        || P.carreraDelUsuario()
        || (global.porCarrera.filter((c) => c.iniciada).sort((a, b) => b.porcentaje - a.porcentaje)[0] || {}).slug
        || "";

    selector.innerHTML = '<option value="">Elegir carrera…</option>' + P.CATALOGO
        .map((c) => `<option value="${escaparHTML(c.slug)}">${escaparHTML(c.nombre)}</option>`).join("");
    selector.value = carreraInicial;
    selector.addEventListener("change", () => pintar(selector.value));

    // ---------------- Render ----------------
    function mostrarEstado(estado) {
        $("card-active-state").classList.toggle("d-none", estado !== "activa");
        $("card-completed-state").classList.toggle("d-none", estado !== "completa");
        $("card-empty-state").classList.toggle("d-none", estado !== "vacia");
        $("tarjetaModulos").classList.toggle("d-none", estado === "vacia");
    }

    function motivo(c) {
        const anterior = c.lecciones[c.completadas - 1];
        if (diag && diag.slug === c.slug && c.completadas === 0 && diag.leccionRecomendada && diag.leccionRecomendada.numero > 1) {
            return `Tu diagnóstico (nivel ${escaparHTML(diag.nivel)}) sugiere empezar en la Lección ${diag.leccionRecomendada.numero}. Puedes saltar las anteriores desde tu Dashboard.`;
        }
        if (anterior) {
            return `Es el siguiente paso tras completar <em>«${escaparHTML(anterior.titulo)}»</em>.`;
        }
        return "Es la primera lección de tu ruta: empieza aquí para desbloquear las demás.";
    }

    function pintarLecciones(c) {
        const html = c.lecciones.map((l, i) => {
            const estado = l.completada && i < c.completadas ? "completada" : (i === c.completadas ? "actual" : "bloqueado");
            const icono = { completada: "bi-check-lg", actual: "bi-play-fill", bloqueado: "bi-lock-fill" }[estado];
            const detalle = l.resultado
                ? `Practicada · ${Number(l.resultado.aciertosPrimerIntento)}/${Number(l.resultado.total)} a la primera`
                : (estado === "actual" ? "Disponible ahora" : estado === "completada" ? "Completada" : "Bloqueada");
            const enlace = estado !== "bloqueado"
                ? urlEjercicios(c.slug, l.personalizada ? l.id : l.numero)
                : null;
            const etiqueta = `${l.personalizada ? "Personal" : `Lección ${l.numero}`}: ${l.titulo}`;
            return `
                <${enlace ? `a href="${escaparHTML(enlace)}"` : "div"} class="module-item ${estado} d-flex align-items-center justify-content-between p-3 rounded-3 bg-white bg-opacity-50 border border-brand-accent text-decoration-none"
                     data-search="${escaparHTML(etiqueta.toLowerCase())}">
                    <div class="d-flex align-items-center gap-3">
                        <span class="estado-modulo rounded-circle ${estado === "completada" ? "bg-brand-accent text-brand-secondary" : estado === "actual" ? "bg-brand-secondary text-white" : "bg-white text-secondary border"} d-flex align-items-center justify-content-center small">
                            <i class="bi ${icono}"></i>
                        </span>
                        <div>
                            <p class="mb-0 fw-semibold text-brand-primary small">${escaparHTML(etiqueta)}</p>
                            <span class="text-muted" style="font-size: 0.75rem;">${escaparHTML(detalle)}</span>
                        </div>
                    </div>
                    <span class="small fw-medium text-muted">+${Number(l.xp)} XP</span>
                </${enlace ? "a" : "div"}>`;
        }).join("");
        $("lista-modulos").innerHTML = html;
        filtrar();
    }

    function pintarLateral(c) {
        const r = P.racha();
        const m = P.metaDiaria();
        $("resumenLecciones").textContent = c ? `${c.completadas}/${c.total}` : `${global.lecciones}/${global.totalLecciones}`;
        $("resumenTiempo").textContent = P.formatoTiempo(c ? c.segundos : global.segundos);
        $("resumenRacha").textContent = r.actual;
        $("resumenMeta").textContent = `${m.xpHoy}/${m.meta}`;

        const items = [];
        if (c && c.errores) {
            items.push(`<a class="d-flex align-items-center gap-2 p-2 rounded-3 bg-white bg-opacity-50 border border-brand-accent text-decoration-none text-brand-primary" href="${BASE}/ejercicios?carrera=${encodeURIComponent(c.slug)}&repaso=1">
                <i class="bi bi-arrow-repeat text-danger"></i> Repasar ${c.errores} error${c.errores === 1 ? "" : "es"} de ${escaparHTML(c.nombre)}</a>`);
        }
        if (!m.cumplida) {
            items.push(`<div class="d-flex align-items-center gap-2 p-2 rounded-3 bg-white bg-opacity-50 border border-brand-accent">
                <i class="bi bi-flag-fill" style="color: var(--brand-orange);"></i> Te faltan ${m.meta - m.xpHoy} XP para tu meta de hoy</div>`);
        }
        if (!diag) {
            items.push(`<a class="d-flex align-items-center gap-2 p-2 rounded-3 bg-white bg-opacity-50 border border-brand-accent text-decoration-none text-brand-primary" href="${BASE}/diagnostico">
                <i class="bi bi-clipboard2-check text-brand-secondary"></i> Haz tu examen diagnóstico</a>`);
        }
        global.porCarrera.filter((x) => (!c || x.slug !== c.slug) && x.iniciada && !x.completa).slice(0, 2).forEach((x) => {
            items.push(`<a class="d-flex align-items-center gap-2 p-2 rounded-3 bg-white bg-opacity-50 border border-brand-accent text-decoration-none text-brand-primary" href="${BASE}/recomendaciones?carrera=${encodeURIComponent(x.slug)}">
                <i class="bi ${escaparHTML(x.icono)} text-brand-secondary"></i> Continuar ${escaparHTML(x.nombre)} (${x.porcentaje}%)</a>`);
        });
        $("otrasRecomendaciones").innerHTML = items.join("") || '<p class="text-muted mb-0">¡Vas al día con todo! Sigue con tu ruta principal.</p>';
    }

    function pintar(slug) {
        const c = slug ? P.resumenCarrera(slug) : null;
        pintarLateral(c);

        if (!c) {
            mostrarEstado("vacia");
            return;
        }
        pintarLecciones(c);

        if (c.completa) {
            mostrarEstado("completa");
            $("rutaCompletadaNombre").textContent = c.nombre;
            $("btnRepasarRuta").href = `${BASE}/ruta-${c.slug}`;
            return;
        }

        mostrarEstado("activa");
        const siguiente = c.siguiente;
        const descripcion = (P.carreraPorSlug(c.slug).lecciones.find((l) => l.id === siguiente.id) || {}).descripcion;
        $("nombreRuta").textContent = c.nombre;
        $("xpLeccion").textContent = `+${siguiente.xp} XP`;
        $("tituloRecomendado").textContent = siguiente.personalizada
            ? `Lección personal: ${siguiente.titulo}`
            : `Lección ${siguiente.numero}: ${siguiente.titulo}`;
        $("descripcionRecomendada").textContent = descripcion || "Lección personalizada de tu ruta.";
        $("motivoRecomendacion").innerHTML = motivo(c);
        $("porcentajeRuta").textContent = `${c.porcentaje}%`;
        $("barraRuta").style.width = `${c.porcentaje}%`;
        $("btnComenzarLeccion").href = urlEjercicios(c.slug, c.parametroSiguiente);
    }

    // ---------------- Buscador ----------------
    const buscador = $("buscar-modulo");
    function filtrar() {
        const texto = buscador.value.trim().toLowerCase();
        let visibles = 0;
        document.querySelectorAll("#lista-modulos .module-item").forEach((item) => {
            const coincide = item.dataset.search.includes(texto);
            item.classList.toggle("d-none", !coincide);
            if (coincide) visibles++;
        });
        $("sin-resultados-modulo").classList.toggle("d-none", visibles > 0);
    }
    buscador.addEventListener("input", filtrar);

    pintar(carreraInicial);
});
