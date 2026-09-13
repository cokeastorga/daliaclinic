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
    Sparkles: <Sparkles size={22} />,
    ShieldAlert: <ShieldAlert size={22} />,
    Activity: <Activity size={22} />,
    Smile: <Smile size={22} />,
    Gem: <Gem size={22} />,
    Stethoscope: <Stethoscope size={22} />,
    HeartHandshake: <HeartHandshake size={22} />,
    Layers: <Layers size={22} />,
    Scan: <Scan size={22} />,
    Sparkle: <Sparkle size={22} />,
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
      {/* Category Filter Pills */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded-full text-base font-bold transition-all duration-200 ${
                filter === cat.id
                  ? "bg-dalia-navy text-white shadow-lg ring-2 ring-dalia-gold/50 scale-105"
                  : "bg-white text-dalia-graphite border border-dalia-warm hover:border-dalia-gold hover:text-dalia-navy shadow-xs"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid of Didactic Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {displayedServices.map((service) => (
          <div
            key={service.id}
            className="group bg-white rounded-3xl overflow-hidden border border-dalia-gold/30 shadow-luxury hover:shadow-luxury-hover hover:border-dalia-gold transition-all duration-300 flex flex-col justify-between"
          >
            {/* Visual Card Header with Photo */}
            <div>
              <div className="relative h-56 w-full overflow-hidden bg-dalia-warm">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dalia-navy/85 via-dalia-navy/20 to-transparent" />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-dalia-navy text-sm font-extrabold px-3.5 py-1.5 rounded-full border border-dalia-gold/40 shadow-sm flex items-center gap-2">
                  <span className="text-dalia-gold">
                    {iconMap[service.icon] || <Sparkles size={16} />}
                  </span>
                  <span>{service.tag}</span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-dalia-navy/90 backdrop-blur-md text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border border-white/25 flex items-center gap-1.5">
                  <Clock size={14} className="text-dalia-gold" />
                  <span>{service.duration}</span>
                </div>

                {/* Quick Highlight Text on Image */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <p className="text-sm text-dalia-rose font-semibold tracking-wide">
                    {service.highlight}
                  </p>
                </div>
              </div>

              {/* Card Body: Clear, Generous & Highly Legible Typography */}
              <div className="p-7 space-y-4">
                <h3 className="font-serif text-2xl font-extrabold text-dalia-navy group-hover:text-dalia-gold-dark transition-colors">
                  {service.title}
                </h3>

                <p className="text-base sm:text-lg text-dalia-graphite leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* 3 Didactic Key Benefits */}
                <div className="pt-3 border-t border-dalia-warm/60 space-y-2.5">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm sm:text-base text-dalia-navy font-bold">
                      <CheckCircle2 size={18} className="text-dalia-gold shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-7 pt-0 border-t border-dalia-warm/50 mt-4 flex items-center justify-between gap-3">
              <Link
                href={`/servicios/${service.slug}`}
                className="text-sm sm:text-base font-extrabold text-dalia-navy hover:text-dalia-gold flex items-center gap-1.5 transition-colors group/link"
              >
                <span>Ver detalles</span>
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>

              {onSelectService && (
                <button
                  onClick={() => onSelectService(service.id)}
                  className="btn-gold text-sm sm:text-base px-5 py-3 rounded-xl flex items-center gap-2 font-bold shadow-md"
                >
                  <Calendar size={16} />
                  <span>Agendar</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
