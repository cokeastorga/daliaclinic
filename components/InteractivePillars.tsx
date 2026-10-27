"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Smile, HeartHandshake, ArrowRight, CheckCircle2 } from "lucide-react";

interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const pillars: Pillar[] = [
  {
    id: "armonia",
    title: "ARMONÍA",
    subtitle: "Todo está conectado",
    description:
      "La sonrisa forma parte del rostro y ambos influyen en nuestra expresión. Por eso trabajamos desde una mirada integral, buscando equilibrio entre salud, función y estética.",
    image: "/pillars/armonia.png",
    icon: <Sparkles size={24} />,
  },
  {
    id: "naturalidad",
    title: "NATURALIDAD",
    subtitle: "Respetar lo que te hace único",
    description:
      "Cada sonrisa y cada rostro tienen características propias. Nuestros tratamientos buscan mejorarlas y conservar su identidad, evitando resultados estandarizados.",
    image: "/pillars/naturalidad.png",
    icon: <Smile size={24} />,
  },
  {
    id: "cuidado",
    title: "CUIDADO",
    subtitle: "Una experiencia centrada en ti",
    description:
      "Creemos que un buen resultado también depende de cómo se vive el proceso. Escuchar, explicar y acompañar forman parte de nuestra manera de atender.",
    image: "/pillars/cuidado.png",
    icon: <HeartHandshake size={24} />,
  },
];

export default function InteractivePillars() {
  const [activeTab, setActiveTab] = useState(0);
  const current = pillars[activeTab];

  return (
    <div className="w-full space-y-12">
      {/* Intro Box: Identidad Dalia with Flower Visual */}
      <div className="bg-gradient-to-br from-white via-[#FCFAF8] to-dalia-rose-light/40 rounded-3xl p-8 sm:p-12 border border-dalia-gold/30 shadow-luxury overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Introductory Text */}
          <div className="lg:col-span-8 space-y-5 text-left z-10">
            <p className="text-base sm:text-lg md:text-xl text-dalia-graphite leading-relaxed font-normal">
              La dalia inspira nuestra identidad por la simetría, disposición y proporción de sus
              pétalos, que representan una belleza que nace de la naturalidad y el equilibrio, no de
              la perfección.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-dalia-graphite leading-relaxed font-normal">
              En <strong className="text-dalia-navy font-bold">Dalia Clinic</strong> llevamos esa
              misma mirada a la odontología y la armonización facial, integrando salud, función y
              estética en el cuidado de la sonrisa y el rostro.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-dalia-navy font-semibold leading-relaxed">
              Cada tratamiento es parte de algo más amplio: cuidar, acompañar y contribuir al
              bienestar y la confianza de cada paciente.
            </p>
          </div>

          {/* Right: Authentic Dalia Flower Image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-3xl overflow-hidden border-2 border-dalia-gold/40 shadow-md">
              <Image
                src="/pillars/identidad-flor.png"
                alt="Flor Dalia - Identidad Dalia Clinic"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dalia-navy/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Pilares Selector Header */}
      <div className="text-center pt-2">
        <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-dalia-navy tracking-tight">
          Pilares de Dalia Clinic
        </h3>
        <p className="text-sm sm:text-base text-dalia-graphite mt-1">
          Descubre los tres principios esenciales que guían cada uno de nuestros tratamientos
        </p>
      </div>

      {/* 3 Interactive Buttons: ARMONÍA · NATURALIDAD · CUIDADO */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {pillars.map((p, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={p.id}
              onClick={() => setActiveTab(idx)}
              className={`p-5 rounded-2xl text-center border transition-all duration-300 flex flex-col items-center justify-center gap-3 ${
                isActive
                  ? "bg-dalia-rose text-dalia-navy border-2 border-dalia-rose-dark shadow-luxury ring-2 ring-dalia-rose/80 scale-[1.03]"
                  : "bg-white text-dalia-graphite border-dalia-warm hover:border-dalia-rose hover:bg-dalia-rose/30 shadow-xs"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                  isActive
                    ? "bg-white text-dalia-gold-dark shadow-sm border border-dalia-gold/30"
                    : "bg-dalia-warm/60 text-dalia-navy"
                }`}
              >
                {p.icon}
              </div>
              <div>
                <p className="font-sans text-lg sm:text-xl font-extrabold tracking-wide text-dalia-navy">
                  {p.title}
                </p>
                <p
                  className={`text-xs sm:text-sm font-semibold mt-0.5 ${
                    isActive ? "text-dalia-navy/85" : "text-dalia-graphite"
                  }`}
                >
                  {p.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Detail Showcase Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-dalia-gold/30 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300 hover:border-dalia-rose transition-colors">
        {/* Left Information */}
        <div className="lg:col-span-6 space-y-5 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dalia-rose text-dalia-navy text-sm font-extrabold border border-dalia-rose-dark/50">
            <Sparkles size={16} className="text-dalia-navy" />
            <span>Pilar Esencial</span>
          </div>

          <div>
            <h4 className="font-serif text-3xl sm:text-4xl font-extrabold text-dalia-navy leading-tight">
              {current.title}
            </h4>
            <p className="text-base sm:text-lg font-bold text-dalia-gold-dark mt-1">
              {current.subtitle}
            </p>
          </div>

          <p className="text-base sm:text-lg text-dalia-graphite leading-relaxed">
            {current.description}
          </p>

          <div className="pt-2">
            <Link
              href="/quienes-somos"
              className="inline-flex items-center gap-2 text-base font-extrabold text-dalia-navy hover:text-dalia-rose-dark transition-colors group"
            >
              <span>Conoce más sobre nuestra filosofía</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1.5 transition-transform text-dalia-rose-dark"
              />
            </Link>
          </div>
        </div>

        {/* Right Photography Visual */}
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
                {current.subtitle} — Atención integral y personalizada en Quilicura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
