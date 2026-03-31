import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const problems = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Documentação Irregular",
    desc: "Escritura, CAR, CCIR e ITR com pendências que só aparecem no fechamento — e custam fortunas para resolver.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Preço Sem Embasa Técnico",
    desc: "Valores pedidos sem análise real do solo ou do potencial produtivo da terra — puro achismo de mercado.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Bloqueio de Crédito Rural",
    desc: "O produtor compra a terra, mas não tem capital para operar. Sem crédito rural adequado, a fazenda fica parada.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        {/* Header - Refined Typography */}
        <div className="max-w-5xl mb-24">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-nt-orange block mb-6">
            O Cenário Atual
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-primary leading-[1.2] mb-8">
            Comprar terra no campo deveria ser simples.{" "}
            <span className="text-teal-mid italic">Por que é tão arriscado?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
            A maioria das transações rurais falha ou gera prejuízos por problemas invisíveis aos olhos de amadores.
          </p>
        </div>

        {/* Cards using shadcn Card - Refined Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {problems.map((p, i) => (
            <Card
              key={i}
              className="group border-muted/40 bg-white hover:bg-muted/10 hover:border-teal-accent/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 rounded-[2.5rem] p-4"
            >
              <CardHeader className="pt-8 px-8 pb-4">
                <div className="w-16 h-16 rounded-2xl bg-nt-orange-light text-nt-orange flex items-center justify-center mb-8 group-hover:bg-nt-orange group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-110 group-hover:rotate-3">
                  {p.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-primary mb-4 leading-tight group-hover:text-teal-mid transition-colors">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
