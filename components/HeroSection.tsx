"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, ShieldCheck, ArrowRight, Star, Heart, CheckCircle2 } from "lucide-react";
import { useAppointmentModal } from "./ClientLayoutWrapper";

export default function HeroSection() {
  const { openAppointment } = useAppointmentModal();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-20 bg-gradient-to-b from-[#FAF8F7] via-dalia-rose-light/25 to-[#FAF8F7]">
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-dalia-rose/25 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[420px] h-[420px] bg-dalia-gold/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-dalia-gold/40 shadow-sm text-dalia-navy text-sm font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-dalia-gold animate-pulse" />
              <span>Odontología Integral y Armonización Facial</span>
              <div className="h-3.5 w-[1px] bg-dalia-gold/40" />
              <span className="text-dalia-gold-dark font-medium hidden sm:inline">Las Condes, Santiago</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dalia-navy tracking-tight leading-[1.14]">
              Donde la Ciencia Odontológica se Funde con la{" "}
              <span className="text-gold-gradient italic font-normal">
                Armonía Facial
              </span>
            </h1>

            {/* Subheadline - Clear, Direct, No Fluff */}
            <p className="text-base sm:text-lg text-dalia-graphite leading-relaxed max-w-2xl mx-auto lg:mx-0">
              En <strong>Dalia Clinic</strong> transformamos tu sonrisa y cuidamos las proporciones de tu rostro. Tecnología digital 3D, microcirugía sin dolor y tratamientos de alta gama con el más cálido trato humano.
            </p>

            {/* Key Value Didactic Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-left">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-dalia-gold/25 shadow-xs">
                <CheckCircle2 size={18} className="text-dalia-gold shrink-0" />
                <span className="text-sm font-semibold text-dalia-navy">Escáner 3D Digital</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-dalia-gold/25 shadow-xs">
                <CheckCircle2 size={18} className="text-dalia-gold shrink-0" />
                <span className="text-sm font-semibold text-dalia-navy">Protocolo Cero Dolor</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-dalia-gold/25 shadow-xs">
                <CheckCircle2 size={18} className="text-dalia-gold shrink-0" />
                <span className="text-sm font-semibold text-dalia-navy">Especialistas Colegiados</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={() => openAppointment()}
                className="w-full sm:w-auto btn-gold px-8 py-4 rounded-2xl text-base font-semibold flex items-center justify-center gap-2.5 shadow-lg group"
              >
                <Calendar size={18} />
                <span>Agendar Cita de Valoración</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/servicios"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl text-base font-semibold text-dalia-navy bg-white border border-dalia-warm hover:border-dalia-gold hover:bg-dalia-warm-light transition-all text-center"
              >
                Explorar Tratamientos
              </Link>
            </div>

            {/* Social Proof Mini */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 border-t border-dalia-warm/60">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120"
                  alt="Paciente Dalia Clinic"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
                  alt="Paciente Dalia Clinic"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
                  alt="Paciente Dalia Clinic"
                />
              </div>
              <div className="text-left text-sm">
                <div className="flex items-center gap-1 text-dalia-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                  <span className="font-bold text-dalia-navy ml-1 text-base">5.0</span>
                </div>
                <p className="text-dalia-graphite font-medium text-xs sm:text-sm">
                  Más de <strong>5,000 pacientes</strong> felices en Santiago
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Luxury Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative h-[440px] sm:h-[500px] w-full rounded-3xl overflow-hidden border-2 border-dalia-gold/40 shadow-luxury">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                  alt="Instalaciones de primer nivel en Dalia Clinic Odontología y Armonización Facial"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dalia-navy/80 via-transparent to-transparent" />

                {/* Overlay Bottom Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-dalia-gold/30 shadow-luxury">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold text-dalia-gold-dark">
                        Diagnóstico 3D en Consulta
                      </p>
                      <p className="text-sm font-bold text-dalia-navy">
                        Visualiza tu Sonrisa Ideal Antes de Iniciar
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-dalia-navy text-dalia-gold flex items-center justify-center shrink-0">
                      <Sparkles size={18} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <div className="absolute -top-4 -right-4 bg-dalia-navy text-white p-4 rounded-2xl shadow-luxury border border-dalia-gold/40 max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck size={18} className="text-dalia-gold" />
                  <span className="text-xs font-bold">Bioseguridad 100%</span>
                </div>
                <p className="text-xs text-dalia-slate-light leading-snug">
                  Esterilización clase B y filtros de purificación de aire HEPA.
                </p>
              </div>

              {/* Floating Badge Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-white text-dalia-navy p-4 rounded-2xl shadow-luxury border border-dalia-rose/60 max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1 text-dalia-gold-dark">
                  <Heart size={18} className="text-dalia-rose-dark" />
                  <span className="text-xs font-bold">Sedación Consciente</span>
                </div>
                <p className="text-xs text-dalia-graphite leading-snug">
                  Atención relajada para pacientes con temor al dentista.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Counter Bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-3xl border border-dalia-gold/25 shadow-luxury">
          <div className="text-center p-3 border-r border-dalia-warm/60 last:border-none">
            <span className="font-serif text-3xl md:text-4xl font-extrabold text-dalia-navy block">
              14+
            </span>
            <span className="text-xs md:text-sm text-dalia-graphite font-semibold tracking-wide mt-1 block">
              Años de Trayectoria
            </span>
          </div>
          <div className="text-center p-3 border-r border-dalia-warm/60 last:border-none">
            <span className="font-serif text-3xl md:text-4xl font-extrabold text-dalia-navy block">
              +5,000
            </span>
            <span className="text-xs md:text-sm text-dalia-graphite font-semibold tracking-wide mt-1 block">
              Pacientes Atendidos
            </span>
          </div>
          <div className="text-center p-3 border-r border-dalia-warm/60 last:border-none">
            <span className="font-serif text-3xl md:text-4xl font-extrabold text-dalia-navy block">
              100%
            </span>
            <span className="text-xs md:text-sm text-dalia-graphite font-semibold tracking-wide mt-1 block">
              Flujo Digital 3D
            </span>
          </div>
          <div className="text-center p-3">
            <span className="font-serif text-3xl md:text-4xl font-extrabold text-dalia-navy block text-gold-gradient">
              5.0 ★
            </span>
            <span className="text-xs md:text-sm text-dalia-graphite font-semibold tracking-wide mt-1 block">
              Opiniones Verificadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
