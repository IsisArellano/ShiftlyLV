# -*- coding: utf-8 -*-
"""Datos de las 6 rutas: formas SVG (viewBox 0 0 120 92), conectores y lecciones."""
import math


def estrella(cx=60, cy=46, r1=42, r2=18):
    pts = []
    for i in range(10):
        r = r1 if i % 2 == 0 else r2
        a = math.radians(-90 + i * 36)
        pts.append(f"{cx + r * math.cos(a):.1f},{cy + r * math.sin(a):.1f}")
    return " ".join(pts)


def L(titulo, forma, icono, xp, descripcion, vocab):
    return {"titulo": titulo, "forma": forma, "icono": icono, "xp": xp,
            "descripcion": descripcion, "vocab": [{"en": e, "es": s} for e, s in vocab]}


# ---------------------------------------------------------------------------
# CONECTORES (cuerpo de la función JS dibujarConector(x1, x2, i) -> string SVG)
# Cada conector mide 60 px de alto; x1 = nodo anterior, x2 = nodo siguiente.
# ---------------------------------------------------------------------------
CONECTORES = {
    "sistemas": r'''
    // Flecha de diagrama de flujo: baja, gira en ángulo recto y entra al siguiente bloque
    function dibujarConector(x1, x2) {
        return `<path class="linea anim" d="M${x1} 0 V28 H${x2} V50"/>
                <polygon class="relleno" points="${x2 - 7},48 ${x2 + 7},48 ${x2},59"/>
                <circle class="relleno" cx="${x1}" cy="28" r="4"/>`;
    }''',
    "medicina": r'''
    // Línea de pulso (ECG): tramo plano, latido en el centro y llegada al siguiente nodo
    function dibujarConector(x1, x2) {
        const s = x2 >= x1 ? 1 : -1;
        const inicio = (x1 + x2) / 2 - 14 * s;
        return `<path class="linea anim" d="M${x1} 0 V30 H${inicio} l${6 * s} -4 l${4 * s} 4 l${4 * s} -22 l${5 * s} 40 l${4 * s} -24 l${5 * s} 6 H${x2} V60"/>`;
    }''',
    "gastronomia": r'''
    // Paso de receta: curva punteada con el número de paso en el centro
    function dibujarConector(x1, x2, i) {
        const mx = (x1 + x2) / 2;
        return `<path class="linea" stroke-dasharray="9 7" d="M${x1} 0 C${x1} 34, ${x2} 26, ${x2} 60"/>
                <circle class="paso" cx="${mx}" cy="30" r="11"/>
                <text class="paso-num" x="${mx}" y="34">${i + 1}</text>`;
    }''',
    "derecho": r'''
    // Doble cordón jurídico con sello en forma de rombo en el centro
    function dibujarConector(x1, x2) {
        const mx = (x1 + x2) / 2;
        return `<path class="linea fina" d="M${x1 - 5} 0 C${x1 - 5} 34, ${x2 - 5} 26, ${x2 - 5} 60"/>
                <path class="linea fina" d="M${x1 + 5} 0 C${x1 + 5} 34, ${x2 + 5} 26, ${x2 + 5} 60"/>
                <polygon class="relleno sello" points="${mx},20 ${mx + 9},30 ${mx},40 ${mx - 9},30"/>`;
    }''',
    "arquitectura": r'''
    // Línea de cota de plano: trazo discontinuo, topes en los extremos y medida en metros
    function dibujarConector(x1, x2, i) {
        const mx = (x1 + x2) / 2;
        const medida = (1.2 + i * 0.6).toFixed(1) + " m";
        return `<path class="linea anim" d="M${x1} 4 L${x2} 56"/>
                <path class="linea fina" d="M${x1 - 9} 4 H${x1 + 9} M${x2 - 9} 56 H${x2 + 9}"/>
                <rect class="cota-fondo" x="${mx - 22}" y="21" width="44" height="18" rx="5"/>
                <text class="cota" x="${mx}" y="34">${medida}</text>`;
    }''',
    "general": r'''
    // Ruta de vuelo punteada con un avión orientado hacia el siguiente destino
    function dibujarConector(x1, x2) {
        const mx = (x1 + x2) / 2;
        const angulo = Math.atan2(60, x2 - x1) * 180 / Math.PI;
        return `<path class="linea punteada" d="M${x1} 0 C${x1} 34, ${x2} 26, ${x2} 60"/>
                <text class="avion" x="${mx}" y="36" transform="rotate(${angulo.toFixed(1)} ${mx} 30)">✈</text>`;
    }''',
}

