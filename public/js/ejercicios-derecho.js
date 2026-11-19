/* ==========================================================
   SHIFTLY · BANCO DE EJERCICIOS · DERECHO
   5 ejercicios por cada lección de /ruta-derecho + set general
   para lecciones personalizadas. Misma estructura que
   ejercicios-sistemas.js (la opción correcta es la 0; el motor baraja).
   Los términos del panel lateral salen del ejercicio "emparejar".
   ========================================================== */
window.SHIFTLY_BANCOS = window.SHIFTLY_BANCOS || {};

window.SHIFTLY_BANCOS.derecho = {
    slug: "derecho",
    nombre: "Derecho",
    icono: "bi-bank2",
    claveProgreso: "shiftly_progreso_derecho",

    lecciones: [
        {
            numero: 1, id: "derecho-01", titulo: "El sistema legal", xp: 10,
            temas: "despacho jurídico, abogados, socios, asistentes jurídicos y clientes",
            consejo: "Attorney y lawyer significan abogado; «attorney» es más común en EE. UU.",
            ejercicios: [
                { tipo: "opcion", enunciado: "Elige el rol correcto",
                  frase: "She works as an ___ at a corporate law firm.",
                  opciones: ["attorney", "plaintiff", "courtroom", "verdict"], correcta: 0,
                  explicacion: "Attorney = abogado/a." },
                { tipo: "emparejar", enunciado: "Conecta los roles del despacho",
                  pares: [
                      { en: "law firm", es: "despacho jurídico" },
                      { en: "attorney", es: "abogado" },
                      { en: "client", es: "cliente" },
                      { en: "paralegal", es: "asistente jurídico" }
                  ], explicacion: "Un paralegal apoya a los abogados con documentos e investigación." },
                { tipo: "completar", enunciado: "Completa la presentación",
                  antes: "Our law", despues: "specializes in corporate law.", respuestas: ["firm"],
                  pista: "Despacho: «law f…»", explicacion: "Law firm = despacho jurídico." },
                { tipo: "ordenar", enunciado: "Ordena la agenda",
                  palabras: ["The", "attorney", "meets", "the", "client", "on", "Monday"], sufijo: ".",
                  distractores: ["meet", "clients"], explicacion: "Con «the attorney» (he/she) el verbo lleva -s." },
                { tipo: "escuchar", enunciado: "Escucha la indicación",
                  audio: "The senior partner will review your case.",
                  opciones: ["El socio principal revisará tu caso.", "El juez cerrará el caso el lunes.", "El cliente firmará el contrato hoy."],
                  correcta: 0, explicacion: "Senior partner = socio principal." }
            ]
        },
        {
            numero: 2, id: "derecho-02", titulo: "Contratos básicos", xp: 15,
            temas: "acuerdos, cláusulas, partes contratantes, firmas, vigencia y terminación",
            consejo: "Party = cada persona o empresa que firma un contrato.",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta los términos contractuales",
                  pares: [
                      { en: "agreement", es: "acuerdo / convenio" },
                      { en: "clause", es: "cláusula" },
                      { en: "signature", es: "firma" },
                      { en: "party", es: "parte contratante" }
                  ], explicacion: "Un contrato tiene partes, cláusulas y firmas." },
                { tipo: "opcion", enunciado: "Completa la condición",
                  frase: "Both ___ must sign the agreement.",
                  opciones: ["parties", "verdicts", "hearings", "patents"], correcta: 0,
                  explicacion: "Parties = las partes del contrato." },
                { tipo: "completar", enunciado: "Completa la recomendación",
                  antes: "Please read the termination", despues: "carefully.", respuestas: ["clause"],
                  pista: "Cláusula: «cl…»", explicacion: "Termination clause = cláusula de terminación." },
                { tipo: "ordenar", enunciado: "Ordena la vigencia",
                  palabras: ["This", "contract", "is", "valid", "for", "one", "year"], sufijo: ".",
                  distractores: ["are", "years"], explicacion: "Valid for = vigente por." },
                { tipo: "escuchar", enunciado: "Escucha la condición",
                  audio: "The agreement becomes effective upon signature.",
                  opciones: ["El acuerdo entra en vigor al momento de la firma.", "El acuerdo se cancela si no hay firma en un año.", "El acuerdo requiere dos testigos."],
                  correcta: 0, explicacion: "Becomes effective = entra en vigor." }
            ]
        },
        {
            numero: 3, id: "derecho-03", titulo: "Derechos y obligaciones", xp: 20,
            temas: "derechos, obligaciones, responsabilidad legal, cumplimiento e incumplimiento",
            consejo: "Comply with = cumplir con; breach = incumplir.",
            ejercicios: [
                { tipo: "opcion", enunciado: "Elige el concepto correcto",
                  frase: "The company has ___ for damages caused by its products.",
                  opciones: ["liability", "signature", "hearing", "notary"], correcta: 0,
                  explicacion: "Liability = responsabilidad legal." },
                { tipo: "emparejar", enunciado: "Conecta los conceptos jurídicos",
                  pares: [
                      { en: "rights", es: "derechos" },
                      { en: "obligations", es: "obligaciones" },
                      { en: "liability", es: "responsabilidad legal" },
                      { en: "breach", es: "incumplimiento" }
                  ], explicacion: "Breach of contract = incumplimiento de contrato." },
                { tipo: "completar", enunciado: "Completa el derecho",
                  antes: "The tenant has the", despues: "to a safe home.", respuestas: ["right"],
                  pista: "Derecho: «ri…»", explicacion: "Have the right to = tener derecho a." },
                { tipo: "ordenar", enunciado: "Ordena la obligación",
                  palabras: ["The", "employer", "must", "comply", "with", "labor", "laws"], sufijo: ".",
                  distractores: ["complies", "law"], explicacion: "Después de «must» va el verbo base." },
                { tipo: "escuchar", enunciado: "Escucha la consecuencia",
                  audio: "A breach of contract may result in a lawsuit.",
                  opciones: ["Un incumplimiento de contrato puede resultar en una demanda.", "Un contrato nuevo evita todas las demandas.", "La demanda fue retirada por el cliente."],
                  correcta: 0, explicacion: "Lawsuit = demanda." }
            ]
        },
        {
            numero: 4, id: "derecho-04", titulo: "En la corte", xp: 20,
            temas: "juez, jurado, audiencia, testigos, objeciones y veredicto",
            consejo: "Al juez se le dice «Your Honor» (Su Señoría).",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta el vocabulario de la corte",
                  pares: [
                      { en: "judge", es: "juez" },
                      { en: "hearing", es: "audiencia" },
                      { en: "verdict", es: "veredicto" },
                      { en: "witness", es: "testigo" }
                  ], explicacion: "El jurado (jury) emite el veredicto." },
                { tipo: "opcion", enunciado: "Completa la noticia",
                  frase: "The jury reached a ___ after two days.",
                  opciones: ["verdict", "clause", "patent", "merger"], correcta: 0,
                  explicacion: "Reach a verdict = llegar a un veredicto." },
                { tipo: "completar", enunciado: "Completa la agenda judicial",
                  antes: "The", despues: "is scheduled for March 3rd.", respuestas: ["hearing", "trial"],
                  pista: "Audiencia: «hea…»", explicacion: "Hearing = audiencia; trial = juicio." },
                { tipo: "ordenar", enunciado: "Ordena el hecho",
                  palabras: ["The", "witness", "answered", "all", "the", "questions"], sufijo: ".",
                  distractores: ["answer", "question"], explicacion: "Witness = testigo." },
                { tipo: "escuchar", enunciado: "Escucha la objeción",
                  audio: "Objection, Your Honor. The question is irrelevant.",
                  opciones: ["Objeción, Su Señoría. La pregunta es irrelevante.", "Gracias, Su Señoría. No hay más preguntas.", "Su Señoría, solicitamos un receso."],
                  correcta: 0, explicacion: "«Objection!» se usa para impugnar una pregunta." }
            ]
        },
        {
            numero: 5, id: "derecho-05", titulo: "Documentos legales", xp: 25,
            temas: "declaración jurada, citatorio, notario público, poder notarial y anexos",
            consejo: "Sworn statement y affidavit son declaraciones bajo juramento.",
            ejercicios: [
                { tipo: "opcion", enunciado: "Elige el documento",
                  frase: "The witness received a ___ to appear in court.",
                  opciones: ["subpoena", "trademark", "merger", "settlement"], correcta: 0,
                  explicacion: "Subpoena = citatorio judicial." },
                { tipo: "emparejar", enunciado: "Conecta los documentos legales",
                  pares: [
                      { en: "affidavit", es: "declaración jurada" },
                      { en: "subpoena", es: "citatorio" },
                      { en: "notary public", es: "notario público" },
                      { en: "power of attorney", es: "poder notarial" }
                  ], explicacion: "Power of attorney autoriza a alguien a actuar por ti." },
                { tipo: "completar", enunciado: "Completa el requisito",
                  antes: "The document must be signed in front of a", despues: ".", respuestas: ["notary", "notary public"],
                  pista: "Notario: «no…»", explicacion: "In front of a notary = ante notario." },
                { tipo: "ordenar", enunciado: "Ordena la solicitud",
                  palabras: ["Please", "attach", "a", "copy", "of", "your", "ID"], sufijo: ".",
                  distractores: ["attaches", "copies"], explicacion: "Attach = adjuntar." },
                { tipo: "escuchar", enunciado: "Escucha el hecho",
                  audio: "He signed a sworn statement before the notary.",
                  opciones: ["Él firmó una declaración jurada ante el notario.", "Él perdió el citatorio del juzgado.", "Él solicitó un poder notarial al banco."],
                  correcta: 0, explicacion: "Before the notary = ante el notario." }
            ]
        },
        {
            numero: 6, id: "derecho-06", titulo: "Propiedad intelectual", xp: 25,
            temas: "marcas registradas, derechos de autor, patentes, registro e infracciones",
            consejo: "File a patent = solicitar/registrar una patente.",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta los términos de PI",
                  pares: [
                      { en: "trademark", es: "marca registrada" },
                      { en: "copyright", es: "derechos de autor" },
                      { en: "patent", es: "patente" },
                      { en: "infringement", es: "infracción" }
                  ], explicacion: "PI = propiedad intelectual (IP en inglés)." },
                { tipo: "opcion", enunciado: "Elige la protección adecuada",
                  frase: "The inventor filed a ___ to protect the new device.",
                  opciones: ["patent", "verdict", "lease", "subpoena"], correcta: 0,
                  explicacion: "Los inventos se protegen con patentes." },
                { tipo: "completar", enunciado: "Completa la advertencia",
                  antes: "Using this logo without permission is trademark", despues: ".", respuestas: ["infringement"],
                  pista: "Infracción: «infr…»", explicacion: "Trademark infringement = uso indebido de marca." },
                { tipo: "ordenar", enunciado: "Ordena la frase",
                  palabras: ["The", "song", "is", "protected", "by", "copyright"], sufijo: ".",
                  distractores: ["protect", "patents"], explicacion: "Las obras artísticas se protegen con copyright." },
                { tipo: "escuchar", enunciado: "Escucha la estrategia",
                  audio: "We need to register the trademark in other countries.",
                  opciones: ["Necesitamos registrar la marca en otros países.", "Necesitamos vender la patente a otra empresa.", "Necesitamos cancelar los derechos de autor."],
                  correcta: 0, explicacion: "Register = registrar." }
            ]
        },
        {
            numero: 7, id: "derecho-07", titulo: "Negociación y acuerdos", xp: 30,
            temas: "acuerdos extrajudiciales, mediación, términos, contraofertas y negociación",
            consejo: "Out of court = fuera de los tribunales (extrajudicial).",
            ejercicios: [
                { tipo: "opcion", enunciado: "Completa el resultado",
                  frase: "The parties reached a ___ out of court.",
                  opciones: ["settlement", "subpoena", "patent", "hearing"], correcta: 0,
                  explicacion: "Settlement = acuerdo extrajudicial." },
                { tipo: "emparejar", enunciado: "Conecta los términos de negociación",
                  pares: [
                      { en: "settlement", es: "acuerdo extrajudicial" },
                      { en: "mediation", es: "mediación" },
                      { en: "terms", es: "términos" },
                      { en: "counteroffer", es: "contraoferta" }
                  ], explicacion: "Una mediación busca un acuerdo con ayuda de un tercero." },
                { tipo: "completar", enunciado: "Completa la respuesta",
                  antes: "We cannot accept these", despues: ". Let's negotiate.", respuestas: ["terms", "conditions"],
                  pista: "Términos: «te…»", explicacion: "Accept the terms = aceptar los términos." },
                { tipo: "ordenar", enunciado: "Ordena la postura",
                  palabras: ["Our", "client", "is", "willing", "to", "negotiate"], sufijo: ".",
                  distractores: ["are", "negotiation"], explicacion: "Willing to = dispuesto a." },
                { tipo: "escuchar", enunciado: "Escucha el resultado",
                  audio: "The mediator helped both sides find an agreement.",
                  opciones: ["El mediador ayudó a ambas partes a encontrar un acuerdo.", "El juez obligó a ambas partes a firmar.", "El abogado rechazó la propuesta de mediación."],
                  correcta: 0, explicacion: "Both sides = ambas partes." }
            ]
        },
        {
            numero: 8, id: "derecho-08", titulo: "Derecho corporativo", xp: 50,
            temas: "cumplimiento normativo, consejo de administración, accionistas, fusiones y reguladores",
            consejo: "Merger = fusión; acquisition = adquisición (M&A).",
            ejercicios: [
                { tipo: "emparejar", enunciado: "Conecta los términos corporativos",
                  pares: [
                      { en: "compliance", es: "cumplimiento normativo" },
                      { en: "board of directors", es: "consejo de administración" },
                      { en: "merger", es: "fusión" },
                      { en: "shareholder", es: "accionista" }
                  ], explicacion: "Los shareholders votan las decisiones clave." },
                { tipo: "opcion", enunciado: "Elige el órgano correcto",
                  frase: "The ___ approved the merger yesterday.",
                  opciones: ["board of directors", "witness", "notary", "tenant"], correcta: 0,
                  explicacion: "El consejo de administración aprueba las fusiones." },
                { tipo: "completar", enunciado: "Completa la descripción del área",
                  antes: "Our", despues: "team reviews every new regulation.", respuestas: ["compliance", "legal"],
                  pista: "Cumplimiento: «comp…»", explicacion: "Compliance team = equipo de cumplimiento." },
                { tipo: "ordenar", enunciado: "Ordena el anuncio",
                  palabras: ["The", "shareholders", "will", "vote", "next", "month"], sufijo: ".",
                  distractores: ["votes", "months"], explicacion: "Después de «will» va el verbo base." },
                { tipo: "escuchar", enunciado: "Escucha el requisito",
                  audio: "The merger requires approval from the regulators.",
                  opciones: ["La fusión requiere la aprobación de los reguladores.", "La fusión se canceló por falta de accionistas.", "Los reguladores firmaron la fusión ayer."],
                  correcta: 0, explicacion: "Regulators = autoridades reguladoras." }
            ]
        }
    ],

    general: {
        temas: "inglés jurídico general: contratos, demandas, pruebas, tribunales y comunicación con clientes",
        consejo: "En inglés legal se prefieren frases formales: «Please find…», «We hereby…».",
        ejercicios: [
            { tipo: "opcion", enunciado: "Elige el documento",
              frase: "Let me check the ___ with our legal team.",
              opciones: ["contract", "kitchen", "patient", "recipe"], correcta: 0,
              explicacion: "Contract = contrato." },
            { tipo: "emparejar", enunciado: "Conecta el vocabulario legal",
              pares: [
                  { en: "lawsuit", es: "demanda" },
                  { en: "court", es: "tribunal" },
                  { en: "evidence", es: "pruebas" },
                  { en: "lawyer", es: "abogado" }
              ], explicacion: "Evidence es incontable: no lleva -s." },
            { tipo: "completar", enunciado: "Completa la solicitud",
              antes: "Please send me the signed", despues: "by Friday.", respuestas: ["contract", "agreement", "document"],
              pista: "Contrato: «con…»", explicacion: "Signed contract = contrato firmado." },
            { tipo: "ordenar", enunciado: "Ordena la estrategia",
              palabras: ["We", "need", "more", "evidence", "for", "the", "case"], sufijo: ".",
              distractores: ["evidences", "cases"], explicacion: "«More evidence», nunca «evidences»." },
            { tipo: "escuchar", enunciado: "Escucha la postura",
              audio: "Our client denies all the allegations.",
              opciones: ["Nuestro cliente niega todas las acusaciones.", "Nuestro cliente acepta el acuerdo.", "Nuestro cliente pide más tiempo al juez."],
              correcta: 0, explicacion: "Allegations = acusaciones o alegatos." }
        ]
    }
};
