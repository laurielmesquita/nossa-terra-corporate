import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

export default function AlineTeaser() {
  const primaryBtnClass = "bg-[#0F3D35] hover:bg-teal-900 text-white rounded-2xl h-16 px-10 text-lg font-bold shadow-2xl shadow-[#0F3D35]/20 border-none transition-all duration-700 hover:-translate-y-1 flex items-center justify-center no-underline";
  const outlineBtnClass = "border border-gray-200 hover:bg-gray-50 text-[#0F3D35] rounded-2xl h-16 px-10 text-lg font-bold transition-all duration-700 hover:-translate-y-1 flex items-center justify-center no-underline";

  return (
    <section className="bg-white py-32 overflow-hidden relative" id="aline">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 translate-x-1/2 -z-10" />
      
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Image Area - High End Aesthetics */}
          <div className="lg:col-span-5 relative group opacity-0 animate-fade-in-up stagger-1">
            <div className="absolute -inset-4 bg-teal-600/10 rounded-[3rem] blur-2xl group-hover:bg-teal-600/20 transition-all duration-700" />
            <div className="border-none bg-white rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="p-0">
                <div className="relative h-[600px]">
                  <Image
                    src="/images/aline-perita.png"
                    alt="Aline Nascimento — Nossa Terra"
                    fill
                    className="w-full h-full object-cover object-top grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D35]/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Authoritative Badges */}
                    <div className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-5 py-2 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl">
                      🛡️ Inteligência Documental
                    </div>
                  
                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50">
                      <div className="text-[#0F3D35] font-serif font-extrabold text-2xl mb-1">Aline Nascimento</div>
                      <div className="text-teal-600 text-xs font-bold uppercase tracking-widest">Fundadora · Corretora · Perita Judiciária</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Area - Refined Copy & Typography */}
          <div className="lg:col-span-7 space-y-10">
            <div className="opacity-0 animate-fade-in-up stagger-2">
              <Badge variant="outline" className="text-teal-600 border-teal-600/30 px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8 bg-teal-600/5">
                Autoridade em Campo
              </Badge>
              <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-[#0F3D35] leading-[1.15] mb-8">
                Deixe quem entende de <span className="text-teal-600 italic">terra</span> e <span className="text-teal-800 italic">legislação</span> cuidar do seu patrimônio.
              </h2>
              <div className="w-24 h-1.5 bg-teal-600 rounded-full mb-10" />
            </div>

            <div className="space-y-8 opacity-0 animate-fade-in-up stagger-3">
              <p className="text-xl text-gray-500 leading-relaxed font-medium max-w-2xl">
                Aline Nascimento traz o rigor técnico que transações complexas de campo exigem. Com profundo domínio técnico e pericial, ela garante que cada hectare negociado tenha segurança total.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-[2rem] border-l-8 border-teal-600 relative overflow-hidden group hover:bg-gray-100 transition-colors duration-500">
                <div className="absolute -right-8 -top-8 text-9xl text-teal-600/5 font-serif select-none">&quot;</div>
                <p className="text-lg text-[#0F3D35] leading-relaxed font-serif italic relative z-10">
                  &quot;Minha missão na Nossa Terra é transformar a aquisição rural em um processo transparente, técnico e juridicamente blindado. O cliente investe no que produz, não em problemas.&quot;
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6 opacity-0 animate-fade-in-up stagger-4">
              <Link href="/sobre" className={primaryBtnClass}>
                Conhecer Trajetória →
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=5586999279390&text=Olá!%20Gostaria%20de%20falar%20com%20a%20Aline."
                target="_blank"
                rel="noopener noreferrer"
                className={outlineBtnClass}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
