import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { faqsData } from "@/data/faqs";
import {
  HelpCircle,
  Sparkles,
  MessageCircle,
  Calendar,
  ShieldCheck,
  Clock,
  PhoneCall,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Dalia Clinic Odontología y Armonización Facial",
  description:
    "Resolvemos todas tus consultas sobre tratamientos odontológicos, ortodoncia invisible, implantes 3D, armonización facial, facilidades de pago y protocolos de cero dolor en Quilicura.",
  keywords: [
    "preguntas frecuentes dentista",
    "dudas ortodoncia invisible santiago",
    "dolor implante dental quilicura",
    "cuanto dura carillas dentales",
    "sedacion consciente dentista chile",
    "facilidades de pago clinica dental",
    "urgencias dentales santiago"
  ],
  openGraph: {
    title: "Preguntas Frecuentes | Dalia Clinic Quilicura",
    description: "Respuestas claras sobre tratamientos, financiamiento, tecnología digital y bioseguridad en Dalia Clinic.",
    url: "https://daliaclinic.cl/preguntas-frecuentes",
    siteName: "Dalia Clinic",
    locale: "es_CL",
    type: "website",
  },
};

export default function PreguntasFrecuentesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="py-12 md:py-16 space-y-16">
        {/* Hero Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dalia-rose/40 text-dalia-navy text-xs sm:text-sm font-extrabold border border-dalia-rose shadow-xs">
              <Sparkles size={15} className="text-dalia-rose-dark" />
              <span>Claridad, Confianza & Cercanía</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dalia-navy tracking-tight leading-tight">
              Preguntas Frecuentes
            </h1>

            <p className="text-base sm:text-lg text-dalia-graphite leading-relaxed max-w-2xl mx-auto">
              Todo lo que necesitas saber antes de tu visita: procedimientos clínicos, tecnología digital 3D, convenios, opciones de pago y medidas para una atención 100% libre de dolor.
            </p>
          </div>
        </section>

        {/* FAQ Accordion Component */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion />
        </section>

        {/* Still Have Questions CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-dalia-gold/30 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-dalia-gold-dark uppercase tracking-wider">
                <HelpCircle size={18} className="text-dalia-rose-dark" />
                <span>¿Tienes una inquietud diferente o caso particular?</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-dalia-navy">
                Nuestro equipo médico está para escucharte y orientarte
              </h2>
              <p className="text-base text-dalia-graphite leading-relaxed">
                Escríbenos directamente o agenda tu hora de valoración diagnóstica con escaneo 3D en nuestra sede en Quilicura.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2.5 text-sm font-bold text-dalia-navy">
                  <ShieldCheck size={18} className="text-dalia-rose-dark shrink-0" />
                  <span>Diagnóstico personalizado</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-dalia-navy">
                  <Clock size={18} className="text-dalia-rose-dark shrink-0" />
                  <span>Respuesta rápida</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-dalia-navy">
                  <PhoneCall size={18} className="text-dalia-rose-dark shrink-0" />
                  <span>Urgencias prioritarias</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <a
                href="https://wa.me/56975384019?text=Hola%20Dalia%20Clinic,%20tengo%20una%20consulta%20antes%20de%20agendar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-gold py-4 rounded-2xl text-center text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:ring-2 hover:ring-dalia-rose"
              >
                <MessageCircle size={18} />
                <span>Consultar por WhatsApp</span>
              </a>

              <Link
                href="/contacto"
                className="w-full btn-navy py-4 rounded-2xl text-center text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:bg-dalia-rose hover:text-dalia-navy transition-all"
              >
                <Calendar size={18} />
                <span>Agendar Cita en Línea</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
