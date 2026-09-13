import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dalia: {
          navy: {
            DEFAULT: "#133853", // Azul Petróleo - Confianza, profesionalismo, seguridad
            dark: "#0D2538",
            light: "#1C4E72",
          },
          slate: {
            DEFAULT: "#90A1B2", // Azul Grisáceo - Calma, equilibrio, serenidad
            light: "#B2C0CE",
            dark: "#6F8294",
          },
          warm: {
            DEFAULT: "#E2DFE0", // Gris Cálido - Neutralidad, limpieza, sofisticación
            light: "#F7F5F5",
            surface: "#FBF9F9",
          },
          rose: {
            DEFAULT: "#EFD3D0", // Rosa Empolvado - Feminidad, delicadeza, calidez, armonía
            light: "#FAF0EF",
            dark: "#DDB5B1",
          },
          gold: {
            DEFAULT: "#C9A876", // Champagne Dorado - Lujo, elegancia, exclusividad
            light: "#E4CBA4",
            dark: "#A88755",
            accent: "#F2DFBF",
          },
          graphite: {
            DEFAULT: "#40454F", // Gris Grafito - Texto y detalles, profesionalismo, legibilidad
            light: "#636A78",
            dark: "#2A2E35",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(19, 56, 83, 0.08), 0 0 1px 1px rgba(201, 168, 118, 0.15)',
        'luxury-hover': '0 25px 50px -12px rgba(19, 56, 83, 0.16), 0 0 2px 1px rgba(201, 168, 118, 0.35)',
        'gold-glow': '0 0 25px rgba(201, 168, 118, 0.3)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A876 0%, #E4CBA4 50%, #A88755 100%)',
        'navy-gradient': 'linear-gradient(145deg, #133853 0%, #0D2538 100%)',
        'rose-gradient': 'linear-gradient(135deg, #EFD3D0 0%, #FAF0EF 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
