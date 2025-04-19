const questions = [
    {
        id: 1,
        question: "¿Qué es un sistema informático?",
        options: [
            "Solo Hardware",
            "Hardware + Software",
            "Hardware + Software + Factor humano",
            "Software + Factor humano"
        ],
        correctAnswer: 2
    },
    {
        id: 2,
        question: "¿Cuántas generaciones hay de ordenadores?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 2
    },
    {
        id: 3,
        question: "¿A qué generación corresponden las válvulas de vacío?",
        options: ["1ª", "2ª", "3ª", "Generación cero"],
        correctAnswer: 0
    },
    {
        id: 4,
        question: "¿A qué generación corresponden los transistores?",
        options: ["1ª", "2ª", "3ª", "4ª"],
        correctAnswer: 1
    },
    {
        id: 5,
        question: "¿A qué generación corresponden los circuitos integrados?",
        options: ["2ª", "3ª", "4ª", "5ª"],
        correctAnswer: 1
    },
    {
        id: 6,
        question: "¿A qué generación corresponden los microprocesadores de los años 80?",
        options: ["3ª", "4ª", "5ª", "2ª"],
        correctAnswer: 1
    },
    {
        id: 7,
        question: "¿A qué generación corresponde la evolución de los microprocesadores?",
        options: ["4ª", "5ª", "6ª", "3ª"],
        correctAnswer: 1
    },
    {
        id: 8,
        question: "¿A qué generación corresponde la inteligencia artificial?",
        options: ["5ª", "6ª", "7ª", "4ª"],
        correctAnswer: 1
    },
    {
        id: 9,
        question: "Indica 3 ideas en las que se fundamentan la arquitectura de Von Neumann.",
        options: [
            "Simultaneidad de datos e instrucciones, Memoria con direcciones, Ejecución secuencial",
            "Procesamiento paralelo, Memoria caché, Multitarea",
            "Procesamiento distribuido, Almacenamiento en la nube, Virtualización",
            "Multiprocesamiento, Acceso aleatorio, Memoria virtual"
        ],
        correctAnswer: 0
    },
    {
        id: 10,
        question: "¿Qué unidad de la arquitectura de Von Neumann se considera el cerebro del ordenador?",
        options: ["CPU", "Memoria RAM", "Unidad de Entrada-Salida", "Unidad de Memoria"],
        correctAnswer: 0
    },
    {
        id: 11,
        question: "¿Cuáles son los dos componentes fundamentales de la CPU?",
        options: ["UC y UAL", "RAM y ROM", "CPU y GPU", "Caché y Registros"],
        correctAnswer: 0
    },
    {
        id: 12,
        question: "¿En qué elemento pueden incluirse varios núcleos o cores?",
        options: ["Microprocesador", "Memoria RAM", "Tarjeta gráfica", "Disco duro"],
        correctAnswer: 0
    },
    {
        id: 13,
        question: "¿Qué parte contiene la posición de la información que ocupa en la memoria la siguiente instrucción que se tiene que ejecutar?",
        options: ["Contador de programa", "Registro de instrucción", "Decodificador", "Secuenciador"],
        correctAnswer: 0
    },
    {
        id: 14,
        question: "¿Qué unidad tiene como función recibir e interpretar sucesivamente las instrucciones almacenadas en la memoria, ejecutando cada una de ellas?",
        options: ["UC", "UAL", "UCP", "UES"],
        correctAnswer: 0
    },
    {
        id: 15,
        question: "¿Qué unidad está compuesta por circuitos operacionales responsables de las operaciones binarias simples en que se puede descomponer cualquier operación más compleja?",
        options: ["UAL", "UC", "UCP", "UES"],
        correctAnswer: 0
    },
    {
        id: 16,
        question: "¿Qué elemento da lugar a una secuencia de operaciones ordenada en el tiempo?",
        options: ["El reloj", "El secuenciador", "El contador de programa", "El decodificador"],
        correctAnswer: 0
    },
    {
        id: 17,
        question: "¿Cómo se denomina el número de impulsos que determinan la velocidad de un equipo?",
        options: ["La frecuencia de reloj", "Ciclos de instrucción", "Tasa de rendimiento", "Velocidad de procesamiento"],
        correctAnswer: 0
    },
    {
        id: 18,
        question: "¿Cuál es la unidad de medida de la frecuencia del reloj?",
        options: ["Hz", "Bits", "Bytes", "Ciclos"],
        correctAnswer: 0
    },
    {
        id: 19,
        question: "¿Cómo se denomina la celda de una memoria?",
        options: ["Palabra", "Bit", "Byte", "Bloque"],
        correctAnswer: 0
    },
    {
        id: 20,
        question: "¿Qué determina la capacidad de información que la CPU es capaz de procesar simultáneamente en cada pulso de reloj?",
        options: ["Longitud de palabra", "Tamaño de caché", "Número de núcleos", "Velocidad de bus"],
        correctAnswer: 0
    },
    {
        id: 21,
        question: "¿Qué arquitectura de procesador se caracteriza por utilizar un grupo amplio de instrucciones?",
        options: ["CISC", "RISK", "ARM", "MIPS"],
        correctAnswer: 0
    },
    {
        id: 22,
        question: "¿Qué arquitectura de procesador se caracteriza por utilizar un grupo reducido de instrucciones?",
        options: ["RISK", "CISC", "x86", "POWER"],
        correctAnswer: 0
    },
    {
        id: 23,
        question: "¿Qué memoria se sitúa entre el procesador y la memoria principal?",
        options: ["Memoria caché", "Memoria virtual", "Memoria ROM", "Disco de estado sólido"],
        correctAnswer: 0
    },
    {
        id: 24,
        question: "¿Cuántos niveles tiene la memoria caché?",
        options: ["L1, L2, L3", "L1, L2", "L1, L2, L3, L4", "Nivel primario y secundario"],
        correctAnswer: 0
    },
    {
        id: 25,
        question: "¿Cómo se denominan los mecanismos que utilizan rejillas o aletas pegadas a los microprocesadores?",
        options: ["Disipador", "Ventilador", "Radiador", "Refrigerador"],
        correctAnswer: 0
    },
    {
        id: 26,
        question: "¿Una memoria DDR4 cuantos contactos tiene y cuál es su voltaje?",
        options: ["288 contactos y 1,2V", "240 contactos y 1,5V", "288 contactos y 1,5V", "240 contactos y 1,2V"],
        correctAnswer: 0
    },
    {
        id: 27,
        question: "¿Qué tipo de memoria RAM utilizan los portátiles?",
        options: ["SO-DIMM", "DIMM", "RIMM", "SIMM"],
        correctAnswer: 0
    },
    {
        id: 28,
        question: "¿Cómo se denomina el conjunto de circuitos cuya función es permitir la comunicación del procesador con la placa base?",
        options: ["Chipset", "BIOS", "PCB", "Socket"],
        correctAnswer: 0
    },
    {
        id: 29,
        question: "¿Cómo se denomina en la actualidad el Chipset?",
        options: ["Express Chipset", "Hub Controller", "I/O Controller", "PCH (Platform Controller Hub)"],
        correctAnswer: 0
    },
    {
        id: 30,
        question: "¿Cómo se denomina el slot de expansión para una tarjeta gráfica?",
        options: ["AGP o PCI-EXPRESS", "PCI", "ISA", "AMR"],
        correctAnswer: 0
    },
    {
        id: 31,
        question: "¿Cómo se denomina la memoria RAM de una tarjeta gráfica?",
        options: ["GDDR", "VRAM", "DDR", "SGRAM"],
        correctAnswer: 0
    },
    {
        id: 32,
        question: "¿Qué tipo de Raid distribuye los datos equitativamente entre dos o más discos sin información de paridad que proporcione redundancia?",
        options: ["Raid 0", "Raid 1", "Raid 5", "Raid 10"],
        correctAnswer: 0
    },
    {
        id: 33,
        question: "¿Qué tipo de Raid crea una copia exacta (espejo) de un conjunto de datos en dos o más discos?",
        options: ["Raid 1", "Raid 0", "Raid 5", "Raid 6"],
        correctAnswer: 0
    },
    {
        id: 34,
        question: "¿Qué tipo de Raid divide los datos en bloques y distribuye la información de paridad entre todos los discos miembros del conjunto?",
        options: ["Raid 5", "Raid 0", "Raid 1", "Raid 10"],
        correctAnswer: 0
    },
    {
        id: 35,
        question: "¿Cómo se denomina el sector de arranque de un disco?",
        options: ["MBR (Master boot record)", "Boot sector", "GPT", "Partition table"],
        correctAnswer: 0
    },
    {
        id: 36,
        question: "¿Cómo se denomina el firmware de un ordenador?",
        options: ["BIOS", "ROM", "CMOS", "POST"],
        correctAnswer: 0
    },
    {
        id: 37,
        question: "¿Una memoria DDR5 cuantos contactos tiene y cuál es su voltaje?",
        options: ["288 contactos y 1,1V", "288 contactos y 1,2V", "320 contactos y 1,1V", "240 contactos y 1,1V"],
        correctAnswer: 0
    },
    {
        id: 38,
        question: "Pasar el número 1456 base 10 a decimal. (ejemplo)",
        options: [
            "1456 = 1·10³ + 4·10² + 5·10¹ + 6·10º = 1456 base 10",
            "1456 = 1·10² + 4·10¹ + 5·10º = 145 base 10",
            "1456 = 14·10² + 56·10¹ = 1960 base 10",
            "1456 = 1·10⁴ + 4·10³ + 5·10² + 6·10¹ = 14560 base 10"
        ],
        correctAnswer: 0
    },
    {
        id: 39,
        question: "Pasar el número 1001 base 2 a decimal. (ejemplo)",
        options: [
            "1001 base 2 = 1·2³ + 0·2² + 0·2¹ + 1·2º = 9 base 10",
            "1001 base 2 = 1·2⁴ + 0·2³ + 0·2² + 1·2¹ = 18 base 10",
            "1001 base 2 = 1·2² + 0·2¹ + 0·2º = 4 base 10",
            "1001 base 2 = 1·2³ + 0·2² + 0·2¹ + 1·2º = 10 base 10"
        ],
        correctAnswer: 0
    },
    {
        id: 40,
        question: "Pasar el número 576 base 8 a decimal. (ejemplo)",
        options: [
            "576 base 8 = 5·8² + 7·8¹ + 6·8º = 382 base 10",
            "576 base 8 = 5·8³ + 7·8² + 6·8¹ = 3056 base 10",
            "576 base 8 = 57·8¹ + 6·8º = 464 base 10",
            "576 base 8 = 5·8² + 76·8º = 436 base 10"
        ],
        correctAnswer: 0
    },
    {
        id: 41,
        question: "Pasar el número 12F base 16 en decimal. (ejemplo)",
        options: [
            "12F base 16 = 1·16² + 2·16¹ + 15·16º = 303 base 10",
            "12F base 16 = 1·16³ + 2·16² + 15·16¹ = 4847 base 10",
            "12F base 16 = 12·16¹ + 15·16º = 207 base 10",
            "12F base 16 = 1·16² + 2·16¹ + 15·16º = 315 base 10"
        ],
        correctAnswer: 0
    },
    {
        id: 42,
        question: "¿De qué está compuesto un módulo de entrada/salida?",
        options: [
            "Controladores periféricos y puertos de entrada/salida",
            "Buses y conectores",
            "Memoria y procesador",
            "Interfaces y drivers"
        ],
        correctAnswer: 0
    },
    {
        id: 43,
        question: "Indica que tipos de buses hay.",
        options: [
            "Bus de datos, Bus de direcciones, Bus de control",
            "Bus serie, Bus paralelo",
            "Bus interno, Bus externo",
            "Bus principal, Bus secundario"
        ],
        correctAnswer: 0
    },
    {
        id: 44,
        question: "Indica los tipos de memoria RAM.",
        options: [
            "DDR, DDR2, DDR3, DDR4, DDR5",
            "SIMM, DIMM, SO-DIMM",
            "SDRAM, EDO RAM, FPM RAM",
            "Cache, Virtual, Swap"
        ],
        correctAnswer: 0
    },
    {
        id: 45,
        question: "¿Qué incluye el MBR?",
        options: [
            "Tabla de particiones, Gestor de arranque",
            "Sistema operativo, Datos",
            "BIOS, UEFI",
            "Drivers, Programas"
        ],
        correctAnswer: 0
    },
    {
        id: 46,
        question: "Indica los diferentes tipos de placa base que hay",
        options: [
            "Standard-ATX, Micro-ATX, Mini-ITX, Nano-ITX, Pico-ITX",
            "ATX, BTX, NLX",
            "E-ATX, XL-ATX, EATX",
            "AT, Baby-AT, LPX"
        ],
        correctAnswer: 0
    },
    {
        id: 47,
        question: "¿Cómo se denomina la memoria RAM de una tarjeta gráfica?",
        options: ["GDDR", "VRAM", "DDR", "SDRAM"],
        correctAnswer: 0
    },
    {
        id: 48,
        question: "Indica los tipos de disco duro que existen (memoria solida).",
        options: [
            "Solo SSD",
            "SSD y HDD",
            "SSD, HDD y Híbridos",
            "Solo HDD"
        ],
        correctAnswer: 2
    },
    {
        id: 49,
        question: "Indica el orden de las tecnologías en cuanto a las tecnologías de los ordenadores.",
        options: [
            "Válvulas de vacío, Transistores, Circuitos integrados, Microprocesadores años 80, Evolución microprocesadores, Inteligencia artificial",
            "Transistores, Válvulas de vacío, Circuitos integrados, Microprocesadores años 80, Evolución microprocesadores, Inteligencia artificial",
            "Circuitos integrados, Transistores, Válvulas de vacío, Microprocesadores años 80, Evolución microprocesadores, Inteligencia artificial",
            "Válvulas de vacío, Circuitos integrados, Transistores, Microprocesadores años 80, Evolución microprocesadores, Inteligencia artificial"
        ],
        correctAnswer: 0
    },
    {
        id: 50,
        question: "¿Qué es un sistema operativo?",
        options: [
            "Un conjunto de programas que gestionan los recursos del hardware y proporcionan servicios a las aplicaciones",
            "Un programa que permite la comunicación entre el usuario y el hardware",
            "Un software que se encarga de la seguridad del sistema",
            "Un conjunto de instrucciones que ejecuta la CPU"
        ],
        correctAnswer: 0
    },
    {
        id: 51,
        question: "¿Cuál es la función principal del kernel en un sistema operativo?",
        options: [
            "Gestionar los recursos del sistema y permitir la comunicación entre el hardware y el software",
            "Proporcionar una interfaz gráfica para el usuario",
            "Controlar el acceso a la red",
            "Ejecutar aplicaciones de usuario"
        ],
        correctAnswer: 0
    },
    {
        id: 52,
        question: "¿Qué es una interrupción en un sistema operativo?",
        options: [
            "Una señal que indica al procesador que debe detener temporalmente la ejecución de un programa para atender un evento",
            "Un error en la ejecución de un programa",
            "Una solicitud de acceso a la memoria",
            "Un proceso que se ejecuta en segundo plano"
        ],
        correctAnswer: 0
    },
    {
        id: 53,
        question: "¿Qué es la memoria virtual?",
        options: [
            "Una técnica que permite a los programas utilizar más memoria de la que físicamente tiene el sistema",
            "Una memoria que se encuentra en la nube",
            "Una memoria que se utiliza para almacenar datos temporales",
            "Una memoria que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 54,
        question: "¿Qué es un sistema de archivos?",
        options: [
            "Una estructura que organiza y gestiona los datos en un dispositivo de almacenamiento",
            "Un conjunto de programas que gestionan los recursos del hardware",
            "Un software que se encarga de la seguridad del sistema",
            "Un conjunto de instrucciones que ejecuta la CPU"
        ],
        correctAnswer: 0
    },
    {
        id: 55,
        question: "¿Qué es un proceso en un sistema operativo?",
        options: [
            "Un programa en ejecución",
            "Un conjunto de instrucciones almacenadas en la memoria",
            "Un archivo que se encuentra en el disco duro",
            "Un dispositivo de entrada/salida"
        ],
        correctAnswer: 0
    },
    {
        id: 56,
        question: "¿Qué es un hilo (thread) en un sistema operativo?",
        options: [
            "La unidad más pequeña de procesamiento que puede ser programada por un sistema operativo",
            "Un programa en ejecución",
            "Un conjunto de instrucciones almacenadas en la memoria",
            "Un archivo que se encuentra en el disco duro"
        ],
        correctAnswer: 0
    },
    {
        id: 57,
        question: "¿Qué es la multitarea en un sistema operativo?",
        options: [
            "La capacidad de ejecutar múltiples tareas o procesos al mismo tiempo",
            "La capacidad de ejecutar un solo proceso a la vez",
            "La capacidad de ejecutar tareas en segundo plano",
            "La capacidad de ejecutar tareas en tiempo real"
        ],
        correctAnswer: 0
    },
    {
        id: 58,
        question: "¿Qué es la planificación de procesos en un sistema operativo?",
        options: [
            "La asignación de tiempo de CPU a los procesos en ejecución",
            "La asignación de memoria a los procesos en ejecución",
            "La asignación de dispositivos de entrada/salida a los procesos en ejecución",
            "La asignación de recursos de red a los procesos en ejecución"
        ],
        correctAnswer: 0
    },
    {
        id: 59,
        question: "¿Qué es un sistema de tiempo real?",
        options: [
            "Un sistema que debe responder a eventos o estímulos en un tiempo limitado y predecible",
            "Un sistema que se ejecuta en segundo plano",
            "Un sistema que se ejecuta en la nube",
            "Un sistema que se utiliza para almacenar datos temporales"
        ],
        correctAnswer: 0
    },
    {
        id: 60,
        question: "¿Qué es un sistema distribuido?",
        options: [
            "Un sistema en el que los componentes están ubicados en diferentes lugares y se comunican a través de una red",
            "Un sistema que se ejecuta en un solo dispositivo",
            "Un sistema que se utiliza para almacenar datos permanentes",
            "Un sistema que se utiliza para ejecutar aplicaciones de usuario"
        ],
        correctAnswer: 0
    },
    {
        id: 61,
        question: "¿Qué es la concurrencia en un sistema operativo?",
        options: [
            "La capacidad de ejecutar múltiples procesos o hilos al mismo tiempo",
            "La capacidad de ejecutar un solo proceso a la vez",
            "La capacidad de ejecutar tareas en segundo plano",
            "La capacidad de ejecutar tareas en tiempo real"
        ],
        correctAnswer: 0
    },
    {
        id: 62,
        question: "¿Qué es un deadlock (interbloqueo) en un sistema operativo?",
        options: [
            "Una situación en la que dos o más procesos se bloquean mutuamente esperando recursos que nunca serán liberados",
            "Un error en la ejecución de un programa",
            "Una solicitud de acceso a la memoria",
            "Un proceso que se ejecuta en segundo plano"
        ],
        correctAnswer: 0
    },
    {
        id: 63,
        question: "¿Qué es la paginación en un sistema operativo?",
        options: [
            "Una técnica de gestión de memoria que divide la memoria en bloques de tamaño fijo llamados páginas",
            "Una técnica de gestión de memoria que divide la memoria en bloques de tamaño variable",
            "Una técnica de gestión de memoria que utiliza una tabla de segmentos",
            "Una técnica de gestión de memoria que utiliza una tabla de páginas"
        ],
        correctAnswer: 0
    },
    {
        id: 64,
        question: "¿Qué es la segmentación en un sistema operativo?",
        options: [
            "Una técnica de gestión de memoria que divide la memoria en bloques de tamaño variable llamados segmentos",
            "Una técnica de gestión de memoria que divide la memoria en bloques de tamaño fijo",
            "Una técnica de gestión de memoria que utiliza una tabla de páginas",
            "Una técnica de gestión de memoria que utiliza una tabla de segmentos"
        ],
        correctAnswer: 0
    },
    {
        id: 65,
        question: "¿Qué es un sistema de archivos distribuido?",
        options: [
            "Un sistema de archivos que permite acceder y gestionar archivos en múltiples dispositivos a través de una red",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 66,
        question: "¿Qué es un sistema de archivos en red (NFS)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 67,
        question: "¿Qué es un sistema de archivos de solo lectura (ROFS)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 68,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 69,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 70,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 71,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 72,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 73,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 74,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 75,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 76,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 77,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 78,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 79,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 80,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 81,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 82,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 83,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 84,
        question: "Indica los tipos de disco duro que existen (memoria solida).",
        options: [
            "SSD, HDD y Híbridos",
            "Solo SSD",
            "Solo HDD",
            "SSD y HDD"
        ],
        correctAnswer: 0
    },
    {
        id: 85,
        question: "¿Qué es un programa en ejecución?",
        options: ["Un proceso", "Un hilo", "Una tarea", "Un servicio"],
        correctAnswer: 0
    },
    {
        id: 86,
        question: "¿Para qué se ejecute un programa donde debe estar guardado?",
        options: ["RAM", "Disco duro", "CPU", "Cache"],
        correctAnswer: 0
    },
    {
        id: 87,
        question: "¿Qué es un sistema de archivos distribuido?",
        options: [
            "Un sistema de archivos que permite acceder y gestionar archivos en múltiples dispositivos a través de una red",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 88,
        question: "¿Qué es un sistema de archivos en red (NFS)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 89,
        question: "¿Qué es un sistema de archivos de solo lectura (ROFS)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 90,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 91,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 92,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 93,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 94,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 95,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 96,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 97,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 98,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 99,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 100,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 101,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 102,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 103,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 104,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 105,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 106,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 107,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 108,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 109,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 110,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 111,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 112,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 113,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 114,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 115,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 116,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 117,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 118,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 119,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 120,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 121,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 122,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 123,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 124,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 125,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 126,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 127,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 128,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 129,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 130,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 131,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 132,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 133,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 134,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 135,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 136,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 137,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 138,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 139,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 140,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 141,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 142,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 143,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 144,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 145,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 146,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 147,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 148,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 149,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 150,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 151,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 152,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 153,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 154,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 155,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 156,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 157,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 158,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 159,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 160,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 161,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 162,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 163,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 164,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 165,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 166,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 167,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 168,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 169,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 170,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 171,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 172,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 173,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 174,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 175,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 176,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 177,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 178,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 179,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 180,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 181,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 182,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 183,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 184,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 185,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 186,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 187,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 188,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 189,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 190,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 191,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 192,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 193,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 194,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 195,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 196,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 197,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 198,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 199,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 200,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 201,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 202,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 203,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 204,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 205,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 206,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 207,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 208,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 209,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 210,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 211,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 212,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 213,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 214,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 215,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 216,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 217,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 218,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 219,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 220,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 221,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 222,
        question: "¿Qué es un sistema de archivos de registro (Journaling File System)?",
        options: [
            "Un sistema de archivos que mantiene un registro de las operaciones realizadas para mejorar la recuperación en caso de fallos",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 223,
        question: "¿Qué es un sistema de archivos cifrado (Encrypted File System)?",
        options: [
            "Un sistema de archivos que cifra los datos para proteger la información almacenada",
            "Un sistema de archivos que permite solo la lectura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 224,
        question: "¿Qué es un sistema de archivos de red (Network File System)?",
        options: [
            "Un sistema de archivos que permite acceder a archivos en una red como si estuvieran en el disco local",
            "Un sistema de archivos que se encuentra en un solo dispositivo",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 225,
        question: "¿Qué es un sistema de archivos de solo lectura (Read-Only File System)?",
        options: [
            "Un sistema de archivos que permite solo la lectura de archivos, sin posibilidad de modificación",
            "Un sistema de archivos que permite la lectura y escritura de archivos",
            "Un sistema de archivos que se utiliza para almacenar datos temporales",
            "Un sistema de archivos que se utiliza para almacenar datos permanentes"
        ],
        correctAnswer: 0
    },
    {
        id: 226,
        question: "Ejercicio de tiempo de retorno y espera.",
        options: ["Apuntes", "No aplica", "Ver documentación", "Consultar material"],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
let selectedQuestions = [];
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');

    startBtn.addEventListener('click', initializeQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);

    // Deshabilitar el botón siguiente al inicio
    nextBtn.disabled = true;
});

function initializeQuiz() {
    const numQuestions = document.getElementById('num-questions').value;
    const startScreen = document.getElementById('start-screen');
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');

    // Reiniciar variables
    currentQuestionIndex = 0;
    score = 0;

    // Seleccionar preguntas
    if (numQuestions === 'all') {
        selectedQuestions = [...questions];
    } else {
        selectedQuestions = getRandomQuestions(parseInt(numQuestions));
    }

    // Mostrar/ocultar elementos
    startScreen.style.display = 'none';
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';

    showQuestion();
}

function showQuestion() {
    const questionData = selectedQuestions[currentQuestionIndex];
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const optionsList = document.getElementById('options-list');
    const feedback = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');

    // Actualizar información de la pregunta
    questionNumber.textContent = `Pregunta ${currentQuestionIndex + 1} de ${selectedQuestions.length}`;
    questionText.textContent = questionData.question;
    feedback.textContent = '';
    nextBtn.disabled = true;

    // Limpiar y crear nuevas opciones
    optionsList.innerHTML = '';
    questionData.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="radio" name="answer" value="${index}" id="option${index}">
            <label for="option${index}">${option}</label>
        `;
        optionsList.appendChild(li);
    });

    // Agregar event listeners a las opciones
    const radioButtons = optionsList.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => checkAnswer(radio.value));
    });

    updateProgress();
}

function checkAnswer(selectedAnswer) {
    const questionData = selectedQuestions[currentQuestionIndex];
    const feedback = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');

    const isCorrect = parseInt(selectedAnswer) === questionData.correctAnswer;
    
    if (isCorrect) {
        feedback.textContent = '¡Correcto!';
        feedback.className = 'feedback correct';
        score++;
    } else {
        feedback.textContent = 'Incorrecto. La respuesta correcta era: ' + 
            questionData.options[questionData.correctAnswer];
        feedback.className = 'feedback incorrect';
    }

    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');
    const scoreElement = document.getElementById('score');

    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    const percentage = (score / selectedQuestions.length) * 100;
    scoreElement.textContent = `Has acertado ${score} de ${selectedQuestions.length} preguntas (${percentage.toFixed(2)}%)`;
}

function restartQuiz() {
    const startScreen = document.getElementById('start-screen');
    const resultContainer = document.getElementById('result-container');

    startScreen.style.display = 'block';
    resultContainer.style.display = 'none';
}

function getRandomQuestions(num) {
    return [...questions]
        .sort(() => 0.5 - Math.random())
        .slice(0, num);
}

function updateProgress() {
    const progress = document.getElementById('progress');
    const percentage = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
    progress.style.width = `${percentage}%`;
}