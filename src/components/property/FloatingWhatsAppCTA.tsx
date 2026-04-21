"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

interface FloatingWhatsAppCTAProps {
  phoneNumber: string;
  message: string;
}

export function FloatingWhatsAppCTA({ phoneNumber, message }: FloatingWhatsAppCTAProps) {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 1 
        }}
        className="flex items-center gap-3 bg-teal-600 hover:bg-teal-500 text-white px-6 py-4 rounded-full shadow-2xl shadow-teal-600/40 no-underline group"
      >
        <div className="relative">
          <Phone className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">Fale com Especialista</span>
          <span className="text-sm font-black">Consultoria via WhatsApp</span>
        </div>
      </motion.a>
    </div>
  );
}
