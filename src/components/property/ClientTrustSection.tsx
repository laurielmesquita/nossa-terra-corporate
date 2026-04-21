"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Quote, Building2 } from "lucide-react";
import { Client } from "@/data/clients";

interface ClientTrustSectionProps {
  client: Client;
}

export function ClientTrustSection({ client }: ClientTrustSectionProps) {
  return (
    <section id="juridico" className="py-32 bg-teal-light/20 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-accent/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side: Testimonial & Client Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-teal-dark/5 mb-10 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-teal-accent" />
              <span className="text-[10px] font-black uppercase tracking-widest text-teal-darkest">Relação de Confiança</span>
            </div>

            {client.testimonial ? (
              <div className="relative">
                <Quote className="absolute -top-10 -left-10 w-20 h-20 text-teal-accent/10" />
                <blockquote className="text-3xl md:text-5xl font-serif italic text-teal-darkest leading-tight mb-12">
                  "{client.testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-6">
                  {client.logoUrl ? (
                    <div className="w-16 h-16 bg-white rounded-2xl p-3 shadow-xl border border-teal-dark/5 flex items-center justify-center">
                      <img src={client.logoUrl} alt={client.name} className="max-w-full max-h-full grayscale" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-teal-darkest rounded-2xl flex items-center justify-center text-teal-accent shadow-xl">
                      <Building2 className="w-8 h-8" />
                    </div>
                  )}
                  <div>
                    <p className="text-xl font-serif font-black text-teal-darkest">{client.testimonial.author}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-teal-mid/60">{client.testimonial.role}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-4xl md:text-6xl font-serif font-black text-teal-darkest mb-8 leading-tight">
                  Parceria Estratégica <br/>
                  <span className="text-teal-accent italic">Nossa Terra</span>
                </h3>
                <p className="text-xl text-teal-darkest/60 leading-relaxed max-w-xl">
                  Trabalhamos diretamente com proprietários e grupos agropecuários para garantir a máxima transparência e segurança jurídica em cada transação.
                </p>
              </div>
            )}
          </motion.div>

          {/* Right Side: Trust Seals Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { title: "Matrícula Auditada", desc: "Histórico dominial verificado sem ônus ou gravames ocultos." },
              { title: "Conformidade Ambiental", desc: "CAR e reserva legal em total acordo com o código florestal." },
              { title: "Georreferenciamento", desc: "Polígonos certificados pelo INCRA com precisão técnica." },
              { title: "Exclusividade Corporate", desc: "Ativo disponível apenas através da rede Nossa Terra." }
            ].map((seal, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-teal-dark/5 shadow-xl shadow-teal-dark/5 hover:border-teal-accent/30 transition-all group">
                <div className="w-3 h-3 rounded-full bg-teal-accent mb-6 group-hover:scale-125 transition-transform" />
                <h4 className="text-lg font-serif font-black text-teal-darkest mb-4">{seal.title}</h4>
                <p className="text-sm text-teal-mid/70 leading-relaxed">{seal.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
