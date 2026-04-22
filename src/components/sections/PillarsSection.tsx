import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const pillars = [
  {
    number: "I",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Terra",
    subtitle: "Estratégia Imobiliária",
    desc: "Intermediação de alto nível com avaliação baseada em dados reais de mercado e produção.",
    tag: "Standard",
    variant: "standard",
  },
  {
    number: "II",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Jurídico",
    subtitle: "Blindagem de Ativos",
    desc: "Análise dominial profunda conduzida por perita especialista em inteligência documental. Zero risco jurídico.",
    tag: "Exclusive",
    variant: "dark",
  },
  {
    number: "III",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Técnico",
    subtitle: "Viabilidade Solo/Clima",
    desc: "Estudo técnico de solo e pluviometria. Você compra terra que realmente produz.",
    tag: "Technical",
    variant: "accent",
  },
  {
    number: "IV",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Financeiro",
    subtitle: "Crédito Rural Ágil",
    desc: "Apoio total no acesso a linhas de crédito para operação e investimento imediato.",
    tag: "Finance",
    variant: "orange",
  },
];

export default function PillarsSection() {
  return (
    <section className="bg-muted/20 py-32 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white -z-10" />
      
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        {/* Header - Refined Prestigious Style */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <Badge className="bg-accent/10 text-accent border-accent/20 px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] mb-10">
            One-Stop-Shop Rural
          </Badge>
          <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-primary leading-[1.15] mb-8">
            Do primeiro contato à{" "}
            <span className="text-accent underline decoration-accent/20 underline-offset-16 italic">escritura assinada.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
            Reunimos as quatro inteligências cruciais para o campo em um único ecossistema consultivo.
          </p>
        </div>

        {/* Pillars grid with refined card aesthetics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p) => (
            <Card
              key={p.number}
              className={cn(
                "group border-none flex flex-col gap-8 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(15,61,53,0.15)] rounded-[2.5rem] p-10 overflow-hidden relative",
                p.variant === "dark" ? "bg-primary text-white" : "bg-white shadow-xl shadow-primary/5",
                p.variant === "accent" ? "border-t-4 border-accent" : "",
                p.variant === "orange" ? "border-t-4 border-nt-yellow" : ""
              )}
            >
              {/* Meta */}
              <div className="flex items-start justify-between relative z-10">
                <span className={cn(
                  "font-serif italic text-2xl",
                  p.variant === "dark" ? "text-white/20" : "text-primary/10"
                )}>
                  0{p.number === "I" ? 1 : p.number === "II" ? 2 : p.number === "III" ? 3 : 4}
                </span>
                <div className={cn(
                  "text-[9px] font-bold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border shadow-sm",
                  p.variant === "dark" ? "bg-white/5 border-white/10 text-white/70" : "bg-muted/20 border-muted text-muted-foreground"
                )}>
                  {p.tag}
                </div>
              </div>

              {/* Icon Section */}
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center relative z-10 transition-all duration-500 shadow-inner group-hover:scale-110 group-hover:bg-accent group-hover:text-white",
                p.variant === "dark" ? "bg-white/10 text-accent" : "bg-muted/30 text-primary"
              )}>
                {p.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div>
                  <h3 className={cn(
                    "text-2xl font-serif font-extrabold mb-1",
                    p.variant === "dark" ? "text-white" : "text-primary"
                  )}>
                    {p.title}
                  </h3>
                  <p className={cn(
                    "text-[11px] font-bold uppercase tracking-widest",
                    p.variant === "dark" ? "text-accent" : "text-teal-mid"
                  )}>
                    {p.subtitle}
                  </p>
                </div>
                <CardContent className="p-0">
                  <p className={cn(
                    "text-base leading-relaxed font-medium opacity-80",
                    p.variant === "dark" ? "text-white/80" : "text-muted-foreground"
                  )}>
                    {p.desc}
                  </p>
                </CardContent>
              </div>
              
              {/* Subtle hover reveal element */}
              <div className={cn(
                "absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700",
                p.variant === "dark" ? "bg-white" : "bg-accent"
              )} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
