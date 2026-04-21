export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  area: string;
  type: string;
  description: string;
  mainImage: string;
  images: string[];
  videoUrl?: string;
  specs: { label: string; value: string }[];
  featured: boolean;
  opportunity: boolean;
  clientId?: string; // Link to clients.ts
}

export const properties: Property[] = [
  {
    id: "fazenda-lagoa-do-mato-5000",
    title: "Fazenda Lagoa do Mato — 5.000 ha",
    location: "Lagoa do Mato / MA",
    price: "Sob Consulta",
    area: "5.000 ha",
    type: "Integração Lavoura-Pecuária",
    description: "Ativo de alto desempenho com infraestrutura completa para pecuária intensiva e lavoura. Destaque para autonomia hídrica total com energia solar e sede de luxo.",
    mainImage: "/assets/customers/2404-flm/fotos/01-sede-principal-panoramica.jpg",
    images: [
      "/assets/customers/2404-flm/fotos/02-sede-detalhe-varanda.jpeg",
      "/assets/customers/2404-flm/fotos/03-area-produtiva-lavoura.jpeg"
    ],
    videoUrl: "/assets/customers/2404-flm/videos/02-panoramica-drone-01.mp4",
    specs: [
      { label: "Matriz Hídrica", value: "07 Poços (4 Solares)" },
      { label: "Pluviometria", value: "1.200mm - 1.400mm" },
      { label: "Benfeitorias", value: "Sede 7 Suítes + Piscina" },
      { label: "Operacional", value: "Alojamento 30 Pessoas" }
    ],
    featured: true,
    opportunity: true,
    clientId: "lagoa-do-mato"
  },
  {
    id: "fazenda-vale-gurgueia",
    title: "Fazenda Vale do Gurgueia",
    location: "Bom Jesus / PI",
    price: "Oportunidade Única",
    area: "1.200 ha",
    type: "Lavoura de Grãos",
    description: "Excelente oportunidade de investimento em uma das regiões mais produtivas do Piauí. Solo de alta fertilidade, topografia plana e logística privilegiada para escoamento de safra.",
    mainImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399"
    ],
    videoUrl: "https://joy1.videvo.net/videvo_files/video/free/2015-08/large_watermarked/Corn_Fields_Slow_3_videvo_preview.mp4",
    specs: [
      { label: "Teor de Argila", value: "25% - 35%" },
      { label: "Altitude", value: "450m" },
      { label: "Pluviometria", value: "1.200mm - 1.400mm" },
      { label: "Documentação", value: "GEO / CAR / CCIR 100% Regular" }
    ],
    featured: true,
    opportunity: true,
    clientId: "cliente-exemplo"
  },
  {
    id: "reserva-cerrado-sul",
    title: "Reserva Cerrado Sul",
    location: "Balsas / MA",
    price: "Consulte-nos",
    area: "850 ha",
    type: "Soja e Milho",
    description: "Propriedade pronta para plantio com infraestrutura completa de manejo e armazenamento. Georreferenciada e com análise de solo atualizada.",
    mainImage: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2000&auto=format&fit=crop",
    images: [],
    specs: [
      { label: "Logística", value: "20km do Asfalto" },
      { label: "Aptidão", value: "Agricultura" }
    ],
    featured: true,
    opportunity: false
  },
  {
    id: "estancia-rio-piauí",
    title: "Estância Rio Piauí",
    location: "Floriano / PI",
    price: "Consulte-nos",
    area: "2.400 ha",
    type: "Pecuária Intensiva",
    description: "Grande potencial hídrico com margem de rio e estrutura completa para pecuária de corte. Pastagens formadas e cercas novas.",
    mainImage: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2000&auto=format&fit=crop",
    images: [],
    specs: [
      { label: "Hidrografia", value: "Rio Perene" },
      { label: "Manejo", value: "Curral de Elite" }
    ],
    featured: true,
    opportunity: false
  }
];
