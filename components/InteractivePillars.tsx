"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Microscope, Heart, ShieldCheck, Award, ArrowRight, CheckCircle2 } from "lucide-react";

interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  image: string;
  points: string[];
  icon: React.ReactNode;
}

const pillars: Pillar[] = [
  {
    id: "elegancia",
    title: "Elegancia Natural",
    subtitle: "Inspirada en la Proporción Áurea",
    tag: "Estética Facial",
    description: "Huimos de sonrisas artificiales o sobrecargadas. Diseñamos cada pieza dental respetando la curvatura de tus labios, tono de piel y rasgos únicos para un resultado armónico.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=900",
    points: [
      "Carillas cerámicas ultradelgadas con textura biológica",
      "Simulación previa de tu nueva sonrisa en tu rostro",
      "Resultados que realzan tu belleza sin verse falsos"
    ],
    icon: <Sparkles size={22} />,
  },
  {
    id: "ciencia",
    title: "Ciencia y Rigor",
    subtitle: "Diagnóstico Digital Microscópico",
    tag: "Diagnóstico 3D",
    description: "Sustituimos las conjeturas por imágenes milimétricas. Toda nuestra planificación se realiza mediante escaneo intraoral 3D y tomografía Cone Beam de última generación.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900",
    points: [
      "Escaneo digital 3D en 2 minutos sin pastas molestas",
      "Magnificación óptica con microscopio clínico",
      "Cirugía guiada por ordenador de máxima precisión"
    ],
    icon: <Microscope size={22} />,
  },
  {
    id: "armonia",
    title: "Belleza y Armonía",
    subtitle: "Odontología + Armonización Facial",
    tag: "Enfoque Integral",
    description: "Una sonrisa espectacular requiere el marco facial perfecto. Integramos perfilado labial con ácido hialurónico y toxina botulínica para lograr un equilibrio orofacial sublime.",
    image: "https://images.unsplash.com/photo-1512290900672-1f02307df0ea?auto=format&fit=crop&q=80&w=900",
    points: [
      "Perfilado e hidratación labial con productos premium",
      "Atenuación suave de líneas de expresión dinámicas",
      "Médicos y cirujanos dentistas especializados"
    ],
    icon: <Heart size={22} />,
  },
  {
    id: "confianza",
    title: "Cero Dolor",
    subtitle: "Atención Empática Sin Miedos",
    tag: "Confort Total",
    description: "Transformamos la consulta dental en una experiencia placentera. Anestesia computarizada guiada, aromaterapia relajante y opción de sedación consciente.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900",
    points: [
      "Anestesia digital indolora sin pinchazos bruscos",
      "Sedación consciente asistida por médico anestesiólogo",
      "Atención cercana, cálida y sin prisas médicas"
    ],
    icon: <ShieldCheck size={22} />,
  },
  {
    id: "lujo",
    title: "Exclusividad",
    subtitle: "Tu Espacio Privado en Las Condes",
    tag: "Sede Boutique",
    description: "Instalaciones diseñadas para brindarte tranquilidad absoluta desde el primer instante, con boxes individuales esterilizados y atención de alto nivel concierge.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=900",
    points: [
      "Boxes clínicos privados de máxima bioseguridad",
      "Horarios continuados y estacionamiento subterráneo",
      "Atención personalizada con seguimiento post-tratamiento"
    ],
    icon: <Award size={22} />,
  },
];

export default function InteractivePillars() {
  const [activeTab, setActiveTab] = useState(0);
  const current = pillars[activeTab];

  return (
    <div className="w-full">
      {/* 
        Interactive Selector Tabs:
        Selected State: Rosa Empolvado (#EFD3D0) con icono en contraste e íconos activos
      */}
      <div className="flex overflow-x-auto no-scrollbar sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        {pillars.map((p, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={p.id}
              onClick={() => setActiveTab(idx)}
              className={`shrink-0 sm:shrink p-3.5 sm:p-4 rounded-2xl text-left border transition-all duration-300 flex items-center gap-3 ${
                isActive
                  ? "bg-dalia-rose text-dalia-navy border-dalia-rose-dark shadow-luxury ring-2 ring-dalia-rose/80 scale-[1.02]"
                  : "bg-white text-dalia-graphite border-dalia-warm hover:border-dalia-rose hover:bg-dalia-rose/40 shadow-xs"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isActive
                    ? "bg-white text-dalia-gold shadow-sm border border-dalia-gold/30"
                    : "bg-white text-dalia-gold-dark border border-dalia-warm/80 shadow-xs"
                }`}
              >
                {p.icon}
              </div>
              <div className="min-w-0">
                <p className="font-sans text-sm sm:text-base font-extrabold whitespace-nowrap leading-tight text-dalia-navy">
                  {p.title}
                </p>
                <p
                  className={`text-xs font-bold whitespace-nowrap mt-0.5 ${
                    isActive ? "text-dalia-navy/80" : "text-dalia-graphite-light"
                  }`}
                >
                  {p.tag}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Showcase Card */}
      <div className="bg-white rounded-3xl p-6 md:p-10 border border-dalia-gold/30 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300 hover:border-dalia-rose transition-colors">
        {/* Left: Didactic Information */}
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dalia-rose text-dalia-navy text-sm font-extrabold border border-dalia-rose-dark/50">
            <Sparkles size={16} className="text-dalia-navy" />
            <span>{current.tag}</span>
          </div>

          <div>
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-dalia-navy leading-tight">
              {current.title}
            </h3>
            <p className="text-base sm:text-lg font-bold text-dalia-navy/80 mt-1">
              {current.subtitle}
            </p>
          </div>

          <p className="text-base sm:text-lg text-dalia-graphite leading-relaxed">
            {current.description}
          </p>

          <div className="space-y-2.5 pt-3 border-t border-dalia-warm/60">
            {current.points.map((pt, i) => (
              <div key={i} className="flex items-center gap-2.5 text-base font-bold text-dalia-navy">
                <CheckCircle2 size={18} className="text-dalia-rose-dark shrink-0" />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/quienes-somos"
              className="inline-flex items-center gap-2 text-base font-extrabold text-dalia-navy hover:text-dalia-rose-dark transition-colors"
            >
              <span>Conoce más sobre nuestra filosofía</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Right: Rich Photography Visual */}
        <div className="lg:col-span-6">
          <div className="relative h-72 sm:h-[380px] w-full rounded-2xl overflow-hidden border-2 border-dalia-gold/40 shadow-md">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dalia-navy/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-dalia-gold/40">
              <p className="text-xs sm:text-sm font-extrabold text-dalia-navy uppercase tracking-wider">
                Compromiso Dalia Clinic
              </p>
              <p className="text-xs sm:text-sm text-dalia-graphite mt-0.5 font-medium leading-normal">
                Cada procedimiento es planificado con dedicación exclusiva y atención personalizada en Las Condes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
