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
}

export function PropertyHero({ title, location, type, videoUrl }: PropertyHeroProps) {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-teal-darkest">
      {/* Immersive Video/Image Background */}
      {videoUrl ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-primary/20" />
      )}

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-darkest/40 via-transparent to-teal-darkest" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-darkest/60 via-transparent to-transparent" />

      {/* Content Container */}
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-6 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <Link
              href="/imoveis"
              className="group inline-flex items-center gap-2 text-white/50 hover:text-white transition-all mb-8 no-underline font-bold text-xs uppercase tracking-[0.2em]"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Retornar ao Catálogo
            </Link>

            <div className="space-y-6">
              <Badge className="bg-teal-accent text-white px-5 py-2 rounded-full font-bold uppercase text-[10px] tracking-[0.15em] border-none shadow-lg shadow-teal-accent/20">
                {type}
              </Badge>

              <h1 className="text-5xl md:text-8xl font-serif font-extrabold text-white tracking-tight leading-[0.9] drop-shadow-2xl">
                {title}
              </h1>

              <div className="flex items-center gap-4 text-teal-light/80 font-bold">
                <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg">
                  <MapPin className="w-6 h-6 text-teal-accent" />
                </div>
                <span className="text-xl md:text-2xl tracking-tight">{location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </motion.div>
    </section>
  );
}
