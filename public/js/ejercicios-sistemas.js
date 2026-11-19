/* ==========================================================
   SHIFTLY · BANCO DE EJERCICIOS · SISTEMAS Y TI
   5 ejercicios por cada una de las 8 lecciones de /ruta-sistemas
   + un set general para lecciones personalizadas.

   Tipos de ejercicio:
   - opcion     → frase con "___" y opciones (correcta = índice)
   - completar  → antes + [input] + despues; respuestas aceptadas
   - ordenar    → palabras en orden correcto (+ distractores)
   - emparejar  → pares inglés / español
   - escuchar   → audio en inglés y opciones de traducción
   En los bancos locales la opción correcta siempre es la 0:
   el motor las baraja antes de mostrarlas.

   Para agregar otra carrera crea "ejercicios-<carrera>.js" con
   la misma estructura y cárgalo en Ejercicios.blade.php.
   ========================================================== */
window.SHIFTLY_BANCOS = window.SHIFTLY_BANCOS || {};

window.SHIFTLY_BANCOS.sistemas = {
    slug: "sistemas",
    nombre: "Sistemas y TI",
    icono: "bi-cpu-fill",
    claveProgreso: "shiftly_progreso_sistemas",

    lecciones: [
        // ------------------------------------------------------------------
        {
            numero: 1,
            id: "sistemas-01",
            titulo: "Hello, World: tu equipo de TI",
            xp: 10,
            temas: "roles de desarrollo (frontend, backend, fullstack, QA, tech lead), daily standups y presentaciones en equipo",
            consejo: "En una daily standup se responden 3 preguntas: What did you do yesterday? What will you do today? Do you have any blockers?",
            terminos: [
                { en: "frontend developer", es: "desarrollador frontend" },
                { en: "tech lead", es: "líder técnico" },
                { en: "daily standup", es: "reunión diaria" },
                { en: "blocker", es: "impedimento" }
            ],
            ejercicios: [
                {
                    tipo: "opcion",
                    enunciado: "Elige el rol que describe la frase",
                    frase: "A ___ developer builds the user interface of a web app.",
                    opciones: ["frontend", "backend", "database", "QA"],
                    correcta: 0,
                    explicacion: "Frontend es la parte visual con la que interactúa el usuario."
                },
                {
                    tipo: "emparejar",
                    enunciado: "Conecta cada rol con su significado",
                    pares: [
                        { en: "Backend developer", es: "Desarrollador del servidor" },
                        { en: "QA engineer", es: "Ingeniero de pruebas" },
                        { en: "Tech Lead", es: "Líder técnico" },
                        { en: "Fullstack developer", es: "Desarrollador frontend y backend" }
                    ],
                    explicacion: "QA significa Quality Assurance (aseguramiento de calidad)."
                },
                {
                    tipo: "completar",
                    enunciado: "Completa tu participación en la daily standup",
                    antes: "Yesterday I fixed the login bug. Today I will work on the dashboard. I have no",
                    despues: ".",
                    respuestas: ["blockers", "blocker"],
                    pista: "Impedimentos en una daily: empieza con «bl…».",
                    explicacion: "«I have no blockers» = no tengo impedimentos."
                },
                {
                    tipo: "ordenar",
                    enunciado: "Ordena tu presentación ante el equipo",
                    prefijo: "Hi,",
                    palabras: ["I'm", "Ana,", "the", "new", "backend", "developer"],
                    sufijo: ".",
                    distractores: ["am", "frontends"],
                    explicacion: "Para presentarte usa «I'm + nombre, + rol»."
                },
                {
                    tipo: "escuchar",
                    enunciado: "Escucha y elige la traducción correcta",
                    audio: "The QA engineer found two bugs before the release.",
                    opciones: [
                        "La ingeniera de QA encontró dos errores antes del lanzamiento.",
                        "El líder técnico canceló el lanzamiento por dos días.",
                        "El desarrollador frontend diseñó dos pantallas nuevas."
                    ],
                    correcta: 0,
                    explicacion: "«Release» = lanzamiento o versión publicada."
                }
            ]
        },
        // ------------------------------------------------------------------
        {
            numero: 2,
            id: "sistemas-02",
            titulo: "Entrada y salida de datos",
            xp: 15,
            temas: "input/output, parámetros, argumentos, retorno de valores (return), peticiones y respuestas (request/response)",
            consejo: "Parameters son los nombres en la definición de la función; arguments son los valores reales que envías al llamarla.",
            terminos: [
                { en: "input", es: "entrada" },
                { en: "output", es: "salida" },
                { en: "return value", es: "valor de retorno" },
                { en: "request", es: "petición" }
            ],
            ejercicios: [
                {
                    tipo: "opcion",
                    enunciado: "Selecciona la palabra técnica correcta",
                    frase: "The function receives two ___: width and height.",
                    opciones: ["parameters", "outputs", "servers", "commits"],
                    correcta: 0,
                    explicacion: "Los parameters son las variables que declara la función para recibir datos."
                },
                {
                    tipo: "completar",
                    enunciado: "Completa la explicación",
                    antes: "When you call sum(2, 3), the values 2 and 3 are the",
                    despues: "of the function.",
                    respuestas: ["arguments", "argument"],
                    pista: "Valores reales enviados al llamar una función: «arg…».",
                    explicacion: "2 y 3 son los arguments que recibe sum()."
                },
                {
                    tipo: "emparejar",
                    enunciado: "Conecta cada término con su traducción",
                    pares: [
                        { en: "input", es: "entrada" },
                        { en: "output", es: "salida" },
                        { en: "request", es: "petición" },
                        { en: "response", es: "respuesta" }
                    ],
                    explicacion: "Un cliente envía un request y el servidor contesta con un response."
                },
                {
                    tipo: "ordenar",
                    enunciado: "Ordena la oración sobre el valor de retorno",
                    palabras: ["The", "function", "returns", "the", "total", "price"],
                    sufijo: ".",
                    distractores: ["return", "prices"],
                    explicacion: "Con «the function» (it) el verbo lleva -s: returns."
                },
                {
                    tipo: "escuchar",
                    enunciado: "Escucha la respuesta del servidor",
                    audio: "The server sends a response with status code two hundred.",
                    opciones: [
                        "El servidor envía una respuesta con código de estado 200.",
                        "El cliente envía una petición con dos parámetros.",
                        "El servidor recibe doscientas peticiones por segundo."
                    ],
                    correcta: 0,
                    explicacion: "El código 200 significa que la petición fue exitosa (OK)."
                }
            ]
        },
        // ------------------------------------------------------------------
        {
            numero: 3,
            id: "sistemas-03",
            titulo: "Variables y funciones",
            xp: 20,
            temas: "declaración, asignación, alcance (scope), constantes, tipos de datos (string, boolean, array) y llamadas a funciones",
            consejo: "«Declare» es crear la variable; «assign» es darle un valor: we declare a variable and assign a value to it.",
            terminos: [
                { en: "variable", es: "variable" },
                { en: "scope", es: "alcance" },
                { en: "constant", es: "constante" },
                { en: "function call", es: "llamada a función" }
            ],
            ejercicios: [
                {
                    tipo: "emparejar",
                    enunciado: "Conecta cada tipo de dato con su significado",
                    pares: [
                        { en: "string", es: "cadena de texto" },
                        { en: "boolean", es: "verdadero o falso" },
                        { en: "array", es: "arreglo / lista" },
                        { en: "constant", es: "constante" }
                    ],
                    explicacion: "Un boolean solo puede valer true o false."
                },
                {
                    tipo: "opcion",
                    enunciado: "Elige el concepto correcto",
                    frase: "A variable declared inside a function has local ___.",
                    opciones: ["scope", "branch", "deploy", "query"],
                    correcta: 0,
                    explicacion: "Scope (alcance) define dónde se puede usar una variable."
                },
                {
                    tipo: "completar",
                    enunciado: "Completa la regla de JavaScript",
                    antes: "In JavaScript, we",
                    despues: "a variable with let or const.",
                    respuestas: ["declare", "define", "create"],
                    pista: "Declarar en inglés: «dec…».",
                    explicacion: "«We declare a variable with let or const.»"
                },
                {
                    tipo: "ordenar",
                    enunciado: "Ordena la instrucción para tu compañero",
                    palabras: ["We", "call", "the", "function", "with", "two", "arguments"],
                    sufijo: ".",
                    distractores: ["calls", "argument"],
                    explicacion: "«Call a function» = llamar/invocar una función."
                },
                {
                    tipo: "escuchar",
                    enunciado: "Escucha la buena práctica",
                    audio: "Use a constant when the value never changes.",
                    opciones: [
                        "Usa una constante cuando el valor nunca cambia.",
                        "Usa una variable cuando el valor cambia siempre.",
                        "Llama a la función cuando el valor sea verdadero."
                    ],
                    correcta: 0,
                    explicacion: "Constant = valor que no se reasigna."
                }
            ]
        },
        // ------------------------------------------------------------------
        {
            numero: 4,
            id: "sistemas-04",
            titulo: "Condicionales if / else",
            xp: 20,
            temas: "operadores lógicos (AND, OR, NOT), evaluación de condiciones true/false, validaciones de formularios y control de flujo",
            consejo: "En inglés técnico decimos «the condition evaluates to true» (la condición se evalúa como verdadera).",
            terminos: [
                { en: "condition", es: "condición" },
                { en: "true / false", es: "verdadero / falso" },
                { en: "validation", es: "validación" },
                { en: "control flow", es: "control de flujo" }
            ],
            ejercicios: [
                {
                    tipo: "opcion",
                    enunciado: "Completa la regla de validación",
                    frase: "If the password is empty, the validation returns ___.",
                    opciones: ["false", "merge", "array", "deploy"],
                    correcta: 0,
                    explicacion: "Una contraseña vacía no es válida, así que la validación devuelve false."
                },
                {
                    tipo: "emparejar",
                    enunciado: "Conecta cada operador con su significado",
                    pares: [
                        { en: "AND", es: "se cumplen ambas condiciones" },
                        { en: "OR", es: "se cumple al menos una" },
                        { en: "NOT", es: "niega la condición" },
                        { en: "else", es: "si no se cumple" }
                    ],
                    explicacion: "AND (&&), OR (||) y NOT (!) son los operadores lógicos básicos."
                },
                {
                    tipo: "completar",
                    enunciado: "Completa la explicación del flujo",
                    antes: "The condition is",
                    despues: ", so the code inside the if block runs.",
                    respuestas: ["true"],
                    pista: "Lo contrario de «false».",
                    explicacion: "El bloque if solo se ejecuta si la condición es true."
                },
                {
                    tipo: "ordenar",
                    enunciado: "Ordena la regla de negocio",
                    palabras: ["If", "the", "user", "is", "logged", "in,", "show", "the", "dashboard"],
                    sufijo: ".",
                    distractores: ["shows", "else"],
                    explicacion: "«Logged in» = con sesión iniciada."
                },
                {
                    tipo: "escuchar",
                    enunciado: "Escucha el reporte de validación",
                    audio: "The form validation failed because the email is invalid.",
                    opciones: [
                        "La validación del formulario falló porque el correo no es válido.",
                        "El formulario se envió correctamente con un correo nuevo.",
                        "La condición es verdadera porque el correo existe."
                    ],
                    correcta: 0,
                    explicacion: "«Failed» = falló; «invalid» = no válido."
                }
            ]
        },
        // ------------------------------------------------------------------
        {
            numero: 5,
            id: "sistemas-05",
            titulo: "Control de versiones con Git",
            xp: 25,
            temas: "repositorios, commit, branch, pull request, merge y resolución de conflictos (merge conflicts)",
            consejo: "Antes de hacer push conviene hacer pull para traer los últimos cambios y evitar conflictos.",
            terminos: [
                { en: "repository", es: "repositorio" },
                { en: "pull request", es: "solicitud de integración" },
                { en: "merge conflict", es: "conflicto de fusión" },
                { en: "commit message", es: "mensaje de commit" }
            ],
            ejercicios: [
                {
                    tipo: "emparejar",
                    enunciado: "Conecta cada término de Git con su traducción",
                    pares: [
                        { en: "repository", es: "repositorio" },
                        { en: "branch", es: "rama" },
                        { en: "commit", es: "confirmación de cambios" },
                        { en: "merge", es: "fusionar" }
                    ],
                    explicacion: "Trabajas en una branch y luego haces merge a main."
                },
                {
                    tipo: "opcion",
                    enunciado: "Elige la herramienta de revisión de código",
                    frase: "Before merging, please open a ___ so the team can review your code.",
                    opciones: ["pull request", "stack trace", "primary key", "breakpoint"],
                    correcta: 0,
                    explicacion: "En un pull request el equipo revisa los cambios antes de integrarlos."
                },
                {
                    tipo: "completar",
                    enunciado: "Completa lo que hiciste en Git",
                    antes: "I created a new",
                    despues: "called feature/login to work on the new screen.",
                    respuestas: ["branch"],
                    pista: "Rama en inglés: «br…».",
                    explicacion: "Las ramas feature/… aíslan el trabajo de una funcionalidad."
                },
                {
                    tipo: "ordenar",
                    enunciado: "Ordena el aviso para tu equipo",
                    palabras: ["There", "is", "a", "merge", "conflict", "in", "the", "main", "file"],
                    sufijo: ".",
                    distractores: ["are", "conflicts"],
                    explicacion: "«There is a…» para un solo conflicto; «there are…» para varios."
                },
                {
                    tipo: "escuchar",
                    enunciado: "Escucha la indicación del tech lead",
                    audio: "Please pull the latest changes before you push your commit.",
                    opciones: [
                        "Por favor descarga los últimos cambios antes de subir tu commit.",
                        "Por favor borra la rama antes de crear un commit nuevo.",
                        "Por favor revisa el pull request después del despliegue."
                    ],
                    correcta: 0,
                    explicacion: "Pull = traer cambios del remoto; push = subir los tuyos."
                }
            ]
        },
        // ------------------------------------------------------------------
        {
            numero: 6,
            id: "sistemas-06",
            titulo: "Debugging y reporte de errores",
            xp: 25,
            temas: "stack trace, logs, breakpoints, reproducción de bugs y redacción de tickets o issues en inglés",
            consejo: "Un buen issue incluye: steps to reproduce, expected result y actual result.",
            terminos: [
                { en: "stack trace", es: "traza de pila" },
                { en: "breakpoint", es: "punto de interrupción" },
                { en: "root cause", es: "causa raíz" },
                { en: "issue", es: "incidencia / ticket" }
            ],
            ejercicios: [
                {
                    tipo: "opcion",
                    enunciado: "Elige la herramienta de depuración",
                    frase: "Add a ___ on line 42 to pause the code and inspect the variables.",
                    opciones: ["breakpoint", "branch", "deploy", "response"],
                    correcta: 0,
                    explicacion: "Un breakpoint pausa la ejecución en una línea concreta."
                },
                {
                    tipo: "emparejar",
                    enunciado: "Conecta las partes de un reporte de bug",
                    pares: [
                        { en: "stack trace", es: "traza de pila" },
                        { en: "log", es: "registro" },
                        { en: "steps to reproduce", es: "pasos para reproducir" },
                        { en: "expected result", es: "resultado esperado" }
                    ],
                    explicacion: "Estas secciones hacen que un ticket sea fácil de resolver."
                },
                {
                    tipo: "completar",
                    enunciado: "Completa el mensaje a QA",
                    antes: "I can't",
                    despues: "the bug on my computer. Can you share the steps?",
                    respuestas: ["reproduce"],
                    pista: "Reproducir: «rep…».",
                    explicacion: "«Reproduce a bug» = hacer que el error vuelva a ocurrir."
                },
                {
                    tipo: "ordenar",
                    enunciado: "Ordena el título del issue",
                    palabras: ["The", "app", "crashes", "when", "the", "user", "clicks", "save"],
                    distractores: ["crash", "clicked"],
                    explicacion: "Los títulos de issues suelen ir en presente simple."
                },
                {
                    tipo: "escuchar",
                    enunciado: "Escucha la recomendación",
                    audio: "Check the error logs to find the root cause.",
                    opciones: [
                        "Revisa los registros de errores para encontrar la causa raíz.",
                        "Borra los registros para liberar espacio en el servidor.",
                        "Crea un ticket nuevo y asígnalo al líder técnico."
                    ],
                    correcta: 0,
                    explicacion: "«Root cause» = el origen real del problema."
                }
            ]
        },
        // ------------------------------------------------------------------
        {
            numero: 7,
            id: "sistemas-07",
            titulo: "Bases de datos y consultas",
            xp: 30,
            temas: "tablas, llaves primarias y foráneas (primary/foreign key), consultas (queries), índices y migraciones",
            consejo: "Una foreign key relaciona dos tablas apuntando a la primary key de otra tabla.",
            terminos: [
                { en: "table", es: "tabla" },
                { en: "primary key", es: "llave primaria" },
                { en: "foreign key", es: "llave foránea" },
                { en: "query", es: "consulta" }
            ],
            ejercicios: [
                {
                    tipo: "emparejar",
                    enunciado: "Conecta cada concepto de base de datos",
                    pares: [
                        { en: "primary key", es: "llave primaria" },
                        { en: "foreign key", es: "llave foránea" },
                        { en: "index", es: "índice" },
                        { en: "migration", es: "migración" }
                    ],
                    explicacion: "Las migrations versionan los cambios de estructura de la base de datos."
                },
                {
                    tipo: "opcion",
                    enunciado: "Elige el tipo de llave",
                    frase: "The orders table has a ___ that points to the users table.",
                    opciones: ["foreign key", "breakpoint", "pull request", "staging"],
                    correcta: 0,
                    explicacion: "orders.user_id es una foreign key hacia users.id."
                },
                {
                    tipo: "completar",
                    enunciado: "Completa la descripción",
                    antes: "This SQL",
                    despues: "returns all the active users.",
                    respuestas: ["query"],
                    pista: "Consulta en inglés: «qu…».",
                    explicacion: "«Query» = consulta a la base de datos."
                },
                {
                    tipo: "ordenar",
                    enunciado: "Ordena la instrucción de despliegue",
                    palabras: ["Run", "the", "migration", "to", "create", "the", "new", "table"],
                    sufijo: ".",
                    distractores: ["runs", "tables"],
                    explicacion: "Las instrucciones usan el imperativo: «Run the migration…»."
                },
                {
                    tipo: "escuchar",
                    enunciado: "Escucha la sugerencia de rendimiento",
                    audio: "Add an index to make the search query faster.",
                    opciones: [
                        "Agrega un índice para que la consulta de búsqueda sea más rápida.",
                        "Elimina la tabla para que la búsqueda sea más lenta.",
                        "Crea una llave primaria nueva para cada usuario."
                    ],
                    correcta: 0,
                    explicacion: "Los índices aceleran las búsquedas en tablas grandes."
                }
            ]
        },
        // ------------------------------------------------------------------
        {
            numero: 8,
            id: "sistemas-08",
            titulo: "Deploy a producción",
            xp: 50,
            temas: "entornos (staging, production), CI/CD, servidores, variables de entorno y monitoreo post-despliegue",
            consejo: "Nunca subas claves al repositorio: guárdalas en environment variables.",
            terminos: [
                { en: "staging", es: "entorno de pruebas" },
                { en: "production", es: "producción" },
                { en: "environment variable", es: "variable de entorno" },
                { en: "monitoring", es: "monitoreo" }
            ],
            ejercicios: [
                {
                    tipo: "emparejar",
                    enunciado: "Conecta cada término de despliegue",
                    pares: [
                        { en: "staging", es: "entorno previo a producción" },
                        { en: "production", es: "producción" },
                        { en: "environment variable", es: "variable de entorno" },
                        { en: "pipeline", es: "flujo automático de CI/CD" }
                    ],
                    explicacion: "CI/CD = Continuous Integration / Continuous Deployment."
                },
                {
                    tipo: "opcion",
                    enunciado: "Elige el entorno correcto",
                    frase: "We test the release in ___ before deploying it to production.",
                    opciones: ["staging", "a breakpoint", "a foreign key", "the stack trace"],
                    correcta: 0,
                    explicacion: "Staging replica producción para probar sin afectar a usuarios reales."
                },
                {
                    tipo: "completar",
                    enunciado: "Completa la buena práctica de seguridad",
                    antes: "Never commit API keys. Store them in",
                    despues: "instead.",
                    respuestas: ["environment variables", "environment variable", "env variables"],
                    pista: "Variables de entorno (2 palabras): «environment …».",
                    explicacion: "Las claves viven en variables de entorno, nunca en el código."
                },
                {
                    tipo: "ordenar",
                    enunciado: "Ordena la descripción del pipeline",
                    palabras: ["The", "CI/CD", "pipeline", "runs", "the", "tests", "automatically"],
                    sufijo: ".",
                    distractores: ["run", "manually"],
                    explicacion: "El pipeline ejecuta pruebas en cada push de forma automática."
                },
                {
                    tipo: "escuchar",
                    enunciado: "Escucha el plan post-despliegue",
                    audio: "After the deploy, we monitor the server for errors.",
                    opciones: [
                        "Después del despliegue, monitoreamos el servidor en busca de errores.",
                        "Antes del despliegue, apagamos el servidor de pruebas.",
                        "Después del despliegue, borramos las variables de entorno."
                    ],
                    correcta: 0,
                    explicacion: "Monitorear después del deploy permite detectar fallos rápido."
                }
            ]
        }
    ],

    // Set de práctica general para lecciones personalizadas del CRUD
    general: {
        temas: "inglés técnico general para equipos de software: revisiones de código, funcionalidades, errores, lanzamientos y reuniones",
        consejo: "En equipos ágiles se usa mucho «Let's…» para proponer acciones: Let's review, let's deploy, let's schedule.",
        terminos: [
            { en: "code review", es: "revisión de código" },
            { en: "feature", es: "funcionalidad" },
            { en: "release", es: "lanzamiento" },
            { en: "deadline", es: "fecha límite" }
        ],
        ejercicios: [
            {
                tipo: "opcion",
                enunciado: "Elige el verbo correcto",
                frase: "Can you ___ my pull request before lunch?",
                opciones: ["review", "return", "crash", "index"],
                correcta: 0,
                explicacion: "«Review a pull request» = revisar una solicitud de integración."
            },
            {
                tipo: "emparejar",
                enunciado: "Conecta el vocabulario del proyecto",
                pares: [
                    { en: "deadline", es: "fecha límite" },
                    { en: "feature", es: "funcionalidad" },
                    { en: "bug", es: "error" },
                    { en: "release", es: "lanzamiento" }
                ],
                explicacion: "Vocabulario básico de cualquier sprint."
            },
            {
                tipo: "completar",
                enunciado: "Completa el aviso al equipo",
                antes: "The new",
                despues: "is ready for testing.",
                respuestas: ["feature"],
                pista: "Funcionalidad: «fea…».",
                explicacion: "«Feature» = funcionalidad nueva del producto."
            },
            {
                tipo: "ordenar",
                enunciado: "Ordena la propuesta",
                palabras: ["Let's", "schedule", "a", "meeting", "with", "the", "dev", "team"],
                sufijo: ".",
                distractores: ["schedules", "meet"],
                explicacion: "«Let's + verbo base» para proponer una acción."
            },
            {
                tipo: "escuchar",
                enunciado: "Escucha la actualización del ticket",
                audio: "I will update the ticket when the fix is deployed.",
                opciones: [
                    "Actualizaré el ticket cuando la corrección esté desplegada.",
                    "Cerraré el ticket porque el error no existe.",
                    "Crearé un ticket nuevo para la próxima reunión."
                ],
                correcta: 0,
                explicacion: "«Fix» = corrección; «deployed» = desplegado."
            }
        ]
    }
};
