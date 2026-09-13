"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import InteractivePillars from "@/components/InteractivePillars";
import SmileComparison from "@/components/SmileComparison";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import { useAppointmentModal } from "@/components/ClientLayoutWrapper";
import { doctorsData } from "@/data/doctors";
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function HomePage() {
  const { openAppointment } = useAppointmentModal();

  return (
    <div className="space-y-20 md:space-y-28">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Los 5 Pilares Dalia: Tarjetas Didácticas e Interactivas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-sm sm:text-base uppercase tracking-[0.25em] font-extrabold text-dalia-gold-dark block mb-2">
            Nuestra Identidad & Propósito
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dalia-navy tracking-tight">
            La Experiencia Dalia Clinic
          </h2>
          <p className="text-lg md:text-xl text-dalia-graphite mt-3 leading-relaxed">
            Selecciona cada pilar para descubrir cómo combinamos ciencia, arte y exclusividad en cada tratamiento.
          </p>
        </div>

        {/* Componente Interactivo con Fotos y Pestañas */}
        <InteractivePillars />
      </section>

      {/* 3. Especialidades Clínicas: Tarjetas Visuales con Fotografía */}
      <section id="servicios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-dalia-gold-dark block mb-2">
              Tratamientos Integrales en Quilicura
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dalia-navy tracking-tight">
              Especialidades y Servicios
            </h2>
            <p className="text-lg md:text-xl text-dalia-graphite mt-2 max-w-2xl leading-relaxed">
              Explora nuestras especialidades. Cada tarjeta cuenta con información directa y acceso al detalle clínico completo.
            </p>
          </div>
          <button
            onClick={() => openAppointment()}
            className="btn-gold px-7 py-4 rounded-2xl text-base sm:text-lg font-bold flex items-center gap-2.5 self-start md:self-auto shrink-0 shadow-lg hover:ring-4 hover:ring-dalia-rose/50"
          >
            <Calendar size={18} />
            <span>Agendar Cita con Especialista</span>
          </button>
        </div>

        {/* Cuadrícula Didáctica con Imágenes */}
        <ServicesGrid onSelectService={(serviceId) => openAppointment(serviceId)} />
      </section>

      {/* 4. Comparador Interactivo Antes y Después */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <SmileComparison />
      </section>


      {/* 6. Nuestro Equipo Médico: Tarjetas Limpias y Visuales */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm sm:text-base uppercase tracking-[0.25em] font-extrabold text-dalia-gold-dark block mb-2">
            Profesionales Colegiados
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dalia-navy tracking-tight">
            Nuestro Equipo Médico
          </h2>
          <p className="text-lg md:text-xl text-dalia-graphite mt-3 leading-relaxed">
            Cirujanos dentistas y médicos especialistas dedicados a tu salud y estética facial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctorsData.slice(0, 3).map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl overflow-hidden border border-dalia-gold/30 shadow-luxury hover:shadow-luxury-hover hover:border-dalia-rose transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-80 sm:h-96 min-h-[320px] w-full overflow-hidden bg-dalia-warm">
                  <Image
                    src={doctor.image}
                    alt={`Doctor ${doctor.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dalia-navy/85 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-dalia-navy/90 text-dalia-gold text-sm font-bold px-3.5 py-1 rounded-full border border-dalia-gold/40">
                    {doctor.experienceYears}+ años exp.
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-sm font-bold text-dalia-gold uppercase tracking-wide block">
                      {doctor.specialty}
                    </span>
                    <p className="font-sans text-xl sm:text-2xl font-extrabold">{doctor.name}</p>
                    <p className="text-sm text-dalia-slate-light font-medium">{doctor.licenseNumber}</p>
                  </div>
                </div>

                <div className="p-7 space-y-3">
                  <p className="text-base text-dalia-graphite leading-relaxed">
                    {doctor.bio.split(".")[0]}. {doctor.bio.split(".")[1]}.
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0 border-t border-dalia-warm/60 flex items-center justify-between">
                <Link
                  href="/equipo"
                  className="text-base font-extrabold text-dalia-navy hover:text-dalia-rose-dark flex items-center gap-1.5 transition-colors"
                >
                  <span>Ver trayectoria completa</span>
                  <ArrowRight size={16} />
                </Link>
                <button
                  onClick={() => openAppointment()}
                  className="btn-gold text-sm sm:text-base px-4 py-2 rounded-xl font-bold shadow-sm hover:ring-2 hover:ring-dalia-rose"
                >
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/equipo"
            className="inline-flex items-center gap-2.5 text-base sm:text-lg font-extrabold text-dalia-navy hover:text-dalia-rose-dark border-b-2 border-dalia-gold hover:border-dalia-rose pb-1.5 transition-all"
          >
            <span>Conoce a todos los especialistas de Dalia Clinic</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 7. Testimonios */}
      <Testimonials />


      {/* 9. Contacto & Agendamiento */}
      <section id="contacto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-sm sm:text-base uppercase tracking-[0.25em] font-extrabold text-dalia-gold-dark block">
              Sede Quilicura
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-dalia-navy tracking-tight">
              Tu Nueva Sonrisa Comienza Aquí
            </h2>
            <p className="text-lg md:text-xl text-dalia-graphite leading-relaxed">
              Agenda tu consulta de evaluación y déjanos asesorarte con profesionalismo, delicadeza y tecnología de vanguardia.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="p-4.5 rounded-2xl bg-white border border-dalia-gold/30 shadow-xs flex items-center gap-4 hover:border-dalia-rose transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-dalia-rose/40 text-dalia-navy flex items-center justify-center shrink-0">
                  <Calendar size={22} className="text-dalia-rose-dark" />
                </div>
                <div>
                  <p className="text-base font-bold text-dalia-navy">Citas Flexibles & Urgencias</p>
                  <p className="text-sm text-dalia-graphite">Horarios continuados de lunes a sábado con atención prioritaria.</p>
                </div>
              </div>

              <div className="p-4.5 rounded-2xl bg-white border border-dalia-gold/30 shadow-xs flex items-center gap-4 hover:border-dalia-rose transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-dalia-navy text-white flex items-center justify-center shrink-0">
                  <ShieldCheck size={22} className="text-dalia-rose" />
                </div>
                <div>
                  <p className="text-base font-bold text-dalia-navy">Presupuestos Claros Sin Sorpresas</p>
                  <p className="text-sm text-dalia-graphite">Facilidades de pago en cuotas y convenios de reembolso.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/56975384019?text=Hola%20Dalia%20Clinic,%20quisiera%20agendar%20una%20hora"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 btn-navy px-8 py-4.5 rounded-2xl text-lg font-bold shadow-lg hover:bg-dalia-rose hover:text-dalia-navy transition-all"
              >
                <span>Chatear por WhatsApp con Coordinación</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
