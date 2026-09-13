export interface FAQ {
  id: string;
  category: "general" | "citas" | "pagos" | "tratamientos";
  question: string;
  answer: string;
}

export const faqsData: FAQ[] = [
  {
    id: "faq-1",
    category: "citas",
    question: "¿Cómo puedo agendar mi primera cita de valoración?",
    answer: "Puedes agendar fácilmente a través de nuestro formulario en línea en esta web, haciendo clic en el botón de WhatsApp para hablar directamente con nuestra coordinadora de pacientes, o llamándonos al +56 9 7538 4019. Te asignaremos un turno prioritario según tu disponibilidad."
  },
  {
    id: "faq-2",
    category: "tratamientos",
    question: "¿Qué incluye la consulta de valoración inicial?",
    answer: "Incluye una evaluación clínica completa con nuestros especialistas, registro fotográfico en alta resolución, escaneo intraoral digital 3D (según el caso), radiografías diagnósticas y un plan de tratamiento personalizado con presupuesto transparente y sin sorpresas."
  },
  {
    id: "faq-3",
    category: "general",
    question: "¿Qué medidas tienen para pacientes con miedo o fobia al dentista?",
    answer: "En Dalia Clinic contamos con un protocolo 'Cero Dolor y Cero Estrés'. Disponemos de aromaterapia relajante, música personalizada con auriculares con cancelación de ruido, anestesia digital computarizada sin pinchazos bruscos y la opción de sedación consciente asistida por médico anestesiólogo."
  },
  {
    id: "faq-4",
    category: "pagos",
    question: "¿Qué facilidades de pago y convenios ofrecen?",
    answer: "Ofrecemos pago en hasta 12 cuotas sin interés con tarjetas de crédito, convenios con los principales seguros dentales y complementarios de salud, emisión de presupuestos para reembolsos y planes de financiamiento directo para tratamientos de alta complejidad como ortodoncia invisible e implantes."
  },
  {
    id: "faq-5",
    category: "tratamientos",
    question: "¿En qué consiste la combinación de Odontología y Armonización Facial?",
    answer: "Una sonrisa bella no termina en los dientes; está enmarcada por los labios, las mejillas y la armonía facial. Al integrar la odontología con tratamientos de medicina estética facial (como perfilado labial o toxina botulínica), logramos proporciones áureas que rejuvenecen todo el rostro de manera equilibrada y natural."
  },
  {
    id: "faq-6",
    category: "citas",
    question: "¿Atienden urgencias dentales?",
    answer: "Sí. Disponemos de cupos de urgencia reservados diariamente para dolores agudos, fracturas dentales, traumatismos o problemas con prótesis. Te recomendamos contactarnos de inmediato por WhatsApp para darte prioridad de atención."
  }
];
