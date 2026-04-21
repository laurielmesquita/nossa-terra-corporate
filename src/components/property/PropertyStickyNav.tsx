"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "visao-geral", label: "Visão Geral" },
  { id: "especificacoes", label: "Dossiê Técnico" },
  { id: "galeria", label: "Infraestrutura" },
  { id: "geografico", label: "Análise GEO" },
  { id: "juridico", label: "Jurídico" },
];

export function PropertyStickyNav() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("visao-geral");

  useEffect(() => {
    const handleScroll = () => {
      // Trigger sticky after hero (approx 85vh)
      const heroHeight = window.innerHeight * 0.7;
      setIsSticky(window.scrollY > heroHeight);

      // Active section logic
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isSticky && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="fixed top-0 left-0 right-0 z-[100] bg-white/70 backdrop-blur-xl border-b border-teal-dark/5 shadow-sm"
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Brand Mini Logo (Hidden on mobile) */}
              <div className="hidden lg:block">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-teal-darkest">
                  Nossa Terra <span className="text-teal-accent">Corporate</span>
                </span>
              </div>

              {/* Navigation Items */}
              <div className="flex items-center gap-6 md:gap-10">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all relative py-2",
                      activeSection === item.id 
                        ? "text-teal-accent" 
                        : "text-teal-dark/40 hover:text-teal-dark"
                    )}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-accent"
                      />
                    )}
                  </button>
                ))}
              </div>
              
              <div className="hidden sm:flex items-center gap-6">
                <button 
                  onClick={() => scrollToSection("contato")}
                  className="bg-teal-darkest text-white text-[10px] font-black uppercase tracking-widest px-8 py-3 rounded-full hover:bg-teal-accent transition-colors shadow-lg shadow-teal-darkest/10"
                >
                  Dossiê
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
