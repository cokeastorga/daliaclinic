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
  faqs: { question: string; answer: string }[];
}

export const servicesData: Service[] = [
  {
    id: "limpieza-dental",
    slug: "limpieza-dental",
    title: "Limpieza Dental Avanzada",
    shortDescription: "Profilaxis integral con tecnología ultrasónica y aeropulidor para una eliminación profunda de sarro, placa bacteriana y manchas.",
    fullDescription: "Nuestra limpieza dental profesional va más allá de un procedimiento convencional. Utilizamos ultrasonido piezoeléctrico de última generación que desintegra el cálculo subgingival y supragingival con máxima suavidad, complementado con tecnología de aeropulidor de micropulido con glicina que devuelve el brillo natural sin desgastar el esmalte ni provocar sensibilidad.",
    benefits: [
      "Eliminación del 100% de la placa bacteriana y sarro calcificado",
      "Prevención activa de gingivitis y periodontitis",
      "Eliminación de manchas provocadas por café, té, tabaco o vino",
      "Aliento fresco prolongado y sensación inigualable de pureza",
      "Procedimiento indoloro y respetuoso con encías sensibles"
    ],
    process: [
      { step: 1, title: "Diagnóstico y tinción", desc: "Evaluación visual y aplicación de revelador de placa para identificar zonas críticas." },
      { step: 2, title: "Destartraje ultrasónico", desc: "Remoción suave del sarro dental mediante vibraciones de alta frecuencia y microflujo de agua." },
      { step: 3, title: "Aeropulido y remoción de manchas", desc: "Pulido con microesferas de glicina que limpian los intersticios más inaccesibles." },
      { step: 4, title: "Fluorización remineralizante", desc: "Aplicación de barniz de flúor de alta potencia para sellar túbulos dentinarios y prevenir sensibilidad." }
    ],
    icon: "Sparkles",
    tag: "Prevención Esencial",
    duration: "45 a 60 minutos",
    suitableFor: "Todos los pacientes, recomendado cada 6 meses.",
    faqs: [
      { question: "¿La limpieza dental desgasta o debilita el esmalte?", answer: "No. Nuestras puntas ultrasónicas y pulidores de glicina actúan por vibración armónica y no por fricción agresiva, respetando al 100% la estructura cristalina del esmalte." },
      { question: "¿Duele el procedimiento?", answer: "En Dalia Clinic aplicamos protocolos de confort. Si presentas encías inflamadas o sensibilidad previa, aplicamos geles anestésicos tópicos para una experiencia totalmente placentera." }
    ]
  },
  {
    id: "extracciones",
    slug: "extracciones",
    title: "Cirugía Oral y Extracciones",
    shortDescription: "Cirugía dental mínimamente invasiva y extracción atraumática de terceros molares (muelas del juicio) con rápida recuperación.",
    fullDescription: "Realizamos procedimientos quirúrgicos dentales bajo estándares de excelencia y preservación tisular. Desde la extracción programada de cordales impactados o retenidos hasta cirugías preprotésicas, empleamos instrumental piezoquirúrgico y anestesia computarizada para garantizar cero dolor, mínima inflamación y una cicatrización acelerada con concentrados plaquetarios (PRF).",
    benefits: [
      "Técnica atraumática que preserva el hueso y los tejidos circundantes",
      "Manejo avanzado de muelas del juicio complejas e impactadas",
      "Planificación digital 3D previa con tomografía computarizada",
      "Posibilidad de sedación consciente para pacientes ansiosos",
      "Protocolo postoperatorio con analgésicos de última generación"
    ],
    process: [
      { step: 1, title: "Tomografía 3D de alta resolución", desc: "Localización exacta de raíces, nervio dentario inferior y seno maxilar." },
      { step: 2, title: "Anestesia guiada indolora", desc: "Bloqueo anestésico profundo con microaguja y técnica computarizada." },
      { step: 3, title: "Luxación atraumática", desc: "Liberación de la pieza dental sin ejercer fuerzas nocivas sobre la mandíbula." },
      { step: 4, title: "Biopreservación y sutura fina", desc: "Colocación de membranas hemostáticas y suturas microscópicas de reabsorción suave." }
    ],
    icon: "ShieldAlert",
    tag: "Cirugía Atraumática",
    duration: "30 a 60 minutos por pieza",
    suitableFor: "Pacientes con muelas del juicio retenidas, piezas no restaurables o por indicación ortodóntica.",
    faqs: [
      { question: "¿Cuánto tiempo dura el reposo tras una extracción?", answer: "Recomendamos reposo relativo de 24 a 48 horas, evitando esfuerzos intensos y comidas calientes. La mayoría de nuestros pacientes retoman sus labores habituales al día siguiente." }
    ]
  },
  {
    id: "endodoncia",
    slug: "endodoncia",
    title: "Endodoncia Microscópica",
    shortDescription: "Tratamiento de conductos guiado por microscopio para salvar dientes dañados, eliminando la infección y el dolor en una sola sesión.",
    fullDescription: "La endodoncia en Dalia Clinic se realiza con magnificación microscópica y localizadores apicales electrónicos. Esto nos permite limpiar, desinfectar y sellar tridimensionalmente los conductos radiculares con una tasa de éxito superior al 98%, preservando tu diente natural y devolviéndole su función masticatoria sin ninguna molestia.",
    benefits: [
      "Salva tu diente natural evitando extracciones e implantes prematuros",
      "Alivio inmediato y definitivo del dolor dental agudo",
      "Visualización milimétrica bajo microscopio clínico",
      "Sistemas rotatorios de níquel-titanio de máxima flexibilidad",
      "Completado generalmente en una única sesión cómoda"
    ],
    process: [
      { step: 1, title: "Aislamiento absoluto estéril", desc: "Protección con dique de goma para garantizar campo 100% aséptico." },
      { step: 2, title: "Acceso conservador guiado", desc: "Apertura microscópica mínima conservando la mayor cantidad de diente sano." },
      { step: 3, title: "Conformación rotatoria y desinfección", desc: "Limpieza química con activación ultrasónica que erradica las bacterias." },
      { step: 4, title: "Obturación tridimensional termoplástica", desc: "Sellado hermético de los conductos con gutapercha caliente biocompatible." }
    ],
    icon: "Activity",
    tag: "Conservación Dental",
    duration: "60 a 90 minutos",
    suitableFor: "Caries profundas, pulpitis, necrosis pulpar o traumatismos con afectación del nervio.",
    faqs: [
      { question: "¿El tratamiento de conducto es doloroso?", answer: "Es un mito del pasado. Con nuestras técnicas anestésicas contemporáneas y magnificación óptica, el procedimiento es completamente indoloro." }
    ]
  },
  {
    id: "ortodoncias",
    slug: "ortodoncias",
    title: "Ortodoncia Digital y Alineadores Invisibles",
    shortDescription: "Alineación dental de alta precisión mediante alineadores transparentes invisibles, brackets de zafiro estéticos y sistemas de autoligado.",
    fullDescription: "Diseñamos sonrisas armónicas respetando la biomecánica craneofacial. Somos especialistas en ortodoncia invisible con alineadores transparentes removibles, diseñados a partir de un escaneo intraoral 3D donde puedes visualizar el resultado final antes de comenzar. También ofrecemos brackets de cristal de zafiro de máxima discreción y ortodoncia interceptiva.",
    benefits: [
      "Planificación virtual 3D del movimiento de cada diente (ClinCheck)",
      "Alineadores 100% transparentes, cómodos y removibles para comer",
      "Sin alambres que pinchen ni urgencias por brackets despegados",
      "Menor tiempo total de tratamiento gracias a fuerzas continuas biológicas",
      "Higiene oral diaria sin complicaciones"
    ],
    process: [
      { step: 1, title: "Escaneo intraoral 3D", desc: "Mapeo digital de la arcada completa en 2 minutos sin incómodas pastas." },
      { step: 2, title: "Planificación cinemática 3D", desc: "Simulación digital de los movimientos y aprobación personalizada de tu sonrisa." },
      { step: 3, title: "Entrega de alineadores", desc: "Colocación de microataches estéticos e instrucción de cambio de férulas." },
      { step: 4, title: "Revisiones de control digital", desc: "Monitoreo periódico para garantizar la perfecta evolución de tu mordida." }
    ],
    icon: "Smile",
    tag: "Tecnología Invisible",
    duration: "Planes de 6 a 18 meses según complejidad",
    suitableFor: "Apiñamiento, mordidas cruzadas, diastemas y desalineaciones a cualquier edad.",
    faqs: [
      { question: "¿Cuántas horas al día debo llevar los alineadores?", answer: "Deben usarse 22 horas al día, retirándolos únicamente para comer y cepillarte los dientes." }
    ]
  },
  {
    id: "estetica-oral",
    slug: "estetica-oral",
    title: "Estética Oral y Diseño de Sonrisa",
    shortDescription: "Transformación artística de tu sonrisa con carillas de porcelana ultrafinas, microcarillas de resina y blanqueamiento dental de alta gama.",
    fullDescription: "En Dalia Clinic concebimos la estética dental como una obra de arte respaldada por la ciencia. Mediante el Diseño Digital de Sonrisa (DSD), analizamos las proporciones de tu rostro, labios y encías para crear carillas de porcelana estratificadas a mano o carillas de resina inyectada que irradian luminosidad, naturalidad y perfección milimétrica.",
    benefits: [
      "Simulación previa de tu nueva sonrisa en tu rostro antes de tocar tus dientes",
      "Carillas de porcelana feldespática o disilicato de litio de 0.3 mm",
      "Blanqueamiento dental combinado (clínica + férula en casa) hasta 8 tonos más claro",
      "Corrección instantánea de forma, tamaño, posición y color",
      "Resultados armónicos y duraderos que resisten manchas y desgaste"
    ],
    process: [
      { step: 1, title: "Estudio fotográfico y escaneo DSD", desc: "Sesión fotográfica profesional y análisis morfológico de proporciones áureas." },
      { step: 2, title: "Mock-up o prueba real en boca", desc: "Colocación de una maqueta provisional para que veas y sientas tu nueva sonrisa." },
      { step: 3, title: "Preparación microscópica", desc: "Microdesgaste ultra conservador preservando el 95% del esmalte natural." },
      { step: 4, title: "Cementado adhesivo de alta precisión", desc: "Fijación definitiva con resinas fotoactivadas de máxima estabilidad cromática." }
    ],
    icon: "Gem",
    tag: "Alta Gama y Lujo",
    duration: "2 a 3 citas para diseño integral",
    suitableFor: "Dientes desgastados, pigmentados, con diastemas o asimetrías estéticas.",
    faqs: [
      { question: "¿Las carillas se ven artificiales?", answer: "Absolutamente no. Nuestro laboratorio artesanal reproduce las translucideces, mamelones y texturas del diente natural para que nadie note que llevas carillas." }
    ]
  },
  {
    id: "odontologia-general",
    slug: "odontologia-general",
    title: "Odontología General y Restauradora",
    shortDescription: "Cuidado preventivo integral, curaciones estéticas biomiméticas con resinas nano-híbridas y tratamiento del bruxismo.",
    fullDescription: "La base de una sonrisa saludable es una odontología general rigurosa y preventiva. Diagnosticamos precozmente cualquier patología con cámaras intraorales de alta definición y restauramos piezas mediante técnicas biomiméticas que devuelven la anatomía exacta de tus cúspides con materiales que imitan la elasticidad y color de los dientes naturales.",
    benefits: [
      "Diagnóstico precoz de microcaries antes de que causen dolor",
      "Empastes invisibles de composite nanohíbrido libres de mercurio",
      "Férulas de descarga neuromiorrelajantes personalizadas para bruxismo",
      "Protección contra el desgaste dental nocturno y dolor mandibular",
      "Mantenimiento integral del equilibrio oclusal"
    ],
    process: [
      { step: 1, title: "Examen integral y cámara intraoral", desc: "Visualización en pantalla 4K del estado de cada pieza dental." },
      { step: 2, title: "Eliminación selectiva de caries", desc: "Técnica conservadora preservando el tejido sano con fresas de carburo ultrafinas." },
      { step: 3, title: "Estratificación biomimética", desc: "Aplicación de capas de esmalte y dentina artificial con fotopolimerización controlada." },
      { step: 4, title: "Ajuste oclusal milimétrico", desc: "Control de contactos de mordida y pulido brillante final." }
    ],
    icon: "Stethoscope",
    tag: "Salud Integral",
    duration: "30 a 60 minutos",
    suitableFor: "Toda la familia para revisiones periódicas y restauraciones de calidad.",
    faqs: [
      { question: "¿Por qué debería cambiar mis amalgamas oscuras metálicas?", answer: "Las amalgamas antiguas contienen mercurio y no se adhieren químicamente al diente, lo que puede provocar microfisuras. Las resinas modernas devuelven la estética natural y refuerzan la estructura dental." }
    ]
  },
  {
    id: "atencion-infantil",
    slug: "atencion-infantil",
    title: "Atención Infantil (Odontopediatría)",
    shortDescription: "Cuidado dental cálido, lúdico y sin miedos para bebés, niños y adolescentes, fomentando hábitos saludables de por vida.",
    fullDescription: "En Dalia Clinic creamos experiencias mágicas para los más pequeños. Nuestra área de odontopediatría cuenta con profesionales especializados en psicología infantil y técnicas de manejo de conducta positivas (decir-mostrar-hacer). Protegemos la dentición temporal ('de leche') y mixta para garantizar un desarrollo maxilofacial óptimo.",
    benefits: [
      "Ambiente adaptado, acogedor y sin estímulos invasivos",
      "Técnicas de odontología positiva que previenen la fobia dental",
      "Sellantes de fosas y fisuras que evitan el 85% de las caries infantiles",
      "Control del recambio dental y detección temprana de problemas ortodóncicos",
      "Educación interactiva y premios por valentía"
    ],
    process: [
      { step: 1, title: "Adaptación lúdica", desc: "Presentación de los instrumentos como 'el espejito mágico' y 'el soplador de viento'." },
      { step: 2, title: "Examen no invasivo", desc: "Revisión cariogénica y de desarrollo dental sin dolor ni presiones." },
      { step: 3, title: "Profilaxis y sellantes", desc: "Limpieza suave con pastas de sabores agradables y aplicación de sellantes protectores." },
      { step: 4, title: "Refuerzo positivo", desc: "Felicidades al pequeño paciente y diploma de sonrisa Dalia." }
    ],
    icon: "HeartHandshake",
    tag: "Odontopediatría Respetuosa",
    duration: "30 a 45 minutos",
    suitableFor: "Bebés desde el primer diente hasta adolescentes de 16 años.",
    faqs: [
      { question: "¿A qué edad debe ser la primera visita al dentista?", answer: "La Academia Internacional de Odontopediatría recomienda la primera visita al brotar el primer diente o antes del primer año de vida, para orientar a los padres en higiene y lactancia." }
    ]
  },
  {
    id: "rehabilitacion-oral",
    slug: "rehabilitacion-oral",
    title: "Rehabilitación Oral e Implantes",
    shortDescription: "Recuperación completa de piezas dentales perdidas con implantes dentales de titanio biocompatible, coronas de circonio y prótesis fijas.",
    fullDescription: "La rehabilitación oral combina la precisión biomecánica con la estética más refinada para devolverte la capacidad de masticar, sonreír y hablar con total seguridad. Utilizamos implantes dentales de titanio grado médico o circonio con cirugía guiada por ordenador en 3D, garantizando una osteointegración perfecta y coronas cerámicas indistinguibles de los dientes biológicos.",
    benefits: [
      "Implantes dentales con garantía de por vida y tasas de éxito del 99%",
      "Cirugía guiada por ordenador mínimamente invasiva (sin incisiones grandes)",
      "Coronas libres de metal en Disilicato de Litio y Zirconio ultra resistente",
      "Posibilidad de carga inmediata (dientes fijos en el mismo día)",
      "Recuperación total de la masticación y armonía del tercio inferior del rostro"
    ],
    process: [
      { step: 1, title: "Estudio tomográfico óseo 3D", desc: "Medición exacta de la densidad y volumen óseo para planificación virtual del implante." },
      { step: 2, title: "Colocación quirúrgica guiada", desc: "Inserción del implante mediante férula quirúrgica personalizada con precisión milimétrica." },
      { step: 3, title: "Periodo de osteointegración", desc: "Fusión biológica sólida del implante con el hueso maxilar (con provisional estético si se requiere)." },
      { step: 4, title: "Corona definitiva personalizada", desc: "Diseño y fresado CAD/CAM de la corona de circonio con ajuste perfecto." }
    ],
    icon: "Layers",
    tag: "Recuperación Completa",
    duration: "2 a 4 meses según fase biológica",
    suitableFor: "Personas con pérdida de uno, varios o todos los dientes.",
    faqs: [
      { question: "¿Existe rechazo en los implantes dentales?", answer: "El titanio y el zirconio son materiales 100% biocompatibles reconocidos por el organismo. No existe el 'rechazo' alérgico, y nuestras tasas de osteointegración superan el 98%." }
    ]
  },
  {
    id: "radiologia",
    slug: "radiologia",
    title: "Radiología y Diagnóstico Digital 3D",
    shortDescription: "Tecnología de imagenología diagnóstica de máxima resolución con tomografía computarizada Cone Beam (CBCT) y mínima radiación.",
    fullDescription: "En Dalia Clinic contamos con centro radiológico digital propio dentro de nuestras instalaciones. Esto nos permite obtener radiografías panorámicas (ortopantomografías), telerradiografías de perfil y tomografías tridimensionales Cone Beam (CBCT) en segundos, reduciendo la exposición a la radiación hasta en un 80% respecto a sistemas antiguos y facilitando diagnósticos certeros inmediatos.",
    benefits: [
      "Diagnósticos inmediatos sin necesidad de derivaciones a centros externos",
      "Tomografía volumétrica 3D Cone Beam de altísima nitidez milimétrica",
      "Tecnología Green Sensor con hasta un 80% menos de dosis radiológica",
      "Visualización tridimensional de nervios, senos paranasales y calidad ósea",
      "Entrega digital instantánea y visualización en pantallas clínicas"
    ],
    process: [
      { step: 1, title: "Posicionamiento guiado por láser", desc: "Alineación ergonómica y cómoda en nuestra cabina abierta radiológica." },
      { step: 2, title: "Barrido digital ultra rápido", desc: "Captura de 360 grados en tan solo 9 a 14 segundos sin ruidos molestos." },
      { step: 3, title: "Reconstrucción volumétrica 3D", desc: "Software especializado que genera modelos tridimensionales interactivos." },
      { step: 4, title: "Informe clínico y planificación", desc: "Explicación detallada al paciente de su diagnóstico en pantalla de alta resolución." }
    ],
    icon: "Scan",
    tag: "Diagnóstico 3D",
    duration: "5 a 10 minutos",
    suitableFor: "Planificación de implantes, cirugías, ortodoncias y endodoncias.",
    faqs: [
      { question: "¿Es peligrosa la radiación de una radiografía dental moderna?", answer: "No. La radiación de una radiografía digital actual en Dalia Clinic equivale a unas pocas horas de exposición a la radiación natural de fondo o a un vuelo corto en avión." }
    ]
  },
  {
    id: "armonizacion-facial",
    slug: "armonizacion-facial",
    title: "Armonización Facial Médica",
    shortDescription: "Tratamientos estéticos faciales no quirúrgicos con ácido hialurónico, toxina botulínica y bioestimuladores para resaltar tu belleza natural.",
    fullDescription: "La armonización facial es el complemento perfecto de una sonrisa radiante. Como reza nuestro lema corporativo, 'Odontología Integral y Armonización Facial', nuestros médicos y odontólogos especialistas en estética facial analizan la dinámica muscular y los tercios del rostro para restaurar volúmenes, atenuar líneas de expresión y definir contornos con sutileza, elegancia y естественность.",
    benefits: [
      "Perfilado e hidratación labial con ácido hialurónico de reticulación premium",
      "Suavizado de arrugas dinámicas en frente, entrecejo y patas de gallo con toxina botulínica",
      "Rinomodelación sin cirugía para corregir ángulos nasales",
      "Marcado mandibular y proyección del mentón para un perfil estilizado",
      "Bioestimuladores de colágeno (Radiesse, Sculptra) que devuelven la firmeza dérmica"
    ],
    process: [
      { step: 1, title: "Análisis facial antropométrico", desc: "Evaluación minuciosa de proporciones, simetría y planos de envejecimiento facial." },
      { step: 2, title: "Anestesia tópica y marcaje guiado", desc: "Diseño anatómico de puntos de inyección para una aplicación confortable y precisa." },
      { step: 3, title: "Microinyección con cánulas atraumáticas", desc: "Depósito de producto en capas dérmicas exactas minimizando hematomas." },
      { step: 4, title: "Masaje de integración y revisión a los 15 días", desc: "Verificación de los resultados finales y simetría armónica." }
    ],
    icon: "Sparkle",
    tag: "Exclusividad y Armonía",
    duration: "45 a 60 minutos",
    suitableFor: "Personas que buscan rejuvenecimiento, simetría y realce facial sin someterse a cirugías agresivas.",
    faqs: [
      { question: "¿Los resultados se ven artificiales o congelados?", answer: "Jamás. Nuestra filosofía médica prioriza la elegancia y la naturalidad: que todos noten que luces radiante y descansada, pero sin que nadie adivine qué procedimiento te realizaste." }
    ]
  }
];
