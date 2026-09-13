"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment progress smoothly across the 3 seconds (3000ms)
    const intervalTime = 30; // update every 30ms
    const totalSteps = 3000 / intervalTime; // 100 steps
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / totalSteps) * 100), 100);
      setProgress(currentProgress);

      if (currentStep >= totalSteps) {
        clearInterval(interval);
      }
    }, intervalTime);

    // Trigger fade-out at 2700ms so it transitions gracefully to 3000ms
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 2700);

    // Completely remove preloader from view after fade-out transition finishes
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 3400);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAF8F7] transition-opacity duration-700 ease-in-out ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-live="polite"
      aria-busy={loading}
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute w-[500px] h-[500px] bg-dalia-rose/35 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-dalia-gold/25 rounded-full blur-3xl pointer-events-none" />

      {/* Main Luxury Brand Presentation */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 animate-in fade-in zoom-in-95 duration-700 max-w-sm">
        {/* Official Dalia Clinic Flower Isotype */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 drop-shadow-xl">
          <Image
            src="/isotipo.png"
            alt="Dalia Clinic Isotipo Oficial"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Brand Name & Typography */}
        <div className="mt-7 flex flex-col items-center select-none">
          <span className="font-serif text-3xl sm:text-4xl font-extrabold tracking-[0.24em] text-dalia-navy uppercase leading-none">
            DALIA
          </span>
          <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-[0.28em] text-dalia-gold-dark uppercase leading-none mt-2">
            CLINIC
          </span>

          <div className="flex items-center justify-center gap-2.5 mt-4 px-2">
            <div className="h-[1px] w-5 sm:w-7 bg-dalia-gold shrink-0" />
            <p className="font-sans text-[11px] sm:text-xs font-bold tracking-[0.2em] text-dalia-gold-dark uppercase text-center leading-relaxed">
              Odontología Integral y Armonización Facial
            </p>
            <div className="h-[1px] w-5 sm:w-7 bg-dalia-gold shrink-0" />
          </div>
        </div>

        {/* Refined Loading Progress Bar */}
        <div className="mt-8 w-52 sm:w-64">
          <div className="h-1.5 w-full bg-dalia-warm/80 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-dalia-rose via-dalia-gold to-dalia-gold-dark rounded-full transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] font-bold text-dalia-graphite mt-2 px-0.5">
            <span className="tracking-wide text-dalia-graphite-light">Cargando experiencia...</span>
            <span className="text-dalia-navy">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
