export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  process: { step: number; title: string; desc: string }[];
  icon: string;
  tag: string;
  duration: string;
  suitableFor: string;
  image: string;
  highlight: string;
  faqs: { question: string; answer: string }[];
}

export const servicesData: Service[] = [
  {
    id: "limpieza-dental",
    slug: "limpieza-dental",
    title: "Limpieza Dental Avanzada",
    shortDescription: "Profilaxis profunda con ultrasonido suave y aeropulidor. Elimina manchas y sarro sin desgastar el esmalte.",
    fullDescription: "Nuestra limpieza dental profesional va más allá de un procedimiento convencional. Utilizamos ultrasonido piezoeléctrico de última generación que desintegra el cálculo subgingival y supragingival con máxima suavidad, complementado con tecnología de aeropulidor de micropulido con glicina que devuelve el brillo natural sin desgastar el esmalte ni provocar sensibilidad.",
    benefits: [
      "Eliminación profunda de sarro y placa",
      "Desmanchado suave sin daño al esmalte",
      "Aliento fresco y encías sanas",
      "Procedimiento 100% indoloro"
    ],
    process: [
      { step: 1, title: "Diagnóstico y tinción", desc: "Evaluación visual y aplicación de revelador de placa para identificar zonas críticas." },
      { step: 2, title: "Destartraje ultrasónico", desc: "Remoción suave del sarro dental mediante vibraciones de alta frecuencia y microflujo de agua." },
      { step: 3, title: "Aeropulido y remoción de manchas", desc: "Pulido con microesferas de glicina que limpian los intersticios más inaccesibles." },
      { step: 4, title: "Fluorización remineralizante", desc: "Aplicación de barniz de flúor de alta potencia para sellar túbulos dentinarios y prevenir sensibilidad." }
    ],
    icon: "Sparkles",
    tag: "Prevención & Brillo",
    duration: "45 a 60 min",
    suitableFor: "Recomendado cada 6 meses para toda la familia.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    highlight: "Ultrasonido sin dolor + aeropulidor",
    faqs: [
      { question: "¿La limpieza dental desgasta o debilita el esmalte?", answer: "No. Nuestras puntas ultrasónicas y pulidores de glicina actúan por vibración armónica y no por fricción agresiva, respetando al 100% la estructura cristalina del esmalte." },
      { question: "¿Duele el procedimiento?", answer: "En Dalia Clinic aplicamos protocolos de confort. Si presentas encías inflamadas o sensibilidad previa, aplicamos geles anestésicos tópicos para una experiencia totalmente placentera." }
    ]
  },
  {
    id: "extracciones",
    slug: "extracciones",
    title: "Cirugía Oral y Extracciones",
    shortDescription: "Cirugía mínimamente invasiva y extracción atraumática de muelas del juicio con recuperación acelerada.",
    fullDescription: "Realizamos procedimientos quirúrgicos dentales bajo estándares de excelencia y preservación tisular. Desde la extracción programada de cordales impactados o retenidos hasta cirugías preprotésicas, empleamos instrumental piezoquirúrgico y anestesia computarizada para garantizar cero dolor, mínima inflamación y una cicatrización acelerada con concentrados plaquetarios (PRF).",
    benefits: [
      "Técnica atraumática sin fuerza nociva",
      "Planificación 3D con tomografía previa",
      "Anestesia guiada indolora",
      "Opción de sedación para cero ansiedad"
    ],
    process: [
      { step: 1, title: "Tomografía 3D de alta resolución", desc: "Localización exacta de raíces, nervio dentario inferior y seno maxilar." },
      { step: 2, title: "Anestesia guiada indolora", desc: "Bloqueo anestésico profundo con microaguja y técnica computarizada." },
      { step: 3, title: "Luxación atraumática", desc: "Liberación de la pieza dental sin ejercer fuerzas nocivas sobre la mandíbula." },
      { step: 4, title: "Biopreservación y sutura fina", desc: "Colocación de membranas hemostáticas y suturas microscópicas de reabsorción suave." }
    ],
    icon: "ShieldAlert",
    tag: "Cirugía Atraumática",
    duration: "30 a 60 min",
    suitableFor: "Muelas del juicio retenidas o piezas no restaurables.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    highlight: "Cero dolor y rápida cicatrización",
    faqs: [
      { question: "¿Cuánto tiempo dura el reposo tras una extracción?", answer: "Recomendamos reposo relativo de 24 a 48 horas, evitando esfuerzos intensos y comidas calientes. La mayoría de nuestros pacientes retoman sus labores habituales al día siguiente." }
    ]
  },
  {
    id: "endodoncia",
    slug: "endodoncia",
    title: "Endodoncia Microscópica",
    shortDescription: "Tratamiento de conductos guiado por microscopio. Salva tu diente original y alivia el dolor en una sola sesión.",
    fullDescription: "La endodoncia en Dalia Clinic se realiza con magnificación microscópica y localizadores apicales electrónicos. Esto nos permite limpiar, desinfectar y sellar tridimensionalmente los conductos radiculares con una tasa de éxito superior al 98%, preservando tu diente natural y devolviéndole su función masticatoria sin ninguna molestia.",
    benefits: [
      "Salva tu diente natural para siempre",
      "Alivio inmediato del dolor agudo",
      "Precisión milimétrica bajo microscopio",
      "Completado en 1 sola sesión cómoda"
    ],
    process: [
      { step: 1, title: "Aislamiento absoluto estéril", desc: "Protección con dique de goma para garantizar campo 100% aséptico." },
      { step: 2, title: "Acceso conservador guiado", desc: "Apertura microscópica mínima conservando la mayor cantidad de diente sano." },
      { step: 3, title: "Conformación rotatoria y desinfección", desc: "Limpieza química con activación ultrasónica que erradica las bacterias." },
      { step: 4, title: "Obturación tridimensional termoplástica", desc: "Sellado hermético de los conductos con gutapercha caliente biocompatible." }
    ],
    icon: "Activity",
    tag: "Conservación Dental",
    duration: "60 a 90 min",
    suitableFor: "Dientes con dolor agudo, caries profundas o infección.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800",
    highlight: "Magnificación óptica Zeiss • 1 sesión",
    faqs: [
      { question: "¿El tratamiento de conducto es doloroso?", answer: "Es un mito del pasado. Con nuestras técnicas anestésicas contemporáneas y magnificación óptica, el procedimiento es completamente indoloro." }
    ]
  },
  {
    id: "ortodoncias",
    slug: "ortodoncias",
    title: "Ortodoncia y Alineadores Invisibles",
    shortDescription: "Alineación estética sin brackets visibles mediante alineadores transparentes cómodos y removibles.",
    fullDescription: "Diseñamos sonrisas armónicas respetando la biomecánica craneofacial. Somos especialistas en ortodoncia invisible con alineadores transparentes removibles, diseñados a partir de un escaneo intraoral 3D donde puedes visualizar el resultado final antes de comenzar. También ofrecemos brackets de cristal de zafiro de máxima discreción y ortodoncia interceptiva.",
    benefits: [
      "Férulas transparentes casi imperceptibles",
      "Removibles para comer y cepillarte",
      "Simulación 3D de resultados antes de empezar",
      "Sin alambres que pinchen ni llagas"
    ],
    process: [
      { step: 1, title: "Escaneo intraoral 3D", desc: "Mapeo digital de la arcada completa en 2 minutos sin incómodas pastas." },
      { step: 2, title: "Planificación cinemática 3D", desc: "Simulación digital de los movimientos y aprobación personalizada de tu sonrisa." },
      { step: 3, title: "Entrega de alineadores", desc: "Colocación de microataches estéticos e instrucción de cambio de férulas." },
      { step: 4, title: "Revisiones de control digital", desc: "Monitoreo periódico para garantizar la perfecta evolución de tu mordida." }
    ],
    icon: "Smile",
    tag: "Ortodoncia Invisible",
    duration: "6 a 18 meses",
    suitableFor: "Dientes desalineados, mordidas complejas o apiñamiento.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    highlight: "Simulación 3D previa • 100% estética",
    faqs: [
      { question: "¿Cuántas horas al día debo llevar los alineadores?", answer: "Deben usarse 22 horas al día, retirándolos únicamente para comer y cepillarte los dientes." }
    ]
  },
  {
    id: "estetica-oral",
    slug: "estetica-oral",
    title: "Estética Oral y Diseño de Sonrisa",
    shortDescription: "Carillas de porcelana ultrafinas, microcarillas y blanqueamiento LED para una sonrisa luminosa y natural.",
    fullDescription: "En Dalia Clinic concebimos la estética dental como una obra de arte respaldada por la ciencia. Mediante el Diseño Digital de Sonrisa (DSD), analizamos las proporciones de tu rostro, labios y encías para crear carillas de porcelana estratificadas a mano o carillas de resina inyectada que irradian luminosidad, naturalidad y perfección milimétrica.",
    benefits: [
      "Carillas cerámicas ultradelgadas (0.3 mm)",
      "Prueba previa en tu rostro (Mock-up)",
      "Blanqueamiento LED hasta 8 tonos más claro",
      "Resultados armónicos que no se manchan"
    ],
    process: [
      { step: 1, title: "Estudio fotográfico y escaneo DSD", desc: "Sesión fotográfica profesional y análisis morfológico de proporciones áureas." },
      { step: 2, title: "Mock-up o prueba real en boca", desc: "Colocación de una maqueta provisional para que veas y sientas tu nueva sonrisa." },
      { step: 3, title: "Preparación microscópica", desc: "Microdesgaste ultra conservador preservando el 95% del esmalte natural." },
      { step: 4, title: "Cementado adhesivo de alta precisión", desc: "Fijación definitiva con resinas fotoactivadas de máxima estabilidad cromática." }
    ],
    icon: "Gem",
    tag: "Lujo y Naturalidad",
    duration: "2 a 3 citas",
    suitableFor: "Dientes desgastados, pigmentados o con forma irregular.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    highlight: "Diseño Digital DSD + Carillas ultrafinas",
    faqs: [
      { question: "¿Las carillas se ven artificiales?", answer: "Absolutamente no. Nuestro laboratorio artesanal reproduce las translucideces, mamelones y texturas del diente natural para que nadie note que llevas carillas." }
    ]
  },
  {
    id: "odontologia-general",
    slug: "odontologia-general",
    title: "Odontología General y Restauradora",
    shortDescription: "Revisiones preventivas, curaciones estéticas invisibles con resinas nanohíbridas y férulas de bruxismo.",
    fullDescription: "La base de una sonrisa saludable es una odontología general rigurosa y preventiva. Diagnosticamos precozmente cualquier patología con cámaras intraorales de alta definición y restauramos piezas mediante técnicas biomiméticas que devuelven la anatomía exacta de tus cúspides con materiales que imitan la elasticidad y color de los dientes naturales.",
    benefits: [
      "Detección temprana con cámara 4K",
      "Restauraciones estéticas del color del diente",
      "Férulas a medida para el bruxismo",
      "Cuidado integral para toda la familia"
    ],
    process: [
      { step: 1, title: "Examen integral y cámara intraoral", desc: "Visualización en pantalla 4K del estado de cada pieza dental." },
      { step: 2, title: "Eliminación selectiva de caries", desc: "Técnica conservadora preservando el tejido sano con fresas de carburo ultrafinas." },
      { step: 3, title: "Estratificación biomimética", desc: "Aplicación de capas de esmalte y dentina artificial con fotopolimerización controlada." },
      { step: 4, title: "Ajuste oclusal milimétrico", desc: "Control de contactos de mordida y pulido brillante final." }
    ],
    icon: "Stethoscope",
    tag: "Salud & Bienestar",
    duration: "30 a 60 min",
    suitableFor: "Revisiones periódicas y curaciones preventivas.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800",
    highlight: "Resinas nanohíbridas invisibles",
    faqs: [
      { question: "¿Por qué debería cambiar mis amalgamas oscuras metálicas?", answer: "Las amalgamas antiguas contienen mercurio y no se adhieren químicamente al diente, lo que puede provocar microfisuras. Las resinas modernas devuelven la estética natural y refuerzan la estructura dental." }
    ]
  },
  {
    id: "atencion-infantil",
    slug: "atencion-infantil",
    title: "Atención Infantil (Odontopediatría)",
    shortDescription: "Odontología lúdica, respetuosa y sin lágrimas para niños y adolescentes. Experiencia mágica y sin miedos.",
    fullDescription: "En Dalia Clinic creamos experiencias mágicas para los más pequeños. Nuestra área de odontopediatría cuenta con profesionales especializados en psicología infantil y técnicas de manejo de conducta positivas (decir-mostrar-hacer). Protegemos la dentición temporal ('de leche') y mixta para garantizar un desarrollo maxilofacial óptimo.",
    benefits: [
      "Ambiente lúdico y sin instrumental invasivo",
      "Técnicas positivas: adiós al miedo al dentista",
      "Sellantes protectores contra caries",
      "Diploma y refuerzo de valentía para el niño"
    ],
    process: [
      { step: 1, title: "Adaptación lúdica", desc: "Presentación de los instrumentos como 'el espejito mágico' y 'el soplador de viento'." },
      { step: 2, title: "Examen no invasivo", desc: "Revisión cariogénica y de desarrollo dental sin dolor ni presiones." },
      { step: 3, title: "Profilaxis y sellantes", desc: "Limpieza suave con pastas de sabores agradables y aplicación de sellantes protectores." },
      { step: 4, title: "Refuerzo positivo", desc: "Felicidades al pequeño paciente y diploma de sonrisa Dalia." }
    ],
    icon: "HeartHandshake",
    tag: "Odontología Respetuosa",
    duration: "30 a 45 min",
    suitableFor: "Bebés desde el primer diente hasta jóvenes de 16 años.",
    image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&q=80&w=800",
    highlight: "Cero traumas • Juegos y refuerzo positivo",
    faqs: [
      { question: "¿A qué edad debe ser la primera visita al dentista?", answer: "La Academia Internacional de Odontopediatría recomienda la primera visita al brotar el primer diente o antes del primer año de vida, para orientar a los padres en higiene y lactancia." }
    ]
  },
  {
    id: "rehabilitacion-oral",
    slug: "rehabilitacion-oral",
    title: "Rehabilitación Oral e Implantes",
    shortDescription: "Recupera tus dientes perdidos con implantes dentales de titanio biocompatible y coronas de circonio 3D.",
    fullDescription: "La rehabilitación oral combina la precisión biomecánica con la estética más refinada para devolverte la capacidad de masticar, sonreír y hablar con total seguridad. Utilizamos implantes dentales de titanio grado médico o circonio con cirugía guiada por ordenador en 3D, garantizando una osteointegración perfecta y coronas cerámicas indistinguibles de los dientes biológicos.",
    benefits: [
      "Dientes fijos con aspecto 100% natural",
      "Cirugía guiada por ordenador en 3D",
      "Opción de dientes en el mismo día",
      "Garantía clínica y máxima masticación"
    ],
    process: [
      { step: 1, title: "Estudio tomográfico óseo 3D", desc: "Medición exacta de la densidad y volumen óseo para planificación virtual del implante." },
      { step: 2, title: "Colocación quirúrgica guiada", desc: "Inserción del implante mediante férula quirúrgica personalizada con precisión milimétrica." },
      { step: 3, title: "Periodo de osteointegración", desc: "Fusión biológica sólida del implante con el hueso maxilar (con provisional estético si se requiere)." },
      { step: 4, title: "Corona definitiva personalizada", desc: "Diseño y fresado CAD/CAM de la corona de circonio con ajuste perfecto." }
    ],
    icon: "Layers",
    tag: "Recuperación Total",
    duration: "2 a 4 meses",
    suitableFor: "Pérdida de uno o varios dientes, o prótesis removibles incómodas.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    highlight: "Implantes 3D • Cirugía guiada por ordenador",
    faqs: [
      { question: "¿Existe rechazo en los implantes dentales?", answer: "El titanio y el zirconio son materiales 100% biocompatibles reconocidos por el organismo. No existe el 'rechazo' alérgico, y nuestras tasas de osteointegración superan el 98%." }
    ]
  },
  {
    id: "radiologia",
    slug: "radiologia",
    title: "Radiología y Diagnóstico 3D",
    shortDescription: "Tomografía computarizada Cone Beam (CBCT) y radiografías panorámicas con hasta 80% menos radiación.",
    fullDescription: "En Dalia Clinic contamos con centro radiológico digital propio dentro de nuestras instalaciones. Esto nos permite obtener radiografías panorámicas (ortopantomografías), telerradiografías de perfil y tomografías tridimensionales Cone Beam (CBCT) en segundos, reduciendo la exposición a la radiación hasta en un 80% respecto a sistemas antiguos y facilitando diagnósticos certeros inmediatos.",
    benefits: [
      "Diagnósticos inmediatos en la misma clínica",
      "Tomografía 3D de altísima resolución",
      "80% menos radiación (Green Sensor)",
      "Entrega digital instantánea"
    ],
    process: [
      { step: 1, title: "Posicionamiento guiado por láser", desc: "Alineación ergonómica y cómoda en nuestra cabina abierta radiológica." },
      { step: 2, title: "Barrido digital ultra rápido", desc: "Captura de 360 grados en tan solo 9 a 14 segundos sin ruidos molestos." },
      { step: 3, title: "Reconstrucción volumétrica 3D", desc: "Software especializado que genera modelos tridimensionales interactivos." },
      { step: 4, title: "Informe clínico y planificación", desc: "Explicación detallada al paciente de su diagnóstico en pantalla de alta resolución." }
    ],
    icon: "Scan",
    tag: "Diagnóstico Digital",
    duration: "5 a 10 min",
    suitableFor: "Planificación de implantes, cirugías, ortodoncias y chequeo.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    highlight: "En la misma clínica • Entrega inmediata",
    faqs: [
      { question: "¿Es peligrosa la radiación de una radiografía dental moderna?", answer: "No. La radiación de una radiografía digital actual en Dalia Clinic equivale a unas pocas horas de exposición a la radiación natural de fondo o a un vuelo corto en avión." }
    ]
  },
  {
    id: "armonizacion-facial",
    slug: "armonizacion-facial",
    title: "Armonización Facial Médica",
    shortDescription: "Rejuvenecimiento orofacial sin cirugía: perfilado labial con ácido hialurónico, toxina botulínica y bioestimuladores.",
    fullDescription: "La armonización facial es el complemento perfecto de una sonrisa radiante. Como reza nuestro lema corporativo, 'Odontología Integral y Armonización Facial', nuestros médicos y odontólogos especialistas en estética facial analizan la dinámica muscular y los tercios del rostro para restaurar volúmenes, atenuar líneas de expresión y definir contornos con sutileza, elegancia y естественность.",
    benefits: [
      "Perfilado e hidratación labial elegante",
      "Suavizado de arrugas (patas de gallo, frente)",
      "Marcado mandibular y mentón estilizado",
      "Efecto natural y rejuvenecido sin cirugía"
    ],
    process: [
      { step: 1, title: "Análisis facial antropométrico", desc: "Evaluación minuciosa de proporciones, simetría y planos de envejecimiento facial." },
      { step: 2, title: "Anestesia tópica y marcaje guiado", desc: "Diseño anatómico de puntos de inyección para una aplicación confortable y precisa." },
      { step: 3, title: "Microinyección con cánulas atraumáticas", desc: "Depósito de producto en capas dérmicas exactas minimizando hematomas." },
      { step: 4, title: "Masaje de integración y revisión a los 15 días", desc: "Verificación de los resultados finales y simetría armónica." }
    ],
    icon: "Sparkle",
    tag: "Armonización Facial",
    duration: "45 a 60 min",
    suitableFor: "Quienes buscan realzar su belleza natural y juventud orofacial.",
    image: "https://images.unsplash.com/photo-1512290900672-1f02307df0ea?auto=format&fit=crop&q=80&w=800",
    highlight: "Ácido hialurónico premium • Resultados sutiles",
    faqs: [
      { question: "¿Los resultados se ven artificiales o congelados?", answer: "Jamás. Nuestra filosofía médica prioriza la elegancia y la naturalidad: que todos noten que luces radiante y descansada, pero sin que nadie adivine qué procedimiento te realizaste." }
    ]
  }
];
