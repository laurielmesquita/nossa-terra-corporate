"use client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { properties } from "@/data/properties";
import { Maximize2, MapPin, ArrowRight } from "lucide-react";

export default function FeaturedCatalog() {
  // Only show featured properties on home
  const featured = properties.filter(p => p.featured).slice(0, 3);

  return (
    <section id="imoveis" className="bg-white pt-24 pb-16">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        {/* Header - Refined Architecture */}
        <div className="flex flex-col lg:flex-row items-baseline lg:items-end justify-between gap-12 mb-24 border-b border-muted pb-12">
          <div className="max-w-4xl">
            <Badge variant="outline" className="text-nt-yellow border-nt-yellow/30 px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] mb-8 bg-nt-yellow-light/10">
              Oportunidades Selecionadas
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-primary leading-tight">
              Investimento em <span className="text-teal-600 italic">Terras Produtivas.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end">
            <Link 
              href="/imoveis" 
              className="group flex items-center gap-3 text-sm font-bold text-teal-600 hover:text-primary transition-colors no-underline uppercase tracking-widest"
            >
              Ver Catálogo Completo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <p className="text-muted-foreground text-sm font-medium mt-2">Atualizado em Abril de 2026</p>
          </div>
        </div>

        {/* Property cards - High Fidelity Aesthetics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {featured.map((prop) => (
            <Link
              key={prop.id}
              href={`/imoveis/${prop.id}`}
              className="group rounded-[2.5rem] overflow-hidden border-none bg-muted/20 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(15,61,53,0.12)] transition-all duration-700 no-underline"
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
                  <span className="text-3xl font-serif font-extrabold text-primary tracking-tighter">{prop.area}</span>
                  <Badge className="bg-secondary text-primary font-bold px-4 py-1.5 rounded-lg border border-primary/10 shadow-sm">
                    {prop.type}
                  </Badge>
                </div>
                
                <h4 className="text-xl font-serif font-black text-primary mb-4 group-hover:text-teal-600 transition-colors">
                  {prop.title}
                </h4>

                <p className="text-base text-muted-foreground leading-relaxed mb-8 h-12 line-clamp-2 font-medium">
                  {prop.description}
                </p>
                <div className="h-px w-full mb-8 bg-muted/40" />
                <div className="w-full h-14 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600 border border-teal-600/20 group-hover:border-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all flex items-center justify-center">
                  Ver Análise Completa
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
