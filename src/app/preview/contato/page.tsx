import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contato | Nossa Terra Imobiliária",
  description: "Fale diretamente com a Aline Nascimento e inicie sua consultoria imobiliária rural personalizada.",
  openGraph: {
    title: "Fale com a Nossa Terra | Consultoria Rural",
    description: "Atendimento técnico e pessoal para investidores e proprietários rurais.",
    images: [
      {
        url: "/assets/images/hero-contato.png",
        width: 1200,
        height: 630,
        alt: "Contato Nossa Terra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/images/hero-contato.png"],
  },
};

export default function ContatoPage() {
  return <ContactClient />;
}
