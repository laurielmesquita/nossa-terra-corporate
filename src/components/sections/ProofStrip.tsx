const proofItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: "Norte do Piauí e Sul do Maranhão",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    text: "Direito Agrário e Imobiliário",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "Documentação 100% verificada",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    text: "Experiência no campo desde 2021",
  },
];

export default function ProofStrip() {
  return (
    <section className="bg-white border-b border-muted">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {proofItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-[13px] text-muted-foreground group"
            >
              <span className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
              <span className="font-bold uppercase tracking-widest leading-none">{item.text}</span>
              {i < proofItems.length - 1 && (
                <span className="hidden lg:block w-1.5 h-1.5 rounded-full bg-muted-foreground/20 ml-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
