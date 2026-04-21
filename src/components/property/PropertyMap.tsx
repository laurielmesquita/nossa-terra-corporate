"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Map as MapIcon, 
  Layers, 
  Maximize2, 
  Compass, 
  ShieldCheck,
  LocateFixed
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyMapProps {
  location: string;
  area: string;
}

export function PropertyMap({ location, area }: PropertyMapProps) {
  const [activeLayer, setActiveLayer] = useState<"satellite" | "car" | "topo">("car");

  return (
    <section id="juridico" className="py-32 bg-teal-darkest relative overflow-hidden">
      {/* Technical Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10" 
           style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-6 lg:px-8 relative z-20">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-teal-accent/10 rounded-xl flex items-center justify-center text-teal-accent border border-teal-accent/20">
              <MapIcon className="w-5 h-5" />
            </div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-teal-accent">Inteligência Geográfica</h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-serif font-black text-white leading-tight">
            Análise GEO & <br/>
            <span className="text-teal-accent italic">Conformidade CAR</span>
          </h3>
        </div>

        {/* Map Interface Container */}
        <div className="relative group">
          {/* Main Map Canvas (Mock) */}
          <div className="relative w-full h-[600px] md:h-[750px] bg-slate-900 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            {/* Satellite Background Placeholder (Darkened for UI contrast) */}
            <div 
              className={cn(
                "absolute inset-0 bg-cover bg-center transition-all duration-1000",
                activeLayer === "satellite" ? "opacity-100 grayscale-0" : "opacity-40 grayscale"
              )}
              style={{ backgroundImage: `url('/assets/customers/2404-flm/fotos/03-area-produtiva-lavoura.jpeg')` }}
            />

            {/* SVG Technical Polygon (The "CAR" visualization) */}
            <svg 
              viewBox="0 0 800 600" 
              className={cn(
                "absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500",
                activeLayer === "car" ? "opacity-100" : "opacity-0"
              )}
            >
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M200,150 L600,100 L700,350 L550,500 L150,450 Z"
                fill="rgba(20, 184, 166, 0.15)"
                stroke="#14b8a6"
                strokeWidth="2"
                strokeDasharray="10,5"
              />
              <motion.circle 
                cx="200" cy="150" r="4" fill="#14b8a6" 
                animate={{ scale: [1, 1.5, 1] }} 
                transition={{ repeat: Infinity, duration: 2 }} 
              />
              <motion.circle 
                cx="600" cy="100" r="4" fill="#14b8a6" 
              />
              <text x="350" y="250" className="fill-teal-accent text-[12px] font-black uppercase tracking-widest opacity-60">
                Área Consolidada: 5.000 ha
              </text>
            </svg>

            {/* HUD: Coordinates & Compass */}
            <div className="absolute top-10 left-10 z-30 hidden md:block">
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <LocateFixed className="w-4 h-4 text-teal-accent" />
                  <div className="text-[10px] font-mono text-white/70">
                    LAT: -10.3421° / LONG: -45.9238°
                  </div>
                </div>
                <div className="h-[1px] w-full bg-white/10" />
                <div className="flex items-center gap-3 text-teal-accent">
                  <Compass className="w-5 h-5 animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-widest">Norte Magnético</span>
                </div>
              </div>
            </div>

            {/* Layer Switcher Panel */}
            <div className="absolute bottom-10 left-10 right-10 md:left-auto md:right-10 z-30">
              <div className="bg-black/60 backdrop-blur-2xl border border-white/20 p-2 rounded-full flex items-center gap-2">
                {[
                  { id: "satellite", label: "Satélite", icon: Maximize2 },
                  { id: "car", label: "Polígono CAR", icon: ShieldCheck },
                  { id: "topo", label: "Topográfico", icon: Layers }
                ].map((layer) => (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(layer.id as any)}
                    className={cn(
                      "flex items-center gap-3 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
                      activeLayer === layer.id 
                        ? "bg-teal-accent text-white shadow-lg shadow-teal-accent/30" 
                        : "text-white/40 hover:text-white"
                    )}
                  >
                    <layer.icon className="w-3 h-3" />
                    {layer.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-10 left-10 hidden md:block z-30">
               <div className="flex items-center gap-8 bg-black/40 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/5">
                  <div>
                    <p className="text-[8px] font-bold text-teal-accent uppercase tracking-widest mb-1">Status Documental</p>
                    <p className="text-xs font-black text-white uppercase tracking-tighter">Georreferenciada / CAR Ativo</p>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10" />
                  <div>
                    <p className="text-[8px] font-bold text-teal-accent uppercase tracking-widest mb-1">Escala Técnica</p>
                    <p className="text-xs font-black text-white uppercase tracking-tighter">1:50.000 (Análise Pericial)</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Decorative Corner Brackets */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-teal-accent/30 rounded-tl-3xl pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-teal-accent/30 rounded-br-3xl pointer-events-none" />
        </div>

        {/* Narrative Under Map */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <p className="text-xl text-white/40 leading-relaxed font-medium">
            Toda a demarcação territorial da <span className="text-white">Fazenda Lagoa do Mato</span> foi validada por auditoria técnica e georreferenciamento de precisão, garantindo a <span className="text-teal-accent">integridade da matrícula</span> e a conformidade absoluta com o Código Florestal Brasileiro.
          </p>
          <div className="flex flex-wrap gap-4 justify-end">
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-teal-accent uppercase tracking-widest">
              INCRA Certificado
            </div>
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-teal-accent uppercase tracking-widest">
              SIGEF Sincronizado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
