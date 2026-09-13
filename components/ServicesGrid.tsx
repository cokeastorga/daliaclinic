"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ShieldAlert,
  Activity,
  Smile,
  Gem,
  Stethoscope,
  HeartHandshake,
  Layers,
  Scan,
  Sparkle,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Info,
} from "lucide-react";
import { servicesData, Service } from "@/data/services";

interface ServicesGridProps {
  onSelectService?: (serviceId: string) => void;
  limit?: number;
  showFilters?: boolean;
}

export default function ServicesGrid({
  onSelectService,
  limit,
  showFilters = true,
}: ServicesGridProps) {
  const [filter, setFilter] = useState("all");

  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles size={20} />,
    ShieldAlert: <ShieldAlert size={20} />,
    Activity: <Activity size={20} />,
    Smile: <Smile size={20} />,
    Gem: <Gem size={20} />,
    Stethoscope: <Stethoscope size={20} />,
    HeartHandshake: <HeartHandshake size={20} />,
    Layers: <Layers size={20} />,
    Scan: <Scan size={20} />,
    Sparkle: <Sparkle size={20} />,
  };

  const filterCategories = [
    { id: "all", label: "Todas las Especialidades (10)" },
    { id: "estetica", label: "Estética y Armonización" },
    { id: "rehabilitacion", label: "Ortodoncia e Implantes" },
    { id: "prevencion", label: "Prevención y Familia" },
  ];

  const filteredServices = servicesData.filter((svc) => {
    if (filter === "all") return true;
    if (filter === "estetica")
      return ["estetica-oral", "armonizacion-facial", "limpieza-dental"].includes(svc.id);
    if (filter === "rehabilitacion")
      return ["ortodoncias", "rehabilitacion-oral", "endodoncia", "extracciones"].includes(svc.id);
    if (filter === "prevencion")
      return ["odontologia-general", "atencion-infantil", "limpieza-dental", "radiologia"].includes(svc.id);
    return true;
  });

  const displayedServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  return (
    <div className="w-full">
      {/* Category Filter Pills - Intuitive & Didactic */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                filter === cat.id
                  ? "bg-dalia-navy text-white shadow-md ring-2 ring-dalia-gold/40 scale-105"
                  : "bg-white text-dalia-graphite border border-dalia-warm hover:border-dalia-gold hover:text-dalia-navy"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid of Didactic Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedServices.map((service) => (
          <div
            key={service.id}
            className="group bg-white rounded-3xl overflow-hidden border border-dalia-gold/25 shadow-luxury hover:shadow-luxury-hover hover:border-dalia-gold transition-all duration-300 flex flex-col justify-between"
          >
            {/* 1. Visual Card Header with Photo */}
            <div>
              <div className="relative h-52 w-full overflow-hidden bg-dalia-warm">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dalia-navy/80 via-dalia-navy/20 to-transparent" />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-dalia-navy text-xs font-bold px-3 py-1.5 rounded-full border border-dalia-gold/40 shadow-sm flex items-center gap-1.5">
                  <span className="text-dalia-gold">
                    {iconMap[service.icon] || <Sparkles size={14} />}
                  </span>
                  <span>{service.tag}</span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-dalia-navy/85 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1">
                  <Clock size={12} className="text-dalia-gold" />
                  <span>{service.duration}</span>
                </div>

                {/* Quick Highlight Text on Image */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-xs text-dalia-rose-light font-medium tracking-wide">
                    {service.highlight}
                  </p>
                </div>
              </div>

              {/* 2. Card Body: Clean, Readable & Without Clutter */}
              <div className="p-6 space-y-4">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-dalia-navy group-hover:text-dalia-gold-dark transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm md:text-base text-dalia-graphite leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* 3 Didactic Key Benefits */}
                <div className="pt-2 border-t border-dalia-warm/60 space-y-2">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-dalia-navy font-medium">
                      <CheckCircle2 size={15} className="text-dalia-gold shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Card Footer Actions: Agendar Cita + Ver Detalles */}
            <div className="p-6 pt-0 border-t border-dalia-warm/40 mt-4 flex items-center justify-between gap-3">
              <Link
                href={`/servicios/${service.slug}`}
                className="text-xs md:text-sm font-semibold text-dalia-navy hover:text-dalia-gold flex items-center gap-1.5 transition-colors group/link"
              >
                <span>Ver detalles</span>
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>

              {onSelectService && (
                <button
                  onClick={() => onSelectService(service.id)}
                  className="btn-gold text-xs md:text-sm px-4 py-2.5 rounded-xl flex items-center gap-1.5 font-semibold"
                >
                  <Calendar size={14} />
                  <span>Agendar Cita</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
