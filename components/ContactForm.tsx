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
      window.open(`https://wa.me/56975384019?text=${whatsappText}`, "_blank");
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-dalia-rose shadow-luxury text-center space-y-5 animate-in fade-in">
        <div className="w-18 h-18 bg-dalia-rose/40 text-dalia-navy rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 size={42} className="text-dalia-rose-dark" />
        </div>
        <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-dalia-navy">
          ¡Tu Cita Ha Sido Solicitada!
        </h3>
        <p className="text-base sm:text-lg text-dalia-graphite max-w-md mx-auto leading-relaxed">
          Hemos recibido tu solicitud de agendamiento. Nuestra coordinadora médica te ha abierto WhatsApp para confirmar el horario exacto y asistirte de inmediato.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-navy px-8 py-3.5 rounded-2xl text-base font-bold mt-4 inline-block shadow-md hover:bg-dalia-rose hover:text-dalia-navy transition-colors"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-7 md:p-10 border border-dalia-gold/30 shadow-luxury space-y-5 hover:border-dalia-rose transition-colors"
    >
      <div className="mb-2">
        <span className="text-xs sm:text-sm font-extrabold text-dalia-gold-dark uppercase tracking-wider">
          Agendamiento Preferencial
        </span>
        <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-dalia-navy mt-1">
          Reserva tu Consulta de Evaluación
        </h3>
        <p className="text-sm sm:text-base text-dalia-graphite mt-1.5 font-medium">
          Atención personalizada en Quilicura con tecnología 3D y confort sin dolor.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
        {/* Nombre */}
        <div className="space-y-2">
          <label className="text-sm sm:text-base font-bold text-dalia-navy flex items-center gap-2">
            <User size={16} className="text-dalia-rose-dark" />
            <span>Nombre Completo *</span>
          </label>
          <input
            type="text"
            required
            placeholder="Ej. Francisca Domínguez"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-dalia-warm bg-[#FAF8F7] text-base text-dalia-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dalia-rose transition-all font-medium"
          />
        </div>

        {/* Teléfono */}
        <div className="space-y-2">
          <label className="text-sm sm:text-base font-bold text-dalia-navy flex items-center gap-2">
            <Phone size={16} className="text-dalia-rose-dark" />
            <span>Teléfono / WhatsApp *</span>
          </label>
          <input
            type="tel"
            required
            placeholder="+56 9 9876 5432"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-dalia-warm bg-[#FAF8F7] text-base text-dalia-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dalia-rose transition-all font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm sm:text-base font-bold text-dalia-navy flex items-center gap-2">
            <Mail size={16} className="text-dalia-rose-dark" />
            <span>Correo Electrónico *</span>
          </label>
          <input
            type="email"
            required
            placeholder="francisca@ejemplo.cl"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-dalia-warm bg-[#FAF8F7] text-base text-dalia-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dalia-rose transition-all font-medium"
          />
        </div>

        {/* Especialidad */}
        <div className="space-y-2">
          <label className="text-sm sm:text-base font-bold text-dalia-navy flex items-center gap-2">
            <Sparkles size={16} className="text-dalia-rose-dark" />
            <span>Especialidad o Servicio *</span>
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-dalia-warm bg-[#FAF8F7] text-base text-dalia-navy focus:outline-none focus:ring-2 focus:ring-dalia-rose transition-all font-medium"
          >
            {servicesData.map((svc) => (
              <option key={svc.id} value={svc.id}>
                {svc.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
        {/* Fecha */}
        <div className="space-y-2">
          <label className="text-sm sm:text-base font-bold text-dalia-navy flex items-center gap-2">
            <Calendar size={16} className="text-dalia-rose-dark" />
            <span>Fecha Tentativa</span>
          </label>
          <input
            type="date"
            value={formData.date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-dalia-warm bg-[#FAF8F7] text-base text-dalia-navy focus:outline-none focus:ring-2 focus:ring-dalia-rose transition-all font-medium"
          />
        </div>

        {/* Turno - Selected in Rosa Empolvado */}
        <div className="space-y-2">
          <label className="text-sm sm:text-base font-bold text-dalia-navy flex items-center gap-2">
            <Clock size={16} className="text-dalia-rose-dark" />
            <span>Horario Preferido</span>
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, timeSlot: "morning" })}
              className={`py-3 px-3 rounded-xl text-sm sm:text-base font-bold border transition-all ${
                formData.timeSlot === "morning"
                  ? "bg-dalia-rose text-dalia-navy border-dalia-rose-dark shadow-sm ring-1 ring-dalia-rose font-extrabold"
                  : "bg-[#FAF8F7] text-dalia-navy border-dalia-warm hover:bg-dalia-rose/40 hover:border-dalia-rose font-bold"
              }`}
            >
              Mañana (08:30-13h)
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, timeSlot: "afternoon" })}
              className={`py-3 px-3 rounded-xl text-sm sm:text-base font-bold border transition-all ${
                formData.timeSlot === "afternoon"
                  ? "bg-dalia-rose text-dalia-navy border-dalia-rose-dark shadow-sm ring-1 ring-dalia-rose font-extrabold"
                  : "bg-[#FAF8F7] text-dalia-navy border-dalia-warm hover:bg-dalia-rose/40 hover:border-dalia-rose font-bold"
              }`}
            >
              Tarde (14:00-20h)
            </button>
          </div>
        </div>
      </div>

      {/* Mensaje */}
      <div className="space-y-2">
        <label className="text-sm sm:text-base font-bold text-dalia-navy flex items-center gap-2">
          <MessageSquare size={16} className="text-dalia-rose-dark" />
          <span>Comentario o consulta específica (Opcional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="Cuéntanos brevemente si tienes dolor, deseas cotizar un diseño de sonrisa, alineadores invisibles o armonización facial..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-dalia-warm bg-[#FAF8F7] text-base text-dalia-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dalia-rose transition-all resize-none font-medium"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full btn-gold py-4 rounded-2xl text-base sm:text-lg font-bold flex items-center justify-center gap-2.5 shadow-lg hover:ring-4 hover:ring-dalia-rose/50"
        >
          {loading ? (
            <span>Enviando solicitud...</span>
          ) : (
            <>
              <Send size={18} />
              <span>Solicitar Cita de Valoración Inmediata</span>
            </>
          )}
        </button>
        <p className="text-xs sm:text-sm text-center text-dalia-graphite font-medium mt-3">
          Respuesta confirmada en menos de 10 minutos en horario hábil.
        </p>
      </div>
    </form>
  );
}
