import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "horizontal" | "stacked" | "symbol" | "image";
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

  const imageDimensions = {
    sm: "h-11 w-11",
    md: "h-13 w-13 sm:h-14 sm:w-14",
    lg: "h-16 w-16 sm:h-20 sm:w-20",
  };

  // Pure Image Variant (Symbol Only)
  if (variant === "symbol" || variant === "image") {
    return (
      <Link href="/" className={`inline-flex items-center shrink-0 group ${className}`}>
        <div className={`relative ${imageDimensions[size]} rounded-2xl overflow-hidden bg-white shadow-xs border border-dalia-gold/30 group-hover:border-dalia-rose transition-all`}>
          <Image
            src="/logo.jpg"
            alt="DALIA CLINIC Logo Oficial"
            fill
            className="object-contain p-0.5"
            priority
          />
        </div>
      </Link>
    );
  }

  // Stacked Layout (e.g. for center hero or footer)
  if (variant === "stacked") {
    return (
      <Link href="/" className={`inline-flex flex-col items-center text-center group ${className}`}>
        <div className={`relative ${imageDimensions[size]} rounded-2xl overflow-hidden bg-white shadow-xs border border-dalia-gold/30 group-hover:border-dalia-rose transition-all`}>
          <Image
            src="/logo.jpg"
            alt="DALIA CLINIC Logo Oficial"
            fill
            className="object-contain p-0.5"
            priority
          />
        </div>
        <div className="mt-2.5 flex flex-col items-center">
          <span
            className={`font-serif tracking-[0.2em] text-xl sm:text-2xl font-extrabold uppercase leading-none transition-colors ${
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
            Odontología Integral
          </span>
        </div>
      </Link>
    );
  }

  // Default: Horizontal Brand Bar (Navbar)
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 sm:gap-3 shrink-0 group ${className}`}>
      <div className={`relative ${imageDimensions[size]} rounded-2xl overflow-hidden bg-white shadow-xs border border-dalia-gold/35 group-hover:border-dalia-rose transition-all`}>
        <Image
          src="/logo.jpg"
          alt="DALIA CLINIC Logo Oficial"
          fill
          className="object-contain p-0.5"
          priority
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5 sm:gap-2">
          <span
            className={`font-serif tracking-[0.16em] font-extrabold uppercase leading-none transition-colors ${
              size === "sm" ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
            } ${isDark ? "text-white group-hover:text-dalia-gold" : "text-dalia-navy group-hover:text-dalia-navy-light"}`}
          >
            DALIA
          </span>
          <span
            className={`font-sans tracking-[0.24em] text-[10px] sm:text-[11px] uppercase font-bold ${
              isDark ? "text-dalia-gold" : "text-dalia-gold-dark"
            }`}
          >
            CLINIC
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1">
          <div className={`h-[1px] w-2.5 sm:w-3.5 ${isDark ? "bg-dalia-gold/60" : "bg-dalia-gold"}`} />
          <span
            className={`font-sans tracking-[0.1em] text-[8px] sm:text-[9.5px] uppercase font-bold whitespace-nowrap ${
              isDark ? "text-dalia-slate-light" : "text-dalia-graphite"
            }`}
          >
            <span className="hidden sm:inline">Odontología Integral</span>
            <span className="sm:hidden">Dental</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
