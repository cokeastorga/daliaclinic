"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { useAppointmentModal } from "./ClientLayoutWrapper";

export default function HeroSection() {
  const { openAppointment } = useAppointmentModal();

  return (
    <section className="relative overflow-hidden pt-8 pb-8 md:pt-14 md:pb-12 bg-gradient-to-b from-[#FAF8F7] via-dalia-rose-light/30 to-[#FAF8F7]">
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-dalia-rose/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-dalia-gold/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-dalia-gold/40 shadow-sm text-dalia-navy text-sm sm:text-base font-bold">
              <span className="w-3 h-3 rounded-full bg-dalia-gold animate-pulse" />
              <span>Odontología Integral y Armonización Facial</span>
              <div className="h-4 w-[1px] bg-dalia-gold/40" />
              <span className="text-dalia-gold-dark font-semibold hidden sm:inline">Quilicura, Santiago</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dalia-navy tracking-tight leading-[1.14]">
              Donde la{" "}
              <span className="text-rose-gradient italic font-normal">
                armonía
              </span>{" "}
              florece en cada{" "}
              <span className="text-rose-gradient italic font-normal">
                sonrisa
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-dalia-graphite leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              En <strong>Dalia Clinic</strong> cuidamos tu salud oral y realzamos los rasgos naturales de tu rostro, a través de una atención integral y personalizada, pensada para tu bienestar.
            </p>

            {/* Key Value Didactic Bullets - Centered & Balanced */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              <div className="flex items-center justify-center text-center gap-2.5 bg-white p-4 rounded-2xl border border-dalia-gold/30 shadow-sm hover:border-dalia-rose hover:bg-dalia-rose/20 transition-all">
                <CheckCircle2 size={20} className="text-dalia-rose-dark shrink-0" />
                <span className="text-sm sm:text-base font-bold text-dalia-navy text-center">
                  Atención personalizada y cercana
                </span>
              </div>
              <div className="flex items-center justify-center text-center gap-2.5 bg-white p-4 rounded-2xl border border-dalia-gold/30 shadow-sm hover:border-dalia-rose hover:bg-dalia-rose/20 transition-all">
                <CheckCircle2 size={20} className="text-dalia-rose-dark shrink-0" />
                <span className="text-sm sm:text-base font-bold text-dalia-navy text-center">
                  Odontología integral
                </span>
              </div>
              <div className="flex items-center justify-center text-center gap-2.5 bg-white p-4 rounded-2xl border border-dalia-gold/30 shadow-sm hover:border-dalia-rose hover:bg-dalia-rose/20 transition-all">
                <CheckCircle2 size={20} className="text-dalia-rose-dark shrink-0" />
                <span className="text-sm sm:text-base font-bold text-dalia-navy text-center">
                  Profesionales calificados
                </span>
              </div>
            </div>

            {/* CTA Buttons - Comfortable Spacing & Padding */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={() => openAppointment()}
                className="w-full sm:w-auto bg-dalia-rose hover:bg-dalia-rose-dark text-dalia-navy px-8 sm:px-10 py-4 rounded-2xl text-base sm:text-lg font-extrabold flex items-center justify-center gap-3 shadow-xl transition-all border border-dalia-rose-dark/40 hover:shadow-2xl hover:scale-[1.02] whitespace-nowrap group"
              >
                <Calendar size={20} className="text-dalia-navy shrink-0" />
                <span>Agenda tu evaluación</span>
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform text-dalia-navy shrink-0" />
              </button>

              <Link
                href="#servicios"
                className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-2xl text-base sm:text-lg font-bold text-dalia-navy bg-white border-2 border-dalia-warm hover:border-dalia-rose hover:bg-dalia-rose/30 transition-all text-center shadow-sm whitespace-nowrap"
              >
                Explorar Tratamientos
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Luxury Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative h-[460px] sm:h-[520px] w-full rounded-3xl overflow-hidden border-2 border-dalia-gold/40 shadow-luxury hover:border-dalia-rose transition-all duration-300">
                <Image
                  src="/hero-smile.jpg"
                  alt="Dalia Clinic - Donde la armonía florece en cada sonrisa"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
