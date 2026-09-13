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

  const flowerSizes = {
    sm: "h-11 w-11",
    md: "h-12 w-12 sm:h-14 sm:w-14",
    lg: "h-16 w-16 sm:h-20 sm:w-20",
  };

  // Pure Symbol Variant
  if (variant === "symbol" || variant === "image") {
    return (
      <Link href="/" className={`inline-flex items-center shrink-0 group ${className}`}>
        <div className={`relative ${flowerSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
          <Image
            src="/isotipo.png"
            alt="Dalia Clinic Isotipo"
            fill
            className="object-contain"
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
        <div className={`relative ${flowerSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
          <Image
            src="/isotipo.png"
            alt="Dalia Clinic Isotipo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="mt-2 flex flex-col items-center select-none">
          <span
            className={`font-serif tracking-[0.18em] text-xl sm:text-2xl font-extrabold uppercase leading-none transition-colors ${
              isDark ? "text-white group-hover:text-dalia-gold" : "text-dalia-navy group-hover:text-dalia-navy-light"
            }`}
          >
            DALIA
          </span>
          <span
            className={`font-sans tracking-[0.32em] text-[10px] sm:text-xs font-extrabold uppercase mt-1 ${
              isDark ? "text-dalia-gold" : "text-dalia-gold-dark"
            }`}
          >
            CLINIC
          </span>
        </div>
      </Link>
    );
  }

  // Default: Horizontal Navbar Brand (Flower + DALIA over CLINIC)
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 sm:gap-3 shrink-0 group ${className}`}>
      {/* Official Transparent Flower Isotype with Golden Tooth */}
      <div className={`relative ${flowerSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <Image
          src="/isotipo.png"
          alt="Dalia Clinic Isotipo Oficial"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Brand Typography: DALIA on top, CLINIC underneath */}
      <div className="flex flex-col justify-center select-none leading-none">
        <span
          className={`font-serif tracking-[0.16em] font-extrabold uppercase leading-none transition-colors ${
            size === "sm" ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
          } ${isDark ? "text-white group-hover:text-dalia-gold" : "text-dalia-navy group-hover:text-dalia-navy-light"}`}
        >
          DALIA
        </span>
        <span
          className={`font-sans tracking-[0.32em] font-extrabold uppercase mt-1 transition-colors ${
            size === "sm" ? "text-[9.5px] sm:text-[10.5px]" : "text-[10px] sm:text-[11.5px]"
          } ${isDark ? "text-dalia-gold" : "text-dalia-gold-dark group-hover:text-dalia-gold"}`}
        >
          CLINIC
        </span>
      </div>
    </Link>
  );
}
