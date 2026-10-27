"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import {
  Phone,
  Clock,
  MapPin,
  Calendar,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { servicesData } from "@/data/services";

interface NavbarProps {
  onOpenAppointment?: () => void;
}

export default function Navbar({ onOpenAppointment }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Quiénes Somos", shortName: "Nosotros", href: "/quienes-somos" },
    {
      name: "Especialidades",
      href: "/servicios",
      hasDropdown: true,
    },
    { name: "Nuestro Equipo", shortName: "Equipo", href: "/equipo" },
    { name: "Preguntas Frecuentes", shortName: "FAQ", href: "/preguntas-frecuentes" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <>
      {/* Top Notification / Micro-bar */}
      <div className="bg-dalia-navy text-white text-xs py-2 px-4 border-b border-dalia-gold/30 hidden md:block transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center whitespace-nowrap">
          <div className="flex items-center gap-6">
            <a
              href="tel:+56975384019"
              className="flex items-center gap-1.5 hover:text-dalia-rose transition-colors font-medium"
            >
              <Phone size={13} className="text-dalia-gold" />
              <span>+56 9 7538 4019</span>
            </a>
            <div className="flex items-center gap-1.5 text-dalia-slate-light font-medium">
              <Clock size={13} className="text-dalia-gold" />
              <span>Lun - Vie 08:30 - 20:00 | Sáb 09:00 - 14:00</span>
            </div>
            <div className="flex items-center gap-1.5 text-dalia-slate-light font-medium">
              <MapPin size={13} className="text-dalia-gold" />
              <span>Del Trigal 0174, Quilicura</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-[11px] bg-dalia-navy-dark text-dalia-rose-light px-2.5 py-0.5 rounded-full border border-dalia-rose/30 font-semibold">
              <Sparkles size={11} className="text-dalia-gold" />
              <span>Diagnóstico 3D en tu primera visita</span>
            </span>
            <a
              href="https://wa.me/56975384019?text=Hola%20Dalia%20Clinic,%20quisiera%20solicitar%20información%20para%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-dalia-rose hover:text-white transition-colors font-bold text-xs"
            >
              <MessageCircle size={13} />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F7]/95 backdrop-blur-md shadow-md py-2 border-b border-dalia-gold/20"
            : "bg-[#FAF8F7] py-3.5 border-b border-dalia-warm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand Component */}
          <Logo variant="horizontal" size={isScrolled ? "sm" : "md"} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    ref={dropdownRef}
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setServicesDropdownOpen((prev) => !prev);
                      }}
                      aria-expanded={servicesDropdownOpen}
                      className={`px-2 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold tracking-wide flex items-center gap-1 transition-all whitespace-nowrap cursor-pointer ${
                        isActive || servicesDropdownOpen
                          ? "text-dalia-navy bg-dalia-rose font-bold"
                          : "text-dalia-navy hover:bg-dalia-rose/50 hover:text-dalia-navy"
                      }`}
                    >
                      <span className="hidden xl:inline">{link.name}</span>
                      <span className="xl:hidden">{link.shortName || link.name}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-dalia-gold-dark" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu with invisible bridge container */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="w-[620px] max-h-[490px] overflow-y-auto bg-white rounded-3xl shadow-luxury border border-dalia-gold/30 p-5 grid grid-cols-2 gap-2.5 animate-in fade-in slide-in-from-top-1 duration-200">
                          <div className="col-span-2 pb-2.5 mb-1 border-b border-dalia-warm/60 flex justify-between items-center">
                            <span className="text-xs uppercase tracking-wider font-extrabold text-dalia-gold-dark">
                              Especialidades Odontológicas y Faciales
                            </span>
                            <Link
                              href="/servicios"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="text-xs font-bold text-dalia-navy hover:text-dalia-rose-dark"
                            >
                              Ver catálogo completo →
                            </Link>
                          </div>
                          {servicesData.map((svc) => (
                            <Link
                              key={svc.id}
                              href={`/servicios/${svc.slug}`}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="p-2.5 rounded-2xl hover:bg-dalia-rose/40 hover:border-dalia-rose/60 border border-transparent transition-all group flex items-start gap-2.5"
                            >
                              <div className="w-8 h-8 rounded-xl bg-dalia-rose/40 flex items-center justify-center text-dalia-navy shrink-0 group-hover:bg-dalia-navy group-hover:text-dalia-rose transition-colors">
                                <Sparkles size={16} />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-dalia-navy group-hover:text-dalia-navy transition-colors">
                                  {svc.title}
                                </p>
                                <p className="text-[11px] text-dalia-graphite line-clamp-1 font-medium">
                                  {svc.highlight || svc.tag || "Dalia Clinic"}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-2 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold tracking-wide transition-all whitespace-nowrap ${
                    isActive
                      ? "text-dalia-navy bg-dalia-rose font-bold"
                      : "text-dalia-navy hover:bg-dalia-rose/50 hover:text-dalia-navy"
                  }`}
                >
                  <span className="hidden xl:inline">{link.name}</span>
                  <span className="xl:hidden">{link.shortName || link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs: Agendar y WhatsApp */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenAppointment}
              className="btn-gold px-4 py-2 rounded-xl text-xs xl:text-sm font-bold flex items-center gap-2 shadow-sm hover:ring-2 hover:ring-dalia-rose"
            >
              <Calendar size={15} />
              <span>Agendar Cita</span>
            </button>

            <a
              href="https://wa.me/56975384019?text=Hola%20Dalia%20Clinic,%20deseo%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="btn-navy p-2 rounded-xl text-white hover:bg-dalia-rose hover:text-dalia-navy transition-all border border-dalia-gold/40 shadow-sm"
            >
              <MessageCircle size={18} />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAppointment}
              className="btn-gold px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <Calendar size={13} />
              <span>Agendar</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-dalia-warm text-dalia-navy hover:bg-dalia-rose/40 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-dalia-warm bg-[#FAF8F7] px-4 pt-3 pb-6 space-y-2.5 animate-in slide-in-from-top-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`px-4 py-2.5 rounded-xl text-base font-bold transition-colors flex items-center justify-between text-left ${
                          isActive || mobileServicesOpen
                            ? "bg-dalia-rose text-dalia-navy"
                            : "text-dalia-navy hover:bg-dalia-rose/60"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {mobileServicesOpen && (
                        <div className="pl-3 pr-1 py-2 space-y-1 max-h-64 overflow-y-auto bg-white/70 rounded-xl my-1 border border-dalia-gold/20">
                          <Link
                            href="/servicios"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-xs font-extrabold text-dalia-gold-dark hover:text-dalia-navy border-b border-dalia-warm/40"
                          >
                            Ver catálogo completo de tratamientos →
                          </Link>
                          {servicesData.map((svc) => (
                            <Link
                              key={svc.id}
                              href={`/servicios/${svc.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-dalia-navy hover:bg-dalia-rose/30 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-dalia-gold shrink-0" />
                              <span>{svc.title}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${
                      isActive
                        ? "bg-dalia-rose text-dalia-navy"
                        : "text-dalia-navy hover:bg-dalia-rose/60"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenAppointment) onOpenAppointment();
                }}
                className="w-full btn-gold py-3 rounded-2xl text-center font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:ring-2 hover:ring-dalia-rose"
              >
                <Calendar size={16} />
                <span>Agendar Cita de Valoración</span>
              </button>
              <a
                href="https://wa.me/56975384019?text=Hola%20Dalia%20Clinic,%20deseo%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-navy py-3 rounded-2xl text-center font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:bg-dalia-rose hover:text-dalia-navy transition-all"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Directo (+56 9 7538 4019)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
