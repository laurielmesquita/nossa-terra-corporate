import type { Metadata } from "next";
import ComingSoon from "@/components/sections/ComingSoon";

export const metadata: Metadata = {
  title: "Em Breve | Nossa Terra Imobiliária",
  description:
    "Preparando uma nova experiência para guiar você de forma simples e segura no mercado imobiliário rural e urbano.",
  openGraph: {
    title: "Em Breve | Nossa Terra Imobiliária",
    description: "Semeando o futuro do seu patrimônio com inteligência documental e perícia.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Nossa Terra Imobiliária",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image.png"],
  },
};

export default function HomePage() {
  return <ComingSoon />;
}
