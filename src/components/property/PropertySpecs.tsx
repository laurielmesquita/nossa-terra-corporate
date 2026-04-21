"use client";

import { motion } from "framer-motion";
import { 
  Droplets, 
  Zap, 
  Home, 
  Users, 
  Map,
  Mountain,
  LayoutGrid,
  FlaskConical
} from "lucide-react";

interface SpecItem {
  label: string;
  value: string;
}

interface PropertySpecsProps {
  description: string;
  specs: SpecItem[];
}

export function PropertySpecs({ description, specs }: PropertySpecsProps) {
  const getIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes("hídrica") || l.includes("poços")) return Droplets;
    if (l.includes("pluviometria")) return Zap;
    if (l.includes("benfeitorias") || l.includes("sede")) return Home;
    if (l.includes("operacional") || l.includes("alojamento")) return Users;
    if (l.includes("argila") || l.includes("solo")) return Map;
    if (l.includes("altitude")) return Mountain;
    if (l.includes("topografia")) return LayoutGrid;
    if (l.includes("orgânica") || l.includes("matéria")) return FlaskConical;
    return Map;
  };

  return (
    <section id="especificacoes" className="relative py-32 bg-background overflow-hidden">
      {/* Technical Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle, #0F3D35 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Narrative */}
          <div id="visao-geral" className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-teal-accent mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-teal-accent" />
                Dossiê de Ativo
              </h2>
              <h3 className="text-5xl md:text-7xl font-serif font-black text-teal-darkest leading-[1.1] mb-12 tracking-tight">
                Vocação Produtiva & <br/>
                <span className="text-teal-accent italic">Análise Pericial</span>
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-xl prose-teal text-teal-darkest/70 font-medium leading-[1.8] max-w-none"
            >
              <p className="first-letter:text-8xl first-letter:font-serif first-letter:font-black first-letter:text-teal-accent first-letter:mr-6 first-letter:float-left first-letter:leading-none whitespace-pre-line">
                {description}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Technical Specs */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-teal-mid/50 mb-8 px-2">Kpis Operacionais</p>
              
              <div className="grid grid-cols-1 gap-4">
                {specs.map((spec, index) => {
                  const Icon = getIcon(spec.label);
                  return (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between bg-white border border-teal-dark/5 p-6 rounded-[2rem] group hover:border-teal-accent/30 hover:shadow-2xl hover:shadow-teal-dark/5 transition-all"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-teal-light/30 rounded-2xl flex items-center justify-center text-teal-accent group-hover:bg-teal-accent group-hover:text-white transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-teal-mid/60 mb-0.5">
                            {spec.label}
                          </p>
                          <p className="text-base font-black text-teal-darkest tracking-tight">
                            {spec.value}
                          </p>
                        </div>
                      </div>
                      
                      <div className="w-2 h-2 rounded-full bg-teal-accent/20 group-hover:bg-teal-accent transition-colors" />
                    </motion.div>
                  );
                })}
              </div>

              {/* Verified Badge Decoration */}
              <div className="mt-12 p-8 rounded-[2rem] bg-teal-darkest text-white relative overflow-hidden group">
                <div className="absolute inset-0 opacity-10" 
                     style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
                <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-teal-accent mb-4">Certificação Nossa Terra</p>
                  <p className="text-sm font-medium text-white/70 leading-relaxed">
                    Este ativo passou por auditoria documental completa e vistoria técnica presencial de viabilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
