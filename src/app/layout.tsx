import type { Metadata, Viewport } from "next";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Nossa Terra Imobiliária — Consultoria e Inteligência Documental Rural",
    template: "%s | Nossa Terra Imobiliária",
  },
  description:
    "Intermediação imobiliária com absoluta segurança jurídica. Liderada por Aline Nascimento, a Nossa Terra oferece inteligência documental, perícia judicial e crédito rural no Piauí e Maranhão.",
  keywords: [
    "imóveis rurais",
    "fazendas à venda piauí",
    "fazendas à venda maranhão",
    "direito agrário",
    "perícia judicial rural",
    "crédito rural",
    "investimento em terras",
    "nossaterra.imb.br",
    "Aline Nascimento",
  ],
  authors: [{ name: "Nossa Terra Imobiliária" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nossaterra.imb.br",
    siteName: "Nossa Terra Imobiliária",
    title: "Nossa Terra — Inteligência Documental e Consultoria Rural",
    description:
      "Segurança jurídica, análise técnica e crédito rural em um só lugar. Proteja seu patrimônio no campo com quem domina a técnica e a lei.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0F3D35",
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
