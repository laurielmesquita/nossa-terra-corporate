"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface PropertyHeroProps {
  title: string;
  location: string;
  type: string;
  videoUrl?: string;
  mainImage: string;
}

export function PropertyHero({ title, location, type, videoUrl, mainImage }: PropertyHeroProps) {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-teal-darkest">
      {/* Immersive Video/Image Background */}
      {videoUrl ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={mainImage}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: `url(${mainImage})` }}
        />
      )}

      {/* Technical Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none z-10" 
           style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-darkest/60 via-transparent to-teal-darkest z-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-darkest/80 via-transparent to-transparent z-20" />

      {/* Content Container */}
      <div className="absolute inset-0 flex items-end z-30">
        <div className="container mx-auto px-6 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <Link
              href="/imoveis"
              className="group inline-flex items-center gap-2 text-white/40 hover:text-white transition-all mb-10 no-underline font-bold text-[10px] uppercase tracking-[0.4em]"
            >
              <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
              Retornar ao Catálogo
            </Link>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Badge className="bg-teal-accent text-white px-6 py-2 rounded-full font-black uppercase text-[9px] tracking-[0.2em] border-none shadow-xl shadow-teal-accent/30">
                  {type}
                </Badge>
                <div className="h-[1px] w-12 bg-white/20" />
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">Ativo Corporate</span>
              </div>

              <h1 className="text-6xl md:text-9xl font-serif font-black text-white tracking-tighter leading-[0.85] drop-shadow-2xl">
                {title.split('—')[0]} <br />
                <span className="text-teal-accent italic">{title.split('—')[1] || ''}</span>
              </h1>

              <div className="flex items-center gap-6 text-white/80 font-medium">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
                  <MapPin className="w-6 h-6 text-teal-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-accent mb-1">Localização Estratégica</p>
                  <span className="text-xl md:text-3xl tracking-tight font-serif italic">{location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }} 
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 z-30"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[9px] font-bold uppercase tracking-[0.5em] vertical-text">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-teal-accent via-white/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
