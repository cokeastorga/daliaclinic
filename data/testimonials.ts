export interface Testimonial {
  id: string;
  name: string;
  role: string;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "María Ignacia Riquelme",
    role: "Arquitecta & Diseñadora",
    treatment: "Diseño de Sonrisa & Carillas Cerámicas",
    rating: 5,
    comment: "Buscaba una clínica que entendiera la estética de forma sutil, sin sonrisas artificialmente blancas o cuadradas. En Dalia Clinic el nivel de detalle y precisión digital fue impecable. Mis carillas lucen tan naturales que nadie nota que las llevo, solo me dicen que luzco más radiante.",
    date: "Hace 2 semanas",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-2",
    name: "Sebastián Larraín",
    role: "Empresario",
    treatment: "Implantes Dentales con Carga Inmediata",
    rating: 5,
    comment: "Tenía fobia al dentista desde niño por una mala experiencia. El Dr. Mendoza y su equipo me explicaron la tomografía en 3D y el procedimiento fue 100% libre de dolor. Salí de la clínica con mis dientes fijos el mismo día. La calidad de atención es del más alto nivel.",
    date: "Hace 1 mes",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-3",
    name: "Constanza Vergara",
    role: "Abogada Corporativa",
    treatment: "Ortodoncia Invisible + Armonización Labial",
    rating: 5,
    comment: "Pude corregir mi mordida con alineadores transparentes sin que afectara mis reuniones ni presentaciones en el trabajo. Además, el perfilado con ácido hialurónico de la Dra. Sofía armonizó mi rostro de manera elegante. La clínica transmite una paz increíble.",
    date: "Hace 1 mes",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-4",
    name: "Felipe Oyarzún",
    role: "Ingeniero Civil",
    treatment: "Endodoncia Microscópica y Limpieza Ultrasónica",
    rating: 5,
    comment: "Llegué con un dolor insoportable un sábado por la mañana. Me atendieron de urgencia con una empatía impresionante. Con el microscopio me salvaron la muela en una sola sesión y sentí alivio desde el primer minuto. Son unos verdaderos profesionales.",
    date: "Hace 2 meses",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];
