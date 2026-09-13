export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  licenseNumber: string;
  education: string[];
  experienceYears: number;
  bio: string;
  image: string;
  social: { linkedin?: string; instagram?: string };
}

export const doctorsData: Doctor[] = [
  {
    id: "dra-sofia-valenzuela",
    name: "Dra. Sofía Valenzuela M.",
    role: "Directora Médica & Especialista en Armonización Facial",
    specialty: "Odontología Estética y Medicina Estética Facial",
    licenseNumber: "Reg. Col. 14.892",
    education: [
      "Cirujano Dentista - Universidad de Chile con Distinción Máxima",
      "Máster en Armonización Orofacial y Rejuvenecimiento Facial - BTI Institute (España)",
      "Diplomado en Estética y Rehabilitación Adhesiva Avanzada"
    ],
    experienceYears: 14,
    bio: "Pionera en el concepto de belleza orofacial integral. La Dra. Valenzuela combina la precisión anatómica de la odontología con las técnicas más sofisticadas de bioestimulación y contorno labial para lograr una armonía rejuvenecida y natural.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    social: { instagram: "@dra.sofiavalenzuela" }
  },
  {
    id: "dr-carlos-mendoza",
    name: "Dr. Carlos Mendoza R.",
    role: "Jefe de Implantología y Cirugía Maxilofacial",
    specialty: "Cirugía Oral, Implantología 3D y Regeneración Ósea",
    licenseNumber: "Reg. Col. 11.450",
    education: [
      "Especialista en Cirugía e Implantología Oral - Univ. Complutense de Madrid",
      "Fellow International Team for Implantology (ITI - Suiza)",
      "Certificado en Carga Inmediata y Cirugía Guiada por Ordenador"
    ],
    experienceYears: 16,
    bio: "Experto en devolver la función y seguridad al paciente a través de implantes dentales de carga inmediata y regeneraciones óseas complejas, asegurando procedimientos indoloros y una pronta recuperación.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
    social: { linkedin: "dr-carlos-mendoza" }
  },
  {
    id: "dra-camila-navarro",
    name: "Dra. Camila Navarro S.",
    role: "Especialista en Ortodoncia Digital e Invisible",
    specialty: "Ortodoncia Invisible y Ortopedia Dentofacial",
    licenseNumber: "Reg. Col. 18.231",
    education: [
      "Especialidad en Ortodoncia y Ortopedia Dento-Máxilo-Facial",
      "Invisalign Diamond Apex Provider",
      "Certificación en Flujos Digitales 3D y Biomecánica Avanzada"
    ],
    experienceYears: 10,
    bio: "Dedicada a transformar sonrisas mediante el uso exclusivo de tecnología digital. Ha tratado con éxito a más de 1,200 pacientes con alineadores invisibles logrando sonrisas perfectas sin que nadie note el tratamiento.",
    image: "https://images.unsplash.com/photo-1594824813689-d4766f7f6f55?auto=format&fit=crop&q=80&w=800",
    social: { instagram: "@dra.camilanavarro.orto" }
  },
  {
    id: "dr-rodrigo-astorga",
    name: "Dr. Rodrigo Astorga P.",
    role: "Especialista en Endodoncia Microscópica",
    specialty: "Endodoncia y Microcirugía Apical",
    licenseNumber: "Reg. Col. 16.744",
    education: [
      "Especialista en Endodoncia - Univ. de Concepción",
      "Miembro de la Sociedad de Endodoncia",
      "Experto en Retratamientos Complejos y Microscopía Zeiss"
    ],
    experienceYears: 12,
    bio: "Apasionado por la preservación del diente natural. Gracias al uso de microscopio óptico de alta magnificación, resuelve casos endodónticos severos en una sola sesión indolora y predecible.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800",
    social: {}
  },
  {
    id: "dra-valentina-morales",
    name: "Dra. Valentina Morales L.",
    role: "Especialista en Odontopediatría & Prevención",
    specialty: "Odontopediatría y Atención Respetuosa",
    licenseNumber: "Reg. Col. 19.810",
    education: [
      "Especialidad en Odontología Pediátrica",
      "Diplomado en Psicología del Comportamiento Infantil y Manejo de Ansiedad",
      "Certificación en Odontología de Mínima Intervención"
    ],
    experienceYears: 8,
    bio: "Su don y calidez transforman la visita al dentista en una aventura divertida y libre de traumas para bebés, niños y adolescentes, creando la base de una salud bucal envidiable de por vida.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
    social: { instagram: "@dra.valentinakids" }
  }
];
