export default function FinalCTA() {
  const primaryBtnClass = "bg-teal-400 hover:bg-white hover:text-teal-900 text-teal-950 rounded-2xl h-20 px-12 text-xl font-extrabold shadow-2xl shadow-teal-400/20 transition-all duration-700 hover:scale-105 flex items-center justify-center gap-4 no-underline";
  const ghostBtnClass = "text-white/70 hover:text-white hover:bg-white/5 rounded-2xl h-20 px-12 text-xl font-bold transition-all underline decoration-white/20 underline-offset-8 flex items-center justify-center no-underline duration-700 hover:scale-105";

  return (
    <section className="bg-white pt-0 pb-32 overflow-hidden relative">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div className="bg-teal-950 rounded-[4rem] p-16 md:p-32 text-center text-white overflow-hidden relative border border-white/5 shadow-[0_50px_100px_-20px_rgba(15,61,53,0.4)]">
          {/* Advanced Decorative Blurs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 space-y-12">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-8 py-2.5 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 opacity-0 animate-fade-in-up stagger-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
              </span>
              Conversa inicial sem compromisso
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif font-extrabold leading-[1] max-w-screen-2xl mx-auto tracking-tight opacity-0 animate-fade-in-up stagger-2">
              A sua terra, <br />
              <span className="text-teal-400 italic">blindada.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-4xl mx-auto font-medium opacity-0 animate-fade-in-up stagger-3">
              Una-se a quem domina a técnica e a lei no campo. Proteja seu investimento com quem entende do Norte do Piauí e Sul do Maranhão.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 opacity-0 animate-fade-in-up stagger-4">
              <a
                href="https://api.whatsapp.com/send?phone=5586999279390&text=Olá!%20Gostaria%20de%20conversar%20sobre%20imóveis%20rurais."
                target="_blank"
                rel="noopener noreferrer"
                className={primaryBtnClass}
              >
                Falar no WhatsApp
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/contato" className={ghostBtnClass}>
                Canais Oficiais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
