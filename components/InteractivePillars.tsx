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
    tag: "Filosofía Estética",
    description: "Huimos de sonrisas artificiales o sobrecargadas. Diseñamos cada pieza dental respetando la curvatura de tus labios, tono de piel y rasgos únicos para un resultado armónico.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=900",
    points: [
      "Carillas cerámicas ultradelgadas con textura biológica",
      "Simulación previa de tu nueva sonrisa en tu rostro",
      "Resultados que realzan tu belleza sin verse falsos"
    ],
    icon: <Sparkles size={24} />,
  },
  {
    id: "ciencia",
    title: "Ciencia y Rigor 3D",
    subtitle: "Diagnóstico Digital Microscópico",
    tag: "Tecnología Avanzada",
    description: "Sustituimos las conjeturas por imágenes milimétricas. Toda nuestra planificación se realiza mediante escaneo intraoral 3D y tomografía Cone Beam de última generación.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900",
    points: [
      "Escaneo digital 3D en 2 minutos sin pastas molestas",
      "Magnificación óptica con microscopio clínico",
      "Cirugía guiada por ordenador de máxima precisión"
    ],
    icon: <Microscope size={24} />,
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
    icon: <Heart size={24} />,
  },
  {
    id: "confianza",
    title: "Cercanía y Cero Dolor",
    subtitle: "Atención Empática Sin Miedos",
    tag: "Protocolo Confort",
    description: "Transformamos la consulta dental en una experiencia placentera. Anestesia computarizada guiada, aromaterapia relajante y opción de sedación consciente.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900",
    points: [
      "Anestesia digital indolora sin pinchazos bruscos",
      "Sedación consciente asistida por médico anestesiólogo",
      "Atención cercana, cálida y sin prisas médicas"
    ],
    icon: <ShieldCheck size={24} />,
  },
  {
    id: "lujo",
    title: "Exclusividad Boutique",
    subtitle: "Tu Espacio Privado en Las Condes",
    tag: "Bienestar Total",
    description: "Instalaciones diseñadas para brindarte tranquilidad absoluta desde el primer instante, con boxes individuales esterilizados y atención de alto nivel concierge.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=900",
    points: [
      "Boxes clínicos privados de máxima bioseguridad",
      "Horarios continuados y estacionamiento subterráneo",
      "Atención personalizada con seguimiento post-tratamiento"
    ],
    icon: <Award size={24} />,
  },
];

export default function InteractivePillars() {
  const [activeTab, setActiveTab] = useState(0);
  const current = pillars[activeTab];

  return (
    <div className="w-full">
      {/* 5 Interactive Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
        {pillars.map((p, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={p.id}
              onClick={() => setActiveTab(idx)}
              className={`p-4.5 rounded-2xl text-left border transition-all duration-300 flex items-center gap-3.5 ${
                isActive
                  ? "bg-dalia-navy text-white border-dalia-gold shadow-luxury scale-[1.03]"
                  : "bg-white text-dalia-graphite border-dalia-warm hover:border-dalia-gold hover:bg-dalia-warm-light"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isActive
                    ? "bg-dalia-gold text-dalia-navy"
                    : "bg-dalia-rose/40 text-dalia-navy"
                }`}
              >
                {p.icon}
              </div>
              <div className="min-w-0">
                <p className="font-serif text-base sm:text-lg font-bold truncate leading-tight">
                  {p.title}
                </p>
                <p
                  className={`text-xs sm:text-sm font-semibold truncate mt-0.5 ${
                    isActive ? "text-dalia-rose-light" : "text-dalia-graphite-light"
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
      <div className="bg-white rounded-3xl p-7 md:p-12 border border-dalia-gold/30 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
        {/* Left: Didactic Information */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dalia-rose/40 text-dalia-navy text-sm font-extrabold border border-dalia-rose">
            <Sparkles size={16} className="text-dalia-gold" />
            <span>{current.tag}</span>
          </div>

          <div>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-dalia-navy leading-tight">
              {current.title}
            </h3>
            <p className="text-lg md:text-xl font-bold text-dalia-gold-dark mt-1.5">
              {current.subtitle}
            </p>
          </div>

          <p className="text-lg sm:text-xl text-dalia-graphite leading-relaxed">
            {current.description}
          </p>

          <div className="space-y-3 pt-3 border-t border-dalia-warm/60">
            {current.points.map((pt, i) => (
              <div key={i} className="flex items-center gap-3 text-base sm:text-lg font-bold text-dalia-navy">
                <CheckCircle2 size={20} className="text-dalia-gold shrink-0" />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <div className="pt-3">
            <Link
              href="/quienes-somos"
              className="inline-flex items-center gap-2 text-base sm:text-lg font-extrabold text-dalia-navy hover:text-dalia-gold transition-colors"
            >
              <span>Conoce más sobre nuestra filosofía</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Right: Rich Photography Visual */}
        <div className="lg:col-span-6">
          <div className="relative h-80 sm:h-[420px] w-full rounded-3xl overflow-hidden border-2 border-dalia-gold/40 shadow-md">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dalia-navy/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-dalia-gold/40">
              <p className="text-sm font-extrabold text-dalia-navy uppercase tracking-wider">
                Compromiso Dalia Clinic
              </p>
              <p className="text-sm text-dalia-graphite mt-1 font-medium leading-normal">
                Cada procedimiento es planificado con dedicación exclusiva y atención personalizada en Las Condes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
