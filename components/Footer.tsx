import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-dalia-navy text-white pt-16 pb-8 border-t border-dalia-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Logo variant="horizontal" theme="dark" size="md" />
            <p className="text-dalia-slate-light text-sm leading-relaxed pt-2">
              Clínica odontológica de alta gama y centro de medicina estética facial. 
              Combinamos ciencia digital 3D, precisión quirúrgica y estética armónica para transformar tu sonrisa y bienestar con la máxima calidez humana.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-dalia-gold font-medium flex items-center gap-1.5 bg-dalia-navy-dark px-3 py-1.5 rounded-full border border-dalia-gold/25">
                <ShieldCheck size={14} className="text-dalia-gold" />
                <span>Centro Médico Acreditado SNS</span>
              </span>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-dalia-gold hover:text-dalia-navy flex items-center justify-center transition-all"
                aria-label="Instagram de Dalia Clinic"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-dalia-gold hover:text-dalia-navy flex items-center justify-center transition-all"
                aria-label="Facebook de Dalia Clinic"
              >
                <Facebook size={17} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-dalia-gold hover:text-dalia-navy flex items-center justify-center transition-all"
                aria-label="LinkedIn de Dalia Clinic"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          {/* Col 2: Especialidades Clínicas */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-dalia-gold mb-4 flex items-center gap-2">
              <span>Especialidades</span>
              <div className="h-[1px] w-6 bg-dalia-gold/40" />
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(0, 7).map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/servicios/${svc.slug}`}
                    className="text-dalia-slate-light hover:text-dalia-rose transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-dalia-gold text-xs group-hover:translate-x-1 transition-transform">›</span>
                    <span>{svc.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/servicios"
                  className="text-dalia-gold hover:text-white text-xs font-semibold flex items-center gap-1 pt-1"
                >
                  <span>Ver todas las 10 especialidades</span>
                  <ArrowRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegación & Pacientes */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-dalia-gold mb-4 flex items-center gap-2">
              <span>Navegación</span>
              <div className="h-[1px] w-6 bg-dalia-gold/40" />
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-dalia-slate-light hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="text-dalia-slate-light hover:text-white transition-colors">
                  Quiénes Somos & Filosofía
                </Link>
              </li>
              <li>
                <Link href="/equipo" className="text-dalia-slate-light hover:text-white transition-colors">
                  Nuestro Equipo Médico
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-dalia-slate-light hover:text-white transition-colors">
                  Tratamientos & Tecnología
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-dalia-slate-light hover:text-white transition-colors">
                  Contacto y Agendamiento
                </Link>
              </li>
              <li>
                <Link href="/contacto#faq" className="text-dalia-slate-light hover:text-white transition-colors">
                  Preguntas Frecuentes (FAQs)
                </Link>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-dalia-navy-dark border border-dalia-gold/20">
              <p className="text-xs text-dalia-rose font-medium mb-1 flex items-center gap-1">
                <Heart size={12} className="text-dalia-gold" />
                <span>Urgencias Dentales</span>
              </p>
              <p className="text-xs text-dalia-slate-light">
                Atención prioritaria para dolores agudos y traumatismos.
              </p>
              <a
                href="tel:+56987654321"
                className="text-xs text-dalia-gold hover:underline font-semibold block mt-1"
              >
                Llamar Urgencias: +56 9 8765 4321
              </a>
            </div>
          </div>

          {/* Col 4: Ubicación y Horarios */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-dalia-gold mb-4 flex items-center gap-2">
              <span>Sede & Horarios</span>
              <div className="h-[1px] w-6 bg-dalia-gold/40" />
            </h3>
            <div className="space-y-3 text-sm text-dalia-slate-light">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-dalia-gold shrink-0 mt-0.5" />
                <span>
                  Av. Las Condes 12345, Oficina 602<br />
                  Edificio Médico Titanium, Las Condes, Santiago
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={17} className="text-dalia-gold shrink-0" />
                <span>+56 9 8765 4321 / (2) 2345 6789</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={17} className="text-dalia-gold shrink-0" />
                <span>contacto@daliaclinic.cl</span>
              </div>
              <div className="flex items-start gap-2.5 pt-2">
                <Clock size={18} className="text-dalia-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Lunes a Viernes:</p>
                  <p className="text-xs">08:30 hrs - 20:00 hrs</p>
                  <p className="text-white font-medium mt-1">Sábados:</p>
                  <p className="text-xs">09:00 hrs - 14:00 hrs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-dalia-slate">
          <div>
            © {new Date().getFullYear()} Dalia Clinic SpA. Todos los derechos reservados. Odontología Integral y Armonización Facial.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacidad de Datos Clínicos</span>
            <span>Términos de Atención</span>
            <span>Consentimiento Informado</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
