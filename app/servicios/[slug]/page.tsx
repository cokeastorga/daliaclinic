import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData, Service } from "@/data/services";
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
  CheckCircle2,
  Calendar,
  Clock,
  UserCheck,
  ArrowLeft,
  ChevronRight,
  HelpCircle,
  Phone,
} from "lucide-react";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: "Servicio No Encontrado | Dalia Clinic" };

  return {
    title: `${service.title} en Las Condes | Dalia Clinic`,
    description: service.shortDescription,
    keywords: [
      service.title,
      `${service.title} Santiago`,
      `${service.title} Las Condes`,
      "Dalia Clinic",
      service.tag,
      "odontología avanzada",
    ],
    openGraph: {
      title: `${service.title} | Dalia Clinic Odontología y Armonización Facial`,
      description: service.shortDescription,
      url: `https://daliaclinic.cl/servicios/${service.slug}`,
      type: "article",
    },
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles size={28} />,
    ShieldAlert: <ShieldAlert size={28} />,
    Activity: <Activity size={28} />,
    Smile: <Smile size={28} />,
    Gem: <Gem size={28} />,
    Stethoscope: <Stethoscope size={28} />,
    HeartHandshake: <HeartHandshake size={28} />,
    Layers: <Layers size={28} />,
    Scan: <Scan size={28} />,
    Sparkle: <Sparkle size={28} />,
  };

  // Schema.org MedicalProcedure
  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.shortDescription,
    procedureType: "NonSurgicalProcedure",
    howPerformed: service.process.map((p) => `${p.step}. ${p.title}: ${p.desc}`).join(" | "),
    provider: {
      "@type": "Dentist",
      name: "Dalia Clinic",
      url: "https://daliaclinic.cl",
      telephone: "+56987654321",
    },
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Dalia Clinic, me gustaría agendar una hora para el tratamiento de: ${service.title}. ¿Qué turnos tienen disponibles?`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />

      <div className="py-10 space-y-14">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-xs text-dalia-slate-dark gap-2 mb-6">
            <Link href="/" className="hover:text-dalia-navy transition-colors">
              Inicio
            </Link>
            <ChevronRight size={12} />
            <Link href="/servicios" className="hover:text-dalia-navy transition-colors">
              Especialidades
            </Link>
            <ChevronRight size={12} />
            <span className="text-dalia-navy font-semibold">{service.title}</span>
          </nav>

          {/* Service Title Header */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-dalia-gold/30 shadow-luxury flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-dalia-rose/30 text-dalia-navy flex items-center justify-center">
                  {iconMap[service.icon] || <Sparkles size={28} />}
                </div>
                <span className="text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-dalia-warm-light text-dalia-navy border border-dalia-gold/30">
                  {service.tag}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dalia-navy tracking-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-dalia-graphite leading-relaxed">
                {service.shortDescription}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-dalia-graphite border-t border-dalia-warm/60">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-dalia-gold" />
                  <span><strong>Duración:</strong> {service.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck size={16} className="text-dalia-gold" />
                  <span><strong>Indicado para:</strong> {service.suitableFor}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="bg-[#FAF8F7] p-6 rounded-2xl border border-dalia-gold/30 shrink-0 md:w-80 space-y-3.5 text-center">
              <p className="text-xs font-bold text-dalia-navy uppercase tracking-wider">
                Reserva tu Turno
              </p>
              <p className="text-xs text-dalia-graphite-light">
                Evaluación clínica y diagnóstico 3D con especialista en Las Condes.
              </p>
              <a
                href={`https://wa.me/56987654321?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-gold py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Calendar size={16} />
                <span>Agendar por WhatsApp</span>
              </a>
              <Link
                href="/contacto"
                className="w-full inline-block py-2 text-xs font-semibold text-dalia-navy hover:text-dalia-gold transition-colors"
              >
                O solicita hora mediante formulario web →
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Explanation & Benefits */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Full Description & Step-by-Step */}
            <div className="lg:col-span-7 space-y-10">
              <div className="bg-white rounded-3xl p-8 border border-dalia-gold/20 shadow-luxury space-y-4">
                <h2 className="font-serif text-2xl font-bold text-dalia-navy">
                  ¿En qué consiste este tratamiento en Dalia Clinic?
                </h2>
                <p className="text-sm md:text-base text-dalia-graphite leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Step-by-Step Procedure */}
              <div className="bg-white rounded-3xl p-8 border border-dalia-gold/20 shadow-luxury space-y-6">
                <h2 className="font-serif text-2xl font-bold text-dalia-navy">
                  Paso a Paso del Tratamiento
                </h2>
                <div className="space-y-4">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F7] border border-dalia-warm/60">
                      <div className="w-9 h-9 rounded-xl bg-dalia-navy text-dalia-gold font-bold text-sm flex items-center justify-center shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-dalia-navy">{step.title}</h3>
                        <p className="text-xs text-dalia-graphite mt-0.5 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Benefits & FAQs */}
            <div className="lg:col-span-5 space-y-8">
              {/* Benefits Checklist */}
              <div className="bg-dalia-navy text-white rounded-3xl p-8 border border-dalia-gold/30 shadow-luxury space-y-5">
                <div className="flex items-center gap-2 text-dalia-gold">
                  <Sparkles size={20} />
                  <h3 className="font-serif text-xl font-bold text-white">Beneficios Principales</h3>
                </div>
                <div className="space-y-3">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-dalia-slate-light">
                      <CheckCircle2 size={16} className="text-dalia-gold shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service FAQs */}
              {service.faqs.length > 0 && (
                <div className="bg-white rounded-3xl p-8 border border-dalia-gold/20 shadow-luxury space-y-5">
                  <h3 className="font-serif text-xl font-bold text-dalia-navy flex items-center gap-2">
                    <HelpCircle size={18} className="text-dalia-gold" />
                    <span>Preguntas Frecuentes</span>
                  </h3>
                  <div className="space-y-4">
                    {service.faqs.map((faq, i) => (
                      <div key={i} className="border-b border-dalia-warm/60 pb-3 last:border-none last:pb-0">
                        <p className="text-xs font-bold text-dalia-navy mb-1">{faq.question}</p>
                        <p className="text-xs text-dalia-graphite leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-semibold text-dalia-navy hover:text-dalia-gold transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Volver al Catálogo de Especialidades</span>
          </Link>
        </div>
      </div>
    </>
  );
}
