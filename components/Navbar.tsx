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

  // Close mobile menu on route change
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
      <div className="bg-dalia-navy text-white text-xs py-2 px-4 border-b border-dalia-gold/30 hidden md:block transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+56987654321"
              className="flex items-center gap-1.5 hover:text-dalia-gold transition-colors"
            >
              <Phone size={13} className="text-dalia-gold" />
              <span>+56 9 8765 4321 / (2) 2345 6789</span>
            </a>
            <div className="flex items-center gap-1.5 text-dalia-slate-light">
              <Clock size={13} className="text-dalia-gold" />
              <span>Lun - Vie 08:30 - 20:00 | Sáb 09:00 - 14:00</span>
            </div>
            <div className="flex items-center gap-1.5 text-dalia-slate-light">
              <MapPin size={13} className="text-dalia-gold" />
              <span>Av. Las Condes 12345, Las Condes</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-[11px] bg-dalia-navy-dark/60 text-dalia-rose px-2.5 py-0.5 rounded-full border border-dalia-rose/20">
              <Sparkles size={11} className="text-dalia-gold" />
              <span>Primera evaluación y escaneo 3D sin costo</span>
            </span>
            <a
              href="https://wa.me/56987654321?text=Hola%20Dalia%20Clinic,%20quisiera%20solicitar%20información%20para%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-dalia-gold hover:text-white transition-colors font-medium"
            >
              <MessageCircle size={13} />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F7]/95 backdrop-blur-md shadow-md py-3 border-b border-dalia-gold/20"
            : "bg-[#FAF8F7]/80 backdrop-blur-sm py-4 border-b border-dalia-warm/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo variant="horizontal" size={isScrolled ? "sm" : "md"} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
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
                      className={`px-3 py-2 rounded-lg text-sm font-medium tracking-wide flex items-center gap-1 transition-all ${
                        isActive
                          ? "text-dalia-navy font-semibold bg-dalia-rose/30"
                          : "text-dalia-graphite hover:text-dalia-navy hover:bg-dalia-warm/40"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-dalia-gold" : ""
                        }`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-[580px] bg-white rounded-2xl shadow-luxury border border-dalia-gold/30 p-5 mt-1 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="col-span-2 pb-2 mb-1 border-b border-dalia-warm/60 flex justify-between items-center">
                          <span className="text-xs uppercase tracking-wider font-bold text-dalia-gold-dark">
                            Nuestras Especialidades Dentales y Faciales
                          </span>
                          <Link
                            href="/servicios"
                            className="text-xs text-dalia-navy hover:text-dalia-gold font-medium"
                          >
                            Ver catálogo completo →
                          </Link>
                        </div>
                        {servicesData.map((svc) => (
                          <Link
                            key={svc.id}
                            href={`/servicios/${svc.slug}`}
                            className="p-2.5 rounded-xl hover:bg-dalia-warm-light transition-colors group flex items-start gap-2.5"
                          >
                            <div className="w-8 h-8 rounded-lg bg-dalia-rose/30 flex items-center justify-center text-dalia-navy shrink-0 group-hover:bg-dalia-gold group-hover:text-white transition-colors">
                              <Sparkles size={16} />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-dalia-navy group-hover:text-dalia-gold-dark transition-colors">
                                {svc.title}
                              </p>
                              <p className="text-[11px] text-dalia-graphite-light line-clamp-1">
                                {svc.shortDescription}
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
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium tracking-wide transition-all ${
                    isActive
                      ? "text-dalia-navy font-semibold bg-dalia-rose/30"
                      : "text-dalia-graphite hover:text-dalia-navy hover:bg-dalia-warm/40"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/56987654321?text=Hola%20Dalia%20Clinic,%20deseo%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-dalia-gold/40 text-dalia-navy hover:bg-dalia-rose/20 transition-all"
              title="Escríbenos por WhatsApp"
            >
              <MessageCircle size={18} className="text-dalia-gold" />
            </a>

            <button
              onClick={onOpenAppointment}
              className="btn-gold px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <Calendar size={16} />
              <span>Agendar Cita</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenAppointment}
              className="btn-gold px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
            >
              <Calendar size={14} />
              <span>Cita</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-dalia-navy hover:bg-dalia-warm/60 transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-dalia-warm bg-[#FAF8F7] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2.5 rounded-lg text-base font-medium text-dalia-navy hover:bg-dalia-rose/20"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-dalia-warm/60 space-y-2">
              <p className="text-xs uppercase font-semibold text-dalia-gold-dark px-2">
                Especialidades Destacadas
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {servicesData.slice(0, 6).map((svc) => (
                  <Link
                    key={svc.id}
                    href={`/servicios/${svc.slug}`}
                    className="text-xs text-dalia-graphite p-2 rounded-md hover:bg-white hover:text-dalia-navy transition-colors truncate"
                  >
                    • {svc.title.split(" ")[0]} {svc.title.split(" ")[1] || ""}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenAppointment) onOpenAppointment();
                }}
                className="w-full btn-gold py-3 rounded-xl text-center font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Calendar size={16} />
                <span>Agendar Cita de Valoración</span>
              </button>
              <a
                href="https://wa.me/56987654321?text=Hola%20Dalia%20Clinic,%20deseo%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-navy py-3 rounded-xl text-center font-semibold text-sm flex items-center justify-center gap-2"
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
