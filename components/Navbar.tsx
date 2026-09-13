"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Phone, Clock, MapPin, Calendar, Menu, X, ChevronDown, Sparkles, MessageCircle } from "lucide-react";
import { servicesData } from "@/data/services";

interface NavbarProps {
  onOpenAppointment?: () => void;
}

export default function Navbar({ onOpenAppointment }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
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

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Quiénes Somos", href: "/quienes-somos" },
    {
      name: "Especialidades",
      href: "/servicios",
      hasDropdown: true,
    },
    { name: "Nuestro Equipo", href: "/equipo" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <>
      {/* Top Notification / Micro-bar */}
      <div className="bg-dalia-navy text-white text-sm py-2 px-4 border-b border-dalia-gold/30 hidden md:block transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+56987654321"
              className="flex items-center gap-2 hover:text-dalia-gold transition-colors font-medium"
            >
              <Phone size={14} className="text-dalia-gold" />
              <span>+56 9 8765 4321</span>
            </a>
            <div className="flex items-center gap-2 text-dalia-slate-light font-medium">
              <Clock size={14} className="text-dalia-gold" />
              <span>Lun - Vie 08:30 - 20:00 | Sáb 09:00 - 14:00</span>
            </div>
            <div className="flex items-center gap-2 text-dalia-slate-light font-medium">
              <MapPin size={14} className="text-dalia-gold" />
              <span>Av. Las Condes 12345</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs bg-dalia-navy-dark text-dalia-rose-light px-3 py-0.5 rounded-full border border-dalia-rose/30 font-semibold">
              <Sparkles size={12} className="text-dalia-gold" />
              <span>Diagnóstico 3D en tu primera visita</span>
            </span>
            <a
              href="https://wa.me/56987654321?text=Hola%20Dalia%20Clinic,%20quisiera%20solicitar%20información%20para%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-dalia-gold hover:text-white transition-colors font-bold text-xs"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F7]/95 backdrop-blur-md shadow-md py-3 border-b border-dalia-gold/30"
            : "bg-[#FAF8F7]/90 backdrop-blur-sm py-3.5 border-b border-dalia-warm/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Logo with safe shrink */}
          <Logo variant="horizontal" size={isScrolled ? "sm" : "md"} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3.5 py-2 rounded-xl text-base font-bold tracking-wide flex items-center gap-1.5 transition-all ${
                        isActive
                          ? "text-dalia-navy bg-dalia-rose/40"
                          : "text-dalia-navy hover:text-dalia-gold-dark hover:bg-dalia-warm/50"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-dalia-gold" : ""
                        }`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-[600px] bg-white rounded-3xl shadow-luxury border border-dalia-gold/30 p-6 mt-1 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="col-span-2 pb-3 mb-1 border-b border-dalia-warm/60 flex justify-between items-center">
                          <span className="text-xs uppercase tracking-wider font-extrabold text-dalia-gold-dark">
                            Especialidades Odontológicas y Faciales
                          </span>
                          <Link
                            href="/servicios"
                            className="text-xs font-bold text-dalia-navy hover:text-dalia-gold"
                          >
                            Ver catálogo completo →
                          </Link>
                        </div>
                        {servicesData.map((svc) => (
                          <Link
                            key={svc.id}
                            href={`/servicios/${svc.slug}`}
                            className="p-3 rounded-2xl hover:bg-dalia-warm-light transition-colors group flex items-start gap-3"
                          >
                            <div className="w-9 h-9 rounded-xl bg-dalia-rose/40 flex items-center justify-center text-dalia-navy shrink-0 group-hover:bg-dalia-navy group-hover:text-dalia-gold transition-colors">
                              <Sparkles size={18} />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-dalia-navy group-hover:text-dalia-gold-dark transition-colors">
                                {svc.title}
                              </p>
                              <p className="text-xs text-dalia-graphite line-clamp-1 font-medium mt-0.5">
                                {svc.highlight}
                              </p>
                            </div>
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
                  className={`px-3.5 py-2 rounded-xl text-base font-bold tracking-wide transition-all ${
                    isActive
                      ? "text-dalia-navy bg-dalia-rose/40"
                      : "text-dalia-navy hover:text-dalia-gold-dark hover:bg-dalia-warm/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/56987654321?text=Hola%20Dalia%20Clinic,%20deseo%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-2xl border-2 border-dalia-gold/40 text-dalia-navy hover:bg-dalia-rose/25 transition-all"
              title="Escríbenos por WhatsApp"
            >
              <MessageCircle size={19} className="text-dalia-gold" />
            </a>

            <button
              onClick={onOpenAppointment}
              className="btn-gold px-6 py-2.5 rounded-2xl text-base font-bold flex items-center gap-2 shadow-md"
            >
              <Calendar size={17} />
              <span>Agendar Cita</span>
            </button>
          </div>

          {/* Mobile menu button with safe layout */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={onOpenAppointment}
              className="btn-gold px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1 shadow-sm"
            >
              <Calendar size={13} />
              <span>Cita</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl text-dalia-navy hover:bg-dalia-warm/60 transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-dalia-warm bg-[#FAF8F7] px-4 pt-3 pb-6 space-y-2.5 animate-in slide-in-from-top-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2.5 rounded-xl text-base font-bold text-dalia-navy hover:bg-dalia-rose/25"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenAppointment) onOpenAppointment();
                }}
                className="w-full btn-gold py-3 rounded-2xl text-center font-bold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar size={16} />
                <span>Agendar Cita de Valoración</span>
              </button>
              <a
                href="https://wa.me/56987654321?text=Hola%20Dalia%20Clinic,%20deseo%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-navy py-3 rounded-2xl text-center font-bold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Directo (+56 9 8765 4321)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
