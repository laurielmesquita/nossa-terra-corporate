import { properties } from "@/data/properties";
import { notFound } from "next/navigation";
import { 
  Droplets, 
  ShieldCheck,
  TrendingUp
} from "lucide-react";

// New Premium Components
import { PropertyHero } from "@/components/property/PropertyHero";
import { PropertySpecs } from "@/components/property/PropertySpecs";
import { MediaGallery } from "@/components/property/MediaGallery";
import { FloatingWhatsAppCTA } from "@/components/property/FloatingWhatsAppCTA";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PropertyPage({ params }: Props) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  // Consolidate media items for gallery
  const mediaItems = [
    ...(property.videoUrl ? [{ type: "video" as const, url: property.videoUrl }] : []),
    { type: "image" as const, url: property.mainImage, alt: property.title },
    ...property.images.map(img => ({ type: "image" as const, url: img, alt: property.title }))
  ];

  return (
    <main className="bg-background min-h-screen">
      {/* 1. Immersive Hero */}
      <PropertyHero 
        title={property.title}
        location={property.location}
        type={property.type}
        videoUrl={property.videoUrl}
      />

      {/* 2. Technical Specs & Narrative */}
      <PropertySpecs 
        description={property.description}
        specs={property.specs}
      />

      {/* 3. Proof of Infrastructure (Media Gallery) */}
      <MediaGallery items={mediaItems} />

      {/* 4. Trust Matrix Layer */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: ShieldCheck, 
                title: "Diligência Jurídica", 
                desc: "Análise completa de matrículas, certidões e regularidade ambiental (CAR/GEO)." 
              },
              { 
                icon: Droplets, 
                title: "Viabilidade Hídrica", 
                desc: "Destaque para matriz energética solar garantindo autonomia operacional total." 
              },
              { 
                icon: TrendingUp, 
                title: "Potencial de Escala", 
                desc: "Região com janela de pluviometria estável para ciclos de safra e safrinha." 
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-10 rounded-[3rem] border border-teal-dark/5 hover:border-teal-accent/20 transition-all hover:bg-teal-light/20">
                <item.icon className="w-12 h-12 text-teal-accent mb-6 transform group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-serif font-black text-teal-darkest mb-4">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Floating Conversion Layer */}
      <FloatingWhatsAppCTA 
        phoneNumber="5586999279390" 
        message={`Olá, gostaria de receber o Dossiê Técnico Completo da ${property.title}.`}
      />

      {/* Final Brand Footnote */}
      <footer className="py-12 border-t border-teal-dark/5 bg-background">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-teal-mid opacity-40">
            Nossa Terra Corporate • Inteligência Imobiliária Rural
          </p>
        </div>
      </footer>
    </main>
  );
}
