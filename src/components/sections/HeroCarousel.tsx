"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { properties } from "@/data/properties";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const buttonClass = "w-full sm:w-auto bg-teal-600 hover:bg-white hover:text-teal-900 text-white rounded-2xl h-20 px-12 text-xl font-extrabold shadow-2xl shadow-teal-600/40 transition-all duration-700 hover:scale-105 flex items-center justify-center no-underline gap-3";
const outlineClass = "w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-2xl h-20 px-12 text-xl font-bold backdrop-blur-md transition-all duration-700 hover:scale-105 flex items-center justify-center no-underline";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProperty = properties[0];

  const slides = [
    {
      id: "property",
      content: (
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-8 text-center text-white py-32 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 bg-nt-orange-light/20 backdrop-blur-xl border border-nt-orange/30 rounded-full px-6 py-2.5 mb-10 text-sm font-bold tracking-wide shadow-2xl text-nt-orange">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nt-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-nt-orange"></span>
            </span>
            Oportunidade de Investimento
          </div>

          <h1 className="font-serif font-extrabold text-5xl md:text-7xl lg:text-9xl leading-[1.0] tracking-tight mb-10 max-w-screen-2xl mx-auto drop-shadow-2xl">
            {featuredProperty.title} <br />
            <span className="text-teal-400 italic">{featuredProperty.price}</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/70 max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
            {featuredProperty.description} — Localizada em {featuredProperty.location} com {featuredProperty.area}.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-md md:max-w-none">
            <Link href={`/imoveis/${featuredProperty.id}`} className={buttonClass}>
              Ver Detalhes da Fazenda <ArrowRight className="w-6 h-6" />
            </Link>
            <a href="https://api.whatsapp.com/send?phone=5586999279390" className={outlineClass}>
              Falar com Consultor
            </a>
          </div>
        </div>
      ),
      bg: featuredProperty.mainImage,
      video: "https://cdn.coverr.co/videos/coverr-horses-on-a-misty-farm-5500/1080p.mp4"
    },
    {
      id: "brand",
      content: (
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-8 text-center text-white py-32 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2.5 mb-10 text-sm font-semibold tracking-wide shadow-2xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400"></span>
            </span>
            Norte do Piauí · Sul do Maranhão
          </div>

          <h1 className="font-serif font-extrabold text-5xl md:text-7xl lg:text-9xl leading-[1.0] tracking-tight mb-10 max-w-screen-2xl mx-auto drop-shadow-2xl">
            Segurança Jurídica, <br />
            <span className="text-teal-400 italic">Análise Técnica</span> <br />
            e Crédito Rural.
          </h1>

          <p className="text-lg md:text-2xl text-white/70 max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
            A Nossa Terra não é apenas uma imobiliária rural. É a consultoria
            estratégica para quem exige absoluta proteção e inteligência no campo.
          </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-md md:max-w-none">
              <a href="https://api.whatsapp.com/send?phone=5586999279390" className={buttonClass}>
                Consultoria Grátis
              </a>
              <Link href="#imoveis" className={outlineClass}>
                Ver Catálogo
              </Link>
            </div>

            {/* Stats Strip */}
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-screen-2xl w-full border-t border-white/10 pt-12">
              {[
                { value: "2021", label: "No Mercado" },
                { value: "100%", label: "Segurança" },
                { value: "PI/MA", label: "Estados" },
                { value: "4 em 1", label: "Consultoria" },
              ].map((stat) => (
                <div key={stat.label} className="group">
                  <div className="text-4xl md:text-5xl font-serif font-extrabold text-teal-400 mb-2 drop-shadow-sm group-hover:scale-110 transition-all duration-500">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
        bg: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80",
        video: null
      }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-teal-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          {/* Background Media */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            {slides[currentSlide].video ? (
              <video
                key={slides[currentSlide].video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-110 opacity-60"
              >
                <source src={slides[currentSlide].video} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={slides[currentSlide].bg}
                alt="Propriedade rural"
                fill
                className="w-full h-full object-cover scale-110 opacity-60"
                priority
              />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-b from-teal-950/95 via-teal-950/65 to-teal-950/95" />
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          </div>

          {/* Slide Content */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-full flex items-center justify-center"
          >
            {slides[currentSlide].content}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-10 z-20 flex gap-4 md:flex-row flex-col">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-teal-950 hover:scale-110 active:scale-95 cursor-pointer transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-teal-950 hover:scale-110 active:scale-95 cursor-pointer transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
              i === currentSlide 
                ? "w-12 bg-teal-400" 
                : "w-6 bg-white/20 hover:bg-white/60 hover:w-8"
            }`}
          />
        ))}
      </div>

      {/* Dynamic Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-30 animate-pulse hidden md:flex">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-white" />
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">Descubra</span>
      </div>
    </section>
  );
}
