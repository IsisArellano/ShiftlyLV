/* ==========================================================
   SHIFTLY · BANCO DE EJERCICIOS · GASTRONOMÍA
   5 ejercicios por cada lección de /ruta-gastronomia + set general
   para lecciones personalizadas. Misma estructura que
   ejercicios-sistemas.js (la opción correcta es la 0; el motor baraja).
   Los términos del panel lateral salen del ejercicio "emparejar".
   ========================================================== */
window.SHIFTLY_BANCOS = window.SHIFTLY_BANCOS || {};

window.SHIFTLY_BANCOS.gastronomia = {
    slug: "gastronomia",
    nombre: "Gastronomía",
    icono: "bi-cup-hot-fill",
    claveProgreso: "shiftly_progreso_gastronomia",

    lecciones: [
        {
            numero: 1, id: "gastronomia-01", titulo: "La brigada de cocina", xp: 10,
            temas: "puestos de la brigada: chef ejecutivo, subchef, cocinero de línea, repostero y lavaloza",
            consejo: "En cocina profesional se responde a las órdenes con «Yes, chef!».",
            ejercicios: [
                { tipo: "opcion", enunciado: "Elige el puesto correcto",
                  frase: "The ___ chef is second in command in the kitchen.",
                  opciones: ["sous", "head", "pastry", "line"], correcta: 0,
                  explicacion: "Sous chef = subchef, segundo al mando." },
                { tipo: "emparejar", enunciado: "Conecta cada puesto de la brigada",
                  pares: [
                      { en: "head chef", es: "chef ejecutivo" },
                      { en: "sous chef", es: "subchef" },
                      { en: "line cook", es: "cocinero de línea" },
                      { en: "dishwasher", es: "lavaloza" }
                  ], explicacion: "Cada puesto tiene una estación y responsabilidad." },
                { tipo: "completar", enunciado: "Completa la respuesta de la brigada",
                  antes: "When the chef gives an order, the team answers «Yes,", despues: "!»", respuestas: ["chef"],
                  pista: "Se responde con el título del jefe de cocina.", explicacion: "«Yes, chef!» confirma que se entendió la orden." },
                { tipo: "ordenar", enunciado: "Ordena la descripción del puesto",
                  palabras: ["The", "pastry", "chef", "prepares", "the", "desserts"], sufijo: ".",
                  distractores: ["prepare", "dessert"], explicacion: "Pastry chef = repostero." },
                { tipo: "escuchar", enunciado: "Escucha la asignación de estación",
                  audio: "The line cook is in charge of the grill station.",
                  opciones: ["El cocinero de línea está a cargo de la estación de parrilla.", "El chef ejecutivo limpia la parrilla al final.", "El lavaloza ayuda en la estación de postres."],
                  correcta: 0, explicacion: "In charge of = a cargo de." }
            ]
        },
        {
            numero: 2, id: "gastronomia-02", titulo: "Mise en place", xp: 15,
            temas: "organización de la estación, lista de preparación, cortes básicos y utensilios",
            consejo: "Dice = cubos; mince = picar muy fino; chop = picar en trozos.",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta el vocabulario de preparación",
                  pares: [
                      { en: "cutting board", es: "tabla de cortar" },
                      { en: "prep list", es: "lista de preparación" },
                      { en: "dice", es: "cortar en cubos" },
                      { en: "mince", es: "picar finamente" }
                  ], explicacion: "La mise en place se organiza con la prep list." },
                { tipo: "opcion", enunciado: "Elige el corte correcto",
                  frase: "Please ___ the onions into small cubes.",
                  opciones: ["dice", "boil", "bake", "freeze"], correcta: 0,
                  explicacion: "Dice = cortar en cubos." },
                { tipo: "completar", enunciado: "Completa la instrucción",
                  antes: "Check the prep", despues: "before the service starts.", respuestas: ["list"],
                  pista: "Lista: «li…»", explicacion: "Prep list = lista de preparación." },
                { tipo: "ordenar", enunciado: "Ordena la regla de la estación",
                  palabras: ["Keep", "your", "station", "clean", "and", "organized"], sufijo: ".",
                  distractores: ["keeps", "dirty"], explicacion: "Station = estación de trabajo." },
                { tipo: "escuchar", enunciado: "Escucha la tarea",
                  audio: "Peel and chop the carrots before lunch service.",
                  opciones: ["Pela y pica las zanahorias antes del servicio de comida.", "Cocina las zanahorias después de la cena.", "Lava las papas y guárdalas en el refrigerador."],
                  correcta: 0, explicacion: "Peel = pelar; chop = picar." }
            ]
        },
        {
            numero: 3, id: "gastronomia-03", titulo: "Caldos y salsas", xp: 20,
            temas: "fondos, caldos, salsas madre, cocción a fuego lento y reducción",
            consejo: "Simmer = hervir suave, con burbujas pequeñas; boil = hervir fuerte.",
            ejercicios: [
                { tipo: "opcion", enunciado: "Elige la técnica correcta",
                  frase: "Let the stock ___ for three hours on low heat.",
                  opciones: ["simmer", "freeze", "fry", "grill"], correcta: 0,
                  explicacion: "Simmer = hervir a fuego lento." },
                { tipo: "emparejar", enunciado: "Conecta los términos de salsas",
                  pares: [
                      { en: "stock", es: "fondo / caldo" },
                      { en: "simmer", es: "hervir a fuego lento" },
                      { en: "reduce", es: "reducir" },
                      { en: "whisk", es: "batir con batidor" }
                  ], explicacion: "Reducir concentra el sabor de una salsa." },
                { tipo: "completar", enunciado: "Completa la indicación",
                  antes: "Reduce the sauce until it is", despues: ".", respuestas: ["thick"],
                  pista: "Espesa: «th…»", explicacion: "Thick = espeso." },
                { tipo: "ordenar", enunciado: "Ordena el paso de la receta",
                  palabras: ["Skim", "the", "fat", "off", "the", "chicken", "stock"], sufijo: ".",
                  distractores: ["skims", "fats"], explicacion: "Skim = desgrasar o espumar." },
                { tipo: "escuchar", enunciado: "Escucha el ajuste",
                  audio: "The béchamel sauce needs more milk.",
                  opciones: ["La salsa bechamel necesita más leche.", "La salsa de tomate necesita más sal.", "El caldo necesita hervir más tiempo."],
                  correcta: 0, explicacion: "La bechamel es una de las salsas madre." }
            ]
        },
        {
            numero: 4, id: "gastronomia-04", titulo: "Técnicas de cocción", xp: 20,
            temas: "saltear, sellar, desglasar, brasear y control de temperatura del horno",
            consejo: "Sear = sellar a fuego alto para formar costra dorada.",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta cada técnica",
                  pares: [
                      { en: "sauté", es: "saltear" },
                      { en: "sear", es: "sellar" },
                      { en: "deglaze", es: "desglasar" },
                      { en: "braise", es: "brasear" }
                  ], explicacion: "Muchas técnicas vienen del francés." },
                { tipo: "opcion", enunciado: "Elige la técnica",
                  frase: "___ the steak on high heat to get a brown crust.",
                  opciones: ["Sear", "Freeze", "Peel", "Whisk"], correcta: 0,
                  explicacion: "Sear = sellar." },
                { tipo: "completar", enunciado: "Completa el paso",
                  antes: "Deglaze the pan with white", despues: ".", respuestas: ["wine"],
                  pista: "Vino: «wi…»", explicacion: "Desglasar = disolver los jugos del fondo con un líquido." },
                { tipo: "ordenar", enunciado: "Ordena la instrucción",
                  palabras: ["Sauté", "the", "mushrooms", "in", "olive", "oil"], sufijo: ".",
                  distractores: ["sautés", "butter"], explicacion: "Olive oil = aceite de oliva." },
                { tipo: "escuchar", enunciado: "Escucha la temperatura",
                  audio: "Preheat the oven to one hundred eighty degrees.",
                  opciones: ["Precalienta el horno a ciento ochenta grados.", "Apaga el horno después de ochenta minutos.", "Saca la bandeja del horno a los dieciocho minutos."],
                  correcta: 0, explicacion: "Preheat = precalentar." }
            ]
        },
        {
            numero: 5, id: "gastronomia-05", titulo: "Ingredientes y despensa", xp: 25,
            temas: "despensa, productos frescos, especias, proveedores, inventario y rotación FIFO",
            consejo: "FIFO = First In, First Out: lo primero que entra es lo primero que se usa.",
            ejercicios: [
                { tipo: "opcion", enunciado: "Completa el aviso de inventario",
                  frase: "We are running low on flour. Please add it to the ___ list.",
                  opciones: ["order", "guest", "table", "bill"], correcta: 0,
                  explicacion: "Order list = lista de pedidos al proveedor." },
                { tipo: "emparejar", enunciado: "Conecta el vocabulario de despensa",
                  pares: [
                      { en: "pantry", es: "despensa" },
                      { en: "fresh produce", es: "productos frescos" },
                      { en: "spices", es: "especias" },
                      { en: "supplier", es: "proveedor" }
                  ], explicacion: "Produce = frutas y verduras frescas." },
                { tipo: "completar", enunciado: "Completa la regla de rotación",
                  antes: "First in, first", despues: "(FIFO).", respuestas: ["out"],
                  pista: "Lo contrario de «in».", explicacion: "FIFO evita que los productos caduquen." },
                { tipo: "ordenar", enunciado: "Ordena el dato del proveedor",
                  palabras: ["The", "supplier", "delivers", "fresh", "fish", "on", "Mondays"], sufijo: ".",
                  distractores: ["deliver", "fishes"], explicacion: "Deliver = entregar." },
                { tipo: "escuchar", enunciado: "Escucha la indicación de almacenamiento",
                  audio: "Store the spices in a cool and dry place.",
                  opciones: ["Guarda las especias en un lugar fresco y seco.", "Tira las especias que estén húmedas.", "Compra especias frescas cada mañana."],
                  correcta: 0, explicacion: "Cool and dry = fresco y seco." }
            ]
        },
        {
            numero: 6, id: "gastronomia-06", titulo: "Seguridad alimentaria", xp: 25,
            temas: "contaminación cruzada, inocuidad, fechas de caducidad, etiquetado y temperaturas seguras",
            consejo: "Raw = crudo; cooked = cocido. Nunca uses la misma tabla para ambos.",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta los términos de inocuidad",
                  pares: [
                      { en: "cross-contamination", es: "contaminación cruzada" },
                      { en: "expiration date", es: "fecha de caducidad" },
                      { en: "food safety", es: "inocuidad alimentaria" },
                      { en: "hairnet", es: "cofia / red para el cabello" }
                  ], explicacion: "Food safety previene enfermedades transmitidas por alimentos." },
                { tipo: "opcion", enunciado: "Elige el alimento de riesgo",
                  frase: "Use a separate cutting board for raw ___ to avoid cross-contamination.",
                  opciones: ["chicken", "cake", "coffee", "napkins"], correcta: 0,
                  explicacion: "El pollo crudo puede contaminar otros alimentos." },
                { tipo: "completar", enunciado: "Completa la regla de temperatura",
                  antes: "Keep cold food below five degrees", despues: ".", respuestas: ["celsius"],
                  pista: "Escala de temperatura: «Cel…»", explicacion: "Los alimentos fríos se mantienen bajo 5 °C." },
                { tipo: "ordenar", enunciado: "Ordena la norma de etiquetado",
                  palabras: ["Label", "every", "container", "with", "the", "date"], sufijo: ".",
                  distractores: ["labels", "containers"], explicacion: "Label = etiquetar." },
                { tipo: "escuchar", enunciado: "Escucha el aviso",
                  audio: "This yogurt is past its expiration date.",
                  opciones: ["Este yogur ya pasó su fecha de caducidad.", "Este yogur debe servirse frío.", "Este yogur llegó hoy del proveedor."],
                  correcta: 0, explicacion: "Past its expiration date = caducado." }
            ]
        },
        {
            numero: 7, id: "gastronomia-07", titulo: "Emplatado", xp: 30,
            temas: "presentación del platillo, guarniciones, porciones y salsas decorativas",
            consejo: "Drizzle = rociar un hilo fino de salsa o aceite.",
            ejercicios: [
                { tipo: "opcion", enunciado: "Completa el toque final",
                  frase: "Add a fresh herb ___ before serving the dish.",
                  opciones: ["garnish", "stock", "oven", "ladle"], correcta: 0,
                  explicacion: "Garnish = decoración o guarnición." },
                { tipo: "emparejar", enunciado: "Conecta los términos de emplatado",
                  pares: [
                      { en: "plating", es: "emplatado" },
                      { en: "garnish", es: "decoración / guarnición" },
                      { en: "portion", es: "porción" },
                      { en: "drizzle", es: "rociar un hilo de salsa" }
                  ], explicacion: "El emplatado cuida color, altura y limpieza." },
                { tipo: "completar", enunciado: "Completa la revisión del pase",
                  antes: "Wipe the rim of the", despues: "before it goes out.", respuestas: ["plate"],
                  pista: "Plato: «pl…»", explicacion: "Rim = borde del plato." },
                { tipo: "ordenar", enunciado: "Ordena la instrucción",
                  palabras: ["Drizzle", "the", "sauce", "around", "the", "fish"], sufijo: ".",
                  distractores: ["drizzles", "sauces"], explicacion: "Around = alrededor de." },
                { tipo: "escuchar", enunciado: "Escucha el estándar",
                  audio: "Each portion should weigh two hundred grams.",
                  opciones: ["Cada porción debe pesar doscientos gramos.", "Cada plato lleva dos salsas diferentes.", "Cada mesa recibe pan y mantequilla."],
                  correcta: 0, explicacion: "Weigh = pesar." }
            ]
        },
        {
            numero: 8, id: "gastronomia-08", titulo: "Servicio al cliente", xp: 50,
            temas: "comunicación entre cocina y sala, toma de pedidos, alergias, cuenta y reservaciones",
            consejo: "Ante una alergia confirma siempre con cocina antes de servir.",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta el vocabulario de servicio",
                  pares: [
                      { en: "order up", es: "orden lista" },
                      { en: "the check", es: "la cuenta" },
                      { en: "server", es: "mesero/a" },
                      { en: "reservation", es: "reservación" }
                  ], explicacion: "«Order up!» se grita cuando un plato sale de cocina." },
                { tipo: "opcion", enunciado: "Completa el aviso del mesero",
                  frase: "Table four is ready to ___.",
                  opciones: ["order", "bake", "simmer", "peel"], correcta: 0,
                  explicacion: "Ready to order = lista para pedir." },
                { tipo: "completar", enunciado: "Completa la oferta",
                  antes: "Would you like to see the dessert", despues: "?", respuestas: ["menu"],
                  pista: "Carta: «me…»", explicacion: "Dessert menu = carta de postres." },
                { tipo: "ordenar", enunciado: "Ordena la pregunta",
                  palabras: ["Are", "you", "ready", "to", "order"], sufijo: "?",
                  distractores: ["is", "ordering"], explicacion: "Pregunta básica al tomar la orden." },
                { tipo: "escuchar", enunciado: "Escucha al cliente",
                  audio: "I am allergic to nuts. Does this dish contain any?",
                  opciones: ["Soy alérgico a las nueces. ¿Este platillo contiene alguna?", "Quiero un platillo con nueces extra.", "¿Este platillo es vegetariano?"],
                  correcta: 0, explicacion: "Contain = contener." }
            ]
        }
    ],

    general: {
        temas: "inglés general de cocina: recetas, ingredientes, avisos de seguridad y servicio",
        consejo: "En la cocina se avisa en voz alta: «Behind you!», «Hot!», «Corner!».",
        ejercicios: [
            { tipo: "opcion", enunciado: "Elige el verbo correcto",
              frase: "Taste the soup and ___ the seasoning.",
              opciones: ["adjust", "wash", "close", "slice"], correcta: 0,
              explicacion: "Adjust the seasoning = ajustar la sazón." },
            { tipo: "emparejar", enunciado: "Conecta el vocabulario básico",
              pares: [
                  { en: "recipe", es: "receta" },
                  { en: "ingredient", es: "ingrediente" },
                  { en: "kitchen", es: "cocina" },
                  { en: "seasoning", es: "sazón" }
              ], explicacion: "Vocabulario de cualquier cocina profesional." },
            { tipo: "completar", enunciado: "Completa el aviso de seguridad",
              antes: "Behind", despues: "! I'm carrying a hot pan.", respuestas: ["you"],
              pista: "Aviso de cocina: «Behind …!»", explicacion: "«Behind you!» = ¡detrás de ti!" },
            { tipo: "ordenar", enunciado: "Ordena la regla de trabajo",
              palabras: ["Clean", "as", "you", "go", "during", "the", "service"], sufijo: ".",
              distractores: ["cleans", "went"], explicacion: "Clean as you go = limpia mientras trabajas." },
            { tipo: "escuchar", enunciado: "Escucha el aviso del pase",
              audio: "Two orders of pasta are ready for table six.",
              opciones: ["Dos órdenes de pasta están listas para la mesa seis.", "La mesa seis pidió dos postres.", "Faltan dos órdenes de sopa para la mesa dos."],
              correcta: 0, explicacion: "Ready for = listas para." }
        ]
    }
};
