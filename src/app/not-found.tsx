import Link from "next/link";
import Image from "next/image";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#082821] text-[#E8F5F3] overflow-hidden font-sans p-6 text-center">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#17A98B]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8B6F47]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '12s' }} />
        
        {/* Topographic pattern overlay (simulated with CSS grid) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto mt-[-5vh]">
        {/* Animated Compass Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-[#8B6F47]/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '4s' }} />
          <Compass 
            className="relative w-28 h-28 text-[#8B6F47] animate-spin drop-shadow-2xl" 
            style={{ animationDuration: '8s' }} 
            strokeWidth={1} 
          />
        </div>

        {/* 404 Badge */}
        <div className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full border border-[#8B6F47]/30 bg-[#8B6F47]/10 backdrop-blur-md text-[#8B6F47] text-xs font-bold tracking-widest uppercase shadow-lg shadow-[#8B6F47]/5">
          Erro 404
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-md">
          Erro de <span className="italic text-[#17A98B]">Georreferenciamento</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#E8F5F3]/70 font-light leading-relaxed mb-10 max-w-lg">
          As coordenadas que você digitou apontaram para um lote vazio no meio do nada. Essa página não consta em nossos registros cartoriais (ou já foi arrematada).
        </p>

        <Link 
          href="/"
          className="flex items-center justify-center gap-3 bg-[#17A98B] hover:bg-teal-500 text-white px-8 py-4 rounded-full shadow-2xl shadow-[#17A98B]/20 transition-all duration-300 hover:-translate-y-1 font-bold tracking-wide"
        >
          Voltar para a Sede
        </Link>
      </div>
      
      {/* Brand logo at bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40 hover:opacity-100 transition-opacity duration-300">
        <Image 
          src="/assets/logos/nossaterra-logo-horizontal-white.png" 
          alt="Nossa Terra" 
          width={140} 
          height={40} 
          className="object-contain"
        />
      </div>
    </div>
  );
}
