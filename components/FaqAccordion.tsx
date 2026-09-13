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
      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all ${
              selectedCategory === cat.id
                ? "bg-dalia-navy text-white shadow-md border-transparent"
                : "bg-white text-dalia-graphite border border-dalia-warm hover:bg-dalia-warm-light"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion Items */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl transition-all duration-200 border ${
                isOpen
                  ? "bg-white border-dalia-gold/50 shadow-luxury"
                  : "bg-white/70 border-dalia-warm/60 hover:border-dalia-slate/40"
              }`}
            >
              <button
                onClick={() => toggle(faq.id)}
                aria-expanded={isOpen}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-serif text-base md:text-lg font-semibold text-dalia-navy flex items-center gap-2.5">
                  <HelpCircle
                    size={18}
                    className={`shrink-0 transition-colors ${
                      isOpen ? "text-dalia-gold" : "text-dalia-slate"
                    }`}
                  />
                  <span>{faq.question}</span>
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen
                      ? "bg-dalia-rose/30 text-dalia-navy rotate-180"
                      : "bg-dalia-warm/40 text-dalia-graphite"
                  }`}
                >
                  <ChevronDown size={16} />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-sm text-dalia-graphite leading-relaxed border-t border-dalia-warm/30 animate-in fade-in duration-200">
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