# ---------------------------------------------------------------------------
# PATRONES DE FONDO (CSS exclusivo de cada carrera)
# ---------------------------------------------------------------------------
PATRONES = {
    "sistemas": """
/* Fondo de cuadrícula de puntos (pizarra de diagramas) */
.arbol-wrapper {
    background-color: #FFFFFF;
    background-image: radial-gradient(#E2D5F0 1.4px, transparent 1.4px);
    background-size: 20px 20px;
}

.hero-ruta::after {
    background-image: radial-gradient(rgba(255, 255, 255, 0.5) 1.4px, transparent 1.4px);
    background-size: 22px 22px;
}
""",
    "medicina": """
/* Fondo de papel de electrocardiograma */
.arbol-wrapper {
    background-color: #FFFFFF;
    background-image:
        linear-gradient(rgba(226, 213, 240, 0.55) 1px, transparent 1px),
        linear-gradient(90deg, rgba(226, 213, 240, 0.55) 1px, transparent 1px);
    background-size: 24px 24px;
}

.hero-ruta::after {
    background-image:
        linear-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.35) 1px, transparent 1px);
    background-size: 26px 26px;
}

.conector .linea {
    stroke-width: 3.5;
}
""",
    "gastronomia": """
/* Fondo de mantel a cuadros */
.arbol-wrapper {
    background-color: #FFFFFF;
    background-image:
        linear-gradient(45deg, #F6F1FA 25%, transparent 25%, transparent 75%, #F6F1FA 75%),
        linear-gradient(45deg, #F6F1FA 25%, transparent 25%, transparent 75%, #F6F1FA 75%);
    background-position: 0 0, 16px 16px;
    background-size: 32px 32px;
}

.hero-ruta::after {
    background-image:
        linear-gradient(45deg, rgba(255, 255, 255, 0.4) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.4) 75%),
        linear-gradient(45deg, rgba(255, 255, 255, 0.4) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.4) 75%);
    background-position: 0 0, 18px 18px;
    background-size: 36px 36px;
}

.conector .paso {
    fill: #FFFFFF;
    stroke-width: 3;
}

.conector .paso-num {
    font: 800 11px 'Plus Jakarta Sans', sans-serif;
    text-anchor: middle;
}

.c-completado .paso { stroke: #22C55E; }
.c-completado .paso-num { fill: #16A34A; }
.c-actual .paso { stroke: #FF6A2B; }
.c-actual .paso-num { fill: #C9440E; }
.c-bloqueado .paso { stroke: #D3C1E8; }
.c-bloqueado .paso-num { fill: #9C88B5; }
""",
    "derecho": """
/* Fondo de columnas clásicas */
.arbol-wrapper {
    background-color: #FFFFFF;
    background-image: repeating-linear-gradient(90deg, #FFFFFF 0 38px, #F9F5FC 38px 46px);
}

.hero-ruta::after {
    background-image: repeating-linear-gradient(90deg, transparent 0 40px, rgba(255, 255, 255, 0.35) 40px 48px);
}

.conector .sello {
    stroke: #FFFFFF;
    stroke-width: 2;
}
""",
    "arquitectura": """
/* Fondo de plano técnico (cuadrícula mayor y menor) */
.arbol-wrapper {
    background-color: #FFFFFF;
    background-image:
        linear-gradient(rgba(211, 193, 232, 0.6) 1px, transparent 1px),
        linear-gradient(90deg, rgba(211, 193, 232, 0.6) 1px, transparent 1px),
        linear-gradient(rgba(226, 213, 240, 0.35) 1px, transparent 1px),
        linear-gradient(90deg, rgba(226, 213, 240, 0.35) 1px, transparent 1px);
    background-size: 60px 60px, 60px 60px, 12px 12px, 12px 12px;
}

.hero-ruta::after {
    background-image:
        linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px);
    background-size: 48px 48px;
}

.conector .cota-fondo {
    fill: #FFFFFF;
    stroke: #E2D5F0;
    stroke-width: 1.5;
}

.conector .cota {
    font: 800 10px 'Plus Jakarta Sans', sans-serif;
    text-anchor: middle;
    fill: #4A154B;
}
""",
    "general": """
/* Fondo de mapamundi punteado */
.arbol-wrapper {
    background-color: #FFFFFF;
    background-image:
        radial-gradient(circle at 18% 22%, rgba(255, 106, 43, 0.07), transparent 38%),
        radial-gradient(circle at 82% 78%, rgba(74, 21, 75, 0.07), transparent 40%),
        radial-gradient(#E2D5F0 1.2px, transparent 1.2px);
    background-size: auto, auto, 26px 26px;
}

.hero-ruta::after {
    background-image: radial-gradient(rgba(255, 255, 255, 0.45) 1.2px, transparent 1.2px);
    background-size: 26px 26px;
}

.conector .punteada {
    stroke-dasharray: 1 10;
    stroke-width: 5;
}

.conector .avion {
    font-size: 17px;
    text-anchor: middle;
}

.c-completado .avion { fill: #16A34A; }
.c-actual .avion { fill: #FF6A2B; }
.c-bloqueado .avion { fill: #B9A6D1; }
""",
}

