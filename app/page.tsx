"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import SmileComparison from "@/components/SmileComparison";
import Testimonials from "@/components/Testimonials";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import { useAppointmentModal } from "@/components/ClientLayoutWrapper";
import { doctorsData } from "@/data/doctors";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Heart,
  Eye,
  Microscope,
  Zap,
  Award,
  Clock,
  Compass,
} from "lucide-react";

export default function HomePage() {
  const { openAppointment } = useAppointmentModal();

  return (
    <div className="space-y-20 md:space-y-28">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Sensación y Filosofía de Marca: Los 5 Pilares Dalia */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-dalia-gold-dark block mb-2">
            Nuestra Identidad & Propósito
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-dalia-navy tracking-tight">
            La Experiencia Dalia Clinic
          </h2>
          <p className="text-sm md:text-base text-dalia-graphite mt-3 leading-relaxed">
            Una visión vanguardista donde la salud dental convive con la proporción estética del rostro. Cada detalle de nuestra clínica fue concebido para tu serenidad, belleza y bienestar integral.
          </p>
        </div>

        {/* 5 Brand Values from Color Palette Board */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {/* Pilar 1 */}
          <div className="bg-white rounded-3xl p-6 border border-dalia-gold/20 shadow-luxury hover:border-dalia-gold/50 transition-all text-center group">
            <div className="w-12 h-12 rounded-2xl bg-dalia-rose/30 text-dalia-navy mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles size={22} className="text-dalia-gold-dark" />
            </div>
            <h3 className="font-serif text-lg font-bold text-dalia-navy mb-1">
              Elegancia Natural
            </h3>
            <p className="text-xs text-dalia-graphite-light leading-relaxed">
              Resultados sutiles y orgánicos inspirados en la geometría perfecta de la flor de Dalia.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="bg-white rounded-3xl p-6 border border-dalia-gold/20 shadow-luxury hover:border-dalia-gold/50 transition-all text-center group">
            <div className="w-12 h-12 rounded-2xl bg-dalia-navy/10 text-dalia-navy mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Microscope size={22} className="text-dalia-navy" />
            </div>
            <h3 className="font-serif text-lg font-bold text-dalia-navy mb-1">
              Ciencia y Rigor
            </h3>
            <p className="text-xs text-dalia-graphite-light leading-relaxed">
              Diagnóstico digital 3D, microscopía clínica y odontología respaldada por evidencia científica.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="bg-white rounded-3xl p-6 border border-dalia-gold/20 shadow-luxury hover:border-dalia-gold/50 transition-all text-center group">
            <div className="w-12 h-12 rounded-2xl bg-dalia-rose/30 text-dalia-navy mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart size={22} className="text-dalia-rose-dark" />
            </div>
            <h3 className="font-serif text-lg font-bold text-dalia-navy mb-1">
              Belleza y Armonía
            </h3>
            <p className="text-xs text-dalia-graphite-light leading-relaxed">
              Fusión magistral entre sonrisa y medicina estética facial (labios, mentón y expresión).
            </p>
          </div>

          {/* Pilar 4 */}
          <div className="bg-white rounded-3xl p-6 border border-dalia-gold/20 shadow-luxury hover:border-dalia-gold/50 transition-all text-center group">
            <div className="w-12 h-12 rounded-2xl bg-dalia-slate/20 text-dalia-navy mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck size={22} className="text-dalia-slate-dark" />
            </div>
            <h3 className="font-serif text-lg font-bold text-dalia-navy mb-1">
              Cercanía y Confianza
            </h3>
            <p className="text-xs text-dalia-graphite-light leading-relaxed">
              Trato empático, escucha activa y un protocolo cálido sin dolores ni prisas médicas.
            </p>
          </div>

          {/* Pilar 5 */}
          <div className="bg-white rounded-3xl p-6 border border-dalia-gold/20 shadow-luxury hover:border-dalia-gold/50 transition-all text-center group">
            <div className="w-12 h-12 rounded-2xl bg-dalia-gold/20 text-dalia-gold-dark mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Award size={22} className="text-dalia-gold-dark" />
            </div>
            <h3 className="font-serif text-lg font-bold text-dalia-navy mb-1">
              Exclusividad y Lujo
            </h3>
            <p className="text-xs text-dalia-graphite-light leading-relaxed">
              Instalaciones tipo boutique en Las Condes con máxima privacidad y confort sensorial.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Especialidades Clínicas y Servicios Requeridos */}
      <section id="servicios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-dalia-gold-dark block mb-2">
              Tratamientos Integrales de Alta Precisión
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-dalia-navy tracking-tight">
              Especialidades y Servicios
            </h2>
            <p className="text-sm md:text-base text-dalia-graphite mt-2 max-w-2xl">
              Abordamos cada caso desde una perspectiva multidisciplinaria para devolver función masticatoria, estética y salud duradera.
            </p>
          </div>
          <button
            onClick={() => openAppointment()}
            className="btn-gold px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 self-start md:self-auto shrink-0"
          >
            <Calendar size={16} />
            <span>Agendar Cita con Especialista</span>
          </button>
        </div>

        {/* Services Grid with Interactive Selection */}
        <ServicesGrid onSelectService={(serviceId) => openAppointment(serviceId)} />
      </section>

      {/* 4. Interactive Smile Comparison (Antes y Después) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <SmileComparison />
      </section>

      {/* 5. Tecnología de Punta: El Diagnóstico Digital 3D */}
      <section className="bg-dalia-navy text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-dalia-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-dalia-gold block">
                Vanguardia Tecnológica
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Diagnóstico 3D & Planificación Virtual Inmediata
              </h2>
              <p className="text-sm md:text-base text-dalia-slate-light leading-relaxed">
                Olvídate de las tomas de moldes tradicionales con pastas incómodas. En Dalia Clinic contamos con tecnología de punta integrada directamente en la clínica:
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-dalia-gold/20 text-dalia-gold flex items-center justify-center shrink-0 mt-1">
                    <Zap size={17} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">Escáner Intraoral 3D HD</h3>
                    <p className="text-xs text-dalia-slate-light mt-0.5">
                      Digitalización completa de tu boca en minutos con precisión microscópica y sin provocar reflejo nauseoso.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-dalia-gold/20 text-dalia-gold flex items-center justify-center shrink-0 mt-1">
                    <Eye size={17} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">Tomografía Cone Beam 3D (CBCT)</h3>
                    <p className="text-xs text-dalia-slate-light mt-0.5">
                      Visualización tridimensional de estructuras óseas y nerviosas con hasta un 80% menos radiación.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-dalia-gold/20 text-dalia-gold flex items-center justify-center shrink-0 mt-1">
                    <Compass size={17} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">Cirugía Guiada y Carga Inmediata</h3>
                    <p className="text-xs text-dalia-slate-light mt-0.5">
                      Inserción milimétrica de implantes mediante férulas CAD/CAM con mínimas molestias postoperatorias.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openAppointment()}
                  className="btn-gold px-7 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2"
                >
                  <Calendar size={16} />
                  <span>Solicitar Escaneo 3D en tu Primera Consulta</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-[400px] md:h-[460px] rounded-3xl overflow-hidden border-2 border-dalia-gold/40 shadow-luxury">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
                  alt="Tecnología de escáner intraoral 3D y radiología en Dalia Clinic"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dalia-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-dalia-navy/90 backdrop-blur-md border border-dalia-gold/30">
                  <p className="text-xs text-dalia-gold font-bold uppercase tracking-wider">Centro Radiológico Propio</p>
                  <p className="text-sm font-semibold text-white">Diagnóstico certero el mismo día de tu visita sin traslados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Nuestro Equipo Médico */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-dalia-gold-dark block mb-2">
            Profesionales de Excelencia
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-dalia-navy tracking-tight">
            Nuestro Equipo Médico
          </h2>
          <p className="text-sm md:text-base text-dalia-graphite mt-3">
            Especialistas con formación en las universidades más prestigiosas del mundo y amplia trayectoria en odontología integral y armonización facial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctorsData.slice(0, 3).map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl overflow-hidden border border-dalia-gold/25 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-80 w-full overflow-hidden bg-dalia-warm">
                <Image
                  src={doctor.image}
                  alt={`Doctor ${doctor.name} - ${doctor.role}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dalia-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-semibold text-dalia-gold tracking-wide uppercase block">
                    {doctor.specialty}
                  </span>
                  <p className="font-serif text-xl font-bold">{doctor.name}</p>
                  <p className="text-xs text-dalia-slate-light">{doctor.licenseNumber}</p>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <p className="text-xs text-dalia-graphite leading-relaxed line-clamp-3">
                  {doctor.bio}
                </p>
                <div className="pt-3 border-t border-dalia-warm/60 flex items-center justify-between">
                  <span className="text-xs text-dalia-gold-dark font-medium">
                    {doctor.experienceYears}+ años de experiencia
                  </span>
                  <Link
                    href="/equipo"
                    className="text-xs font-semibold text-dalia-navy hover:text-dalia-gold flex items-center gap-1 transition-colors"
                  >
                    <span>Ver trayectoria</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/equipo"
            className="inline-flex items-center gap-2 text-sm font-semibold text-dalia-navy hover:text-dalia-gold border-b-2 border-dalia-gold pb-1 transition-colors"
          >
            <span>Conoce a todos los especialistas de Dalia Clinic</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* 7. Testimonios */}
      <Testimonials />

      {/* 8. Preguntas Frecuentes (FAQs) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-dalia-gold-dark block mb-2">
            Claridad y Confianza
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dalia-navy tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm text-dalia-graphite mt-2">
            Resolvemos tus dudas sobre consultas, formas de pago, tecnología y cómo preparamos tu primera visita.
          </p>
        </div>

        <FaqAccordion />
      </section>

      {/* 9. Contacto & Agendamiento CTA Section */}
      <section id="contacto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-dalia-gold-dark block">
              Estamos en Las Condes
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-dalia-navy tracking-tight">
              Da el Primer Paso Hacia tu Sonrisa Ideal
            </h2>
            <p className="text-sm md:text-base text-dalia-graphite leading-relaxed">
              Agenda tu consulta de evaluación y déjanos asesorarte con el máximo profesionalismo y calidez humana.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-dalia-gold/20 shadow-xs flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-dalia-rose/30 text-dalia-navy flex items-center justify-center shrink-0">
                  <Calendar size={20} className="text-dalia-gold-dark" />
                </div>
                <div>
                  <p className="text-xs font-bold text-dalia-navy">Citas Flexibles & Urgencias</p>
                  <p className="text-xs text-dalia-graphite-light">Horarios extendidos y atención de urgencia con cita previa.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-dalia-gold/20 shadow-xs flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-dalia-navy text-white flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} className="text-dalia-gold" />
                </div>
                <div>
                  <p className="text-xs font-bold text-dalia-navy">Presupuestos Claros Sin Letra Chica</p>
                  <p className="text-xs text-dalia-graphite-light">Facilidades de pago en cuotas y reembolso con seguros de salud.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/56987654321?text=Hola%20Dalia%20Clinic,%20quisiera%20agendar%20una%20hora"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-navy px-6 py-3.5 rounded-xl text-sm font-semibold"
              >
                <span>Chatear por WhatsApp con una Coordinadora</span>
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
