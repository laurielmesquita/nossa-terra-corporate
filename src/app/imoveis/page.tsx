import { properties } from "@/data/properties";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { MapPin, Maximize2, ArrowRight, Filter } from "lucide-react";

export const metadata = {
  title: "Catálogo de Propriedades Selecionadas — Nossa Terra",
  description: "Explore nossa curadoria de fazendas de alto potencial produtivo e segurança jurídica garantida no Norte do PI e Sul do MA.",
  openGraph: {
    title: "Catálogo de Fazendas de Alta Escala | Nossa Terra",
    description: "Curadoria técnica de ativos rurais com segurança jurídica total.",
    images: [
      {
        url: "/assets/customers/2603-flm/fotos/01-sede-principal-panoramica.jpg",
        width: 1200,
        height: 630,
        alt: "Catálogo de Propriedades Nossa Terra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/customers/2603-flm/fotos/01-sede-principal-panoramica.jpg"],
  },
};

export default function ListingPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Catálogo de Imóveis", href: "/imoveis" }]} />
        
        <div className="flex flex-col lg:flex-row items-baseline lg:items-end justify-between gap-12 mt-16 mb-24 border-b border-muted pb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-primary leading-tight">
              Investimento <span className="text-teal-600 italic">Estratégico no Campo.</span>
            </h1>
            <p className="text-muted-foreground text-xl mt-6 font-medium max-w-2xl leading-relaxed">
              Propriedades auditadas juridicamente e com análise de viabilidade técnica para agricultura e pecuária profissional.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-muted/30 px-6 py-3 rounded-2xl border border-muted">
            <Filter className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest">Filtros Avançados</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((prop) => (
            <Link
              key={prop.id}
              href={`/imoveis/${prop.id}`}
              className="group rounded-[2.5rem] overflow-hidden border border-muted/20 bg-muted/10 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(15,61,53,0.12)] transition-all duration-700 no-underline"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={prop.mainImage}
                  alt={prop.title}
                  fill
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />
                
                {prop.opportunity && (
                  <Badge className="absolute top-6 right-6 bg-nt-yellow text-teal-950 px-4 py-1.5 rounded-xl font-bold uppercase text-[9px] tracking-widest leading-none shadow-xl border-none">
                    Oportunidade
                  </Badge>
                )}
                
                <Badge className="absolute top-6 left-6 bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-1.5 rounded-xl font-bold uppercase text-[9px] tracking-widest leading-none">
                  {prop.location}
                </Badge>
              </div>
              
              <div className="p-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-serif font-extrabold text-primary group-hover:text-teal-600 transition-colors">
                    {prop.title}
                  </h3>
                </div>
                
                <div className="flex gap-6 mb-8 text-muted-foreground font-bold text-sm">
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-teal-600" />
                    <span>{prop.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-600" />
                    <span>{prop.type}</span>
                  </div>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed mb-8 line-clamp-2 font-medium">
                  {prop.description}
                </p>

                <div className="h-px w-full mb-8 bg-muted/40" />
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-primary">{prop.price}</span>
                  <div className="flex items-center gap-2 text-teal-600 font-bold uppercase text-[10px] tracking-widest group-hover:translate-x-2 transition-transform">
                    Ver Detalhes <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
