import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "horizontal" | "stacked" | "symbol";
  className?: string;
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  variant = "horizontal",
  className = "",
  theme = "light",
  size = "md",
}: LogoProps) {
  const isDark = theme === "dark";

  // Symbol SVG (Iconic Dalia Flower Petals with Central Tooth Geometry)
  const SymbolSvg = ({ sizePx = 44 }: { sizePx?: number }) => (
    <svg
      width={sizePx}
      height={sizePx}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 hover:scale-105"
      aria-label="Isotipo Dalia Clinic"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E4CBA4" />
          <stop offset="50%" stopColor="#C9A876" />
          <stop offset="100%" stopColor="#A88755" />
        </linearGradient>
        <linearGradient id="petalRose" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF0EF" />
          <stop offset="60%" stopColor="#EFD3D0" />
          <stop offset="100%" stopColor="#DDB5B1" />
        </linearGradient>
      </defs>

      {/* Background soft glow */}
      <circle cx="50" cy="50" r="46" fill="#FAF0EF" fillOpacity="0.4" />

      {/* Outer Dalia Petals Layer */}
      <g stroke="url(#goldGrad)" strokeWidth="1.2" fill="url(#petalRose)" fillOpacity="0.5">
        <path d="M50 8 C43 22 43 35 50 44 C57 35 57 22 50 8 Z" />
        <path d="M50 92 C43 78 43 65 50 56 C57 65 57 78 50 92 Z" />
        <path d="M8 50 C22 43 35 43 44 50 C35 57 22 57 8 50 Z" />
        <path d="M92 50 C78 43 65 43 56 50 C65 57 78 57 92 50 Z" />
        <path d="M20.3 20.3 C31.6 30.2 38.8 40.8 45.8 45.8 C40.8 38.8 30.2 31.6 20.3 20.3 Z" />
        <path d="M79.7 20.3 C68.4 30.2 61.2 40.8 54.2 45.8 C59.2 38.8 69.8 31.6 79.7 20.3 Z" />
        <path d="M20.3 79.7 C31.6 69.8 38.8 59.2 45.8 54.2 C40.8 61.2 30.2 68.4 20.3 79.7 Z" />
        <path d="M79.7 79.7 C68.4 69.8 61.2 59.2 54.2 54.2 C59.2 61.2 69.8 68.4 79.7 79.7 Z" />
      </g>

      {/* Inner Petal Radiance */}
      <g stroke="#C9A876" strokeWidth="1.2" fill="#FAF0EF" fillOpacity="0.8">
        <path d="M50 22 C46 32 46 40 50 46 C54 40 54 32 50 22 Z" />
        <path d="M50 78 C46 68 46 60 50 54 C54 60 54 68 50 78 Z" />
        <path d="M22 50 C32 46 40 46 46 50 C40 54 32 54 22 50 Z" />
        <path d="M78 50 C68 46 60 46 54 50 C60 54 68 54 78 50 Z" />
      </g>

      {/* Center Tooth Silhouette */}
      <path
        d="M40 37 C40 33 44 32 46.5 33.5 C48.5 34.7 49.5 35 50 35 C50.5 35 51.5 34.7 53.5 33.5 C56 32 60 33 60 37 C60 41 59 47 57.5 54 C56 61 54.5 67 53.5 67 C52.5 67 52 61 50 57 C48 61 47.5 67 46.5 67 C45.5 67 44 61 42.5 54 C41 47 40 41 40 37 Z"
        fill="#FFFFFF"
        stroke="#C9A876"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="45" r="1.5" fill="#C9A876" />
    </svg>
  );

  const iconSizes = {
    sm: 32,
    md: 42,
    lg: 56,
  };

  if (variant === "symbol") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`}>
        <SymbolSvg sizePx={iconSizes[size]} />
      </Link>
    );
  }

  if (variant === "stacked") {
    return (
      <Link href="/" className={`inline-flex flex-col items-center text-center group ${className}`}>
        <SymbolSvg sizePx={iconSizes[size] * 1.2} />
        <div className="mt-2 flex flex-col items-center">
          <span
            className={`font-serif tracking-[0.2em] text-2xl font-bold uppercase leading-none transition-colors ${
              isDark ? "text-white group-hover:text-dalia-gold" : "text-dalia-navy group-hover:text-dalia-navy-light"
            }`}
          >
            DALIA
          </span>
          <div className="flex items-center gap-2 my-1 w-full justify-center">
            <div className={`h-[1px] w-5 ${isDark ? "bg-dalia-gold/50" : "bg-dalia-gold"}`} />
            <span
              className={`font-sans tracking-[0.3em] text-[10px] uppercase font-bold ${
                isDark ? "text-dalia-gold" : "text-dalia-gold-dark"
              }`}
            >
              CLINIC
            </span>
            <div className={`h-[1px] w-5 ${isDark ? "bg-dalia-gold/50" : "bg-dalia-gold"}`} />
          </div>
          <span
            className={`font-sans tracking-[0.14em] text-[9px] uppercase font-bold mt-0.5 ${
              isDark ? "text-dalia-slate-light" : "text-dalia-graphite"
            }`}
          >
            Odontología Integral y Armonización Facial
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 sm:gap-3.5 group shrink-0 ${className}`}>
      <SymbolSvg sizePx={iconSizes[size]} />
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5 sm:gap-2">
          <span
            className={`font-serif tracking-[0.16em] text-lg sm:text-2xl font-extrabold uppercase leading-none transition-colors ${
              isDark ? "text-white group-hover:text-dalia-gold" : "text-dalia-navy group-hover:text-dalia-navy-light"
            }`}
          >
            DALIA
          </span>
          <span
            className={`font-sans tracking-[0.25em] text-[10px] sm:text-[11px] uppercase font-bold ${
              isDark ? "text-dalia-gold" : "text-dalia-gold-dark"
            }`}
          >
            CLINIC
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1">
          <div className={`h-[1px] w-2.5 sm:w-3 ${isDark ? "bg-dalia-gold/60" : "bg-dalia-gold"}`} />
          <span
            className={`font-sans tracking-[0.1em] text-[8px] sm:text-[9px] uppercase font-bold whitespace-nowrap ${
              isDark ? "text-dalia-slate-light" : "text-dalia-graphite"
            }`}
          >
            <span className="hidden sm:inline">Odontología Integral y Armonización Facial</span>
            <span className="sm:hidden">Odontología & Estética Facial</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
