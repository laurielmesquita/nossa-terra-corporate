"use client";
import { Badge } from "@/components/ui/badge";

export default function NewsletterSection() {
  return (
    <section className="bg-white pt-24 pb-0">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div className="bg-primary rounded-[3.5rem] p-12 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 border border-white/10 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,61,53,0.5)]">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/30 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-nt-yellow/15 rounded-full blur-[120px]" />
          
          <div className="text-center lg:text-left relative z-10 max-w-2xl">
            <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-1 rounded-full mb-6 text-[10px] font-bold uppercase tracking-widest">
              Acesso Exclusivo
            </Badge>
            <h3 className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-6 leading-tight">
              Oportunidades em regime de <span className="text-accent italic">off-market.</span>
            </h3>
            <p className="text-white/60 text-xl font-medium leading-relaxed">
              Assine nossa curadoria estratégica e seja notificado sobre propriedades em regime de confidencialidade antes de chegarem ao mercado.
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
