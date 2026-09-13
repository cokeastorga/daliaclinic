"use client";

import React, { useState } from "react";
import { User, Phone, Mail, Sparkles, Calendar, Clock, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/services";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "estetica-oral",
    date: "",
    timeSlot: "morning",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const selectedService =
      servicesData.find((s) => s.id === formData.service)?.title || formData.service;

    const whatsappText = encodeURIComponent(
      `🦷 *Solicitud de Cita en Dalia Clinic*\n\n` +
      `• *Nombre:* ${formData.name}\n` +
      `• *Teléfono:* ${formData.phone}\n` +
      `• *Email:* ${formData.email}\n` +
      `• *Tratamiento:* ${selectedService}\n` +
      `• *Fecha:* ${formData.date || "Lo antes posible"}\n` +
      `• *Preferencia horaria:* ${formData.timeSlot === "morning" ? "Mañana (08:30 a 13:00)" : "Tarde (14:00 a 20:00)"}\n` +
      `• *Mensaje:* ${formData.message || "Solicito evaluación integral"}`
    );

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(`https://wa.me/56987654321?text=${whatsappText}`, "_blank");
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-dalia-gold/30 shadow-luxury text-center space-y-4 animate-in fade-in">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="font-serif text-2xl font-bold text-dalia-navy">
          ¡Tu Cita Ha Sido Solicitada!
        </h3>
        <p className="text-sm text-dalia-graphite max-w-md mx-auto leading-relaxed">
          Hemos recibido tu solicitud de agendamiento. Nuestra coordinadora médica te ha abierto WhatsApp para confirmar el horario exacto y resolver cualquier duda preliminar.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-navy px-6 py-2.5 rounded-xl text-sm font-semibold mt-4 inline-block"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 md:p-9 border border-dalia-gold/25 shadow-luxury space-y-4"
    >
      <div className="mb-2">
        <span className="text-xs font-semibold text-dalia-gold-dark uppercase tracking-wider">
          Agendamiento Preferencial
        </span>
        <h3 className="font-serif text-2xl font-bold text-dalia-navy mt-0.5">
          Reserva tu Consulta de Evaluación
        </h3>
        <p className="text-xs text-dalia-slate-dark mt-1">
          Atención personalizada en Las Condes con tecnología 3D y confort sin dolor.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nombre */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-dalia-navy flex items-center gap-1.5">
            <User size={13} className="text-dalia-gold" />
            <span>Nombre Completo *</span>
          </label>
          <input
            type="text"
            required
            placeholder="Ej. Francisca Domínguez"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-dalia-warm bg-[#FAF8F7] text-sm text-dalia-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dalia-gold/50 transition-all"
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
            placeholder="+56 9 9876 5432"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-dalia-warm bg-[#FAF8F7] text-sm text-dalia-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dalia-gold/50 transition-all"
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
            placeholder="francisca@ejemplo.cl"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-dalia-warm bg-[#FAF8F7] text-sm text-dalia-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dalia-gold/50 transition-all"
          />
        </div>

        {/* Especialidad */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-dalia-navy flex items-center gap-1.5">
            <Sparkles size={13} className="text-dalia-gold" />
            <span>Especialidad o Servicio *</span>
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-dalia-warm bg-[#FAF8F7] text-sm text-dalia-navy focus:outline-none focus:ring-2 focus:ring-dalia-gold/50 transition-all"
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
        {/* Fecha */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-dalia-navy flex items-center gap-1.5">
            <Calendar size={13} className="text-dalia-gold" />
            <span>Fecha Tentativa</span>
          </label>
          <input
            type="date"
            value={formData.date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-dalia-warm bg-[#FAF8F7] text-sm text-dalia-navy focus:outline-none focus:ring-2 focus:ring-dalia-gold/50 transition-all"
          />
        </div>

        {/* Turno */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-dalia-navy flex items-center gap-1.5">
            <Clock size={13} className="text-dalia-gold" />
            <span>Horario Preferido</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, timeSlot: "morning" })}
              className={`py-2 px-2.5 rounded-xl text-xs font-medium border transition-all ${
                formData.timeSlot === "morning"
                  ? "bg-dalia-navy text-white border-dalia-navy"
                  : "bg-[#FAF8F7] text-dalia-graphite border-dalia-warm"
              }`}
            >
              Mañana (08:30-13h)
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, timeSlot: "afternoon" })}
              className={`py-2 px-2.5 rounded-xl text-xs font-medium border transition-all ${
                formData.timeSlot === "afternoon"
                  ? "bg-dalia-navy text-white border-dalia-navy"
                  : "bg-[#FAF8F7] text-dalia-graphite border-dalia-warm"
              }`}
            >
              Tarde (14:00-20h)
            </button>
          </div>
        </div>
      </div>

      {/* Mensaje */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-dalia-navy flex items-center gap-1.5">
          <MessageSquare size={13} className="text-dalia-gold" />
          <span>Comentario o consulta específica (Opcional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="Cuéntanos brevemente si tienes dolor, deseas cotizar un diseño de sonrisa, alineadores invisibles o armonización facial..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl border border-dalia-warm bg-[#FAF8F7] text-sm text-dalia-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dalia-gold/50 transition-all resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full btn-gold py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
        >
          {loading ? (
            <span>Enviando solicitud...</span>
          ) : (
            <>
              <Send size={15} />
              <span>Solicitar Cita de Valoración Inmediata</span>
            </>
          )}
        </button>
        <p className="text-[11px] text-center text-dalia-graphite-light mt-2.5">
          Respuesta confirmada en menos de 10 minutos en horario hábil.
        </p>
      </div>
    </form>
  );
}
