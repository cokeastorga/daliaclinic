"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal } from "lucide-react";

interface SmileComparisonProps {
  beforeImage?: string;
  afterImage?: string;
  title?: string;
  subtitle?: string;
}

export default function SmileComparison({
  beforeImage = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000",
  afterImage = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000",
  title = "Transformación Real de Sonrisa & Armonía Facial",
  subtitle = "Diseño de Sonrisa Digital 3D + Carillas Cerámicas en Disilicato de Litio",
}: SmileComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dalia-rose/30 border border-dalia-rose/50 text-dalia-navy text-xs font-semibold mb-2">
          <Sparkles size={13} className="text-dalia-gold" />
          <span>Casos Clínicos de Éxito</span>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-dalia-navy">
          {title}
        </h3>
        <p className="text-sm text-dalia-graphite-light mt-1 max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Comparison Container */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative h-[340px] md:h-[440px] rounded-3xl overflow-hidden shadow-luxury border-2 border-dalia-gold/30 cursor-ew-resize select-none bg-dalia-navy"
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt="Resultado Después del tratamiento en Dalia Clinic"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-4 right-4 bg-dalia-navy/80 backdrop-blur-sm text-dalia-gold font-sans text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-dalia-gold/40">
            Después (Dalia Clinic)
          </div>
        </div>

        {/* Before Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-[340px] md:min-w-[896px]">
            <Image
              src={beforeImage}
              alt="Estado Antes del tratamiento dental"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-4 left-4 bg-dalia-graphite-dark/80 backdrop-blur-sm text-white font-sans text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20">
              Antes
            </div>
          </div>
        </div>

        {/* Divider Bar & Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-dalia-gold via-white to-dalia-gold shadow-gold-glow"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-dalia-rose border-2 border-dalia-rose-dark text-dalia-navy flex items-center justify-center shadow-luxury">
            <MoveHorizontal size={18} />
          </div>
        </div>

        {/* Helper Hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-[11px] px-3.5 py-1 rounded-full pointer-events-none">
          Desliza para comparar el antes y después
        </div>
      </div>
    </div>
  );
}
