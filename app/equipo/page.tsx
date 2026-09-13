import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { doctorsData } from "@/data/doctors";
import { Sparkles, Award, GraduationCap, ShieldCheck, Calendar, ArrowRight, Instagram, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuestro Equipo Médico | Especialistas Colegiados",
  description:
    "Conoce a los cirujanos dentistas y especialistas de Dalia Clinic en Las Condes: implantólogos, ortodoncistas digitales, endodoncistas, odontopediatras y médicos en armonización facial.",
};

export default function EquipoPage() {
  return (
    <div className="py-12 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dalia-rose/30 text-dalia-navy text-xs font-semibold border border-dalia-rose/50">
            <Sparkles size={14} className="text-dalia-gold" />
            <span>Excelencia Clínica & Calidez Humana</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dalia-navy tracking-tight leading-tight">
            Nuestro Equipo de Especialistas
          </h1>
          <p className="text-base sm:text-lg text-dalia-graphite leading-relaxed">
            Un equipo multidisciplinario de doctores formados en las facultades odontológicas más prestigiosas de Chile y el extranjero, unidos por la pasión de transformar sonrisas con precisión digital y ética inquebrantable.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorsData.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl overflow-hidden border border-dalia-gold/25 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="relative h-80 w-full bg-dalia-warm overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={`Doctor ${doctor.name}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dalia-navy/85 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-dalia-navy/80 backdrop-blur-sm text-dalia-gold text-xs font-bold px-3 py-1 rounded-full border border-dalia-gold/40">
                    {doctor.experienceYears}+ años exp.
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold text-dalia-gold uppercase tracking-wider block">
                      {doctor.specialty}
                    </span>
                    <h3 className="font-serif text-xl font-bold">{doctor.name}</h3>
                    <p className="text-xs text-dalia-slate-light">{doctor.licenseNumber}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-dalia-graphite leading-relaxed">
                    {doctor.bio}
                  </p>

                  <div className="pt-2 border-t border-dalia-warm/60 space-y-2">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-dalia-navy flex items-center gap-1.5">
                      <GraduationCap size={14} className="text-dalia-gold" />
                      <span>Formación de Posgrado</span>
                    </p>
                    <ul className="space-y-1 text-xs text-dalia-slate-dark">
                      {doctor.education.map((edu, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-dalia-gold">✓</span>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0 border-t border-dalia-warm/40 mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-dalia-navy">
                  {doctor.social.instagram || "Dalia Clinic"}
                </span>
                <Link
                  href="/contacto"
                  className="btn-gold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5"
                >
                  <Calendar size={13} />
                  <span>Agendar Consulta</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interdisciplinary Philosophy */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-4 pb-8">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-dalia-navy">
          El Valor del Trabajo Interdisciplinario
        </h2>
        <p className="text-sm text-dalia-graphite leading-relaxed">
          En Dalia Clinic los casos no se tratan de forma aislada: nuestro comité médico analiza en conjunto tu caso, coordinando la ortodoncia, rehabilitación, estética dental y armonización facial para lograr un resultado integral y armónico que perdure toda la vida.
        </p>
      </section>
    </div>
  );
}
