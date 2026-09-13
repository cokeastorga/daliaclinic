import React from "react";
import Image from "next/image";
import { Star, ShieldCheck, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF8F7] via-dalia-rose-light/20 to-[#FAF8F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dalia-navy text-white text-xs font-semibold mb-3 border border-dalia-gold/30">
            <div className="flex items-center text-dalia-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="currentColor" />
              ))}
            </div>
            <span>5.0 / 5.0 en Reseñas Verificadas</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-dalia-navy tracking-tight">
            Historias Reales, Sonrisas Extraordinarias
          </h2>
          <p className="text-sm md:text-base text-dalia-graphite mt-3">
            La tranquilidad de nuestros pacientes es nuestro mayor orgullo. Conoce las experiencias de quienes ya confiaron su salud y armonía en Dalia Clinic.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 border border-dalia-gold/25 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between relative"
            >
              <div className="absolute top-6 right-6 text-dalia-rose/40">
                <Quote size={32} />
              </div>

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-dalia-gold mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs md:text-sm text-dalia-graphite leading-relaxed italic mb-6">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Patient Info */}
              <div className="pt-4 border-t border-dalia-warm/60 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-dalia-gold/50 shrink-0">
                  <Image
                    src={t.avatar}
                    alt={`Paciente ${t.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-bold text-dalia-navy truncate">
                      {t.name}
                    </p>
                    {t.verified && (
                      <span title="Paciente Verificado">
                        <ShieldCheck size={13} className="text-emerald-500 shrink-0" />
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-dalia-gold-dark font-medium truncate">
                    {t.treatment}
                  </p>
                  <p className="text-[10px] text-dalia-slate-dark">
                    {t.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
