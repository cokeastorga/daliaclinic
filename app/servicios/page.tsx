import type { Metadata } from "next";
import Link from "next/link";
import ServicesGrid from "@/components/ServicesGrid";
import { Sparkles, Calendar, ShieldCheck, CheckCircle2, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Especialidades y Servicios | Odontología y Estética Facial",
  description:
    "Catálogo completo de tratamientos en Dalia Clinic: Limpieza dental por ultrasonido, extracciones atraumáticas, endodoncia microscópica, ortodoncia invisible, diseño de sonrisa, odontopediatría, implantes 3D, radiología y armonización facial.",
  keywords: [
    "limpieza dental ultrasonido",
    "extracciones dentales",
    "muelas del juicio sin dolor",
    "endodoncia microscopio",
    "ortodoncia invisible Santiago",
    "estetica oral diseno de sonrisa",
    "odontologia general",
    "odontopediatria Quilicura",
    "rehabilitacion oral implantes",
    "radiologia dental 3d",
    "armonizacion facial acido hialuronico"
  ]
};

export default function ServiciosPage() {
  return (
    <div className="py-12 space-y-16">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dalia-rose/30 text-dalia-navy text-xs font-semibold border border-dalia-rose/50">
            <Sparkles size={14} className="text-dalia-gold" />
            <span>Atención Multidisciplinaria en Quilicura</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dalia-navy tracking-tight leading-tight">
            Nuestras Especialidades & Tratamientos
          </h1>
          <p className="text-base sm:text-lg text-dalia-graphite leading-relaxed">
            Desde la prevención básica y la atención respetuosa infantil hasta rehabilitaciones orales de alta complejidad y armonización orofacial médica. Cada procedimiento es guiado por tecnología digital 3D para una experiencia segura y sin dolor.
          </p>
        </div>
      </section>

      {/* Grid of All 10 Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesGrid showFilters={true} />
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dalia-navy rounded-3xl p-8 md:p-12 text-white border border-dalia-gold/30 shadow-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-dalia-gold/20 text-dalia-gold flex items-center justify-center mx-auto md:mx-0">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold text-dalia-gold">Garantía Clínica y Trazabilidad</h3>
              <p className="text-xs text-dalia-slate-light leading-relaxed">
                Todos nuestros implantes y cerámicas cuentan con pasaporte clínico y certificación de calidad biológica internacional.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-dalia-gold/20 text-dalia-gold flex items-center justify-center mx-auto md:mx-0">
                <Sparkles size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold text-dalia-gold">Sedación & Confort Total</h3>
              <p className="text-xs text-dalia-slate-light leading-relaxed">
                Para procedimientos quirúrgicos o pacientes con fobia dental, ofrecemos sedación consciente supervisada por anestesiólogos.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-dalia-gold/20 text-dalia-gold flex items-center justify-center mx-auto md:mx-0">
                <Calendar size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold text-dalia-gold">Evaluación y Diagnóstico 3D</h3>
              <p className="text-xs text-dalia-slate-light leading-relaxed">
                Agenda tu cita y recibe una planificación virtual con presupuesto transparente y facilidades de pago en cuotas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
