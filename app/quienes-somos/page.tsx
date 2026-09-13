import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ShieldCheck, Heart, Award, Microscope, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Quiénes Somos | Filosofía y Trayectoria",
  description:
    "Conoce la historia, propósito y filosofía de Dalia Clinic. Una clínica odontológica y centro de armonización facial en Quilicura que fusiona ciencia digital 3D, calidez humana y elegancia natural.",
};

export default function QuienesSomosPage() {
  return (
    <div className="py-12 space-y-20">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dalia-rose/30 text-dalia-navy text-xs font-semibold border border-dalia-rose/50">
            <Sparkles size={14} className="text-dalia-gold" />
            <span>Nuestra Historia & Filosofía</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dalia-navy tracking-tight leading-tight">
            Elevando la Odontología al Arte de la{" "}
            <span className="text-gold-gradient italic font-normal">
              Armonía Facial
            </span>
          </h1>
          <p className="text-base sm:text-lg text-dalia-graphite leading-relaxed">
            En Dalia Clinic nacimos con una convicción clara: la odontología del siglo XXI no debe ser una experiencia fría ni dolorosa, sino un espacio donde la ciencia de vanguardia y la delicadeza estética coexistan en perfecto equilibrio.
          </p>
        </div>
      </section>

      {/* Origin & Philosophy Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden shadow-luxury border-2 border-dalia-gold/30">
              <Image
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1000"
                alt="Instalaciones boutique de Dalia Clinic en Quilicura"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dalia-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-dalia-gold/30">
                <p className="text-xs uppercase tracking-wider font-bold text-dalia-gold-dark">
                  El Simbolismo de la Dalia
                </p>
                <p className="text-xs md:text-sm text-dalia-navy font-semibold mt-0.5">
                  Una flor reconocida mundialmente por su simetría geométrica perfecta, elegancia natural y resiliencia biológica.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-dalia-gold-dark block">
              El Manifiesto Dalia
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dalia-navy tracking-tight">
              Más que dientes: cuidamos la armonía de tu expresión y tu salud
            </h2>
            <p className="text-sm md:text-base text-dalia-graphite leading-relaxed">
              Durante décadas, la odontología se concentró exclusivamente en curar patologías dentales de forma aislada. En <strong>Dalia Clinic</strong> comprendemos que una sonrisa hermosa no empieza ni termina en los bordes del esmalte: se integra con los labios, los pómulos, la simetría muscular facial y, sobre todo, con la confianza personal del paciente.
            </p>
            <p className="text-sm md:text-base text-dalia-graphite leading-relaxed">
              Por eso unimos bajo un mismo techo a especialistas en las 9 ramas fundamentales de la odontología junto a un selecto equipo en <strong>Armonización Orofacial Médica</strong>, ofreciendo diagnósticos completos respaldados por tomografía digital 3D y tecnología microscópica.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-dalia-gold/20 shadow-xs">
                <CheckCircle2 size={16} className="text-dalia-gold shrink-0" />
                <span className="text-xs font-semibold text-dalia-navy">Diagnóstico 100% Digital 3D</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-dalia-gold/20 shadow-xs">
                <CheckCircle2 size={16} className="text-dalia-gold shrink-0" />
                <span className="text-xs font-semibold text-dalia-navy">Enfoque Cero Dolor</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-dalia-gold/20 shadow-xs">
                <CheckCircle2 size={16} className="text-dalia-gold shrink-0" />
                <span className="text-xs font-semibold text-dalia-navy">Atención Odontopediátrica</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-dalia-gold/20 shadow-xs">
                <CheckCircle2 size={16} className="text-dalia-gold shrink-0" />
                <span className="text-xs font-semibold text-dalia-navy">Materiales Bio-compatibles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="bg-dalia-warm-light/70 py-16 border-y border-dalia-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold text-dalia-navy">
              Nuestros Pilares de Excelencia
            </h2>
            <p className="text-xs sm:text-sm text-dalia-graphite mt-2">
              Los principios innegociables que guían cada consulta y tratamiento en Dalia Clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-dalia-gold/20 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-dalia-navy text-dalia-gold flex items-center justify-center">
                <Microscope size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold text-dalia-navy">
                Precisión Científica
              </h3>
              <p className="text-xs text-dalia-graphite leading-relaxed">
                Utilizamos escáner intraoral 3D y magnificación con microscopios ópticos para intervenciones conservadoras que salvan tu esmalte original.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-dalia-gold/20 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-dalia-rose text-dalia-navy flex items-center justify-center">
                <Heart size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold text-dalia-navy">
                Confort & Calidez
              </h3>
              <p className="text-xs text-dalia-graphite leading-relaxed">
                Despedimos el miedo al dentista. Contamos con protocolos de anestesia computarizada indolora, aromaterapia y sedación asistida.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-dalia-gold/20 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-dalia-gold/30 text-dalia-navy flex items-center justify-center">
                <Award size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold text-dalia-navy">
                Estética Armónica
              </h3>
              <p className="text-xs text-dalia-graphite leading-relaxed">
                Buscamos naturalidad absoluta. Ni dientes artificialmente planos ni sobre-volúmenes faciales: resaltamos tu belleza intrínseca.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-dalia-gold/20 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-dalia-slate/30 text-dalia-navy flex items-center justify-center">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-serif text-lg font-bold text-dalia-navy">
                Bioseguridad Total
              </h3>
              <p className="text-xs text-dalia-graphite leading-relaxed">
                Esterilización hospitalaria autoclaves Clase B trazables digitalmente, con protocolos de purificación ambiental continuos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-5 pb-8">
        <h2 className="font-serif text-3xl font-bold text-dalia-navy">
          Te invitamos a vivir una odontología diferente
        </h2>
        <p className="text-sm text-dalia-graphite leading-relaxed max-w-xl mx-auto">
          Reserva tu cita de valoración y descubre por qué más de 5,000 pacientes han encontrado en Dalia Clinic su clínica dental de confianza.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/contacto"
            className="w-full sm:w-auto btn-gold px-7 py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
          >
            <span>Agendar Cita en Dalia Clinic</span>
            <ArrowRight size={15} />
          </Link>
          <Link
            href="/equipo"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-dalia-navy bg-white border border-dalia-warm hover:border-dalia-gold"
          >
            Conoce a Nuestros Especialistas
          </Link>
        </div>
      </section>
    </div>
  );
}
