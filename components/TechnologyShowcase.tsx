"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, Eye, Heart, Sparkles, ArrowRight, Calendar } from "lucide-react";
import { useAppointmentModal } from "./ClientLayoutWrapper";

export default function TechnologyShowcase() {
  const { openAppointment } = useAppointmentModal();

  const techCards = [
    {
      id: "scan",
      title: "Escáner Intraoral 3D HD",
      tag: "Flujo 100% Digital",
      highlight: "En tan solo 2 minutos",
      description: "Digitalizamos tu boca en alta resolución sin necesidad de incómodas pastas de impresión. Visualizas tu mordida en tiempo real en pantalla 4K.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
      icon: <Zap size={22} />,
      link: "/servicios/ortodoncias",
    },
    {
      id: "cbct",
      title: "Tomografía Cone Beam 3D",
      tag: "Radiología Propia",
      highlight: "80% menos radiación",
      description: "Obtenemos diagnósticos certeros el mismo día de tu consulta en nuestro propio centro radiológico, sin traslados externos ni esperas.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
      icon: <Eye size={22} />,
      link: "/servicios/radiologia",
    },
    {
      id: "sedation",
      title: "Protocolo Cero Dolor",
      tag: "Confort Sensorial",
      highlight: "Sedación consciente",
      description: "Anestesia guiada por microordenador y la opción de sedación supervisada por médico especialista para que disfrutes de tu cita con total serenidad.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
      icon: <Heart size={22} />,
      link: "/quienes-somos",
    },
  ];

  return (
    <section className="bg-dalia-navy text-white py-20 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-dalia-gold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-dalia-gold text-sm font-extrabold border border-dalia-gold/30">
            <Sparkles size={16} />
            <span>Vanguardia Digital & Máximo Confort</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Tecnología al Servicio de tu Tranquilidad
          </h2>
          <p className="text-lg md:text-xl text-dalia-slate-light leading-relaxed">
            Eliminamos las molestias del pasado mediante equipamiento digital de última generación en nuestra sede de Las Condes.
          </p>
        </div>

        {/* 3 Didactic Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCards.map((card) => (
            <div
              key={card.id}
              className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/15 hover:border-dalia-gold transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-dalia-navy-dark">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dalia-navy via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-dalia-navy/95 backdrop-blur-md text-dalia-gold text-sm font-extrabold px-3.5 py-1.5 rounded-full border border-dalia-gold/40 flex items-center gap-2">
                    {card.icon}
                    <span>{card.tag}</span>
                  </div>
                  <div className="absolute bottom-3.5 right-4 bg-dalia-gold text-dalia-navy text-xs sm:text-sm font-extrabold px-3 py-1 rounded-lg shadow-sm">
                    {card.highlight}
                  </div>
                </div>

                <div className="p-7 space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-dalia-gold transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-base sm:text-lg text-dalia-slate-light leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0 border-t border-white/10 mt-4 flex items-center justify-between">
                <Link
                  href={card.link}
                  className="text-sm sm:text-base font-bold text-dalia-gold hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Conocer más</span>
                  <ArrowRight size={15} />
                </Link>
                <button
                  onClick={() => openAppointment()}
                  className="btn-gold text-sm sm:text-base px-4 py-2 rounded-xl font-bold shadow-sm"
                >
                  <span>Probar</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <button
            onClick={() => openAppointment()}
            className="btn-gold px-9 py-4.5 rounded-2xl text-base sm:text-lg font-bold inline-flex items-center gap-2.5 shadow-xl"
          >
            <Calendar size={18} />
            <span>Solicitar Escaneo 3D en tu Primera Consulta</span>
          </button>
        </div>
      </div>
    </section>
  );
}
