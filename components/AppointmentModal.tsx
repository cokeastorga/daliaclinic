"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, User, Phone, Mail, Sparkles, CheckCircle2, MessageSquare } from "lucide-react";
import { servicesData } from "@/data/services";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  preselectedService,
}: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: preselectedService || "estetica-oral",
    date: "",
    timeSlot: "morning",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare WhatsApp URL for immediate dispatch
    const selectedServiceName =
      servicesData.find((s) => s.id === formData.service)?.title || formData.service;
    const msg = encodeURIComponent(
      `¡Hola Dalia Clinic! Deseo agendar una cita:\n` +
      `👤 Nombre: ${formData.name}\n` +
      `📞 Teléfono: ${formData.phone}\n` +
      `✉️ Email: ${formData.email}\n` +
      `🦷 Especialidad: ${selectedServiceName}\n` +
      `📅 Fecha deseada: ${formData.date || "Lo antes posible"}\n` +
      `⏰ Turno preferido: ${formData.timeSlot === "morning" ? "Mañana (08:30 a 13:00)" : "Tarde (14:00 a 20:00)"}\n` +
      `📝 Motivo: ${formData.notes || "Evaluación general"}`
    );

    // Open WhatsApp in new tab after 1.2 seconds if desired, or provide button
    setTimeout(() => {
      window.open(`https://wa.me/56987654321?text=${msg}`, "_blank");
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dalia-navy/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#FAF8F7] rounded-3xl shadow-luxury border border-dalia-gold/40 overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Ribbon */}
        <div className="bg-dalia-navy px-6 py-4 flex items-center justify-between border-b border-dalia-gold/30">
          <div className="flex items-center gap-2.5 text-white">
            <Sparkles size={18} className="text-dalia-gold" />
            <span className="font-serif tracking-wider font-semibold text-lg">
              DALIA CLINIC • Agendamiento
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Cerrar ventana"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-dalia-navy">
                ¡Solicitud Recibida con Éxito!
              </h3>
              <p className="text-sm text-dalia-graphite max-w-md mx-auto leading-relaxed">
                Gracias, <strong>{formData.name}</strong>. Hemos generado tu solicitud para <strong>{servicesData.find(s => s.id === formData.service)?.title}</strong>. Estamos abriendo WhatsApp para confirmar tu horario de manera inmediata con nuestra coordinadora de pacientes.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="btn-navy px-6 py-2.5 rounded-xl text-sm font-semibold"
                >
                  Entendido, volver a la web
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-dalia-navy">
                  Reserva tu Cita de Valoración
                </h2>
                <p className="text-xs md:text-sm text-dalia-graphite-light mt-1">
                  Evaluación clínica integral y diagnóstico 3D con nuestros especialistas en Las Condes.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nombre */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-dalia-navy flex items-center gap-1.5">
                      <User size={13} className="text-dalia-gold" />
                      <span>Nombre y Apellido *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Constanza Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-dalia-warm bg-white text-sm text-dalia-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dalia-gold/50 transition-all"
                    />
                  </div>

                  {/* Teléfono */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-dalia-navy flex items-center gap-1.5">
                      <Phone size={13} className="text-dalia-gold" />
                      <span>Teléfono / WhatsApp *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+56 9 1234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-dalia-warm bg-white text-sm text-dalia-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dalia-gold/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-dalia-navy flex items-center gap-1.5">
                      <Mail size={13} className="text-dalia-gold" />
                      <span>Correo Electrónico *</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tu.correo@ejemplo.cl"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-dalia-warm bg-white text-sm text-dalia-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dalia-gold/50 transition-all"
                    />
                  </div>

                  {/* Especialidad */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-dalia-navy flex items-center gap-1.5">
                      <Sparkles size={13} className="text-dalia-gold" />
                      <span>Especialidad de Interés *</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-dalia-warm bg-white text-sm text-dalia-navy focus:outline-none focus:ring-2 focus:ring-dalia-gold/50 transition-all"
                    >
                      {servicesData.map((svc) => (
                        <option key={svc.id} value={svc.id}>
                          {svc.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Fecha Preferida */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-dalia-navy flex items-center gap-1.5">
                      <Calendar size={13} className="text-dalia-gold" />
                      <span>Fecha Preferida</span>
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-dalia-warm bg-white text-sm text-dalia-navy focus:outline-none focus:ring-2 focus:ring-dalia-gold/50 transition-all"
                    />
                  </div>

                  {/* Turno */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-dalia-navy flex items-center gap-1.5">
                      <Clock size={13} className="text-dalia-gold" />
                      <span>Horario de Preferencia</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, timeSlot: "morning" })}
                        className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                          formData.timeSlot === "morning"
                            ? "bg-dalia-navy text-white border-dalia-navy"
                            : "bg-white text-dalia-graphite border-dalia-warm hover:bg-dalia-warm-light"
                        }`}
                      >
                        Mañana (08:30-13h)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, timeSlot: "afternoon" })}
                        className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                          formData.timeSlot === "afternoon"
                            ? "bg-dalia-navy text-white border-dalia-navy"
                            : "bg-white text-dalia-graphite border-dalia-warm hover:bg-dalia-warm-light"
                        }`}
                      >
                        Tarde (14:00-20h)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Motivo */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-dalia-navy flex items-center gap-1.5">
                    <MessageSquare size={13} className="text-dalia-gold" />
                    <span>¿Alguna inquietud o síntoma en particular? (Opcional)</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ej. Me interesa alinear mis dientes pero sin brackets visibles..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-dalia-warm bg-white text-sm text-dalia-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dalia-gold/50 transition-all resize-none"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full btn-gold py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Confirmar y Enviar a Coordinación</span>
                    <Sparkles size={16} />
                  </button>
                  <p className="text-[11px] text-center text-dalia-graphite-light mt-2.5">
                    Tus datos están protegidos bajo estricto secreto profesional médico.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
