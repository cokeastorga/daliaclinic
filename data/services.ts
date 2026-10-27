export interface Service {
  id: string;
  slug: string;
  category: 'odontologia' | 'armonizacion';
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  process: { step: number; title: string; desc: string }[];
  icon: string;
  tag: string;
  duration?: string;
  suitableFor?: string;
  image: string;
  highlight?: string;
  faqs: { question: string; answer: string }[];
}

export const servicesData: Service[] = [
  // ==========================================
  // ÁREA ODONTOLÓGICA (11 SERVICIOS)
  // ==========================================
  {
    id: 'evaluacion-prevencion',
    slug: 'evaluacion-prevencion',
    category: 'odontologia',
    title: 'Evaluación y Prevención',
    tag: 'Salud Oral',
    shortDescription: 'Evaluamos tu salud oral de manera integral para detectar necesidades y planificar los cuidados adecuados para ti.',
    fullDescription: 'El punto de partida para cuidar tu salud bucal. En Dalia Clinic realizamos un examen clínico completo y minucioso que contempla dientes, encías, mordida y tejidos blandos. Diseñamos un plan de tratamiento personalizado con enfoque preventivo para cuidar tu sonrisa a largo plazo.',
    benefits: [
      'Evaluación de dientes y encías',
      'Detección temprana de problemas',
      'Plan de tratamiento personalizado'
    ],
    process: [
      { step: 1, title: 'Anamnesis clínica', desc: 'Conversación detallada sobre tu historial de salud, inquietudes y expectativas.' },
      { step: 2, title: 'Examen clínico integral', desc: 'Revisión minuciosa de piezas dentales, encías, oclusión y tejidos blandos.' },
      { step: 3, title: 'Diagnóstico y plan', desc: 'Elaboración de un plan de tratamiento claro, transparente y adaptado a ti.' }
    ],
    icon: 'Scan',
    duration: '30 a 45 min',
    suitableFor: 'Recomendado como primera consulta o control anual para toda la familia.',
    image: '/services/evaluacion-prevencion.png',
    highlight: 'Diagnóstico integral y personalizado',
    faqs: [
      { question: '¿Con qué frecuencia debo realizarme una evaluación?', answer: 'Se recomienda al menos una vez al año para detectar cualquier anomalía a tiempo y evitar complicaciones futuras.' },
      { question: '¿La evaluación incluye radiografías si es necesario?', answer: 'Sí, de ser necesario para un diagnóstico certero, se indicarán los exámenes radiográficos correspondientes.' }
    ]
  },
  {
    id: 'limpieza-dental',
    slug: 'limpieza-dental',
    category: 'odontologia',
    title: 'Limpieza Dental',
    tag: 'Prevención',
    shortDescription: 'Eliminamos placa bacteriana y sarro para mantener dientes y encías saludables y prevenir enfermedades bucales.',
    fullDescription: 'Tratamiento preventivo esencial para remover sarro (cálculo) y placa bacteriana acumulada en zonas de difícil acceso. Realizamos profilaxis y pulido coronario con tecnología ultrasónica suave y pastas profilácticas de alta gama, manteniendo tus encías sanas y previniendo gingivitis y caries.',
    benefits: [
      'Profilaxis y pulido dental',
      'Evaluación del estado de las encías',
      'Orientación personalizada de higiene oral'
    ],
    process: [
      { step: 1, title: 'Evaluación periodontal', desc: 'Inspección de encías y niveles de acumulación de placa o sarro.' },
      { step: 2, title: 'Destartraje ultrasónico', desc: 'Eliminación cuidadosa del sarro supragingival mediante microvibraciones y agua.' },
      { step: 3, title: 'Profilaxis y pulido coronario', desc: 'Pulido con pasta especial para remover tinciones superficiales y dejar superficies lisas.' },
      { step: 4, title: 'Orientación de higiene', desc: 'Recomendaciones personalizadas de cepillado y uso de seda dental.' }
    ],
    icon: 'Sparkles',
    duration: '40 a 50 min',
    suitableFor: 'Recomendado cada 6 meses para mantener una salud bucal óptima.',
    image: '/services/limpieza-dental.png',
    highlight: 'Profilaxis profunda y encías sanas',
    faqs: [
      { question: '¿La limpieza dental produce dolor?', answer: 'No, es un procedimiento indoloro. Si presentas encías inflamadas o sensibilidad previa, aplicamos geles calmantes para tu máxima comodidad.' },
      { question: '¿La limpieza desgasta el esmalte?', answer: 'En absoluto. El ultrasonido actúa desprendiendo el sarro por microvibración sin dañar la estructura natural de tus dientes.' }
    ]
  },
  {
    id: 'restauraciones-dentales',
    slug: 'restauraciones-dentales',
    category: 'odontologia',
    title: 'Restauraciones Dentales',
    tag: 'Odontología Restauradora',
    shortDescription: 'Recuperamos dientes afectados por caries, desgaste o fracturas, buscando devolverles función y una apariencia natural.',
    fullDescription: 'Mediante resinas compuestas de última generación, reconstruimos dientes afectados por caries, fracturas o desgaste. El procedimiento es mínimamente invasivo y se seleccionan tonos específicos para mimetizar la restauración con la anatomía y el brillo natural de tu propia dentadura.',
    benefits: [
      'Tratamiento de lesiones de caries',
      'Reparación de fracturas y desgastes',
      'Restauraciones con resina compuesta'
    ],
    process: [
      { step: 1, title: 'Eliminación de la lesión', desc: 'Limpieza y remoción conservadora del tejido cariado o dañado.' },
      { step: 2, title: 'Acondicionamiento y adhesión', desc: 'Aplicación de sistemas adhesivos biocompatibles de alta fijación.' },
      { step: 3, title: 'Estratificación con resina', desc: 'Moldeado anatómico capa por capa imitando la textura y color natural.' },
      { step: 4, title: 'Ajuste de mordida y pulido', desc: 'Control de la oclusión y pulido a alto brillo para una superficie lisa y duradera.' }
    ],
    icon: 'Gem',
    duration: '45 a 60 min por pieza',
    suitableFor: 'Personas con caries, empastes antiguos desgastados o pequeñas fracturas.',
    image: '/services/restauraciones-dentales.png',
    highlight: 'Resinas estéticas de alta durabilidad',
    faqs: [
      { question: '¿Se nota la diferencia entre el diente y la resina?', answer: 'No. Disponemos de una amplia gama de tonalidades y opacidades para lograr una integración visual perfecta con tu diente.' },
      { question: '¿Puedo comer de inmediato tras una tapadura de resina?', answer: 'Sí, la resina se polimeriza y endurece en el momento con luz LED, por lo que puedes comer apenas pase el efecto de la anestesia.' }
    ]
  },
  {
    id: 'estetica-dental',
    slug: 'estetica-dental',
    category: 'odontologia',
    title: 'Estética Dental',
    tag: 'Estética Dental',
    shortDescription: 'Diseñamos tratamientos personalizados para mejorar la apariencia de tus dientes.',
    fullDescription: 'La estética dental en Dalia Clinic une arte y ciencia médica para potenciar la armonía de tu sonrisa. Ofrecemos blanqueamiento dental clínico seguro y carillas dentales que corrigen forma, color y proporción de manera sutil, siempre cuidando la naturalidad de tu expresión facial.',
    benefits: [
      'Blanqueamiento dental profesional',
      'Carillas dentales estéticas',
      'Mejoras de forma, color y proporción'
    ],
    process: [
      { step: 1, title: 'Diagnóstico estético facial', desc: 'Análisis de la línea de la sonrisa, tono de piel y proporciones dentofaciales.' },
      { step: 2, title: 'Planificación y prueba', desc: 'Definición del plan: blanqueamiento, microdiseño o carillas cerámicas/resina.' },
      { step: 3, title: 'Ejecución clínica', desc: 'Procedimiento de aclaramiento controlado o confección precisa de carillas.' },
      { step: 4, title: 'Control final', desc: 'Revisión de brillo, estabilidad del color y confort funcional.' }
    ],
    icon: 'Smile',
    duration: 'Variable según tratamiento',
    suitableFor: 'Pacientes que buscan iluminar, alinear o mejorar la estética de sus dientes frontales.',
    image: '/services/estetica-dental.png',
    highlight: 'Sonrisa luminosa y natural',
    faqs: [
      { question: '¿El blanqueamiento dental daña el esmalte?', answer: 'No. Los geles profesionales de uso clínico supervisado actúan sobre los pigmentos internos del diente sin alterar su estructura mineral.' },
      { question: '¿Cuánto dura el efecto de un blanqueamiento?', answer: 'Entre 1 a 3 años, dependiendo de hábitos como el consumo de café, té o tabaco, y de tus controles de higiene periódicos.' }
    ]
  },
  {
    id: 'endodoncia',
    slug: 'endodoncia',
    category: 'odontologia',
    title: 'Endodoncia',
    tag: 'Tratamientos de Conducto',
    shortDescription: 'Tratamos el interior de dientes afectados por inflamación o infección, buscando aliviar las molestias y conservar los dientes naturales en boca.',
    fullDescription: 'La endodoncia es el procedimiento que permite salvar un diente con daño pulpar severo (nervio dental) producido por caries profundas, traumatismos o fisuras. Desinfectamos minuciosamente los conductos radiculares y los sellamos herméticamente para devolver la función masticatoria sin dolor.',
    benefits: [
      'Diagnóstico pulpar avanzado',
      'Tratamiento de conductos minucioso',
      'Conservación de dientes naturales'
    ],
    process: [
      { step: 1, title: 'Diagnóstico radiográfico', desc: 'Determinación del estado del nervio y anatomía radicular.' },
      { step: 2, title: 'Desinfección de conductos', desc: 'Remoción del tejido pulpar inflamado e irrigación antibacteriana profunda.' },
      { step: 3, title: 'Sellado tridimensional', desc: 'Obturación hermética con materiales biocompatibles para evitar reinfecciones.' },
      { step: 4, title: 'Rehabilitación final', desc: 'Restauración o corona para devolver solidez y función al diente.' }
    ],
    icon: 'Activity',
    duration: '60 a 90 min',
    suitableFor: 'Dolor punzante al frío/calor, dolor al masticar o piezas con caries profundas.',
    image: '/services/endodoncia.png',
    highlight: 'Salva tu diente y elimina el dolor',
    faqs: [
      { question: '¿Duele hacerse un tratamiento de conducto?', answer: 'Con las técnicas de anestesia moderna actuales, el procedimiento es prácticamente indoloro y alivia el dolor agudo previo.' },
      { question: '¿Un diente con endodoncia se vuelve más frágil?', answer: 'Al perder vitalidad puede ser más propenso a fracturas, razón por la cual suele reforzarse con una resina adecuada o una corona de protección.' }
    ]
  },
  {
    id: 'cirugia-oral',
    slug: 'cirugia-oral',
    category: 'odontologia',
    title: 'Cirugía Oral y Extracciones',
    tag: 'Cirugía Oral',
    shortDescription: 'Realizamos extracciones y procedimientos quirúrgicos cuando una pieza dental u otra condición oral requiere una resolución mediante cirugía.',
    fullDescription: 'Procedimientos quirúrgicos seguros y controlados en un entorno de máxima bioseguridad. Desde extracciones dentales simples y complejas hasta la extracción de terceros molares (muelas del juicio), nos enfocamos en técnicas atraumáticas que minimizan la inflamación y garantizan una recuperación rápida.',
    benefits: [
      'Extracciones simples y complejas',
      'Extracciones de terceros molares / muelas del juicio',
      'Cuidados, indicaciones postoperatorias y seguimiento'
    ],
    process: [
      { step: 1, title: 'Evaluación y radiografía', desc: 'Estudio de la posición de la raíz y relación con estructuras anatómicas.' },
      { step: 2, title: 'Anestesia local profunda', desc: 'Aseguramos bloqueo anestésico completo para cero dolor durante el acto quirúrgico.' },
      { step: 3, title: 'Extracción atraumática', desc: 'Procedimiento cuidadoso preservando el hueso alveolar circundante.' },
      { step: 4, title: 'Indicaciones y control', desc: 'Entrega de pautas claras de cuidado en casa y control de cicatrización.' }
    ],
    icon: 'ShieldAlert',
    duration: '30 a 60 min',
    suitableFor: 'Muelas del juicio con dolor o mala posición, restos radiculares o piezas no restaurables.',
    image: '/services/cirugia-oral.png',
    highlight: 'Procedimiento seguro y sin molestias',
    faqs: [
      { question: '¿Cuánto tiempo dura la recuperación de una muela del juicio?', answer: 'La molestia mayor disminuye notablemente a las 48-72 horas siguiendo las pautas de frío local, reposo e indicaciones médicas.' },
      { question: '¿Es necesario sacar las 4 muelas del juicio al mismo tiempo?', answer: 'Se evalúa cada caso. Pueden extraerse por lados o todas juntas según la indicación del profesional y tu comodidad.' }
    ]
  },
  {
    id: 'urgencias-dentales',
    slug: 'urgencias-dentales',
    category: 'odontologia',
    title: 'Urgencias Dentales',
    tag: 'Atención de Urgencia',
    shortDescription: 'Evaluamos situaciones que requieren atención inmediata para identificar la causa y entregar el tratamiento indicado.',
    fullDescription: 'Atención oportuna y prioritaria ante emergencias dentales que no pueden esperar: dolor agudo, fracturas dentales imprevistas, pérdida de tapaduras, hinchazón facial o traumatismos por golpes. Nuestro equipo actúa con rapidez para aliviar el malestar y estabilizar la situación clínica.',
    benefits: [
      'Dolor dental agudo',
      'Inflamación e infecciones',
      'Fracturas, traumatismos, pérdida de restauraciones'
    ],
    process: [
      { step: 1, title: 'Recepción y triaje inmediato', desc: 'Evaluación inicial prioritaria del nivel de dolor o sangrado.' },
      { step: 2, title: 'Alivio sintomático de urgencia', desc: 'Aplicación de analgesia, desinflamación o sellado de emergencia.' },
      { step: 3, title: 'Tratamiento resolutivo o estabilización', desc: 'Procedimiento oportuno para resolver la causa raíz del dolor.' },
      { step: 4, title: 'Plan de continuidad', desc: 'Indicaciones médicas y programación de la cita de resolución definitiva.' }
    ],
    icon: 'HeartHandshake',
    duration: 'Atención prioritaria',
    suitableFor: 'Cualquier persona con dolor intenso, golpe en los dientes o hinchazón repentina.',
    image: '/services/urgencias-dentales.png',
    highlight: 'Alivio rápido y atención oportuna',
    faqs: [
      { question: '¿Qué debo hacer si se me fractura un diente?', answer: 'Guarda el trozo roto si lo encuentras, enjuágate suavemente con agua y contáctanos de inmediato para coordinar tu atención de urgencia.' },
      { question: '¿Cómo puedo calmar el dolor antes de llegar a la clínica?', answer: 'Evita aplicar aspirina u otros químicos directamente sobre la encía. Toma un analgésico de uso habitual y aplica frío exterior si hay hinchazón.' }
    ]
  },
  {
    id: 'protesis-fija',
    slug: 'protesis-fija',
    category: 'odontologia',
    title: 'Prótesis Fija y Coronas',
    tag: 'Rehabilitación Oral',
    shortDescription: 'Rehabilitamos dientes dañados o ausentes mediante soluciones fijas orientadas a recuperar función, estética y comodidad.',
    fullDescription: 'Las coronas y puentes fijos son restauraciones protésicas fijas de alta precisión que recubren un diente severamente desgastado o reemplazan piezas faltantes ancladas a dientes vecinos. Fabricadas con materiales biocompatibles y estéticos como zirconio o disilicato de litio, devuelven la fuerza masticatoria y la sonrisa.',
    benefits: [
      'Coronas dentales de alta estética',
      'Puentes fijos de gran estabilidad',
      'Recuperación de función y estética'
    ],
    process: [
      { step: 1, title: 'Preparación de la pieza dental', desc: 'Tallado conservador y colocación de provisorio estético inmediato.' },
      { step: 2, title: 'Toma de impresión o escaneo digital', desc: 'Registro milimétrico de las medidas para el laboratorio protésico.' },
      { step: 3, title: 'Prueba de estructura y ajuste', desc: 'Verificación del color, ajuste marginal y contactos de oclusión.' },
      { step: 4, title: 'Cementación definitiva', desc: 'Fijación permanente con cementos de alta resistencia.' }
    ],
    icon: 'Layers',
    duration: '2 a 3 sesiones programadas',
    suitableFor: 'Dientes muy destruidos, dientes con endodoncia o espacios edéntulos cortos.',
    image: '/services/protesis-fija.png',
    highlight: 'Dientes fijos, firmes y estéticos',
    faqs: [
      { question: '¿Cuánto dura una corona fija?', answer: 'Con una higiene bucal adecuada y revisiones semestrales, las coronas de zirconio y cerámica pueden durar más de 10 a 15 años en perfectas condiciones.' },
      { question: '¿Quedaré sin diente durante el tratamiento?', answer: 'No, siempre colocamos un diente provisorio estético para que salgas de la clínica pudiendo sonreír y comer con normalidad.' }
    ]
  },
  {
    id: 'protesis-removible',
    slug: 'protesis-removible',
    category: 'odontologia',
    title: 'Prótesis Removible',
    tag: 'Rehabilitación Oral',
    shortDescription: 'Reemplazamos dientes ausentes mediante prótesis removibles diseñadas de acuerdo con las necesidades de cada paciente.',
    fullDescription: 'Alternativa versátil y accesible para restituir una o varias piezas dentales ausentes (parciales) o la totalidad de los dientes (totales). Diseñamos cada prótesis de forma individualizada, buscando la máxima estabilidad, facilidad de limpieza, comodidad masticatoria y una apariencia estética natural.',
    benefits: [
      'Prótesis parciales removibles',
      'Prótesis totales cómodas',
      'Controles y ajustes de adaptación'
    ],
    process: [
      { step: 1, title: 'Impresiones anatómicas', desc: 'Registro exacto de rebordes y tejidos blandos de soporte.' },
      { step: 2, title: 'Registro de mordida y prueba estética', desc: 'Selección conjunta de forma, tamaño y color de los dientes artificiales.' },
      { step: 3, title: 'Instalación protésica', desc: 'Ajuste de retenedores, control de puntos de presión y oclusión.' },
      { step: 4, title: 'Controles de adaptación', desc: 'Citas de seguimiento para garantizar comodidad y ausencia de rozaduras.' }
    ],
    icon: 'Stethoscope',
    duration: '3 a 4 sesiones',
    suitableFor: 'Pacientes que han perdido varios dientes y desean una solución funcional y accesible.',
    image: '/services/protesis-removible.png',
    highlight: 'Recupera tu masticación y confianza',
    faqs: [
      { question: '¿Es difícil acostumbrarse a una prótesis removible?', answer: 'Requiere un periodo de adaptación de algunas semanas. Con nuestros controles de ajuste guiado, el proceso se vuelve muy cómodo y natural.' },
      { question: '¿Cómo se cuida la prótesis en el hogar?', answer: 'Se retira y cepilla después de cada comida con cepillo especial y agua, manteniéndola limpia y desinfectada.' }
    ]
  },
  {
    id: 'odontopediatria',
    slug: 'odontopediatria',
    category: 'odontologia',
    title: 'Odontopediatría',
    tag: 'Odontología Infantil',
    shortDescription: 'Acompañamos el cuidado de la salud oral de niños y niñas mediante una atención cercana, preventiva y adaptada a cada etapa de su desarrollo.',
    fullDescription: 'En Dalia Clinic los más pequeños son recibidos con calidez, paciencia y un enfoque lúdico y amigable. Nos especializamos en crear experiencias positivas libres de temor, enfocándonos en la prevención, sellantes, flúor, tratamiento de caries tempranas y educación en higiene para padres e hijos.',
    benefits: [
      'Controles preventivos infantiles',
      'Tratamiento de caries sin dolor',
      'Educación en higiene y hábitos saludables'
    ],
    process: [
      { step: 1, title: 'Adaptación y confianza', desc: 'Ambiente lúdico para que el niño conozca los instrumentos sin miedo.' },
      { step: 2, title: 'Examen dental preventivo', desc: 'Revisión del crecimiento de maxilares y estado de dientes temporales y definitivos.' },
      { step: 3, title: 'Prevención activa', desc: 'Aplicación de sellantes de fosas y fisuras o barniz de flúor.' },
      { step: 4, title: 'Consejería familiar', desc: 'Pautas de cepillado y alimentación saludable para el hogar.' }
    ],
    icon: 'Smile',
    duration: '30 a 45 min',
    suitableFor: 'Bebés, niños y adolescentes desde la erupción de los primeros dientes.',
    image: '/services/odontopediatria.png',
    highlight: 'Atención cariñosa y sin temores',
    faqs: [
      { question: '¿A qué edad debe ser la primera visita al dentista?', answer: 'Lo ideal es al cumplir el primer año o tras la erupción del primer diente temporal para guiar a los padres en prevención.' },
      { question: '¿Por qué es importante tratar los dientes de leche si se van a caer?', answer: 'Porque guardan el espacio para los definitivos, permiten una correcta masticación y fonoaudiología, y las infecciones pueden dañar el diente permanente en formación.' }
    ]
  },
  {
    id: 'ortodoncia',
    slug: 'ortodoncia',
    category: 'odontologia',
    title: 'Ortodoncia',
    tag: 'Ortodoncia',
    shortDescription: 'Evaluamos la posición de los dientes y la mordida para planificar tratamientos que mejoren su función y estética.',
    fullDescription: 'La ortodoncia corrige la mala posición de los dientes, problemas de mordida (maloclusiones) y discrepancias óseas. Trabajamos con opciones de brackets convencionales, estéticos y sistemas de alineadores invisibles, planificando cada movimiento para alcanzar armonía facial y salud articular duradera.',
    benefits: [
      'Evaluación de alineación y mordida',
      'Planificación individual del tratamiento',
      'Controles y seguimiento de la evolución'
    ],
    process: [
      { step: 1, title: 'Estudio de ortodoncia', desc: 'Fotografías clínicas, modelos y análisis cefalométrico radiográfico.' },
      { step: 2, title: 'Instalación de aparatología', desc: 'Colocación precisa de brackets o entrega del primer set de alineadores.' },
      { step: 3, title: 'Controles periódicos mensuales', desc: 'Ajuste de arcos, ligaduras y monitoreo del avance dental.' },
      { step: 4, title: 'Retención y estabilidad', desc: 'Instalación de contenciones fijas y removibles para preservar el resultado de por vida.' }
    ],
    icon: 'Sparkle',
    duration: 'Controles de 20 a 30 min',
    suitableFor: 'Niños (desde los 7 años para intercepción), adolescentes y adultos de cualquier edad.',
    image: '/services/ortodoncia.png',
    highlight: 'Alineación perfecta y mordida armónica',
    faqs: [
      { question: '¿Hay límite de edad para realizarse ortodoncia?', answer: 'No. Los dientes pueden moverse a cualquier edad siempre que el soporte periodontal y las encías estén sanos.' },
      { question: '¿Cuánto tiempo suele durar un tratamiento de ortodoncia?', answer: 'Generalmente entre 12 a 24 meses, dependiendo de la complejidad de la maloclusión y de la constancia en los controles.' }
    ]
  },

  // ==========================================
  // ÁREA DE ARMONIZACIÓN FACIAL (4 SERVICIOS)
  // ¡Estás van sin etiqueta en la tarjeta!
  // ==========================================
  {
    id: 'toxina-botulinica',
    slug: 'toxina-botulinica',
    category: 'armonizacion',
    title: 'Toxina Botulínica',
    tag: '',
    shortDescription: 'Suavizamos líneas de expresión y arrugas para disminuir temporalmente la actividad muscular en zonas específicas del rostro.',
    fullDescription: 'Tratamiento médico estético de referencia que relaja selectivamente los músculos responsables de arrugas dinámicas en frente, entrecejo y patas de gallo. Además, tiene gran eficacia terapéutica en odontología para el tratamiento del bruxismo, dolores mandibulares por hipertrofia del masetero y sonrisa gingival.',
    benefits: [
      'Líneas de expresión (frente, entrecejo, patas de gallo)',
      'Sonrisa gingival (corrección sutil de exposición de encía)',
      'Bruxismo y tensión muscular (relajación maseteros)'
    ],
    process: [
      { step: 1, title: 'Evaluación facial y muscular', desc: 'Análisis de la gesticulación y dosificación personalizada.' },
      { step: 2, title: 'Marcaje anatómico milimétrico', desc: 'Identificación de los puntos clave de microinyección.' },
      { step: 3, title: 'Microaplicación indolora', desc: 'Inyección con microagujas ultrafinas con molestias mínimas.' },
      { step: 4, title: 'Control y retoque a los 14 días', desc: 'Evaluación del resultado final consolidado y simetría gestual.' }
    ],
    icon: 'Sparkles',
    duration: '20 a 30 min',
    suitableFor: 'Líneas dinámicas de expresión, bruxismo o sonrisa gingival.',
    image: '/services/toxina-botulinica.png',
    highlight: 'Efecto natural sin perder expresividad',
    faqs: [
      { question: '¿El rostro se verá rígido o inexpresivo?', answer: 'No. Nuestra filosofía en Dalia Clinic es la moderación y la naturalidad: relajamos el músculo sin congelar tu capacidad de expresar emociones.' },
      { question: '¿Cuánto dura el efecto de la toxina botulínica?', answer: 'El efecto comienza entre los 3 y 5 días, alcanzando su plenitud a las dos semanas y con una duración media de 4 a 6 meses.' }
    ]
  },
  {
    id: 'acido-hialuronico',
    slug: 'acido-hialuronico',
    category: 'armonizacion',
    title: 'Ácido Hialurónico',
    tag: '',
    shortDescription: 'Utilizamos ácido hialurónico para aportar volumen, definición o proyección en distintas zonas del rostro, según las necesidades de cada paciente.',
    fullDescription: 'El ácido hialurónico es un gel biocompatible y reabsorbible que hidrata profundamente, recupera volúmenes perdidos por el paso del tiempo y esculpe contornos armónicos. Es ideal para perfilado e hidratación labial, corrección de surcos nasogenianos, rinomodelación y definición del ángulo mandibular y mentón.',
    benefits: [
      'Perfilado y aumento de labios',
      'Rinomodelación sin cirugía',
      'Mentón y contorno mandibular'
    ],
    process: [
      { step: 1, title: 'Análisis de proporciones faciales', desc: 'Evaluación estética según la anatomía individual y deseos del paciente.' },
      { step: 2, title: 'Anestesia tópica o local', desc: 'Protocolo de confort para una experiencia completamente indolora.' },
      { step: 3, title: 'Infiltración guiada', desc: 'Aplicación mediante cánulas o microagujas según la zona a esculpir.' },
      { step: 4, title: 'Moldeado y resultado inmediato', desc: 'Apreciación instantánea de los contornos definidos y volumen recuperado.' }
    ],
    icon: 'Gem',
    duration: '30 a 45 min',
    suitableFor: 'Labios finos o asimétricos, surcos marcados o pérdida de definición mandibular.',
    image: '/services/acido-hialuronico.png',
    highlight: 'Definición, volumen e hidratación profunda',
    faqs: [
      { question: '¿Los resultados son inmediatos?', answer: 'Sí, el volumen y la definición se aprecian de inmediato, y la hidratación y textura de la piel continúan mejorando las semanas siguientes.' },
      { question: '¿Cuánto tiempo dura el ácido hialurónico?', answer: 'Entre 9 y 18 meses, según la reticulación del producto empleado y la zona tratada.' }
    ]
  },
  {
    id: 'bioestimulacion-facial',
    slug: 'bioestimulacion-facial',
    category: 'armonizacion',
    title: 'Bioestimulación y Rejuvenecimiento Facial',
    tag: '',
    shortDescription: 'Tratamientos orientados a estimular la producción de colágeno y mejorar progresivamente la calidad, firmeza y apariencia de la piel.',
    fullDescription: 'Procedimientos regenerativos diseñados para activar los fibroblastos de tu propia dermis, desencadenando la producción natural de nuevo colágeno y elastina. Mediante bioestimuladores, skinboosters y complejos de vitaminas y ácido hialurónico no reticulado, la piel recupera tonicidad, elasticidad y luminosidad.',
    benefits: [
      'Bioestimuladores de colágeno',
      'Skinboosters e hidratación profunda',
      'Vitaminas y mesoterapia facial'
    ],
    process: [
      { step: 1, title: 'Diagnóstico de la calidad de piel', desc: 'Evaluación del grado de flacidez, elasticidad y luminosidad dérmica.' },
      { step: 2, title: 'Preparación y desinfección', desc: 'Limpieza de la piel y anestesia tópica para un confort total.' },
      { step: 3, title: 'Vectorización dérmica', desc: 'Microinyecciones dérmicas en vectores tensores que reactivan el tejido.' },
      { step: 4, title: 'Plan de evolución progresiva', desc: 'Monitoreo de la mejoría paulatina en tersura y firmeza en los meses siguientes.' }
    ],
    icon: 'Activity',
    duration: '45 min',
    suitableFor: 'Piel con signos de fatiga, deshidratación, falta de firmeza o luminosidad.',
    image: '/services/bioestimulacion-facial.png',
    highlight: 'Activa tu propio colágeno y firmeza',
    faqs: [
      { question: '¿En qué se diferencia de un relleno de ácido hialurónico?', answer: 'A diferencia de los rellenos que aportan volumen inmediato, la bioestimulación actúa nutriendo y regenerando la estructura interna de la piel sin alterar tus facciones ni inflar volúmenes.' },
      { question: '¿Cuándo se notan los efectos?', answer: 'La hidratación se nota en pocos días, mientras que la producción de nuevo colágeno alcanza su pico máximo a los 2-3 meses.' }
    ]
  },
  {
    id: 'armonizacion-facial-integral',
    slug: 'armonizacion-facial-integral',
    category: 'armonizacion',
    title: 'Armonización Facial Integral',
    tag: '',
    shortDescription: 'Evaluamos el rostro de manera integral para identificar qué zonas pueden tratarse y definir una combinación de procedimientos de acuerdo con los objetivos de cada paciente.',
    fullDescription: 'La armonización facial integral es la sinergia magistral entre la sonrisa y el rostro. Evaluamos proporciones, perfilometría, dinámicas gestuales y volumen para trazar un plan global escalonado que combine odontología estética, toxina botulínica, ácido hialurónico y bioestimulación, resaltando tu belleza única con elegancia y sutileza.',
    benefits: [
      'Evaluación de proporciones faciales',
      'Planificación de distintas zonas del rostro',
      'Combinación de tratamientos personalizados'
    ],
    process: [
      { step: 1, title: 'Estudio orofacial completo', desc: 'Fotografía clínica y medición de proporciones del tercio inferior y medio facial.' },
      { step: 2, title: 'Diseño del protocolo integrado', desc: 'Selección concertada de las técnicas más idóneas para tu objetivo estético.' },
      { step: 3, title: 'Ejecución gradual en etapas', desc: 'Aplicación segura y planificada en una o más sesiones coordinadas.' },
      { step: 4, title: 'Acompañamiento y mantenimiento', desc: 'Seguimiento fotográfico comparativo y controles periódicos.' }
    ],
    icon: 'Sparkle',
    duration: 'Planificado en fases',
    suitableFor: 'Personas que buscan un rejuvenecimiento o embellecimiento armónico integral sin cirugías invasivas.',
    image: '/services/armonizacion-facial-integral.png',
    highlight: 'Equilibrio orofacial sutil y exclusivo',
    faqs: [
      { question: '¿Es un tratamiento invasivo?', answer: 'No, todos los procedimientos son mínimamente invasivos, ambulatorios y te permiten retomar tus actividades de manera prácticamente inmediata.' },
      { question: '¿Por qué realizar la armonización facial con profesionales dentales/faciales?', answer: 'Porque los cirujanos dentistas y médicos especialistas son los mayores conocedores de la anatomía orofacial, la mordida y la musculatura de la mímica y la sonrisa.' }
    ]
  }
];
