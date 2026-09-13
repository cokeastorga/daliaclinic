"use client";

import React, { useState } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const phoneNumber = "56975384019";
  const defaultMessage = encodeURIComponent(
    "Hola Dalia Clinic, me gustaría solicitar información y agendar una cita de valoración dental/estética."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside aria-label="Atención por WhatsApp" className="fixed bottom-6 right-6 z-50 flex flex-col items-end group">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 p-3.5 bg-white rounded-2xl shadow-luxury border border-dalia-gold/40 max-w-[260px] animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute top-2 right-2 text-dalia-slate hover:text-dalia-navy"
            aria-label="Cerrar mensaje"
          >
            <X size={14} />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <p className="text-xs font-bold text-dalia-navy">Coordinadora Dalia Clinic</p>
          </div>
          <p className="text-[12px] text-dalia-graphite leading-relaxed">
            ¡Hola! ¿Tienes dudas sobre algún tratamiento o deseas agendar tu hora? Escríbenos directamente.
          </p>
          <div className="mt-2 flex items-center gap-1 text-[11px] text-dalia-gold-dark font-semibold">
            <Sparkles size={12} />
            <span>Respuesta en menos de 10 min</span>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chatear por WhatsApp con Dalia Clinic"
      >
        <MessageCircle size={30} fill="currentColor" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dalia-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-dalia-gold border border-white"></span>
        </span>
      </a>
    </aside>
  );
}
