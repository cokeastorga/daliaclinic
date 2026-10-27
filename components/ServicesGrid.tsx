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
  // Two main clinical areas: "odontologia" and "armonizacion"
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

  const handleAreaChange = (area: "odontologia" | "armonizacion", shouldScroll = false) => {
    setActiveArea(area);
    if (shouldScroll) {
      const el = document.getElementById("servicios");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Reusable Embellished Switcher Component (No brackets, luxury pill design)
  const renderAreaSwitcher = (isBottom = false) => (
    <div
      className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 ${
        isBottom ? "mt-6" : "mb-12"
      }`}
    >
      <button
        onClick={() => handleAreaChange("odontologia", isBottom)}
        className={`w-full sm:w-auto px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-extrabold flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer shadow-sm ${
          activeArea === "odontologia"
            ? "bg-gradient-to-r from-dalia-rose via-dalia-rose-light to-dalia-rose text-dalia-navy border-2 border-dalia-rose-dark shadow-luxury ring-4 ring-dalia-rose/40 scale-105"
            : "bg-white text-dalia-graphite border-2 border-dalia-warm hover:border-dalia-rose hover:bg-dalia-rose/20 hover:text-dalia-navy"
        }`}
      >
        <Sparkles
          size={20}
          className={activeArea === "odontologia" ? "text-dalia-gold-dark" : "text-dalia-graphite"}
        />
        <span>Área Odontológica</span>
        <span
          className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
            activeArea === "odontologia"
              ? "bg-white/90 text-dalia-navy border border-dalia-rose-dark/40 shadow-xs"
              : "bg-dalia-warm text-dalia-graphite"
          }`}
        >
          11
        </span>
      </button>

      <button
        onClick={() => handleAreaChange("armonizacion", isBottom)}
        className={`w-full sm:w-auto px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-extrabold flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer shadow-sm ${
          activeArea === "armonizacion"
            ? "bg-gradient-to-r from-dalia-rose via-dalia-rose-light to-dalia-rose text-dalia-navy border-2 border-dalia-rose-dark shadow-luxury ring-4 ring-dalia-rose/40 scale-105"
            : "bg-white text-dalia-graphite border-2 border-dalia-warm hover:border-dalia-rose hover:bg-dalia-rose/20 hover:text-dalia-navy"
        }`}
      >
        <Gem
          size={20}
          className={activeArea === "armonizacion" ? "text-dalia-gold-dark" : "text-dalia-graphite"}
        />
        <span>Área de Armonización Facial</span>
        <span
          className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
            activeArea === "armonizacion"
              ? "bg-white/90 text-dalia-navy border border-dalia-rose-dark/40 shadow-xs"
              : "bg-dalia-warm text-dalia-graphite"
          }`}
        >
          4
        </span>
      </button>
    </div>
  );

  return (
    <div className="w-full">
      {/* Top Switcher Buttons */}
      {showFilters && renderAreaSwitcher(false)}

      {/* Grid of Treatment Cards with Centered Content & Generous Padding */}
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

                {/* Floating Upper Tag - Only shown if tag exists */}
                {service.tag && (
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-dalia-navy text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-full border border-dalia-rose shadow-sm flex items-center gap-2 group-hover:bg-dalia-rose transition-colors">
                    <span className="text-dalia-gold">
                      {iconMap[service.icon] || <Sparkles size={16} />}
                    </span>
                    <span>{service.tag}</span>
                  </div>
                )}
              </div>

              {/* Card Body with Centered Copy */}
              <div className="p-7 space-y-4 text-center">
                <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-dalia-navy group-hover:text-dalia-navy transition-colors text-center">
                  {service.title}
                </h3>

                <p className="text-base sm:text-lg text-dalia-graphite leading-relaxed text-center">
                  {service.shortDescription}
                </p>

                {/* Didactic Key Highlights (Destacados) - Centered & Symmetric */}
                <div className="pt-4 border-t border-dalia-warm/60 space-y-2.5">
                  <p className="text-xs font-extrabold text-dalia-gold-dark uppercase tracking-wider text-center">
                    Destacados
                  </p>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center gap-2.5 text-sm sm:text-base text-dalia-navy font-semibold text-center"
                      >
                        <CheckCircle2 size={17} className="text-dalia-rose-dark shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer Actions: Conocer más | Agendar with Comfortable Padding */}
            <div className="p-6 pt-0 border-t border-dalia-warm/50 mt-4 flex items-center justify-between gap-3">
              <Link
                href={`/servicios/${service.slug}`}
                className="px-4 py-2.5 rounded-xl border border-dalia-warm bg-[#FAF8F7] hover:bg-dalia-rose/40 hover:border-dalia-rose text-sm font-extrabold text-dalia-navy flex items-center gap-1.5 transition-all whitespace-nowrap shadow-xs"
              >
                <span>Conocer más</span>
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform text-dalia-rose-dark"
                />
              </Link>

              {onSelectService && (
                <button
                  onClick={() => onSelectService(service.id)}
                  className="btn-gold text-sm px-6 py-2.5 rounded-xl flex items-center gap-2 font-bold shadow-md hover:ring-2 hover:ring-dalia-rose whitespace-nowrap"
                >
                  <Calendar size={15} />
                  <span>Agendar</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Switcher Callout - Allows user to explore the other area without scrolling all the way back up */}
      {showFilters && (
        <div className="mt-16 pt-10 border-t border-dalia-warm/70 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-dalia-gold-dark block">
            Explora Nuestras Áreas Clínicas
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-dalia-navy">
            {activeArea === "odontologia"
              ? "¿Deseas explorar los tratamientos de Armonización Facial?"
              : "¿Deseas revisar los tratamientos del Área Odontológica?"}
          </h3>
          <p className="text-sm sm:text-base text-dalia-graphite max-w-lg mx-auto">
            Puedes cambiar de área aquí mismo y revisar todos los procedimientos disponibles.
          </p>

          {renderAreaSwitcher(true)}
        </div>
      )}
    </div>
  );
}
