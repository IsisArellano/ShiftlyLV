/* ==========================================================
   SHIFTLY · BANCO DE EJERCICIOS · MEDICINA
   5 ejercicios por cada lección de /ruta-medicina + set general
   para lecciones personalizadas. Misma estructura que
   ejercicios-sistemas.js (la opción correcta es la 0; el motor baraja).
   Los términos del panel lateral salen del ejercicio "emparejar".
   ========================================================== */
window.SHIFTLY_BANCOS = window.SHIFTLY_BANCOS || {};

window.SHIFTLY_BANCOS.medicina = {
    slug: "medicina",
    nombre: "Medicina",
    icono: "bi-heart-pulse-fill",
    claveProgreso: "shiftly_progreso_medicina",

    lecciones: [
        {
            numero: 1, id: "medicina-01", titulo: "Recepción del paciente", xp: 10,
            temas: "ingreso del paciente, registro de datos, expediente médico, sala de espera y triaje",
            consejo: "Para preguntar el motivo de consulta se usa «What brings you in today?».",
            ejercicios: [
                { tipo: "opcion", enunciado: "Elige el documento correcto",
                  frase: "Please fill out this ___ form with your personal information.",
                  opciones: ["admission", "surgery", "x-ray", "discharge"], correcta: 0,
                  explicacion: "Admission form = formulario de ingreso." },
                { tipo: "emparejar", enunciado: "Conecta el vocabulario de recepción",
                  pares: [
                      { en: "triage", es: "clasificación de urgencia" },
                      { en: "medical chart", es: "expediente médico" },
                      { en: "waiting room", es: "sala de espera" },
                      { en: "insurance card", es: "tarjeta del seguro" }
                  ], explicacion: "El triage decide qué paciente se atiende primero." },
                { tipo: "completar", enunciado: "Completa la pregunta al paciente",
                  antes: "What brings you", despues: "today?", respuestas: ["in", "here"],
                  pista: "Pregunta clásica: «What brings you …»", explicacion: "«What brings you in today?» = ¿qué lo trae hoy por aquí?" },
                { tipo: "ordenar", enunciado: "Ordena la solicitud de documentos",
                  palabras: ["Can", "I", "see", "your", "ID", "and", "insurance", "card"], sufijo: "?",
                  distractores: ["sees", "cards"], explicacion: "«Can I see…?» es una petición cortés." },
                { tipo: "escuchar", enunciado: "Escucha la indicación de recepción",
                  audio: "The nurse will take you to the triage area.",
                  opciones: ["La enfermera te llevará al área de triaje.", "El doctor te dará de alta mañana.", "La recepcionista llamará a tu seguro médico."],
                  correcta: 0, explicacion: "«Will take you to» = te llevará a." }
            ]
        },
        {
            numero: 2, id: "medicina-02", titulo: "Signos vitales", xp: 15,
            temas: "presión arterial, frecuencia cardiaca, temperatura corporal y frecuencia respiratoria",
            consejo: "La presión 120/80 se dice «one twenty over eighty».",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta cada signo vital",
                  pares: [
                      { en: "blood pressure", es: "presión arterial" },
                      { en: "heart rate", es: "frecuencia cardiaca" },
                      { en: "body temperature", es: "temperatura corporal" },
                      { en: "respiratory rate", es: "frecuencia respiratoria" }
                  ], explicacion: "Son los cuatro signos vitales básicos." },
                { tipo: "opcion", enunciado: "Completa el reporte",
                  frase: "Her blood ___ is 120 over 80.",
                  opciones: ["pressure", "sugar", "type", "cell"], correcta: 0,
                  explicacion: "Blood pressure = presión arterial." },
                { tipo: "completar", enunciado: "Completa la medición",
                  antes: "His heart rate is 72 beats per", despues: ".", respuestas: ["minute"],
                  pista: "Latidos por …", explicacion: "Beats per minute (bpm) = latidos por minuto." },
                { tipo: "ordenar", enunciado: "Ordena la indicación al paciente",
                  palabras: ["I", "need", "to", "check", "your", "temperature"], sufijo: ".",
                  distractores: ["checks", "needs"], explicacion: "«I need to + verbo» para explicar lo que harás." },
                { tipo: "escuchar", enunciado: "Escucha el dato clínico",
                  audio: "The patient has a fever of thirty-nine degrees.",
                  opciones: ["El paciente tiene fiebre de 39 grados.", "El paciente tiene la presión baja.", "El paciente respira treinta y nueve veces por minuto."],
                  correcta: 0, explicacion: "Fever = fiebre." }
            ]
        },
        {
            numero: 3, id: "medicina-03", titulo: "Historia clínica", xp: 20,
            temas: "antecedentes médicos y familiares, alergias, enfermedades crónicas y síntomas",
            consejo: "«Allergic to» siempre lleva la preposición «to»: allergic to penicillin.",
            ejercicios: [
                { tipo: "opcion", enunciado: "Elige la palabra correcta",
                  frase: "Are you ___ to any medication?",
                  opciones: ["allergic", "sick", "healthy", "tired"], correcta: 0,
                  explicacion: "Allergic to = alérgico a." },
                { tipo: "emparejar", enunciado: "Conecta los términos de la historia clínica",
                  pares: [
                      { en: "medical history", es: "antecedentes médicos" },
                      { en: "symptoms", es: "síntomas" },
                      { en: "chronic disease", es: "enfermedad crónica" },
                      { en: "family history", es: "antecedentes familiares" }
                  ], explicacion: "Family history = enfermedades en la familia." },
                { tipo: "completar", enunciado: "Completa la pregunta",
                  antes: "How long have you had these", despues: "?", respuestas: ["symptoms", "symptom"],
                  pista: "Síntomas: «sym…»", explicacion: "«How long have you had…?» = ¿desde cuándo tiene…?" },
                { tipo: "ordenar", enunciado: "Ordena la pregunta",
                  palabras: ["Do", "you", "have", "any", "chronic", "diseases"], sufijo: "?",
                  distractores: ["does", "disease"], explicacion: "Con «you» el auxiliar es «do»." },
                { tipo: "escuchar", enunciado: "Escucha el antecedente",
                  audio: "My mother has a history of diabetes.",
                  opciones: ["Mi madre tiene antecedentes de diabetes.", "Mi madre toma insulina todos los días.", "Mi madre es alérgica a la penicilina."],
                  correcta: 0, explicacion: "A history of = antecedentes de." }
            ]
        },
        {
            numero: 4, id: "medicina-04", titulo: "Medicamentos y dosis", xp: 20,
            temas: "dosis, receta médica, efectos secundarios, tabletas y horarios de administración",
            consejo: "«Every eight hours» = cada ocho horas; «twice a day» = dos veces al día.",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta el vocabulario farmacológico",
                  pares: [
                      { en: "dosage", es: "dosis" },
                      { en: "prescription", es: "receta médica" },
                      { en: "side effect", es: "efecto secundario" },
                      { en: "tablet", es: "tableta" }
                  ], explicacion: "Prescription también puede significar el medicamento recetado." },
                { tipo: "opcion", enunciado: "Completa la indicación",
                  frase: "Take one tablet every eight hours ___ meals.",
                  opciones: ["after", "behind", "over", "inside"], correcta: 0,
                  explicacion: "After meals = después de los alimentos." },
                { tipo: "completar", enunciado: "Completa la advertencia",
                  antes: "This medicine may cause drowsiness as a side", despues: ".", respuestas: ["effect"],
                  pista: "Efecto: «eff…»", explicacion: "Side effect = efecto secundario." },
                { tipo: "ordenar", enunciado: "Ordena la advertencia",
                  palabras: ["Do", "not", "exceed", "the", "recommended", "dose"], sufijo: ".",
                  distractores: ["exceeds", "doses"], explicacion: "Exceed = exceder o sobrepasar." },
                { tipo: "escuchar", enunciado: "Escucha la prescripción",
                  audio: "The doctor prescribed antibiotics for seven days.",
                  opciones: ["El doctor recetó antibióticos por siete días.", "El doctor suspendió los antibióticos ayer.", "La farmacia no tiene antibióticos disponibles."],
                  correcta: 0, explicacion: "Prescribed = recetó." }
            ]
        },
        {
            numero: 5, id: "medicina-05", titulo: "Bioseguridad e higiene", xp: 25,
            temas: "equipo de protección personal, higiene de manos, material estéril, residuos y aislamiento",
            consejo: "Put on = ponerse; take off = quitarse (el equipo de protección).",
            ejercicios: [
                { tipo: "opcion", enunciado: "Elige el equipo de protección",
                  frase: "Always wear ___ when you handle blood samples.",
                  opciones: ["gloves", "sandals", "jewelry", "perfume"], correcta: 0,
                  explicacion: "Gloves = guantes." },
                { tipo: "emparejar", enunciado: "Conecta los términos de bioseguridad",
                  pares: [
                      { en: "hand hygiene", es: "higiene de manos" },
                      { en: "face mask", es: "cubrebocas" },
                      { en: "sterile", es: "estéril" },
                      { en: "biohazard waste", es: "residuos biológico-infecciosos" }
                  ], explicacion: "Biohazard = riesgo biológico." },
                { tipo: "completar", enunciado: "Completa la regla de higiene",
                  antes: "Wash your", despues: "for at least twenty seconds.", respuestas: ["hands"],
                  pista: "Manos: «ha…»", explicacion: "Lavarse las manos 20 segundos es la norma básica." },
                { tipo: "ordenar", enunciado: "Ordena la instrucción",
                  palabras: ["Dispose", "of", "needles", "in", "the", "sharps", "container"], sufijo: ".",
                  distractores: ["disposes", "needle"], explicacion: "Sharps container = contenedor de punzocortantes." },
                { tipo: "escuchar", enunciado: "Escucha la indicación de aislamiento",
                  audio: "Put on your gown before entering the isolation room.",
                  opciones: ["Ponte la bata antes de entrar al cuarto de aislamiento.", "Quítate los guantes al salir del quirófano.", "Lava el equipo después de cada consulta."],
                  correcta: 0, explicacion: "Gown = bata." }
            ]
        },
        {
            numero: 6, id: "medicina-06", titulo: "Sistema respiratorio", xp: 25,
            temas: "pulmones, respiración, falta de aire, tos y saturación de oxígeno",
            consejo: "Breath (sustantivo: respiración) vs. breathe (verbo: respirar).",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta los términos respiratorios",
                  pares: [
                      { en: "lungs", es: "pulmones" },
                      { en: "shortness of breath", es: "falta de aire" },
                      { en: "oxygen saturation", es: "saturación de oxígeno" },
                      { en: "cough", es: "tos" }
                  ], explicacion: "Shortness of breath = disnea." },
                { tipo: "opcion", enunciado: "Completa la instrucción",
                  frase: "Take a deep ___ and hold it.",
                  opciones: ["breath", "bread", "break", "brush"], correcta: 0,
                  explicacion: "«Take a deep breath» = respira hondo." },
                { tipo: "completar", enunciado: "Completa el dato clínico",
                  antes: "Her oxygen", despues: "is 94 percent.", respuestas: ["saturation"],
                  pista: "Saturación: «sat…»", explicacion: "Oxygen saturation (SpO2) = saturación de oxígeno." },
                { tipo: "ordenar", enunciado: "Ordena la indicación",
                  palabras: ["Breathe", "in", "slowly", "through", "your", "nose"], sufijo: ".",
                  distractores: ["breath", "mouth"], explicacion: "Breathe in = inhalar." },
                { tipo: "escuchar", enunciado: "Escucha los síntomas",
                  audio: "The patient has a dry cough and chest pain.",
                  opciones: ["El paciente tiene tos seca y dolor en el pecho.", "El paciente tiene fiebre y dolor de cabeza.", "El paciente respira bien y no tiene dolor."],
                  correcta: 0, explicacion: "Chest pain = dolor torácico." }
            ]
        },
        {
            numero: 7, id: "medicina-07", titulo: "Diagnóstico y tratamiento", xp: 30,
            temas: "diagnóstico, estudios de laboratorio, plan de tratamiento y citas de seguimiento",
            consejo: "«Run tests» = hacer estudios; «lab results» = resultados de laboratorio.",
            ejercicios: [
                { tipo: "opcion", enunciado: "Completa la conclusión médica",
                  frase: "The blood test confirmed the ___.",
                  opciones: ["diagnosis", "waiting room", "gown", "wheelchair"], correcta: 0,
                  explicacion: "Diagnosis = diagnóstico (plural: diagnoses)." },
                { tipo: "emparejar", enunciado: "Conecta los términos clínicos",
                  pares: [
                      { en: "diagnosis", es: "diagnóstico" },
                      { en: "treatment plan", es: "plan de tratamiento" },
                      { en: "follow-up", es: "seguimiento" },
                      { en: "lab results", es: "resultados de laboratorio" }
                  ], explicacion: "Follow-up = control o seguimiento posterior." },
                { tipo: "completar", enunciado: "Completa la indicación",
                  antes: "We will schedule a follow-up", despues: "next week.", respuestas: ["appointment", "visit"],
                  pista: "Cita: «app…»", explicacion: "Follow-up appointment = cita de seguimiento." },
                { tipo: "ordenar", enunciado: "Ordena la explicación al paciente",
                  palabras: ["We", "need", "to", "run", "some", "more", "tests"], sufijo: ".",
                  distractores: ["runs", "test"], explicacion: "Run tests = realizar estudios." },
                { tipo: "escuchar", enunciado: "Escucha el plan",
                  audio: "The treatment plan includes physical therapy twice a week.",
                  opciones: ["El plan de tratamiento incluye terapia física dos veces por semana.", "El tratamiento termina la próxima semana.", "La terapia física no es necesaria por ahora."],
                  correcta: 0, explicacion: "Twice a week = dos veces por semana." }
            ]
        },
        {
            numero: 8, id: "medicina-08", titulo: "Urgencias y código azul", xp: 50,
            temas: "sala de urgencias, código azul, reanimación cardiopulmonar, desfibrilador y estabilización",
            consejo: "En una emergencia las órdenes son cortas e imperativas: «Start compressions!».",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta el vocabulario de urgencias",
                  pares: [
                      { en: "emergency room", es: "sala de urgencias" },
                      { en: "CPR", es: "reanimación cardiopulmonar" },
                      { en: "crash cart", es: "carro de paro" },
                      { en: "stable condition", es: "condición estable" }
                  ], explicacion: "CPR = Cardiopulmonary Resuscitation." },
                { tipo: "opcion", enunciado: "Elige el código correcto",
                  frase: "Call a code ___! The patient is not breathing.",
                  opciones: ["blue", "green", "white", "orange"], correcta: 0,
                  explicacion: "Code blue = paro cardiorrespiratorio." },
                { tipo: "completar", enunciado: "Completa la orden",
                  antes: "Start chest", despues: "immediately.", respuestas: ["compressions", "compression"],
                  pista: "Compresiones: «comp…»", explicacion: "Chest compressions = compresiones torácicas." },
                { tipo: "ordenar", enunciado: "Ordena el reporte final",
                  palabras: ["The", "patient", "is", "now", "in", "stable", "condition"], sufijo: ".",
                  distractores: ["are", "stably"], explicacion: "In stable condition = estable." },
                { tipo: "escuchar", enunciado: "Escucha la orden urgente",
                  audio: "Bring the defibrillator to room twelve now.",
                  opciones: ["Traigan el desfibrilador a la habitación doce ahora.", "Lleven al paciente a rayos X en doce minutos.", "Preparen la habitación doce para un ingreso."],
                  correcta: 0, explicacion: "Defibrillator = desfibrilador." }
            ]
        }
    ],

    general: {
        temas: "inglés médico general: consultas, citas, personal de salud, resultados y altas",
        consejo: "Con pacientes usa fórmulas corteses: «Please…», «Could you…?», «Let me…».",
        ejercicios: [
            { tipo: "opcion", enunciado: "Elige el verbo correcto",
              frase: "The doctor will ___ you in a few minutes.",
              opciones: ["see", "eat", "close", "sell"], correcta: 0,
              explicacion: "«The doctor will see you» = el doctor lo atenderá." },
            { tipo: "emparejar", enunciado: "Conecta el vocabulario hospitalario",
              pares: [
                  { en: "nurse", es: "enfermero/a" },
                  { en: "appointment", es: "cita" },
                  { en: "ward", es: "sala / pabellón" },
                  { en: "discharge", es: "alta médica" }
              ], explicacion: "Discharge = dar de alta al paciente." },
            { tipo: "completar", enunciado: "Completa la pregunta",
              antes: "How are you feeling", despues: "?", respuestas: ["today", "now"],
              pista: "Hoy: «to…»", explicacion: "«How are you feeling today?» = ¿cómo se siente hoy?" },
            { tipo: "ordenar", enunciado: "Ordena la indicación",
              palabras: ["Please", "take", "a", "seat", "in", "the", "waiting", "room"], sufijo: ".",
              distractores: ["sit", "rooms"], explicacion: "Take a seat = tome asiento." },
            { tipo: "escuchar", enunciado: "Escucha el aviso",
              audio: "Your lab results will be ready tomorrow morning.",
              opciones: ["Tus resultados de laboratorio estarán listos mañana por la mañana.", "Tu cita fue cancelada para mañana.", "Tus análisis se tomarán mañana en la tarde."],
              correcta: 0, explicacion: "Will be ready = estarán listos." }
        ]
    }
};
