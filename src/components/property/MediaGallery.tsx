"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

interface MediaItem {
  type: "image" | "video";
  url: string;
  alt?: string;
  thumbnail?: string;
}

interface MediaGalleryProps {
  items: MediaItem[];
}

export function MediaGallery({ items }: MediaGalleryProps) {
  // We'll use the first 4-5 items for the bento grid
  const displayItems = items.slice(0, 5);

  return (
    <section id="galeria" className="py-24 bg-teal-darkest text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-teal-accent mb-6">
            Banco de Ativos
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-black leading-tight">
            Evidências de <br/>Infraestrutura e Campo
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[1200px] md:h-[800px]">
          {displayItems.map((item, index) => {
            const isLarge = index === 0;
            const isMedium = index === 1 || index === 4;

            return (
              <motion.div
                key={item.url}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-[2.5rem] bg-teal-dark ${
                  isLarge ? "md:col-span-2 md:row-span-2" : 
                  isMedium ? "md:col-span-2 md:row-span-1" : 
                  "md:col-span-1 md:row-span-1"
                }`}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.url}
                    alt={item.alt || "Ativo Rural"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      src={item.url}
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="p-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 transform scale-75 group-hover:scale-100 transition-all">
                        <Play className="w-8 h-8 fill-white text-white" />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-darkest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <p className="text-xs font-bold uppercase tracking-widest text-teal-accent">Ampliar Evidência</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
