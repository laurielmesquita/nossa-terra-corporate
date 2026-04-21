"use client";

import { motion } from "framer-motion";
import { 
  Droplets, 
  Zap, 
  Home, 
  Users, 
  Map 
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
    return Map;
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* 1. Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-teal-accent mb-6">
            Dossiê de Análise
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif font-black text-teal-darkest leading-tight">
            Vocação Produtiva & <br/>Análise Pericial
          </h3>
        </motion.div>

        {/* 2. Technical Status Bar (Horizontal Seals) */}
        <div className="flex flex-wrap gap-4 mb-16 pb-8 border-b border-teal-dark/5">
          {specs.map((spec, index) => {
            const Icon = getIcon(spec.label);
            return (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-teal-light/30 border border-teal-accent/10 px-6 py-4 rounded-2xl group hover:bg-white hover:shadow-xl hover:shadow-teal-dark/5 transition-all"
              >
                <div className="p-2 bg-white rounded-xl text-teal-accent group-hover:scale-110 transition-transform shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-teal-mid/60 mb-0.5">
                    {spec.label}
                  </p>
                  <p className="text-sm font-black text-teal-darkest">
                    {spec.value}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3. Deep Narrative (Full Width Reading) */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="prose prose-2xl prose-teal text-teal-darkest/70 font-medium leading-[1.8]"
          >
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:font-black first-letter:text-teal-accent first-letter:mr-4 first-letter:float-left whitespace-pre-line">
              {description}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
