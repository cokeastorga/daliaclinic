import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#133853",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "DALIA CLINIC | Odontología Integral y Armonización Facial",
    template: "%s | DALIA CLINIC",
  },
  description:
    "Clínica dental de alta gama y medicina estética facial en Las Condes. Especialistas en diseño de sonrisa, carillas cerámicas, ortodoncia invisible, implantes 3D, endodoncia microscópica y estética orofacial sin dolor.",
  keywords: [
    "Dalia Clinic",
    "clínica dental Las Condes",
    "odontología integral",
    "armonización facial",
    "diseño de sonrisa Santiago",
    "carillas dentales porcelana",
    "ortodoncia invisible",
    "implantes dentales 3D",
    "endodoncia microscópica",
    "limpieza dental ultrasonido",
    "odontopediatría",
    "ácido hialurónico dental",
    "dentista de lujo Chile"
  ],
  authors: [{ name: "Dalia Clinic Medical Team" }],
  creator: "DALIA CLINIC",
  publisher: "DALIA CLINIC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://daliaclinic.cl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DALIA CLINIC | Odontología Integral y Armonización Facial",
    description:
      "La armonía perfecta entre ciencia odontológica y estética facial. Diagnóstico 3D, confort total y resultados de excelencia en Las Condes.",
    url: "https://daliaclinic.cl",
    siteName: "DALIA CLINIC",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Dalia Clinic - Odontología Integral y Armonización Facial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DALIA CLINIC | Odontología Integral y Armonización Facial",
    description:
      "Transformamos tu sonrisa con tecnología 3D, odontología microscópica y medicina estética facial.",
    images: ["https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org MedicalClinic & Dentist JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "MedicalClinic"],
    "@id": "https://daliaclinic.cl/#clinic",
    name: "DALIA CLINIC - Odontología Integral y Armonización Facial",
    description:
      "Clínica odontológica de alta gama y centro de medicina estética orofacial en Las Condes, Santiago. Especialistas en diseño de sonrisa, ortodoncia invisible, implantes 3D y armonización facial.",
    url: "https://daliaclinic.cl",
    telephone: "+56987654321",
    email: "contacto@daliaclinic.cl",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Las Condes 12345, Oficina 602",
      addressLocality: "Las Condes",
      addressRegion: "Región Metropolitana",
      postalCode: "7550000",
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.3751,
      longitude: -70.5284,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Especialidades Odontológicas y Estéticas",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Limpieza Dental Avanzada con Ultrasonido y Aeropulidor",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Cirugía Oral y Extracción de Terceros Molares Atraumática",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Endodoncia Microscópica en Una Sola Sesión",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Ortodoncia Invisible con Alineadores Transparentes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Estética Oral y Diseño de Sonrisa Digital (DSD) con Carillas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Odontología General Restauradora y Férulas de Bruxismo",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Atención Infantil y Odontopediatría Respetuosa",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Rehabilitación Oral e Implantes Dentales de Titanio 3D",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Radiología y Tomografía Computarizada Cone Beam CBCT",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Armonización Facial Médica con Ácido Hialurónico y Toxina Botulínica",
          },
        },
      ],
    },
  };

  return (
    <html lang="es" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAF8F7] text-dalia-graphite antialiased selection:bg-dalia-rose selection:text-dalia-navy min-h-screen">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
