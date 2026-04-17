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
}

export const properties: Property[] = [
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
    opportunity: true
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
