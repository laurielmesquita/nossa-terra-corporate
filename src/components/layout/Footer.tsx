import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F3D35] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle organic background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5 space-y-10">
            <Link href="/" className="flex items-center no-underline group outline-none">
              <Image 
                src="/assets/logos/nossaterra-logo-vertical-white.png" 
                alt="Nossa Terra Imobiliária" 
                width={200}
                height={112}
                className="h-28 w-auto object-contain transition-all group-hover:scale-105"
              />
            </Link>
            <p className="text-white/50 text-lg font-medium leading-relaxed max-w-md">
              Consultoria estratégica especializada em ativos rurais no Norte do Piauí e Sul do Maranhão.
            </p>
            <div className="flex gap-6">
              {["Instagram", "LinkedIn", "YouTube"].map((social) => (
                <a key={social} href="#" className="text-white/30 hover:text-teal-400 transition-colors font-bold text-xs uppercase tracking-widest">{social}</a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h4 className="text-teal-400 font-bold uppercase tracking-[0.3em] text-[10px]">Links Rápidos</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Início", href: "/" },
                { label: "Sobre", href: "/sobre" },
                { label: "Imóveis", href: "/imoveis" },
                { label: "Contato", href: "/contato" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="text-white/70 hover:text-white transition-colors text-lg font-medium no-underline">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4 space-y-8">
            <h4 className="text-teal-400 font-bold uppercase tracking-[0.3em] text-[10px]">Receba Oportunidades</h4>
            <p className="text-white/50 font-medium">Inscreva-se para obter acesso prioritário a novos imóveis rurais.</p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 outline-none focus:ring-1 focus:ring-teal-600 text-white font-medium"
              />
              <button className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-4 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-teal-600/20">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-white/30 text-xs font-bold uppercase tracking-widest">
              © {currentYear} Nossa Terra Imobiliária · Todos os direitos reservados.
            </div>
            <div className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
              CNPJ: 42.160.646/0001-86 · Rua Professor Diniz, 1199, Lourival Parente - Teresina/PI
            </div>
          </div>
          <div className="flex gap-12 text-white/20 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
