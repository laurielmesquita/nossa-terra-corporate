import { properties } from "@/data/properties";
import { clients } from "@/data/clients";
import { notFound } from "next/navigation";
import { 
  Droplets, 
  ShieldCheck,
  TrendingUp,
  Mail,
  ArrowRight
} from "lucide-react";

// New Premium Components
import { PropertyHero } from "@/components/property/PropertyHero";
import { PropertySpecs } from "@/components/property/PropertySpecs";
import { MediaGallery } from "@/components/property/MediaGallery";
import { FloatingWhatsAppCTA } from "@/components/property/FloatingWhatsAppCTA";
import { PropertyStickyNav } from "@/components/property/PropertyStickyNav";
import { ClientTrustSection } from "@/components/property/ClientTrustSection";
import { PropertyMap } from "@/components/property/PropertyMap";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PropertyPage({ params }: Props) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  // Fetch associated client
  const client = clients.find(c => c.id === property.clientId) || clients[0];

  // Consolidate media items for gallery
  const mediaItems = [
    ...(property.videoUrl ? [{ type: "video" as const, url: property.videoUrl }] : []),
    { type: "image" as const, url: property.mainImage, alt: property.title },
    ...property.images.map(img => ({ type: "image" as const, url: img, alt: property.title }))
  ];

  return (
    <main className="bg-background min-h-screen selection:bg-teal-accent selection:text-white">
      {/* 0. Sticky technical navigation */}
      <PropertyStickyNav />

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

      {/* 4. Interactive GEO/CAR Analysis */}
      <PropertyMap location={property.location} area={property.area} />

      {/* 5. Trust Matrix & Client Integration */}
      <ClientTrustSection client={client} />

      {/* 5. Contact / Lead Generation Section */}
      <section id="contato" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle, #0F3D35 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-teal-accent mb-8">Próximo Passo</h2>
            <h3 className="text-5xl md:text-7xl font-serif font-black text-teal-darkest leading-tight mb-12 tracking-tight">
              Pronto para uma <br/>
              <span className="text-teal-accent italic">Vistoria Técnica?</span>
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href={`https://wa.me/5586999279390?text=Olá, gostaria de agendar uma visita para a ${property.title}.`}
                target="_blank"
                className="w-full md:w-auto bg-teal-darkest text-white px-12 py-6 rounded-full font-black uppercase text-xs tracking-widest hover:bg-teal-accent transition-all flex items-center justify-center gap-4 group shadow-2xl shadow-teal-darkest/20"
              >
                Agendar Vistoria
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
              
              <a 
                href="mailto:contato@nossaterra corporate.com.br"
                className="w-full md:w-auto bg-white border border-teal-dark/10 text-teal-darkest px-12 py-6 rounded-full font-black uppercase text-xs tracking-widest hover:bg-teal-light/20 transition-all flex items-center justify-center gap-4"
              >
                <Mail className="w-4 h-4" />
                E-mail Corporativo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Floating Conversion Layer */}
      <FloatingWhatsAppCTA 
        phoneNumber="5586999279390" 
        message={`Olá, gostaria de receber o Dossiê Técnico Completo da ${property.title}.`}
      />

      {/* Final Brand Footnote */}
      <footer className="py-16 border-t border-teal-dark/5 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-8">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-teal-darkest opacity-40">
              Nossa Terra <span className="text-teal-accent">Corporate</span>
            </span>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-teal-mid/30 max-w-md">
              Inteligência Imobiliária Rural • Consultoria Jurídica • Análise de Solo • Viabilidade Hídrica
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
