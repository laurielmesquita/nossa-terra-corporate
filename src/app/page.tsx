import type { Metadata } from "next";
import ComingSoon from "@/components/sections/ComingSoon";

export const metadata: Metadata = {
  title: "Nossa Terra Imobiliária — Apresentação Digital",
  description:
    "Desenvolvendo uma nova experiência digital para a Nossa Terra Imobiliária.",
  openGraph: {
    title: "Nossa Terra — Apresentação Digital",
    description: "Inovação e segurança no mercado imobiliário rural. Norte do Piauí e Sul do Maranhão.",
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
