"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqsData } from "@/data/faqs";

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [selectedCategory, setSelectedCategory] = useState<string>("todas");

  const categories = [
    { id: "todas", label: "Todas las Preguntas" },
    { id: "citas", label: "Citas y Urgencias" },
    { id: "tratamientos", label: "Tratamientos y Procedimientos" },
    { id: "pagos", label: "Pagos y Seguros" },
    { id: "general", label: "Nuestra Clínica" },
  ];

  const filteredFaqs =
    selectedCategory === "todas"
      ? faqsData
      : faqsData.filter((f) => f.category === selectedCategory);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Category Pills - Selected in Rosa Empolvado */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all ${
              selectedCategory === cat.id
                ? "bg-dalia-rose text-dalia-navy font-extrabold shadow-md border-2 border-dalia-rose-dark scale-105 ring-2 ring-dalia-rose/60"
                : "bg-white text-dalia-graphite border border-dalia-warm hover:bg-dalia-rose/40 hover:border-dalia-rose"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion Items */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-3xl transition-all duration-200 border ${
                isOpen
                  ? "bg-white border-dalia-rose shadow-luxury ring-1 ring-dalia-rose/50"
                  : "bg-white/85 border-dalia-warm/70 hover:border-dalia-rose hover:bg-white"
              }`}
            >
              <button
                onClick={() => toggle(faq.id)}
                aria-expanded={isOpen}
                className="w-full px-7 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-sans text-base sm:text-lg font-bold text-dalia-navy flex items-center gap-3">
                  <HelpCircle
                    size={22}
                    className={`shrink-0 transition-colors ${
                      isOpen ? "text-dalia-rose-dark" : "text-dalia-slate"
                    }`}
                  />
                  <span>{faq.question}</span>
                </span>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen
                      ? "bg-dalia-rose text-dalia-navy rotate-180 shadow-xs"
                      : "bg-dalia-warm/50 text-dalia-graphite"
                  }`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>

              {isOpen && (
                <div className="px-7 pb-6 pt-1 text-base sm:text-lg text-dalia-graphite leading-relaxed border-t border-dalia-warm/40 animate-in fade-in duration-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
