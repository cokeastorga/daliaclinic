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
  // Two main clinical areas as requested: "odontologia" and "armonizacion"
  const [activeArea, setActiveArea] = useState<"odontologia" | "armonizacion">("odontologia");

  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles size={16} />,
    ShieldAlert: <ShieldAlert size={16} />,
    Activity: <Activity size={16} />,
    Smile: <Smile size={16} />,
    Gem: <Gem size={16} />,
    Stethoscope: <Stethoscope size={16} />,
    HeartHandshake: <HeartHandshake size={16} />,
    Layers: <Layers size={16} />,
    Scan: <Scan size={16} />,
    Sparkle: <Sparkle size={16} />,
  };

  const filteredServices = servicesData.filter((svc) => svc.category === activeArea);
  const displayedServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  return (
    <div className="w-full">
      {/* Switcher Buttons: Área Odontológica / Área de Armonización Facial */}
      {showFilters && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <button
            onClick={() => setActiveArea("odontologia")}
            className={`w-full sm:w-auto px-8 py-4 rounded-full text-base sm:text-lg font-extrabold transition-all duration-300 shadow-sm ${
              activeArea === "odontologia"
                ? "bg-dalia-rose text-dalia-navy border-2 border-dalia-rose-dark shadow-md scale-105 ring-2 ring-dalia-rose/60"
                : "bg-white text-dalia-graphite border border-dalia-warm hover:border-dalia-rose hover:bg-dalia-rose/30 hover:text-dalia-navy"
            }`}
          >
            [ Área Odontológica ]
          </button>

          <button
            onClick={() => setActiveArea("armonizacion")}
            className={`w-full sm:w-auto px-8 py-4 rounded-full text-base sm:text-lg font-extrabold transition-all duration-300 shadow-sm ${
              activeArea === "armonizacion"
                ? "bg-dalia-rose text-dalia-navy border-2 border-dalia-rose-dark shadow-md scale-105 ring-2 ring-dalia-rose/60"
                : "bg-white text-dalia-graphite border border-dalia-warm hover:border-dalia-rose hover:bg-dalia-rose/30 hover:text-dalia-navy"
            }`}
          >
            [ Área de Armonización Facial ]
          </button>
        </div>
      )}

      {/* Grid of Treatment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {displayedServices.map((service) => (
          <div
            key={service.id}
            className="group bg-white rounded-3xl overflow-hidden border border-dalia-gold/30 shadow-luxury hover:shadow-luxury-hover hover:border-dalia-rose transition-all duration-300 flex flex-col justify-between"
          >
            {/* Visual Card Header with Photo */}
            <div>
              <div className="relative h-60 w-full overflow-hidden bg-dalia-warm">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Upper Tag - Only shown if tag exists (Odontología has tags, Armonización Facial is without tag) */}
                {service.tag && (
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-dalia-navy text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-full border border-dalia-rose shadow-sm flex items-center gap-2 group-hover:bg-dalia-rose transition-colors">
                    <span className="text-dalia-gold">
                      {iconMap[service.icon] || <Sparkles size={16} />}
                    </span>
                    <span>{service.tag}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-7 space-y-4">
                <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-dalia-navy group-hover:text-dalia-navy transition-colors">
                  {service.title}
                </h3>

                <p className="text-base sm:text-lg text-dalia-graphite leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Didactic Key Highlights (Destacados) */}
                <div className="pt-3 border-t border-dalia-warm/60 space-y-2.5">
                  <p className="text-xs font-extrabold text-dalia-gold-dark uppercase tracking-wider">
                    Destacados
                  </p>
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-sm sm:text-base text-dalia-navy font-semibold leading-snug"
                    >
                      <CheckCircle2 size={18} className="text-dalia-rose-dark shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Actions: Conocer más | Agendar */}
            <div className="p-7 pt-0 border-t border-dalia-warm/50 mt-4 flex items-center justify-between gap-3">
              <Link
                href={`/servicios/${service.slug}`}
                className="text-sm sm:text-base font-extrabold text-dalia-navy hover:text-dalia-rose-dark flex items-center gap-1.5 transition-colors group/link"
              >
                <span>Conocer más</span>
                <ArrowRight
                  size={16}
                  className="group-hover/link:translate-x-1 transition-transform text-dalia-rose-dark"
                />
              </Link>

              {onSelectService && (
                <button
                  onClick={() => onSelectService(service.id)}
                  className="btn-gold text-sm sm:text-base px-5 py-2.5 rounded-xl flex items-center gap-2 font-bold shadow-md hover:ring-2 hover:ring-dalia-rose"
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
