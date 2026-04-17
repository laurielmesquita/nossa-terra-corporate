"use client";
import { motion } from "framer-motion";
import { FileWarning, BarChart3, Coins, ShieldAlert } from "lucide-react";

const problems = [
  {
    icon: <FileWarning className="w-8 h-8" />,
    title: "Documentação Irregular",
    desc: "Escritura, CAR, CCIR e ITR com pendências que só aparecem no fechamento — e custam fortunas para resolver.",
    glow: "shadow-orange-500/20"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Preço Sem Embasa Técnico",
    desc: "Valores pedidos sem análise real do solo ou do potencial produtivo da terra — puro achismo de mercado.",
    glow: "shadow-teal-500/20"
  },
  {
    icon: <Coins className="w-8 h-8" />,
    title: "Bloqueio de Crédito Rural",
    desc: "O produtor compra a terra, mas não tem capital para operar. Sem crédito rural adequado, a fazenda fica parada.",
    glow: "shadow-amber-500/20"
  },
];

export default function ProblemSection() {
  return (
    <section className="relative bg-[#0F3D35] py-32 overflow-hidden">
      {/* Technical Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      {/* Decorative Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-nt-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-8">
        {/* Header - Cinematic Redesign */}
        <div className="max-w-5xl mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-nt-orange-light/10 backdrop-blur-xl border border-nt-orange/20 rounded-full px-4 py-1.5 mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-nt-orange shadow-lg shadow-orange-950/20"
          >
            <ShieldAlert className="w-3 h-3" /> O Cenário Atual
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-extrabold text-white leading-[1.1] mb-10 tracking-tight"
          >
            Comprar terra no campo <br />
            deveria ser simples. <br />
            <span className="text-teal-400 italic">Por que é tão arriscado?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/50 leading-relaxed max-w-3xl font-medium"
          >
            A maioria das transações rurais falha ou gera prejuízos por problemas 
            <span className="text-white"> invisíveis aos olhos de amadores</span>.
          </motion.p>
        </div>

        {/* High-Fidelity Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 translate-y-12">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i + 0.3 }}
              whileHover={{ y: -16, transition: { duration: 0.4, ease: "circOut" } }}
              className="group relative"
            >
              {/* Card Background & Border */}
              <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-2xl rounded-[3rem] border border-white/10 group-hover:bg-white/[0.07] group-hover:border-teal-500/30 transition-all duration-500" />
              
              {/* Card Content */}
              <div className="relative p-12 h-full flex flex-col items-start z-10">
                {/* Icon Container with Glow */}
                <div className={`w-20 h-20 rounded-[2rem] bg-teal-500/10 flex items-center justify-center mb-10 text-teal-400 group-hover:bg-nt-orange group-hover:text-white transition-all duration-700 shadow-2xl ${p.glow} group-hover:rotate-6 group-hover:scale-110`}>
                  {p.icon}
                </div>
                
                <h3 className="text-2xl font-serif font-black text-white mb-6 leading-tight group-hover:text-teal-400 transition-colors">
                  {p.title}
                </h3>
                
                <p className="text-lg text-white/40 leading-relaxed font-medium group-hover:text-white/70 transition-colors">
                  {p.desc}
                </p>

                {/* Technical "Badge" Decoration */}
                <div className="mt-12 pt-8 border-t border-white/5 w-full flex items-center justify-between opacity-30 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400">Risco Identificado</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map(dot => <div key={dot} className="w-1 h-1 rounded-full bg-teal-500" />)}
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect Layer */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-orange-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
