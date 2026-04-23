"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#082821] text-[#E8F5F3] overflow-hidden font-sans">
      {/* Background Image & Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/imagens/hero-rural.png"
          alt="Paisagem Rural"
          fill
          className="object-cover opacity-20 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#082821] via-[#0F3D35]/80 to-[#082821] mix-blend-multiply" />
        
        {/* Abstract Ambient Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#17A98B]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B6F47]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      {/* Header */}
      <header className={`relative z-10 w-full p-8 md:p-12 flex justify-center md:justify-start ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
        <Image 
          src="/assets/logos/nossaterra-logo-horizontal-white.png" 
          alt="Nossa Terra Imobiliária" 
          width={280} 
          height={80} 
          className="h-10 md:h-12 w-auto object-contain opacity-95"
        />
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-9 flex flex-col items-start text-left">
            {/* Badge */}
            <div className={`mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#17A98B]/30 bg-[#17A98B]/10 backdrop-blur-md text-[#17A98B] text-xs md:text-sm font-bold tracking-widest uppercase shadow-lg shadow-[#17A98B]/5 ${mounted ? "animate-fade-in-up stagger-1" : "opacity-0"}`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#17A98B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#17A98B]"></span>
              </span>
              Preparando o Terreno
            </div>

            {/* Headline */}
            <h1 className={`font-serif text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.05] mb-8 text-white ${mounted ? "animate-fade-in-up stagger-2" : "opacity-0"}`}>
              Semeando o futuro <br className="hidden md:block" /> do seu <span className="text-[#8B6F47] italic">patrimônio</span>.
            </h1>

            {/* Description */}
            <div className={`space-y-6 text-lg md:text-xl text-[#E8F5F3]/80 leading-relaxed max-w-3xl font-light ${mounted ? "animate-fade-in-up stagger-3" : "opacity-0"}`}>
              <p>
                Estamos construindo uma experiência projetada para ajudar você de forma simples e segura nas decisões do <strong>mercado imobiliário rural e urbano</strong>.
              </p>
              <p>
                Um modelo que une inteligência documental, perícia judicial e uma curadoria impecável de ativos. Em breve, algo extraordinário será entregue ao público.
              </p>
            </div>

            {/* CTAs */}
            <div className={`mt-14 flex flex-col sm:flex-row gap-6 items-center ${mounted ? "animate-fade-in-up stagger-4" : "opacity-0"}`}>
              <a 
                href="https://api.whatsapp.com/send?phone=5586995903007&text=Olá!%20Gostaria+de%20saber+mais%20sobre%20a%20Nossa%20Terra." 
                className="flex items-center justify-center gap-4 bg-[#17A98B] hover:bg-teal-500 text-white px-8 py-5 md:px-10 md:py-6 rounded-full shadow-2xl shadow-[#17A98B]/40 no-underline group transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
              >
                <div className="relative">
                  <Phone className="w-8 h-8 fill-white" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
                  </span>
                </div>
                <div className="flex flex-col items-start leading-tight text-left">
                  <span className="text-[13px] md:text-base font-bold uppercase tracking-widest opacity-90 mb-0.5">Fale com Especialista</span>
                  <span className="text-[22px] md:text-3xl font-black tracking-tight">Consultoria via WhatsApp</span>
                </div>
              </a>
              
              <div className="flex flex-col items-center sm:items-start text-sm text-[#E8F5F3]/50 mt-4 sm:mt-0">
                <span className="font-semibold text-[#E8F5F3]/70 uppercase tracking-widest text-xs mb-1">Dúvidas?</span>
                <a href="mailto:contato@nossaterra.imb.br" className="hover:text-[#17A98B] transition-colors border-b border-transparent hover:border-[#17A98B]">
                  contato@nossaterra.imb.br
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className={`relative z-10 w-full p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-[#E8F5F3]/40 ${mounted ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: '0.6s' }}>
        <p>© {new Date().getFullYear()} Nossa Terra Imobiliária. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <span>Norte do PI e Sul do MA</span>
          <span className="hidden md:inline">•</span>
          <span>CRECI Pendente</span>
        </div>
      </footer>
    </div>
  );
}
