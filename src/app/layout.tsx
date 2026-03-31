import type { Metadata, Viewport } from "next";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Nossa Terra Imobiliária — Consultoria Completa em Imóveis Rurais",
    template: "%s | Nossa Terra Imobiliária",
  },
  description:
    "A Nossa Terra reúne intermediação imobiliária, segurança jurídica especializada, análise técnica de solo e crédito rural em um único atendimento. Norte do Piauí e Sul do Maranhão.",
  keywords: [
    "imóveis rurais",
    "fazendas à venda",
    "imobiliária rural piauí",
    "direito agrário",
    "crédito rural",
    "investimento em terras",
    "Norte Piauí",
    "Sul Maranhão",
    "consultoria rural",
  ],
  authors: [{ name: "Nossa Terra Imobiliária" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nossaterra.realty",
    siteName: "Nossa Terra Imobiliária",
    title: "Nossa Terra — Consultoria Completa em Imóveis Rurais",
    description:
      "Terra, segurança jurídica, análise técnica e crédito rural — em um só lugar. Norte do Piauí e Sul do Maranhão.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f3d35",
};

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={cn("font-sans", geist.variable)}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
