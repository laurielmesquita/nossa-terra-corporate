import type { Metadata } from "next";
import HeroCarousel from "@/components/sections/HeroCarousel";
import ProofStrip from "@/components/sections/ProofStrip";
import ProblemSection from "@/components/sections/ProblemSection";
import PillarsSection from "@/components/sections/PillarsSection";
import AudienceSection from "@/components/sections/AudienceSection";
import AlineTeaser from "@/components/sections/AlineTeaser";
import FeaturedCatalog from "@/components/sections/FeaturedCatalog";
import NewsletterSection from "@/components/sections/NewsletterSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Nossa Terra Imobiliária — Consultoria Completa em Imóveis Rurais",
  description:
    "Segurança jurídica especializada, análise técnica de solo e crédito rural. A consultoria completa para quem quer investir no campo com inteligência. Norte do PI e Sul do MA.",
  openGraph: {
    title: "Nossa Terra — Inteligência Documental e Consultoria Rural",
    description: "Segurança jurídica e técnica para seu investimento no campo.",
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
  return (
    <>
      <HeroCarousel />
      <ProofStrip />
      <PillarsSection />
      <ProblemSection />
      <AlineTeaser />
      <AudienceSection />
      <NewsletterSection />
      <FeaturedCatalog />
      <FinalCTA />
    </>
  );
}
