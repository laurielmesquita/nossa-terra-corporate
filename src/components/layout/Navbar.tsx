"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHeroPage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isOpaque = !isHeroPage || scrolled || isOpen;

  // Manual class instead of component
  const mobileBtnClass = "w-full bg-teal-600 hover:bg-teal-700 text-white rounded-2xl h-14 font-bold text-base shadow-xl shadow-teal-600/20 flex items-center justify-center transition-all active:scale-95 no-underline";
  const desktopBtnClass = "bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold h-10 px-5 flex items-center justify-center transition-all text-sm no-underline";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isOpaque
            ? "bg-white/97 backdrop-blur-xl border-b border-gray-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center no-underline group outline-none">
            <img 
              src={isOpaque ? "/assets/logos/logo-horizontal-color.png" : "/assets/logos/logo-horizontal-white.png"} 
              alt="Nossa Terra Imobiliária" 
              className="h-10 w-auto object-contain transition-all duration-300"
            />
          </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all pb-0.5 border-b-2 no-underline ${
                    isOpaque
                      ? pathname === link.href
                        ? "text-[#0F3D35] border-teal-600"
                        : "text-gray-500 border-transparent hover:text-[#0F3D35] hover:border-teal-600/30"
                      : pathname === link.href
                        ? "text-white border-teal-600 shadow-[0_4px_12px_rgba(23,169,139,0.3)]"
                        : "text-white/80 border-transparent hover:text-white hover:border-white/30"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://api.whatsapp.com/send?phone=5586999279390&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20imóveis%20rurais."
                target="_blank"
                rel="noopener noreferrer"
                className={desktopBtnClass}
              >
                WhatsApp →
              </a>
            </nav>

            {/* Mobile Toggle Button (Native) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all active:scale-90 outline-none ${
                isOpaque 
                  ? "text-[#0F3D35] bg-gray-100" 
                  : "text-white bg-white/10 border border-white/20 backdrop-blur-md"
              }`}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Custom Mobile Menu (Native React/Tailwind - ZERO shadcn/radix) */}
      <div
        className={`fixed inset-0 z-[90] bg-white transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-4 p-8 pt-32 h-full">
          <div className="mb-12 border-b border-gray-100 pb-8">
            <img 
              src="/assets/logos/logo-horizontal-color.png" 
              alt="Nossa Terra Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-2xl font-serif font-extrabold py-4 px-6 rounded-3xl transition-all no-underline ${
                pathname === link.href
                  ? "bg-teal-50 text-teal-600"
                  : "text-gray-500 hover:bg-gray-50 hover:text-[#0F3D35]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-12 pt-12 border-t border-gray-100">
            <a
              href="https://api.whatsapp.com/send?phone=5586999279390&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20imóveis%20rurais."
              target="_blank"
              rel="noopener noreferrer"
              className={mobileBtnClass}
            >
              Falar com a equipe
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
