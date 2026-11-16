/* ==========================================================
   SHIFTLY · BANCO DE EJERCICIOS · INGLÉS GENERAL
   5 ejercicios por cada lección de /ruta-general + set general
   para lecciones personalizadas. Misma estructura que
   ejercicios-sistemas.js (la opción correcta es la 0; el motor baraja).
   Los términos del panel lateral salen del ejercicio "emparejar".
   ========================================================== */
window.SHIFTLY_BANCOS = window.SHIFTLY_BANCOS || {};

window.SHIFTLY_BANCOS.general = {
    slug: "general",
    nombre: "Inglés General",
    icono: "bi-globe-americas",
    claveProgreso: "shiftly_progreso_general",

    lecciones: [
        {
            numero: 1, id: "general-01", titulo: "Saludos profesionales", xp: 10,
            temas: "saludos formales, presentaciones personales y de colegas en el trabajo",
            consejo: "«Nice to meet you» solo se usa la primera vez; después: «Nice to see you».",
            ejercicios: [
                { tipo: "opcion", enunciado: "Completa el saludo",
                  frase: "Nice to ___ you. I'm Laura from Marketing.",
                  opciones: ["meet", "eat", "close", "send"], correcta: 0,
                  explicacion: "Nice to meet you = mucho gusto." },
                { tipo: "emparejar", enunciado: "Conecta las expresiones",
                  pares: [
                      { en: "colleague", es: "colega" },
                      { en: "nice to meet you", es: "mucho gusto" },
                      { en: "how do you do?", es: "¿cómo está usted? (formal)" },
                      { en: "team", es: "equipo" }
                  ], explicacion: "«How do you do?» es muy formal y se responde igual." },
                { tipo: "completar", enunciado: "Completa la presentación",
                  antes: "Let me", despues: "my colleague, Mark.", respuestas: ["introduce"],
                  pista: "Presentar: «intro…»", explicacion: "Introduce = presentar (a una persona)." },
                { tipo: "ordenar", enunciado: "Ordena la frase cortés",
                  palabras: ["It's", "a", "pleasure", "to", "work", "with", "you"], sufijo: ".",
                  distractores: ["works", "pleased"], explicacion: "It's a pleasure = es un placer." },
                { tipo: "escuchar", enunciado: "Escucha la bienvenida",
                  audio: "Good morning, everyone. Welcome to the team.",
                  opciones: ["Buenos días a todos. Bienvenidos al equipo.", "Buenas noches. Gracias por venir.", "Buenos días. La reunión se canceló."],
                  correcta: 0, explicacion: "Welcome to = bienvenido/a a." }
            ]
        },
        {
            numero: 2, id: "general-02", titulo: "Inglés en el trabajo", xp: 15,
            temas: "horarios, tareas, reuniones, agendas y fechas límite",
            consejo: "«By Friday» = a más tardar el viernes; «until Friday» = hasta el viernes.",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta el vocabulario laboral",
                  pares: [
                      { en: "deadline", es: "fecha límite" },
                      { en: "schedule", es: "horario / agenda" },
                      { en: "task", es: "tarea" },
                      { en: "meeting", es: "reunión" }
                  ], explicacion: "Vocabulario básico de cualquier oficina." },
                { tipo: "opcion", enunciado: "Completa el aviso",
                  frase: "The ___ for the report is Friday at noon.",
                  opciones: ["deadline", "boarding pass", "layover", "slide"], correcta: 0,
                  explicacion: "Deadline = fecha límite de entrega." },
                { tipo: "completar", enunciado: "Completa la petición",
                  antes: "Can we move the meeting", despues: "Thursday?", respuestas: ["to"],
                  pista: "Preposición de destino.", explicacion: "Move a meeting to = cambiar una reunión para." },
                { tipo: "ordenar", enunciado: "Ordena el compromiso",
                  palabras: ["I", "will", "finish", "the", "report", "by", "tomorrow"], sufijo: ".",
                  distractores: ["finishes", "until"], explicacion: "By tomorrow = a más tardar mañana." },
                { tipo: "escuchar", enunciado: "Escucha la petición",
                  audio: "Could you send me the agenda before the meeting?",
                  opciones: ["¿Podrías enviarme la agenda antes de la reunión?", "¿Podrías cancelar la reunión de hoy?", "¿Podrías imprimir el reporte después de la reunión?"],
                  correcta: 0, explicacion: "Could you…? = ¿podrías…? (cortés)." }
            ]
        },
        {
            numero: 3, id: "general-03", titulo: "Viajes de negocios", xp: 20,
            temas: "aeropuerto, registro, escalas, equipaje, hotel y retrasos de vuelo",
            consejo: "Layover = escala; carry-on = equipaje de mano; check-in = registro.",
            ejercicios: [
                { tipo: "opcion", enunciado: "Completa el itinerario",
                  frase: "My flight has a two-hour ___ in Dallas.",
                  opciones: ["layover", "deadline", "slide", "agenda"], correcta: 0,
                  explicacion: "Layover = escala." },
                { tipo: "emparejar", enunciado: "Conecta el vocabulario de viaje",
                  pares: [
                      { en: "boarding pass", es: "pase de abordar" },
                      { en: "check-in", es: "registro" },
                      { en: "layover", es: "escala" },
                      { en: "carry-on", es: "equipaje de mano" }
                  ], explicacion: "Términos clave del aeropuerto y el hotel." },
                { tipo: "completar", enunciado: "Completa en la recepción del hotel",
                  antes: "I'd like to", despues: "in. I have a reservation under García.", respuestas: ["check"],
                  pista: "Registrarse = «… in»", explicacion: "Check in = registrarse." },
                { tipo: "ordenar", enunciado: "Ordena la pregunta en el hotel",
                  palabras: ["Is", "breakfast", "included", "in", "the", "room", "rate"], sufijo: "?",
                  distractores: ["includes", "rates"], explicacion: "Room rate = tarifa de la habitación." },
                { tipo: "escuchar", enunciado: "Escucha el anuncio",
                  audio: "Your flight has been delayed by forty minutes.",
                  opciones: ["Tu vuelo se retrasó cuarenta minutos.", "Tu vuelo sale en cuarenta minutos.", "Tu vuelo fue cancelado hace cuarenta minutos."],
                  correcta: 0, explicacion: "Delayed = retrasado." }
            ]
        },
        {
            numero: 4, id: "general-04", titulo: "Dar indicaciones", xp: 20,
            temas: "direcciones, ubicaciones, preposiciones de lugar y orientación en edificios",
            consejo: "Across from = enfrente de; next to = junto a; between = entre.",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta las indicaciones",
                  pares: [
                      { en: "turn left", es: "gira a la izquierda" },
                      { en: "go straight", es: "sigue derecho" },
                      { en: "across from", es: "enfrente de" },
                      { en: "next to", es: "junto a" }
                  ], explicacion: "Expresiones básicas para orientarse." },
                { tipo: "opcion", enunciado: "Elige la ubicación",
                  frase: "The meeting room is ___ the elevator, on your right.",
                  opciones: ["next to", "deadline", "layover", "boarding"], correcta: 0,
                  explicacion: "Next to = junto a." },
                { tipo: "completar", enunciado: "Completa la indicación",
                  antes: "Go straight and", despues: "right at the corner.", respuestas: ["turn"],
                  pista: "Girar: «tu…»", explicacion: "Turn right = gira a la derecha." },
                { tipo: "ordenar", enunciado: "Ordena la ubicación",
                  palabras: ["The", "bank", "is", "across", "from", "the", "hotel"], sufijo: ".",
                  distractores: ["are", "next"], explicacion: "Across from = enfrente de." },
                { tipo: "escuchar", enunciado: "Escucha la indicación",
                  audio: "Take the elevator to the fifth floor.",
                  opciones: ["Toma el elevador al quinto piso.", "Baja las escaleras al primer piso.", "Espera en el lobby del quinto piso."],
                  correcta: 0, explicacion: "Fifth floor = quinto piso." }
            ]
        },
        {
            numero: 5, id: "general-05", titulo: "Llamadas y videollamadas", xp: 25,
            temas: "llamadas telefónicas, videollamadas, problemas de audio y devolución de llamadas",
            consejo: "«You're on mute» = estás en silencio; «I'll call you back» = te devuelvo la llamada.",
            ejercicios: [
                { tipo: "opcion", enunciado: "Completa el aviso",
                  frase: "Sorry, you're on ___. We can't hear you.",
                  opciones: ["mute", "deadline", "layover", "slide"], correcta: 0,
                  explicacion: "On mute = en silencio." },
                { tipo: "emparejar", enunciado: "Conecta las expresiones de llamada",
                  pares: [
                      { en: "hold on", es: "espera un momento" },
                      { en: "you're on mute", es: "estás en silencio" },
                      { en: "speak up", es: "habla más fuerte" },
                      { en: "call back", es: "devolver la llamada" }
                  ], explicacion: "Frases muy comunes en videollamadas." },
                { tipo: "completar", enunciado: "Completa la pregunta",
                  antes: "Can you", despues: "me now?", respuestas: ["hear"],
                  pista: "Oír: «he…»", explicacion: "«Can you hear me?» = ¿me escuchas?" },
                { tipo: "ordenar", enunciado: "Ordena la petición",
                  palabras: ["Could", "you", "repeat", "that", "more", "slowly"], sufijo: "?",
                  distractores: ["repeats", "slow"], explicacion: "Slowly = despacio (adverbio)." },
                { tipo: "escuchar", enunciado: "Escucha la promesa",
                  audio: "I'll call you back in five minutes.",
                  opciones: ["Te devuelvo la llamada en cinco minutos.", "Te llamé hace cinco minutos.", "No puedo hablar los próximos cinco días."],
                  correcta: 0, explicacion: "Call back = devolver la llamada." }
            ]
        },
        {
            numero: 6, id: "general-06", titulo: "Correos formales", xp: 25,
            temas: "estructura del correo formal: saludo, asunto, adjuntos, seguimiento y despedida",
            consejo: "«I look forward to» va seguido de verbo con -ing: look forward to hearing.",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta las fórmulas de correo",
                  pares: [
                      { en: "please find attached", es: "adjunto encontrará" },
                      { en: "best regards", es: "saludos cordiales" },
                      { en: "I look forward to", es: "quedo atento a" },
                      { en: "subject line", es: "asunto" }
                  ], explicacion: "Fórmulas estándar de un correo profesional." },
                { tipo: "opcion", enunciado: "Elige la forma correcta",
                  frase: "I look forward to ___ from you.",
                  opciones: ["hearing", "hear", "heard", "hears"], correcta: 0,
                  explicacion: "Look forward to + verbo en -ing." },
                { tipo: "completar", enunciado: "Completa la línea del correo",
                  antes: "Please find", despues: "the invoice for October.", respuestas: ["attached"],
                  pista: "Adjunto: «att…»", explicacion: "Please find attached = adjunto encontrará." },
                { tipo: "ordenar", enunciado: "Ordena el agradecimiento",
                  palabras: ["Thank", "you", "for", "your", "quick", "reply"], sufijo: ".",
                  distractores: ["thanks", "replies"], explicacion: "Reply = respuesta." },
                { tipo: "escuchar", enunciado: "Escucha la apertura del correo",
                  audio: "I am writing to follow up on our last meeting.",
                  opciones: ["Le escribo para dar seguimiento a nuestra última reunión.", "Le escribo para cancelar nuestra próxima reunión.", "Le escribo para presentarme por primera vez."],
                  correcta: 0, explicacion: "Follow up on = dar seguimiento a." }
            ]
        },
        {
            numero: 7, id: "general-07", titulo: "Entrevista de trabajo", xp: 30,
            temas: "fortalezas, áreas de mejora, experiencia laboral, motivación y expectativas salariales",
            consejo: "Responde con ejemplos concretos: «For example, in my last job I…».",
            ejercicios: [
                { tipo: "opcion", enunciado: "Completa la pregunta clásica",
                  frase: "What are your greatest ___?",
                  opciones: ["strengths", "layovers", "slides", "gates"], correcta: 0,
                  explicacion: "Strengths = fortalezas." },
                { tipo: "emparejar", enunciado: "Conecta el vocabulario de entrevista",
                  pares: [
                      { en: "strengths", es: "fortalezas" },
                      { en: "weaknesses", es: "áreas de mejora" },
                      { en: "work experience", es: "experiencia laboral" },
                      { en: "salary expectations", es: "expectativas salariales" }
                  ], explicacion: "Temas que casi siempre aparecen en una entrevista." },
                { tipo: "completar", enunciado: "Completa tu respuesta",
                  antes: "I have three years of", despues: "in customer service.", respuestas: ["experience"],
                  pista: "Experiencia: «exp…»", explicacion: "Years of experience = años de experiencia." },
                { tipo: "ordenar", enunciado: "Ordena tu fortaleza",
                  palabras: ["I", "work", "well", "under", "pressure"], sufijo: ".",
                  distractores: ["works", "good"], explicacion: "Well es adverbio: work well." },
                { tipo: "escuchar", enunciado: "Escucha la pregunta",
                  audio: "Why do you want to work for our company?",
                  opciones: ["¿Por qué quieres trabajar para nuestra empresa?", "¿Cuándo puedes empezar a trabajar?", "¿Cuánto quieres ganar en nuestra empresa?"],
                  correcta: 0, explicacion: "Pregunta sobre tu motivación." }
            ]
        },
        {
            numero: 8, id: "general-08", titulo: "Presentaciones en público", xp: 50,
            temas: "estructura de una presentación, diapositivas, audiencia, conclusiones y preguntas",
            consejo: "Para cerrar usa «To sum up…» o «In conclusion…».",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta el vocabulario de presentación",
                  pares: [
                      { en: "slide", es: "diapositiva" },
                      { en: "audience", es: "audiencia" },
                      { en: "Q&A session", es: "sesión de preguntas" },
                      { en: "key takeaway", es: "idea principal" }
                  ], explicacion: "Q&A = Questions and Answers." },
                { tipo: "opcion", enunciado: "Completa la frase de presentación",
                  frase: "As you can see on this ___, sales grew twenty percent.",
                  opciones: ["slide", "gate", "layover", "mute"], correcta: 0,
                  explicacion: "Slide = diapositiva." },
                { tipo: "completar", enunciado: "Completa el cierre",
                  antes: "Thank you for your", despues: ". Are there any questions?", respuestas: ["attention"],
                  pista: "Atención: «att…»", explicacion: "Fórmula clásica para cerrar una presentación." },
                { tipo: "ordenar", enunciado: "Ordena la apertura",
                  palabras: ["Let", "me", "start", "with", "a", "quick", "overview"], sufijo: ".",
                  distractores: ["starts", "quickly"], explicacion: "Overview = panorama general." },
                { tipo: "escuchar", enunciado: "Escucha la conclusión",
                  audio: "To sum up, we need to invest in training.",
                  opciones: ["En resumen, necesitamos invertir en capacitación.", "Para empezar, necesitamos reducir la capacitación.", "En resumen, la capacitación no es necesaria."],
                  correcta: 0, explicacion: "To sum up = en resumen." }
            ]
        }
    ],

    general: {
        temas: "comunicación internacional cotidiana: cortesía, favores, aclaraciones y despedidas",
        consejo: "Las fórmulas de cortesía («Could you…?», «I appreciate it») suavizan cualquier petición.",
        ejercicios: [
            { tipo: "opcion", enunciado: "Elige el verbo correcto",
              frase: "Could you ___ me a favor?",
              opciones: ["do", "make", "take", "have"], correcta: 0,
              explicacion: "En inglés se dice «do someone a favor»." },
            { tipo: "emparejar", enunciado: "Conecta las fórmulas de cortesía",
              pares: [
                  { en: "you're welcome", es: "de nada" },
                  { en: "excuse me", es: "disculpe" },
                  { en: "I appreciate it", es: "lo agradezco" },
                  { en: "no problem", es: "no hay problema" }
              ], explicacion: "Fórmulas que se usan en cualquier país." },
            { tipo: "completar", enunciado: "Completa la aclaración",
              antes: "Sorry, I didn't catch your", despues: ". Could you repeat it?", respuestas: ["name"],
              pista: "Nombre: «na…»", explicacion: "Didn't catch = no entendí / no alcancé a oír." },
            { tipo: "ordenar", enunciado: "Ordena la despedida",
              palabras: ["Let's", "keep", "in", "touch", "by", "email"], sufijo: ".",
              distractores: ["keeps", "mail"], explicacion: "Keep in touch = seguir en contacto." },
            { tipo: "escuchar", enunciado: "Escucha la despedida",
              audio: "Have a great weekend. See you on Monday.",
              opciones: ["Que tengas un gran fin de semana. Nos vemos el lunes.", "Trabajaremos todo el fin de semana.", "Nos vemos el viernes en la oficina."],
              correcta: 0, explicacion: "See you on Monday = nos vemos el lunes." }
        ]
    }
};
