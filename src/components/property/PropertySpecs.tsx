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
  // Logic moved to Client Component to allow serialization
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Narrative Analysis */}
          <div className="lg:col-span-12 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-teal-accent mb-6">
                Dossiê de Análise
              </h2>
              <h3 className="text-3xl md:text-5xl font-serif font-black text-teal-darkest leading-tight">
                Vocação Produtiva & <br/>Análise Pericial
              </h3>
            </motion.div>
          </div>

          {/* Left: Description Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-xl prose-teal text-muted-foreground font-medium leading-relaxed"
            >
              <p className="whitespace-pre-line">
                {description}
              </p>
            </motion.div>
          </div>

          {/* Right: Technical Specs Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-4">
              {specs.map((spec, index) => {
                const Icon = getIcon(spec.label);
                return (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative bg-white/40 backdrop-blur-xl border border-teal-dark/5 rounded-3xl p-8 transition-all hover:bg-white/80 hover:shadow-2xl hover:shadow-teal-dark/5"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-mid/50 mb-1">
                          {spec.label}
                        </p>
                        <p className="text-xl font-black text-teal-darkest tracking-tight">
                          {spec.value}
                        </p>
                      </div>
                      <div className="p-4 bg-teal-light rounded-2xl text-teal-accent group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
