"use client";

import React, { useState } from "react";
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
    Sparkles: <Sparkles size={24} />,
    ShieldAlert: <ShieldAlert size={24} />,
    Activity: <Activity size={24} />,
    Smile: <Smile size={24} />,
    Gem: <Gem size={24} />,
    Stethoscope: <Stethoscope size={24} />,
    HeartHandshake: <HeartHandshake size={24} />,
    Layers: <Layers size={24} />,
    Scan: <Scan size={24} />,
    Sparkle: <Sparkle size={24} />,
  };

  const filterCategories = [
    { id: "all", label: "Todas las Especialidades" },
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
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all ${
                filter === cat.id
                  ? "bg-dalia-navy text-white shadow-md border-transparent"
                  : "bg-white text-dalia-graphite border border-dalia-warm hover:bg-dalia-warm-light"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid of Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedServices.map((service) => (
          <div
            key={service.id}
            className="group relative bg-white rounded-3xl p-7 border border-dalia-gold/20 shadow-luxury hover:shadow-luxury-hover hover:border-dalia-gold/50 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Accent Ribbon */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="w-13 h-13 rounded-2xl bg-dalia-rose/30 text-dalia-navy p-3 flex items-center justify-center group-hover:bg-dalia-navy group-hover:text-dalia-gold transition-all duration-300">
                  {iconMap[service.icon] || <Sparkles size={24} />}
                </div>
                <span className="text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-dalia-warm-light text-dalia-graphite border border-dalia-warm group-hover:border-dalia-gold/40 transition-colors">
                  {service.tag}
                </span>
              </div>

              {/* Title & Short Desc */}
              <h3 className="font-serif text-xl font-bold text-dalia-navy group-hover:text-dalia-navy-light transition-colors mb-2.5">
                {service.title}
              </h3>
              <p className="text-sm text-dalia-graphite leading-relaxed mb-4">
                {service.shortDescription}
              </p>

              {/* Quick Info (Duration) */}
              <div className="flex items-center gap-2 text-xs text-dalia-slate-dark mb-5 pb-4 border-b border-dalia-warm/60">
                <Clock size={14} className="text-dalia-gold" />
                <span>Duración habitual: {service.duration}</span>
              </div>

              {/* Top 3 Benefits */}
              <div className="space-y-2 mb-6">
                {service.benefits.slice(0, 3).map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-dalia-graphite">
                    <CheckCircle2 size={14} className="text-dalia-gold shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-dalia-warm/50 flex items-center justify-between gap-3">
              <Link
                href={`/servicios/${service.slug}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-dalia-navy hover:text-dalia-gold transition-colors"
              >
                <span>Conocer más</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {onSelectService && (
                <button
                  onClick={() => onSelectService(service.id)}
                  className="btn-gold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5"
                >
                  <Calendar size={13} />
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