# ---------------------------------------------------------------------------
# ÁREAS
# ---------------------------------------------------------------------------
AREAS = [
    {
        "slug": "sistemas", "nombre": "Sistemas y TI", "titulo_html": "Sistemas <span>y TI</span>",
        "icono": "bi-cpu", "clave": "shiftly_progreso_sistemas", "ejercicios": True,
        "lema": "Recorre tu diagrama de flujo: cada bloque es una lección de inglés para equipos de software.",
        "forma_desc": "Diagrama de flujo",
        "formas": {
            "inicio": {"nombre": "Óvalo de inicio / fin",
                       "els": '<rect x="4" y="12" width="112" height="60" rx="30"/>',
                       "det": '<rect x="22" y="19" width="76" height="7" rx="3.5"/>', "cx": 60, "cy": 43},
            "proceso": {"nombre": "Rectángulo de proceso",
                        "els": '<rect x="8" y="12" width="104" height="62" rx="8"/>',
                        "det": '<line class="trazo" x1="22" y1="14" x2="22" y2="72"/><line class="trazo" x1="98" y1="14" x2="98" y2="72"/>',
                        "cx": 60, "cy": 44},
            "decision": {"nombre": "Rombo de decisión (if / else)",
                         "els": '<polygon points="60,2 118,42 60,82 2,42"/>',
                         "det": '<text class="txt" x="20" y="46">T</text><text class="txt" x="100" y="46">F</text>',
                         "cx": 60, "cy": 42},
            "io": {"nombre": "Paralelogramo de entrada / salida",
                   "els": '<polygon points="28,12 118,12 92,74 2,74"/>',
                   "det": '<polygon points="31,18 109,18 106,25 28,25"/>', "cx": 60, "cy": 45},
        },
        "iconos": ["bi-terminal", "bi-cpu", "bi-code-slash", "bi-diagram-3", "bi-git", "bi-bug", "bi-database", "bi-cloud-upload"],
        "lecciones": [
            L("Hello, World: tu equipo de TI", "inicio", "bi-terminal", 10,
              "Preséntate en un equipo de desarrollo y conoce los roles más comunes.",
              [("developer", "desarrollador"), ("team lead", "líder de equipo"), ("stand-up meeting", "reunión diaria")]),
            L("Entrada y salida de datos", "io", "bi-cloud-upload", 15,
              "Describe en inglés qué datos recibe un programa y qué devuelve.",
              [("input", "entrada"), ("output", "salida"), ("user prompt", "solicitud al usuario")]),
            L("Variables y funciones", "proceso", "bi-code-slash", 20,
              "Explica tu código: nombra variables, funciones y valores de retorno.",
              [("variable", "variable"), ("function", "función"), ("return value", "valor de retorno")]),
            L("Condicionales if / else", "decision", "bi-diagram-3", 20,
              "Habla de decisiones lógicas y ramas de ejecución.",
              [("condition", "condición"), ("branch", "rama"), ("true / false", "verdadero / falso")]),
            L("Control de versiones con Git", "proceso", "bi-git", 25,
              "Comunica cambios con tu equipo usando el vocabulario de Git.",
              [("commit", "confirmar cambios"), ("pull request", "solicitud de integración"), ("merge conflict", "conflicto de fusión")]),
            L("Debugging y reporte de errores", "decision", "bi-bug", 25,
              "Reporta un bug con claridad y propone una solución temporal.",
              [("bug report", "reporte de error"), ("stack trace", "traza de pila"), ("workaround", "solución temporal")]),
            L("Bases de datos y consultas", "io", "bi-database", 30,
              "Describe tablas, llaves y consultas en una reunión técnica.",
              [("query", "consulta"), ("table", "tabla"), ("primary key", "llave primaria")]),
            L("Deploy a producción", "inicio", "bi-cloud-upload", 50,
              "Fin del diagrama: coordina un despliegue y comunica incidentes.",
              [("deploy", "desplegar"), ("rollback", "revertir"), ("downtime", "tiempo fuera de servicio")]),
        ],
    },
    {
        "slug": "medicina", "nombre": "Medicina", "titulo_html": "Medicina <span>Clínica</span>",
        "icono": "bi-heart-pulse", "clave": "shiftly_progreso_medicina",
        "lema": "Sigue la línea de pulso: cada estación clínica te prepara para atender pacientes en inglés.",
        "forma_desc": "Estaciones clínicas",
        "formas": {
            "cruz": {"nombre": "Cruz médica",
                     "els": '<path d="M44 4 H76 V26 H104 V58 H76 V80 H44 V58 H16 V26 H44 Z"/>',
                     "det": '<rect x="50" y="10" width="20" height="7" rx="3.5"/>', "cx": 60, "cy": 42},
            "corazon": {"nombre": "Corazón",
                        "els": '<path d="M60 80 C24 58 6 40 12 22 C18 6 42 2 60 22 C78 2 102 6 108 22 C114 40 96 58 60 80 Z"/>',
                        "det": '<polyline class="trazo" points="34,58 48,58 53,50 58,66 63,58 86,58"/>', "cx": 60, "cy": 36},
            "capsula": {"nombre": "Cápsula",
                        "els": '<rect x="4" y="22" width="112" height="44" rx="22"/>',
                        "det": '<path d="M60 22 H94 A22 22 0 0 1 94 66 H60 Z"/><rect x="16" y="29" width="34" height="6" rx="3"/>',
                        "cx": 60, "cy": 44},
            "escudo": {"nombre": "Escudo clínico",
                       "els": '<path d="M60 4 L106 16 V40 C106 62 86 74 60 82 C34 74 14 62 14 40 V16 Z"/>',
                       "det": '<path d="M60 11 L98 21 V28 L60 19 L22 28 V21 Z"/>', "cx": 60, "cy": 45},
            "portapapeles": {"nombre": "Portapapeles",
                             "els": '<rect x="20" y="10" width="80" height="72" rx="8"/><rect x="42" y="2" width="36" height="16" rx="5"/>',
                             "det": '<rect x="34" y="62" width="52" height="5" rx="2.5"/><rect x="34" y="71" width="36" height="5" rx="2.5"/>',
                             "cx": 60, "cy": 39},
        },
        "iconos": ["bi-hospital", "bi-heart-pulse", "bi-clipboard2-pulse", "bi-capsule", "bi-shield-plus", "bi-lungs", "bi-prescription2", "bi-bandaid", "bi-thermometer-half"],
        "lecciones": [
            L("Recepción del paciente", "cruz", "bi-hospital", 10,
              "Recibe a un paciente, registra sus datos y clasifica la urgencia.",
              [("admission", "ingreso"), ("medical chart", "expediente"), ("triage", "clasificación de urgencia")]),
            L("Signos vitales", "corazon", "bi-heart-pulse", 15,
              "Toma y comunica los signos vitales con precisión.",
              [("blood pressure", "presión arterial"), ("heart rate", "frecuencia cardiaca"), ("body temperature", "temperatura corporal")]),
            L("Historia clínica", "portapapeles", "bi-clipboard2-pulse", 20,
              "Pregunta por antecedentes, alergias y síntomas actuales.",
              [("medical history", "antecedentes médicos"), ("allergy", "alergia"), ("symptoms", "síntomas")]),
            L("Medicamentos y dosis", "capsula", "bi-capsule", 20,
              "Explica una receta, la dosis y los posibles efectos secundarios.",
              [("dosage", "dosis"), ("prescription", "receta"), ("side effect", "efecto secundario")]),
            L("Bioseguridad e higiene", "escudo", "bi-shield-plus", 25,
              "Da instrucciones de protección y control de infecciones.",
              [("gloves", "guantes"), ("sterile", "estéril"), ("hand hygiene", "higiene de manos")]),
            L("Sistema respiratorio", "corazon", "bi-lungs", 25,
              "Evalúa la respiración y comunica la saturación de oxígeno.",
              [("shortness of breath", "falta de aire"), ("oxygen saturation", "saturación de oxígeno"), ("inhale / exhale", "inhalar / exhalar")]),
            L("Diagnóstico y tratamiento", "portapapeles", "bi-prescription2", 30,
              "Comunica un diagnóstico y acuerda un plan de tratamiento.",
              [("diagnosis", "diagnóstico"), ("treatment plan", "plan de tratamiento"), ("follow-up", "seguimiento")]),
            L("Urgencias y código azul", "cruz", "bi-bandaid", 50,
              "Coordina una emergencia con el equipo médico en inglés.",
              [("emergency room", "sala de urgencias"), ("CPR", "reanimación cardiopulmonar"), ("stable condition", "condición estable")]),
        ],
    },
    {
        "slug": "gastronomia", "nombre": "Gastronomía", "titulo_html": "Gastro<span>nomía</span>",
        "icono": "bi-cup-hot", "clave": "shiftly_progreso_gastronomia",
        "lema": "Cocina tu inglés paso a paso: cada estación de la receta suma XP a tu brigada.",
        "forma_desc": "Receta paso a paso",
        "formas": {
            "gorro": {"nombre": "Gorro de chef",
                      "els": '<path d="M32 52 C10 52 8 22 30 22 C30 4 54 0 60 14 C66 0 90 4 90 22 C112 22 110 52 88 52 V78 H32 Z"/>',
                      "det": '<rect x="34" y="62" width="52" height="6" rx="3"/>', "cx": 60, "cy": 33},
            "olla": {"nombre": "Olla",
                     "els": '<path d="M14 30 H106 V62 C106 74 98 80 86 80 H34 C22 80 14 74 14 62 Z"/><rect x="2" y="36" width="16" height="10" rx="5"/><rect x="102" y="36" width="16" height="10" rx="5"/><path d="M22 30 C22 12 98 12 98 30 Z"/><rect x="54" y="6" width="12" height="8" rx="4"/>',
                     "det": '<rect x="24" y="38" width="72" height="5" rx="2.5"/>', "cx": 60, "cy": 59},
            "sarten": {"nombre": "Sartén",
                       "els": '<circle cx="46" cy="44" r="36"/><rect x="78" y="38" width="40" height="12" rx="6"/>',
                       "det": '<circle class="trazo" cx="46" cy="44" r="26"/>', "cx": 46, "cy": 44},
            "cloche": {"nombre": "Campana de servicio (cloche)",
                       "els": '<path d="M12 66 C12 24 108 24 108 66 Z"/><rect x="4" y="66" width="112" height="12" rx="6"/><circle cx="60" cy="20" r="8"/>',
                       "det": '<path class="trazo" d="M28 56 C30 46 38 38 50 35"/>', "cx": 60, "cy": 52},
            "plato": {"nombre": "Plato y cubiertos",
                      "els": '<circle cx="60" cy="44" r="38"/><rect x="4" y="12" width="8" height="64" rx="4"/><rect x="108" y="12" width="8" height="64" rx="4"/>',
                      "det": '<circle class="trazo" cx="60" cy="44" r="27"/>', "cx": 60, "cy": 44},
        },
        "iconos": ["bi-people", "bi-basket", "bi-cup-hot", "bi-egg-fried", "bi-basket2", "bi-shield-check", "bi-egg", "bi-bell-fill", "bi-fire"],
        "lecciones": [
            L("La brigada de cocina", "gorro", "bi-people", 10,
              "Conoce los puestos de la cocina profesional y quién da las órdenes.",
              [("head chef", "chef ejecutivo"), ("sous chef", "subchef"), ("line cook", "cocinero de línea")]),
            L("Mise en place", "plato", "bi-basket", 15,
              "Organiza tu estación de trabajo antes del servicio.",
              [("prep list", "lista de preparación"), ("cutting board", "tabla de cortar"), ("station", "estación")]),
            L("Caldos y salsas", "olla", "bi-cup-hot", 20,
              "Describe la preparación de fondos, caldos y salsas madre.",
              [("stock", "fondo / caldo"), ("simmer", "hervir a fuego lento"), ("reduce", "reducir")]),
            L("Técnicas de cocción", "sarten", "bi-egg-fried", 20,
              "Explica técnicas de sartén y control de temperatura.",
              [("sauté", "saltear"), ("sear", "sellar"), ("deglaze", "desglasar")]),
            L("Ingredientes y despensa", "plato", "bi-basket2", 25,
              "Haz inventario y pide ingredientes a proveedores.",
              [("pantry", "despensa"), ("fresh produce", "productos frescos"), ("spices", "especias")]),
            L("Seguridad alimentaria", "olla", "bi-shield-check", 25,
              "Aplica normas de higiene y evita la contaminación cruzada.",
              [("cross-contamination", "contaminación cruzada"), ("food safety", "inocuidad alimentaria"), ("expiration date", "fecha de caducidad")]),
            L("Emplatado", "sarten", "bi-egg", 30,
              "Describe la presentación de un platillo antes de servirlo.",
              [("plating", "emplatado"), ("garnish", "guarnición / decoración"), ("portion", "porción")]),
            L("Servicio al cliente", "cloche", "bi-bell-fill", 50,
              "El platillo final: comunica pedidos entre cocina y sala.",
              [("order up!", "¡orden lista!"), ("table service", "servicio a la mesa"), ("the check, please", "la cuenta, por favor")]),
        ],
    },
    {
        "slug": "derecho", "nombre": "Derecho", "titulo_html": "Derecho <span>Corporativo</span>",
        "icono": "bi-bank", "clave": "shiftly_progreso_derecho",
        "lema": "Avanza por el expediente: cada pieza jurídica desbloquea el siguiente caso en inglés.",
        "forma_desc": "Expediente jurídico",
        "formas": {
            "balanza": {"nombre": "Balanza de la justicia",
                        "els": '<rect x="8" y="16" width="104" height="8" rx="4"/><rect x="55" y="6" width="10" height="66"/><path d="M34 84 L42 70 H78 L86 84 Z"/><path d="M20 22 L5 46 M20 22 L35 46 M100 22 L85 46 M100 22 L115 46"/><path d="M2 46 C2 62 38 62 38 46 Z"/><path d="M82 46 C82 62 118 62 118 46 Z"/><circle cx="60" cy="42" r="17"/>',
                        "det": '<rect x="16" y="18" width="30" height="3" rx="1.5"/>', "cx": 60, "cy": 42},
            "mazo": {"nombre": "Mazo de juez",
                     "els": '<rect x="8" y="4" width="78" height="36" rx="10"/><rect x="39" y="38" width="16" height="36" rx="5"/><rect x="64" y="68" width="52" height="14" rx="5"/>',
                     "det": '<line class="trazo" x1="22" y1="6" x2="22" y2="38"/><line class="trazo" x1="72" y1="6" x2="72" y2="38"/>',
                     "cx": 47, "cy": 22},
            "pergamino": {"nombre": "Pergamino / contrato",
                          "els": '<rect x="18" y="10" width="84" height="64" rx="4"/><rect x="8" y="4" width="104" height="14" rx="7"/><rect x="8" y="68" width="104" height="14" rx="7"/>',
                          "det": '<rect x="32" y="56" width="56" height="4" rx="2"/>', "cx": 60, "cy": 40},
            "escudo": {"nombre": "Escudo legal",
                       "els": '<path d="M60 4 L106 14 V42 C106 64 86 76 60 82 C34 76 14 64 14 42 V14 Z"/>',
                       "det": '<path d="M24 20 L60 12 L96 20 V26 L60 18 L24 26 Z"/>', "cx": 60, "cy": 46},
            "columna": {"nombre": "Columna clásica",
                        "els": '<rect x="16" y="4" width="88" height="14" rx="3"/><rect x="30" y="18" width="60" height="50"/><rect x="12" y="68" width="96" height="14" rx="3"/>',
                        "det": '<line class="trazo" x1="40" y1="22" x2="40" y2="64"/><line class="trazo" x1="80" y1="22" x2="80" y2="64"/>',
                        "cx": 60, "cy": 43},
        },
        "iconos": ["bi-bank", "bi-file-earmark-text", "bi-briefcase", "bi-hammer", "bi-journal-text", "bi-shield-check", "bi-people", "bi-award"],
        "lecciones": [
            L("El sistema legal", "columna", "bi-bank", 10,
              "Presenta tu despacho y los roles dentro de un caso.",
              [("law firm", "despacho jurídico"), ("attorney", "abogado"), ("client", "cliente")]),
            L("Contratos básicos", "pergamino", "bi-file-earmark-text", 15,
              "Lee y explica las partes esenciales de un contrato.",
              [("agreement", "acuerdo / convenio"), ("clause", "cláusula"), ("signature", "firma")]),
            L("Derechos y obligaciones", "balanza", "bi-briefcase", 20,
              "Equilibra derechos, deberes y responsabilidades legales.",
              [("rights", "derechos"), ("obligations", "obligaciones"), ("liability", "responsabilidad legal")]),
            L("En la corte", "mazo", "bi-hammer", 20,
              "Participa en una audiencia y entiende el veredicto.",
              [("judge", "juez"), ("hearing", "audiencia"), ("verdict", "veredicto")]),
            L("Documentos legales", "pergamino", "bi-journal-text", 25,
              "Identifica documentos procesales y su propósito.",
              [("affidavit", "declaración jurada"), ("subpoena", "citatorio"), ("notary", "notario")]),
            L("Propiedad intelectual", "escudo", "bi-shield-check", 25,
              "Protege marcas, obras e inventos de tus clientes.",
              [("trademark", "marca registrada"), ("copyright", "derechos de autor"), ("patent", "patente")]),
            L("Negociación y acuerdos", "balanza", "bi-people", 30,
              "Negocia términos y llega a un acuerdo extrajudicial.",
              [("settlement", "acuerdo / arreglo"), ("mediation", "mediación"), ("terms", "términos")]),
            L("Derecho corporativo", "mazo", "bi-award", 50,
              "Asesora a una empresa en cumplimiento y fusiones.",
              [("compliance", "cumplimiento normativo"), ("board of directors", "consejo de administración"), ("merger", "fusión")]),
        ],
    },
    {
        "slug": "arquitectura", "nombre": "Arquitectura", "titulo_html": "Arqui<span>tectura</span>",
        "icono": "bi-building", "clave": "shiftly_progreso_arquitectura",
        "lema": "Construye tu inglés por etapas de obra: del plano enrollado al edificio terminado.",
        "forma_desc": "Planos y obra",
        "formas": {
            "plano": {"nombre": "Plano enrollado",
                      "els": '<rect x="16" y="20" width="88" height="46"/><ellipse cx="16" cy="43" rx="12" ry="23"/><ellipse cx="104" cy="43" rx="12" ry="23"/>',
                      "det": '<ellipse class="trazo" cx="104" cy="43" rx="5" ry="12"/><line class="trazo" x1="34" y1="24" x2="34" y2="62"/><line class="trazo" x1="86" y1="24" x2="86" y2="62"/>',
                      "cx": 60, "cy": 43},
            "escuadra": {"nombre": "Escuadra",
                         "els": '<polygon points="10,82 10,4 108,82"/>',
                         "det": '<line class="trazo" x1="10" y1="20" x2="19" y2="20"/><line class="trazo" x1="10" y1="34" x2="19" y2="34"/><line class="trazo" x1="10" y1="48" x2="19" y2="48"/><line class="trazo" x1="10" y1="62" x2="19" y2="62"/>',
                         "cx": 40, "cy": 58},
            "bloque": {"nombre": "Bloque isométrico",
                       "els": '<polygon points="60,4 110,28 110,60 60,84 10,60 10,28"/>',
                       "det": '<polygon points="60,4 110,28 60,52 10,28"/><line class="trazo" x1="60" y1="54" x2="60" y2="82"/>',
                       "cx": 60, "cy": 29},
            "casco": {"nombre": "Casco de obra",
                      "els": '<path d="M16 62 C16 18 104 18 104 62 Z"/><rect x="4" y="60" width="112" height="14" rx="7"/>',
                      "det": '<path class="trazo" d="M30 50 C33 38 42 30 53 27"/>', "cx": 62, "cy": 45},
            "edificio": {"nombre": "Edificio",
                         "els": '<rect x="28" y="6" width="64" height="78" rx="4"/><rect x="8" y="40" width="24" height="44" rx="3"/><rect x="88" y="28" width="24" height="56" rx="3"/>',
                         "det": '<rect x="38" y="62" width="10" height="9" rx="1.5"/><rect x="55" y="62" width="10" height="9" rx="1.5"/><rect x="72" y="62" width="10" height="9" rx="1.5"/><rect x="38" y="14" width="10" height="9" rx="1.5"/><rect x="72" y="14" width="10" height="9" rx="1.5"/>',
                         "cx": 60, "cy": 41},
        },
        "iconos": ["bi-map", "bi-rulers", "bi-bricks", "bi-cone-striped", "bi-vector-pen", "bi-bounding-box", "bi-tools", "bi-building", "bi-house-gear"],
        "lecciones": [
            L("Leer planos", "plano", "bi-map", 10,
              "Interpreta un plano arquitectónico y su escala.",
              [("blueprint", "plano"), ("floor plan", "planta arquitectónica"), ("scale", "escala")]),
            L("Medidas y escalas", "escuadra", "bi-rulers", 15,
              "Comunica dimensiones, superficies y alturas.",
              [("dimensions", "dimensiones"), ("square meters", "metros cuadrados"), ("elevation", "alzado")]),
            L("Materiales de construcción", "bloque", "bi-bricks", 20,
              "Describe materiales y sus propiedades en obra.",
              [("concrete", "concreto"), ("steel beam", "viga de acero"), ("brick", "ladrillo")]),
            L("Seguridad en obra", "casco", "bi-cone-striped", 20,
              "Da indicaciones de seguridad a tu equipo de construcción.",
              [("hard hat", "casco"), ("safety harness", "arnés de seguridad"), ("site inspection", "inspección de obra")]),
            L("Diseño y bocetos", "plano", "bi-vector-pen", 25,
              "Presenta tus ideas con bocetos y renders.",
              [("sketch", "boceto"), ("render", "render / visualización"), ("layout", "distribución")]),
            L("Estructuras", "bloque", "bi-bounding-box", 25,
              "Explica cimientos, muros de carga y columnas.",
              [("foundation", "cimentación"), ("load-bearing wall", "muro de carga"), ("column", "columna")]),
            L("Gestión de obra", "casco", "bi-tools", 30,
              "Coordina contratistas, presupuesto y calendario.",
              [("contractor", "contratista"), ("budget", "presupuesto"), ("timeline", "cronograma")]),
            L("Presentación al cliente", "edificio", "bi-building", 50,
              "El edificio terminado: presenta el proyecto final a tu cliente.",
              [("proposal", "propuesta"), ("scale model", "maqueta"), ("walkthrough", "recorrido")]),
        ],
    },
    {
        "slug": "general", "nombre": "Inglés General", "titulo_html": "Inglés <span>General</span>",
        "icono": "bi-globe-americas", "clave": "shiftly_progreso_general",
        "lema": "Viaja por el mundo profesional: cada destino es una habilidad de comunicación en inglés.",
        "forma_desc": "Viaje global",
        "formas": {
            "globo": {"nombre": "Globo terráqueo",
                      "els": '<circle cx="60" cy="44" r="40"/>',
                      "det": '<ellipse class="trazo" cx="60" cy="44" rx="17" ry="40"/><line class="trazo" x1="22" y1="30" x2="98" y2="30"/><line class="trazo" x1="22" y1="58" x2="98" y2="58"/>',
                      "cx": 60, "cy": 44},
            "brujula": {"nombre": "Brújula",
                        "els": '<circle cx="60" cy="46" r="38"/><rect x="53" y="0" width="14" height="10" rx="4"/>',
                        "det": '<circle class="trazo" cx="60" cy="46" r="29"/>', "cx": 60, "cy": 46},
            "ticket": {"nombre": "Pasaporte / boleto",
                       "els": '<path d="M8 14 H112 V34 A8 8 0 0 0 112 50 V70 H8 V50 A8 8 0 0 0 8 34 Z"/>',
                       "det": '<line class="trazo" x1="86" y1="20" x2="86" y2="64" stroke-dasharray="4 5"/>', "cx": 47, "cy": 42},
            "burbuja": {"nombre": "Burbuja de diálogo",
                        "els": '<path d="M16 6 H104 A12 12 0 0 1 116 18 V54 A12 12 0 0 1 104 66 H50 L28 84 V66 H16 A12 12 0 0 1 4 54 V18 A12 12 0 0 1 16 6 Z"/>',
                        "det": '<rect x="18" y="13" width="40" height="6" rx="3"/>', "cx": 60, "cy": 37},
            "estrella": {"nombre": "Estrella de dominio",
                         "els": f'<polygon points="{estrella()}"/>',
                         "det": '<circle cx="60" cy="48" r="9"/>', "cx": 60, "cy": 50},
        },
        "iconos": ["bi-chat-dots", "bi-globe-americas", "bi-airplane", "bi-compass", "bi-headset", "bi-journal-text", "bi-briefcase", "bi-mic", "bi-translate", "bi-trophy"],
        "lecciones": [
            L("Saludos profesionales", "burbuja", "bi-chat-dots", 10,
              "Preséntate y saluda a colegas de forma profesional.",
              [("nice to meet you", "mucho gusto"), ("colleague", "colega"), ("let me introduce…", "permíteme presentar…")]),
            L("Inglés en el trabajo", "globo", "bi-globe-americas", 15,
              "Habla de tu horario, tus tareas y fechas límite.",
              [("workplace", "lugar de trabajo"), ("schedule", "horario"), ("deadline", "fecha límite")]),
            L("Viajes de negocios", "ticket", "bi-airplane", 20,
              "Resuelve un viaje de trabajo: aeropuerto, hotel y escalas.",
              [("boarding pass", "pase de abordar"), ("check-in", "registro"), ("layover", "escala")]),
            L("Dar indicaciones", "brujula", "bi-compass", 20,
              "Pide y da direcciones dentro y fuera de la oficina.",
              [("turn left", "gira a la izquierda"), ("across from", "enfrente de"), ("next to", "junto a")]),
            L("Llamadas y videollamadas", "burbuja", "bi-headset", 25,
              "Maneja una llamada o reunión en línea sin perder el hilo.",
              [("hold on", "espera un momento"), ("can you hear me?", "¿me escuchas?"), ("you're on mute", "estás en silencio")]),
            L("Correos formales", "ticket", "bi-journal-text", 25,
              "Redacta un correo formal con saludo, cuerpo y cierre.",
              [("Dear…", "Estimado/a…"), ("please find attached", "adjunto encontrará"), ("best regards", "saludos cordiales")]),
            L("Entrevista de trabajo", "globo", "bi-briefcase", 30,
              "Responde preguntas clave en una entrevista en inglés.",
              [("strengths", "fortalezas"), ("work experience", "experiencia laboral"), ("salary expectations", "expectativas salariales")]),
            L("Presentaciones en público", "estrella", "bi-mic", 50,
              "Estrella de dominio: presenta un tema y responde preguntas.",
              [("slide", "diapositiva"), ("audience", "audiencia"), ("Q&A session", "sesión de preguntas")]),
        ],
    },
]
