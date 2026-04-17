import type { Metadata } from "next";
import HeroCarousel from "@/components/sections/HeroCarousel";
import ProofStrip from "@/components/sections/ProofStrip";
import ProblemSection from "@/components/sections/ProblemSection";
import PillarsSection from "@/components/sections/PillarsSection";
import AudienceSection from "@/components/sections/AudienceSection";
import AlineTeaser from "@/components/sections/AlineTeaser";
import FeaturedCatalog from "@/components/sections/FeaturedCatalog";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Nossa Terra Imobiliária — Consultoria Completa em Imóveis Rurais",
  description:
    "Segurança jurídica especializada, análise técnica de solo e crédito rural. A consultoria completa para quem quer investir no campo com inteligência. Norte do PI e Sul do MA.",
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ProofStrip />
      <ProblemSection />
      <PillarsSection />
      <AudienceSection />
      <AlineTeaser />
      <FeaturedCatalog />
      <FinalCTA />
    </>
  );
}
