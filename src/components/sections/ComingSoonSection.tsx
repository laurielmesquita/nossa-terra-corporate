"use client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const mockProperties = [
  {
    tag: "Norte do Piauí",
    area: "1.200 ha",
    type: "Pecuária + Lavoura",
    desc: "Propriedade estratégica com ótima logística e documentação em análise jurídica.",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
  },
  {
    tag: "Sul do Maranhão",
    area: "850 ha",
    type: "Lavoura de Soja",
    desc: "Solo de alta fertilidade com pluviometria histórica analisada técnica e cientificamente.",
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d",
  },
  {
    tag: "Região Serrana - PI",
    area: "2.400 ha",
    type: "Pecuária Extensiva",
    desc: "Grande potencial hídrico e estrutura de manejo já instalada e produtiva.",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
  },
];

export default function ComingSoonSection() {
  return (
    <section id="imoveis" className="bg-white py-32">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        {/* Header - Refined Architecture */}
        <div className="flex flex-col lg:flex-row items-baseline lg:items-end justify-between gap-12 mb-24 border-b border-muted pb-12">
          <div className="max-w-4xl">
            <Badge variant="outline" className="text-nt-orange border-nt-orange/30 px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] mb-8 bg-nt-orange-light">
              Portfólio em Curadoria
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-primary leading-tight">
              Propriedades <span className="text-teal-mid italic">Seleccionadas.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end">
            <div className="flex items-center gap-3 text-sm font-bold text-nt-orange mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-nt-orange animate-ping" />
              Catálogo completo em breve
            </div>
            <p className="text-muted-foreground text-sm font-medium">Lançamento oficial em Abril de 2026</p>
          </div>
        </div>

        {/* Property cards - High Fidelity Aesthetics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {mockProperties.map((prop, i) => (
            <div
              key={i}
              className="group rounded-[2.5rem] overflow-hidden border-none bg-muted/20 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(15,61,53,0.12)] transition-all duration-700"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={`${prop.img}?w=800&auto=format&fit=crop&q=75`}
                  alt={prop.type}
                  fill
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />
                <Badge className="absolute top-6 left-6 bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-1.5 rounded-xl font-bold uppercase text-[9px] tracking-widest leading-none">
                  {prop.tag}
                </Badge>
              </div>
              
              <div className="p-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-serif font-extrabold text-primary">{prop.area}</span>
                  <Badge className="bg-secondary text-primary font-bold px-4 py-1.5 rounded-lg border border-primary/10 shadow-sm">
                    {prop.type}
                  </Badge>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed mb-8 h-18 overflow-hidden font-medium">
                  {prop.desc}
                </p>
                <div className="h-px w-full mb-8 bg-muted/40" />
                <div className="w-full h-14 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40 border border-muted group-hover:border-primary/10 bg-muted/10 flex items-center justify-center cursor-not-allowed">
                  Indisponível para Visitação
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription Box - PREMIUM version */}
        <div className="bg-primary rounded-[3.5rem] p-12 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 border border-white/10 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,61,53,0.5)]">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/30 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-nt-orange/15 rounded-full blur-[120px]" />
          
          <div className="text-center lg:text-left relative z-10 max-w-2xl">
            <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-1 rounded-full mb-6 text-[10px] font-bold uppercase tracking-widest">
              Acesso Exclusivo
            </Badge>
            <h3 className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-6 leading-tight">
              Oportunidades que não chegam ao <span className="text-accent italic">mercado aberto.</span>
            </h3>
            <p className="text-white/60 text-xl font-medium leading-relaxed">
              Assine nossa curadoria estratégica e seja notificado sobre propriedades em regime de confidencialidade.
            </p>
          </div>
          
          <div className="w-full max-w-lg relative z-10">
            <form className="flex flex-col sm:flex-row gap-4 group" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full h-20 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] px-10 focus:ring-2 focus:ring-accent/50 outline-none text-white text-lg placeholder:text-white/30 transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="h-20 bg-accent hover:bg-white hover:text-primary text-white px-12 rounded-[2rem] font-extrabold text-lg shadow-2xl shadow-accent/20 transition-all duration-500 active:scale-95 whitespace-nowrap"
              >
                Garantir Acesso
              </button>
            </form>
            <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mt-6 text-center lg:text-left">
              Privacidade absoluta. Sem spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
