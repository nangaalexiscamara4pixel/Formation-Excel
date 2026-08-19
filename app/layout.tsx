import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Formez-vous en Excel Gratuitement — Formation 100% en ligne",
    template: "%s — Formez-vous en Excel Gratuitement",
  },
  description:
    "Formation Excel gratuite et en ligne, du niveau zéro à avancé. 3 niveaux, 16 modules, certificat à la clé. Cohorte de septembre 2026 — inscription uniquement sur WhatsApp.",
  keywords: [
    "formation excel gratuite",
    "excel débutant",
    "formation excel en ligne",
    "cours excel gratuit",
    "certification excel",
  ],
  openGraph: {
    title: "Formez-vous en Excel Gratuitement",
    description:
      "Formation Excel gratuite et en ligne, du niveau zéro à avancé. Cohorte de septembre 2026.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
