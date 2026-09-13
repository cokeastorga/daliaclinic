import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import { Sparkles, MapPin, Phone, Mail, Clock, ShieldCheck, MessageCircle, Car, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto y Agendamiento de Citas | Dalia Clinic Quilicura",
  description:
    "Agenda tu hora de odontología o armonización facial en Dalia Clinic. Ubicados en Del Trigal 0174, Quilicura, Santiago. Teléfono +56 9 7538 4019. Horarios continuados y urgencias dentales.",
};

export default function ContactoPage() {
  return (
    <div className="py-12 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dalia-rose/30 text-dalia-navy text-xs font-semibold border border-dalia-rose/50">
            <Sparkles size={14} className="text-dalia-gold" />
            <span>Estamos Listos Para Atenderte</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dalia-navy tracking-tight leading-tight">
            Contacto & Ubicación
          </h1>
          <p className="text-base sm:text-lg text-dalia-graphite leading-relaxed">
            Visítanos en nuestra clínica en Quilicura o escríbenos directamente. Tu bienestar y comodidad son nuestra prioridad desde el primer contacto.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Location Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Location & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-dalia-navy text-white rounded-3xl p-8 border border-dalia-gold/30 shadow-luxury space-y-6">
              <h2 className="font-serif text-2xl font-bold text-dalia-gold">
                Sede Quilicura
              </h2>

              <div className="space-y-4 text-sm text-dalia-slate-light">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-dalia-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Dirección:</strong>
                    <span>
                      Del Trigal 0174<br />
                      Quilicura, Santiago
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-dalia-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Teléfono:</strong>
                    <span>+56 9 7538 4019</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-dalia-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Correo Electrónico:</strong>
                    <span>contacto@daliaclinic.cl</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Clock size={20} className="text-dalia-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Horario de Atención:</strong>
                    <p>Lunes a Viernes: 08:30 a 20:00 hrs</p>
                    <p>Sábados: 09:00 a 14:00 hrs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                  <Car size={20} className="text-dalia-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Estacionamiento & Accesibilidad:</strong>
                    <p className="text-xs">Estacionamiento para pacientes y fácil acceso vehicular y peatonal.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/56975384019?text=Hola%20Dalia%20Clinic,%20deseo%20agendar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-gold py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle size={17} />
                  <span>Hablar por WhatsApp con Coordinación</span>
                </a>
              </div>
            </div>

            {/* Urgencias Card */}
            <div className="bg-white rounded-3xl p-6 border border-dalia-gold/25 shadow-luxury flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-dalia-rose/40 text-dalia-navy flex items-center justify-center shrink-0">
                <Heart size={22} className="text-dalia-rose-dark" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-dalia-navy">¿Dolor agudo o Urgencia Dental?</h3>
                <p className="text-xs text-dalia-graphite mt-1 leading-relaxed">
                  Disponemos de turnos de urgencia prioritarios todos los días. Escríbenos directamente o llámanos para asistirte sin esperas.
                </p>
                <a
                  href="tel:+56975384019"
                  className="inline-block mt-2 text-xs font-bold text-dalia-navy hover:text-dalia-gold transition-colors"
                >
                  Llamar ahora: +56 9 7538 4019 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-dalia-gold-dark block mb-2">
            Preguntas Frecuentes
          </span>
          <h2 className="font-serif text-3xl font-bold text-dalia-navy">
            Resolvemos tus Dudas Antes de Asistir
          </h2>
        </div>
        <FaqAccordion />
      </section>
    </div>
  );
}
