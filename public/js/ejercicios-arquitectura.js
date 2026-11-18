/* ==========================================================
   SHIFTLY · BANCO DE EJERCICIOS · ARQUITECTURA
   5 ejercicios por cada lección de /ruta-arquitectura + set general
   para lecciones personalizadas. Misma estructura que
   ejercicios-sistemas.js (la opción correcta es la 0; el motor baraja).
   Los términos del panel lateral salen del ejercicio "emparejar".
   ========================================================== */
window.SHIFTLY_BANCOS = window.SHIFTLY_BANCOS || {};

window.SHIFTLY_BANCOS.arquitectura = {
    slug: "arquitectura",
    nombre: "Arquitectura",
    icono: "bi-building-fill",
    claveProgreso: "shiftly_progreso_arquitectura",

    lecciones: [
        {
            numero: 1, id: "arquitectura-01", titulo: "Leer planos", xp: 10,
            temas: "planos, plantas arquitectónicas, cortes, escala y orientación",
            consejo: "Floor plan = vista desde arriba; section = corte; elevation = alzado.",
            ejercicios: [
                { tipo: "opcion", enunciado: "Elige el tipo de plano",
                  frase: "This ___ shows the layout of the second floor.",
                  opciones: ["floor plan", "hard hat", "budget", "brick"], correcta: 0,
                  explicacion: "Floor plan = planta arquitectónica." },
                { tipo: "emparejar", enunciado: "Conecta los tipos de dibujo",
                  pares: [
                      { en: "blueprint", es: "plano" },
                      { en: "floor plan", es: "planta arquitectónica" },
                      { en: "scale", es: "escala" },
                      { en: "section", es: "corte" }
                  ], explicacion: "Blueprint viene de las copias azules de los planos antiguos." },
                { tipo: "completar", enunciado: "Completa la especificación",
                  antes: "The drawing is at a", despues: "of 1:100.", respuestas: ["scale"],
                  pista: "Escala: «sc…»", explicacion: "1:100 se lee «one to one hundred»." },
                { tipo: "ordenar", enunciado: "Ordena la descripción del plano",
                  palabras: ["The", "kitchen", "is", "next", "to", "the", "dining", "room"], sufijo: ".",
                  distractores: ["are", "rooms"], explicacion: "Next to = junto a." },
                { tipo: "escuchar", enunciado: "Escucha la indicación",
                  audio: "Check the north arrow on the site plan.",
                  opciones: ["Revisa la flecha del norte en el plano de conjunto.", "Dibuja la flecha en la fachada sur.", "Imprime el plano a otra escala."],
                  correcta: 0, explicacion: "Site plan = plano de conjunto o de sitio." }
            ]
        },
        {
            numero: 2, id: "arquitectura-02", titulo: "Medidas y escalas", xp: 15,
            temas: "dimensiones, metros cuadrados, alturas, anchos y alzados",
            consejo: "Width = ancho; length = largo; height = alto.",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta las medidas",
                  pares: [
                      { en: "dimensions", es: "dimensiones" },
                      { en: "square meters", es: "metros cuadrados" },
                      { en: "elevation", es: "alzado" },
                      { en: "height", es: "altura" }
                  ], explicacion: "Square meters (m²) mide superficies." },
                { tipo: "opcion", enunciado: "Elige la unidad",
                  frase: "The living room is forty ___.",
                  opciones: ["square meters", "hard hats", "blueprints", "contractors"], correcta: 0,
                  explicacion: "Las superficies se expresan en square meters." },
                { tipo: "completar", enunciado: "Completa la medida",
                  antes: "The ceiling", despues: "is two point seven meters.", respuestas: ["height"],
                  pista: "Altura: «hei…»", explicacion: "Ceiling height = altura de techo." },
                { tipo: "ordenar", enunciado: "Ordena la instrucción",
                  palabras: ["Measure", "the", "width", "of", "the", "window"], sufijo: ".",
                  distractores: ["measures", "windows"], explicacion: "Measure = medir." },
                { tipo: "escuchar", enunciado: "Escucha la descripción",
                  audio: "The front elevation shows three windows and a door.",
                  opciones: ["El alzado frontal muestra tres ventanas y una puerta.", "La planta muestra tres puertas y una ventana.", "El corte muestra la altura de la escalera."],
                  correcta: 0, explicacion: "Front elevation = alzado frontal." }
            ]
        },
        {
            numero: 3, id: "arquitectura-03", titulo: "Materiales de construcción", xp: 20,
            temas: "concreto, acero, ladrillo, madera, tablaroca y materiales sustentables",
            consejo: "Reinforced concrete = concreto armado (con varillas de acero).",
            ejercicios: [
                { tipo: "opcion", enunciado: "Elige el material estructural",
                  frase: "The columns are made of reinforced ___.",
                  opciones: ["concrete", "cotton", "paper", "foam"], correcta: 0,
                  explicacion: "Reinforced concrete = concreto armado." },
                { tipo: "emparejar", enunciado: "Conecta los materiales",
                  pares: [
                      { en: "concrete", es: "concreto" },
                      { en: "steel beam", es: "viga de acero" },
                      { en: "brick", es: "ladrillo" },
                      { en: "drywall", es: "tablaroca" }
                  ], explicacion: "Drywall se usa en muros interiores ligeros." },
                { tipo: "completar", enunciado: "Completa la especificación",
                  antes: "We will use a", despues: "beam to support the roof.", respuestas: ["steel"],
                  pista: "Acero: «st…»", explicacion: "Steel beam = viga de acero." },
                { tipo: "ordenar", enunciado: "Ordena la descripción",
                  palabras: ["The", "walls", "are", "built", "with", "red", "bricks"], sufijo: ".",
                  distractores: ["is", "build"], explicacion: "Voz pasiva: are built = están construidos." },
                { tipo: "escuchar", enunciado: "Escucha la afirmación",
                  audio: "Wood is a sustainable building material.",
                  opciones: ["La madera es un material de construcción sustentable.", "El acero es más barato que la madera.", "El concreto no es resistente al agua."],
                  correcta: 0, explicacion: "Sustainable = sustentable." }
            ]
        },
        {
            numero: 4, id: "arquitectura-04", titulo: "Seguridad en obra", xp: 20,
            temas: "equipo de protección, arnés, andamios, inspecciones y salidas de emergencia",
            consejo: "Work at height = trabajo en alturas; requiere arnés.",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta el equipo de seguridad",
                  pares: [
                      { en: "hard hat", es: "casco" },
                      { en: "safety harness", es: "arnés de seguridad" },
                      { en: "site inspection", es: "inspección de obra" },
                      { en: "scaffolding", es: "andamio" }
                  ], explicacion: "El equipo de protección es obligatorio en obra." },
                { tipo: "opcion", enunciado: "Elige el equipo obligatorio",
                  frase: "You must wear a ___ when you work at height.",
                  opciones: ["safety harness", "blueprint", "floor plan", "render"], correcta: 0,
                  explicacion: "Safety harness = arnés de seguridad." },
                { tipo: "completar", enunciado: "Completa el letrero",
                  antes: "No entry without a hard", despues: ".", respuestas: ["hat"],
                  pista: "Casco = «hard …»", explicacion: "Hard hat = casco de obra." },
                { tipo: "ordenar", enunciado: "Ordena el aviso",
                  palabras: ["The", "site", "inspection", "is", "on", "Friday", "morning"], sufijo: ".",
                  distractores: ["are", "mornings"], explicacion: "Días de la semana con «on»." },
                { tipo: "escuchar", enunciado: "Escucha la regla",
                  audio: "Keep the emergency exits clear at all times.",
                  opciones: ["Mantén las salidas de emergencia despejadas en todo momento.", "Cierra las salidas de emergencia por la noche.", "Usa las salidas de emergencia solo en la inspección."],
                  correcta: 0, explicacion: "Clear = despejado." }
            ]
        },
        {
            numero: 5, id: "arquitectura-05", titulo: "Diseño y bocetos", xp: 25,
            temas: "bocetos, renders, distribución de espacios, fachadas e iluminación natural",
            consejo: "Sketch = boceto a mano; render = imagen digital realista.",
            ejercicios: [
                { tipo: "opcion", enunciado: "Elige el tipo de dibujo",
                  frase: "I made a quick ___ of the facade by hand.",
                  opciones: ["sketch", "beam", "harness", "budget"], correcta: 0,
                  explicacion: "Sketch = boceto." },
                { tipo: "emparejar", enunciado: "Conecta los términos de diseño",
                  pares: [
                      { en: "sketch", es: "boceto" },
                      { en: "render", es: "visualización 3D" },
                      { en: "layout", es: "distribución" },
                      { en: "facade", es: "fachada" }
                  ], explicacion: "Layout = cómo se acomodan los espacios." },
                { tipo: "completar", enunciado: "Completa la noticia",
                  antes: "The client approved the 3D", despues: "of the lobby.", respuestas: ["render", "renders", "model"],
                  pista: "Visualización: «ren…»", explicacion: "3D render = visualización tridimensional." },
                { tipo: "ordenar", enunciado: "Ordena el cambio",
                  palabras: ["We", "changed", "the", "layout", "of", "the", "office"], sufijo: ".",
                  distractores: ["change", "offices"], explicacion: "Changed = pasado de change." },
                { tipo: "escuchar", enunciado: "Escucha el criterio",
                  audio: "Natural light was a priority in this design.",
                  opciones: ["La luz natural fue una prioridad en este diseño.", "La iluminación artificial se eliminó del diseño.", "El diseño no tiene ventanas al norte."],
                  correcta: 0, explicacion: "Natural light = luz natural." }
            ]
        },
        {
            numero: 6, id: "arquitectura-06", titulo: "Estructuras", xp: 25,
            temas: "cimentación, muros de carga, columnas, losas e ingeniería estructural",
            consejo: "Load-bearing = que soporta carga; no se puede demoler sin refuerzo.",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta los elementos estructurales",
                  pares: [
                      { en: "foundation", es: "cimentación" },
                      { en: "load-bearing wall", es: "muro de carga" },
                      { en: "column", es: "columna" },
                      { en: "slab", es: "losa" }
                  ], explicacion: "La estructura transmite las cargas al suelo." },
                { tipo: "opcion", enunciado: "Elige el tipo de muro",
                  frase: "You cannot remove that wall; it is a ___ wall.",
                  opciones: ["load-bearing", "glass", "temporary", "painted"], correcta: 0,
                  explicacion: "Un muro de carga sostiene la estructura." },
                { tipo: "completar", enunciado: "Completa la descripción",
                  antes: "The concrete", despues: "covers the whole first floor.", respuestas: ["slab"],
                  pista: "Losa: «sl…»", explicacion: "Concrete slab = losa de concreto." },
                { tipo: "ordenar", enunciado: "Ordena el principio estructural",
                  palabras: ["The", "foundation", "must", "support", "the", "building"], sufijo: ".",
                  distractores: ["supports", "buildings"], explicacion: "Después de «must» va el verbo base." },
                { tipo: "escuchar", enunciado: "Escucha la revisión",
                  audio: "The structural engineer will check the columns.",
                  opciones: ["El ingeniero estructural revisará las columnas.", "El arquitecto pintará las columnas.", "El cliente quiere quitar las columnas."],
                  correcta: 0, explicacion: "Structural engineer = ingeniero estructural." }
            ]
        },
        {
            numero: 7, id: "arquitectura-07", titulo: "Gestión de obra", xp: 30,
            temas: "contratistas, presupuesto, cronograma, retrasos, cotizaciones y suministro de materiales",
            consejo: "Behind schedule = retrasado; ahead of schedule = adelantado.",
            ejercicios: [
                { tipo: "opcion", enunciado: "Completa la alerta",
                  frase: "The project is over ___. We need to cut costs.",
                  opciones: ["budget", "scale", "render", "slab"], correcta: 0,
                  explicacion: "Over budget = fuera de presupuesto." },
                { tipo: "emparejar", enunciado: "Conecta los términos de gestión",
                  pares: [
                      { en: "contractor", es: "contratista" },
                      { en: "budget", es: "presupuesto" },
                      { en: "timeline", es: "cronograma" },
                      { en: "delay", es: "retraso" }
                  ], explicacion: "La gestión de obra controla tiempo, costo y calidad." },
                { tipo: "completar", enunciado: "Completa el aviso",
                  antes: "The", despues: "sent a new quote for the roof.", respuestas: ["contractor"],
                  pista: "Contratista: «contr…»", explicacion: "Quote = cotización." },
                { tipo: "ordenar", enunciado: "Ordena el estatus",
                  palabras: ["We", "are", "two", "weeks", "behind", "schedule"], sufijo: ".",
                  distractores: ["is", "week"], explicacion: "Behind schedule = retrasados." },
                { tipo: "escuchar", enunciado: "Escucha la logística",
                  audio: "The materials will arrive on site next Tuesday.",
                  opciones: ["Los materiales llegarán a la obra el próximo martes.", "Los materiales se devolverán al proveedor el martes.", "La obra se detendrá el próximo martes."],
                  correcta: 0, explicacion: "On site = en la obra." }
            ]
        },
        {
            numero: 8, id: "arquitectura-08", titulo: "Presentación al cliente", xp: 50,
            temas: "propuesta arquitectónica, maqueta, recorrido virtual, retroalimentación y sustentabilidad",
            consejo: "«Let me walk you through…» = permítame mostrarle paso a paso…",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta el vocabulario de presentación",
                  pares: [
                      { en: "proposal", es: "propuesta" },
                      { en: "scale model", es: "maqueta" },
                      { en: "walkthrough", es: "recorrido" },
                      { en: "feedback", es: "retroalimentación" }
                  ], explicacion: "Una buena presentación combina maqueta y recorrido." },
                { tipo: "opcion", enunciado: "Elige el recurso de presentación",
                  frase: "We built a ___ to show the client the whole complex.",
                  opciones: ["scale model", "harness", "slab", "contractor"], correcta: 0,
                  explicacion: "Scale model = maqueta." },
                { tipo: "completar", enunciado: "Completa la frase de presentación",
                  antes: "Let me walk you", despues: "the main entrance.", respuestas: ["through"],
                  pista: "A través de: «thr…»", explicacion: "Walk someone through = guiar paso a paso." },
                { tipo: "ordenar", enunciado: "Ordena el cierre",
                  palabras: ["We", "would", "love", "to", "hear", "your", "feedback"], sufijo: ".",
                  distractores: ["loves", "heard"], explicacion: "Cierre cortés para pedir opinión." },
                { tipo: "escuchar", enunciado: "Escucha la propuesta",
                  audio: "This proposal includes a green roof and solar panels.",
                  opciones: ["Esta propuesta incluye un techo verde y paneles solares.", "Esta propuesta elimina el techo y los paneles.", "Esta propuesta solo incluye la fachada."],
                  correcta: 0, explicacion: "Green roof = azotea verde." }
            ]
        }
    ],

    general: {
        temas: "inglés general de arquitectura: planos, permisos, visitas de obra y comunicación con clientes",
        consejo: "«Site» puede ser el terreno o la obra; «site visit» = visita de obra.",
        ejercicios: [
            { tipo: "opcion", enunciado: "Elige el entregable",
              frase: "Can you send me the updated ___ in PDF?",
              opciones: ["drawings", "bricks", "hard hats", "beams"], correcta: 0,
              explicacion: "Drawings = planos o dibujos." },
            { tipo: "emparejar", enunciado: "Conecta el vocabulario básico",
              pares: [
                  { en: "drawing", es: "dibujo / plano" },
                  { en: "site", es: "terreno / obra" },
                  { en: "architect", es: "arquitecto/a" },
                  { en: "permit", es: "permiso de construcción" }
              ], explicacion: "Building permit = licencia de construcción." },
            { tipo: "completar", enunciado: "Completa el estatus",
              antes: "We are still waiting for the building", despues: ".", respuestas: ["permit", "permits", "license"],
              pista: "Permiso: «per…»", explicacion: "Building permit = permiso de construcción." },
            { tipo: "ordenar", enunciado: "Ordena el requerimiento",
              palabras: ["The", "client", "wants", "a", "bigger", "kitchen"], sufijo: ".",
              distractores: ["want", "big"], explicacion: "Bigger = más grande (comparativo)." },
            { tipo: "escuchar", enunciado: "Escucha la propuesta",
              audio: "Let's schedule a site visit for Thursday.",
              opciones: ["Programemos una visita a la obra para el jueves.", "Cancelemos la visita del jueves.", "Mandemos los planos el jueves."],
              correcta: 0, explicacion: "Site visit = visita de obra." }
        ]
    }
};
