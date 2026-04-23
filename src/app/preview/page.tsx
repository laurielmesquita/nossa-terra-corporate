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
  title: "Ambiente de Homologação | Nossa Terra Imobiliária",
  robots: { index: false, follow: false }, // Impede indexação pelo Google
};

export default function PreviewPage() {
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
