import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ShieldCheck, Scale, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a Nossa Terra",
  description: "Conheça a história da Nossa Terra e a expertise técnica da Aline Nascimento em consultoria imobiliária rural.",
  openGraph: {
    title: "Sobre a Nossa Terra | Inteligência Rural",
    description: "Segurança jurídica e técnica liderada por Aline Nascimento.",
    images: [
      {
        url: "/images/aline-perita.png",
        width: 1200,
        height: 630,
        alt: "Aline Nascimento - Nossa Terra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/aline-perita.png"],
  },
};

export default function SobrePage() {
  const whatsappBtnClass = "bg-accent hover:bg-teal-mid text-white rounded-2xl h-14 px-10 font-bold shadow-2xl shadow-accent/40 border-none transition-all hover:scale-105 flex items-center justify-center no-underline";

  return (
    <div className="bg-white">
      {/* Compact Hero Section */}
      <section className="relative pt-40 pb-20 bg-primary group overflow-hidden">
        {/* Relevant Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero-sobre.png"
            alt="Vastidão Rural"
            fill
            priority
            className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-[3000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <Breadcrumb items={[{ label: "Sobre" }]} />
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 font-serif opacity-0 animate-fade-in-up stagger-1">
              Mais do que uma imobiliária. Uma <span className="text-accent italic">consultoria técnica</span>.
            </h1>
            <p className="text-lg text-white/70 font-medium leading-relaxed max-w-2xl opacity-0 animate-fade-in-up stagger-2">
              Segurança técnica e jurídica para o mercado rural do Piauí e Maranhão, guiada pela autoridade da Aline Nascimento.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 h-[500px] opacity-0 animate-fade-in-up stagger-1">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80"
                alt="Campo Nossa Terra"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div className="opacity-0 animate-fade-in-up stagger-2">
              <h2 className="text-3xl font-serif font-extrabold text-primary mb-6">A Nossa Terra nasceu de uma necessidade do mercado.</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-medium">
                <p>
                  No mercado imobiliário rural comum, a venda termina na assinatura. Na Nossa Terra, a venda é apenas a etapa final de um processo rigoroso de análise.
                </p>
                <p>
                  Percebemos que produtores e investidores perdiam tempo e dinheiro com terras sem documentação regular ou sem viabilidade técnica real. Unimos então o <strong>Direito Agrário</strong>, a <strong>Engenharia de Solo</strong> e o <strong>Crédito Rural</strong> em um único atendimento.
                </p>
                <div className="flex gap-4 pt-4">
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 py-2 px-4 rounded-xl font-bold uppercase tracking-wider text-[10px]">
                    + Segurança Jurídica
                  </Badge>
                  <Badge variant="secondary" className="bg-nt-yellow-light text-nt-yellow border-nt-yellow/20 py-2 px-4 rounded-xl font-bold uppercase tracking-wider text-[10px]">
                    + Viabilidade Técnica
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aline Bio Section */}
      <section id="aline" className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full" />
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 opacity-0 animate-fade-in-up stagger-2">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent block mb-8">
                Quem Conduz
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-extrabold leading-tight mb-8">
                Aline Nascimento
                <br />
                <span className="text-white/60 text-2xl font-bold uppercase tracking-widest mt-2 block italic">Corretora & Perita Judiciária</span>
              </h2>
              <div className="space-y-8 text-white/70 leading-relaxed text-lg font-medium">
                <div className="border-l-4 border-accent pl-8 py-2">
                  <p className="italic text-xl text-white font-serif">
                    &quot;Minha expertise técnica e pericial não é apenas um diferencial, é a ferramenta que protege o patrimônio dos meus clientes em cada transação.&quot;
                  </p>
                </div>
                <p>
                  Com vasta experiência em <strong>Legislação Agrária, Imobiliária e Civil</strong>, Aline Nascimento construiu a Nossa Terra baseada no princípio da transparência radical e segurança documental. 
                </p>
                <div className="pt-8">
                  <a
                    href="https://api.whatsapp.com/send?phone=5586999279390&text=Olá!%20Assisti%20seu%20teaser%20e%20gostaria%20de%20falar%20com%20você."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={whatsappBtnClass}
                  >
                    Falar com a Aline
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative group opacity-0 animate-fade-in-up stagger-1">
              <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-2xl group-hover:bg-accent/30 transition-all duration-700" />
              <div className="border-none bg-white rounded-[3rem] overflow-hidden shadow-2xl relative z-10 h-[600px]">
                <Image
                  src="/images/aline-perita.png"
                  alt="Aline Nascimento"
                  fill
                  className="object-cover object-top grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values/Pillars Recap */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl font-serif font-extrabold text-primary mb-4">Nossa entrega em cada hectare.</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Transparência", desc: "Laudos técnicos reais. Se a terra não produz, nós avisamos.", icon: <ShieldCheck className="w-8 h-8" /> },
            { title: "Rigor Jurídico", desc: "Análise profunda de toda a cadeia dominial antes da oferta.", icon: <Scale className="w-8 h-8" /> },
            { title: "Foco no Resultado", desc: "Buscamos terras que tragam produtividade ou valorização real.", icon: <TrendingUp className="w-8 h-8" /> },
          ].map((v, i) => (
            <div key={v.title} className={`text-center flex flex-col items-center group opacity-0 animate-fade-in-up stagger-${i+1}`}>
              <div className="w-20 h-20 rounded-full bg-accent/5 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-inner">
                {v.icon}
              </div>
              <h3 className="text-2xl font-serif font-extrabold text-primary mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
