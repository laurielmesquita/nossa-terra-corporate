"use client";
import Link from "next/link";
import Image from "next/image";

const buttonClass = "w-full sm:w-auto bg-teal-600 hover:bg-white hover:text-teal-900 text-white rounded-2xl h-20 px-12 text-xl font-extrabold shadow-2xl shadow-teal-600/40 transition-all duration-700 hover:scale-105 flex items-center justify-center no-underline";
const outlineClass = "w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-2xl h-20 px-12 text-xl font-bold backdrop-blur-md transition-all duration-700 hover:scale-105 flex items-center justify-center no-underline";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Dynamic Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80"
          className="w-full h-full object-cover scale-110 opacity-0 animate-fade-in duration-2000"
        >
          <source 
            src="https://joy1.videvo.net/videvo_files/video/free/2015-08/large_watermarked/Corn_Fields_Slow_3_videvo_preview.mp4" 
            type="video/mp4" 
          />
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80"
            alt="Propriedade rural"
            fill
            className="w-full h-full object-cover"
            priority
          />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/95 via-teal-950/65 to-teal-950/95" />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>

      {/* Hero Content with Entrance Animations */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-8 text-center text-white py-32 flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2.5 mb-10 text-sm font-semibold tracking-wide shadow-2xl opacity-0 animate-fade-in-up stagger-1">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400"></span>
          </span>
          Norte do Piauí · Sul do Maranhão
        </div>

        {/* Cinematic Headline */}
        <h1 className="font-serif font-extrabold text-5xl md:text-7xl lg:text-9xl leading-[1.0] tracking-tight mb-10 max-w-screen-2xl mx-auto drop-shadow-2xl opacity-0 animate-fade-in-up stagger-2">
          Segurança Jurídica, <br />
          <span className="text-teal-400 italic">Análise Técnica</span> <br />
          e Crédito Rural.
        </h1>

        {/* Elegant Subheadline */}
        <p className="text-lg md:text-2xl text-white/70 max-w-4xl mx-auto mb-16 leading-relaxed font-medium opacity-0 animate-fade-in-up stagger-3">
          A Nossa Terra não é apenas uma imobiliária rural. É a consultoria
          estratégica para quem exige absoluta proteção e inteligência no campo.
        </p>

        {/* High-Fidelity CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-md md:max-w-none opacity-0 animate-fade-in-up stagger-4">
          <a
            href="https://api.whatsapp.com/send?phone=5586999279390&text=Olá!%20Gostaria%20de%20uma%20consultoria%20sobre%20imóveis%20rurais."
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            Consultoria Grátis
          </a>
          <Link href="#imoveis" className={outlineClass}>
            Ver Catálogo
          </Link>
        </div>

        {/* Stats Strip */}
        <div className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-screen-2xl w-full border-t border-white/10 pt-14 opacity-0 animate-fade-in stagger-4">
          {[
            { value: "2021", label: "No Mercado" },
            { value: "100%", label: "Segurança" },
            { value: "PI/MA", label: "Estados" },
            { value: "4 em 1", label: "Consultoria" },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <div className="text-4xl md:text-5xl font-serif font-extrabold text-teal-400 mb-2 drop-shadow-sm group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
              <div className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-30 animate-pulse">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-white" />
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">Descubra</span>
      </div>
    </section>
  );
}
