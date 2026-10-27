"use client";

import React from "react";
import Image from "next/image";

const pillars = [
  {
    id: "armonia",
    label: "ARMONÍA",
    title: "Todo está conectado",
    description:
      "La sonrisa forma parte del rostro y ambos influyen en nuestra expresión. Por eso trabajamos desde una mirada integral, buscando equilibrio entre salud, función y estética.",
    photo: "/pillars/armonia.png",
    icon: "/pillars/icon-armonia.png",
    iconAlt: "Ícono Armonía - Flor geométrica Dalia",
  },
  {
    id: "naturalidad",
    label: "NATURALIDAD",
    title: "Respetar lo que te hace único",
    description:
      "Cada sonrisa y cada rostro tienen características propias. Nuestros tratamientos buscan mejorarlas y conservar su identidad, evitando resultados estandarizados.",
    photo: "/pillars/naturalidad.png",
    icon: "/pillars/icon-naturalidad.png",
    iconAlt: "Ícono Naturalidad - Perfil de mujer con flor",
  },
  {
    id: "cuidado",
    label: "CUIDADO",
    title: "Una experiencia centrada en ti",
    description:
      "Creemos que un buen resultado también depende de cómo se vive el proceso. Escuchar, explicar y acompañar forman parte de nuestra manera de atender.",
    photo: "/pillars/cuidado.png",
    icon: "/pillars/icon-cuidado.png",
    iconAlt: "Ícono Cuidado - Manos con diente y flor",
  },
];

export default function InteractivePillars() {
  return (
    <div className="w-full space-y-0">
      {/* ─────────────────────────────────────────────
          HEADER: "LA ESENCIA DE / DALIA CLINIC"
          with flower decoration and icon row
          ───────────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-3xl bg-[#FAF7F4] border border-dalia-gold/20 shadow-sm px-8 sm:px-14 py-10 sm:py-14 mb-3">
        {/* Decorative Dalia Flower (top-right) */}
        <div className="absolute top-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 pointer-events-none select-none opacity-90">
          <Image
            src="/pillars/identidad-flor.png"
            alt="Flor Dalia decorativa"
            fill
            className="object-cover object-left-bottom"
          />
        </div>

        {/* Header text block */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm tracking-[0.35em] uppercase font-semibold text-dalia-graphite mb-1">
            La Esencia De
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dalia-navy tracking-tight leading-tight mb-2">
            Dalia Clinic
          </h2>
          {/* Gold separator line */}
          <div className="w-14 h-[2px] bg-dalia-gold mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base md:text-lg text-dalia-graphite leading-relaxed max-w-xl mx-auto font-normal">
            Creemos en una odontología y estética facial que va más allá de un resultado estético. Nuestra esencia se basa en tres pilares que guían cada tratamiento y cada relación con nuestros pacientes.
          </p>
        </div>

        {/* 3 Circular Icon Badges */}
        <div className="relative z-10 mt-10 flex items-end justify-center gap-6 sm:gap-12 md:gap-16">
          {pillars.map((p) => (
            <div key={p.id} className="flex flex-col items-center gap-2.5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 relative rounded-full overflow-visible">
                <Image
                  src={p.icon}
                  alt={p.iconAlt}
                  width={80}
                  height={80}
                  className="object-contain drop-shadow-md"
                />
              </div>
              <span className="text-[10px] sm:text-xs tracking-[0.25em] font-extrabold text-dalia-gold-dark uppercase">
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          3 STACKED CARDS: Photo left · Text right
          (Desktop: side-by-side 45/55, Mobile: stacked)
          ───────────────────────────────────────────── */}
      <div className="flex flex-col gap-3">
        {pillars.map((pillar, idx) => (
          <div
            key={pillar.id}
            className="group flex flex-col lg:flex-row overflow-hidden rounded-3xl border border-dalia-gold/25 shadow-luxury bg-white hover:shadow-luxury-hover hover:border-dalia-rose transition-all duration-300"
            style={{ minHeight: "220px" }}
          >
            {/* LEFT: Photograph */}
            <div className="relative w-full lg:w-[45%] h-56 sm:h-72 lg:h-auto shrink-0 overflow-hidden bg-dalia-warm">
              <Image
                src={pillar.photo}
                alt={`${pillar.label} - Dalia Clinic`}
                fill
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                priority={idx === 0}
              />
              {/* Subtle gradient overlay on right edge to blend into white */}
              <div className="hidden lg:block absolute top-0 right-0 h-full w-20 bg-gradient-to-r from-transparent to-white/60 pointer-events-none" />
            </div>

            {/* RIGHT: Text Content */}
            <div className="flex flex-col justify-center px-8 sm:px-12 py-8 sm:py-10 lg:py-0 bg-white w-full lg:w-[55%]">
              {/* Pillar label with small gold separator */}
              <div className="flex flex-col gap-1.5 mb-4">
                <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-extrabold text-dalia-gold-dark">
                  {pillar.label}
                </span>
                <div className="w-10 h-[2px] bg-dalia-gold rounded-full" />
              </div>

              {/* Pillar subtitle (large serif heading) */}
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-dalia-navy leading-tight mb-4">
                {pillar.title}
              </h3>

              {/* Description paragraph */}
              <p className="text-sm sm:text-base lg:text-lg text-dalia-graphite leading-relaxed max-w-lg">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
