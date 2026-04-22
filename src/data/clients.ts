export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
  date: string;
}

export interface Client {
  id: string;
  name: string;
  shortName: string; // Used for folder names and quick refs
  type: 'individual' | 'enterprise';
  logoUrl?: string; // For corporate clients
  mainPropertyId?: string; // Links to properties.ts
  testimonial?: Testimonial;
  featured: boolean;
  contractDate: string; // ISO format YYYY-MM
}

export const clients: Client[] = [
  {
    id: "lagoa-do-mato",
    name: "Fazenda em Lagoa do Mato",
    shortName: "FLM",
    type: "individual",
    featured: true,
    contractDate: "2026-03",
    testimonial: {
      quote: "A estrutura organizacional e a consultoria documental da Nossa Terra nos deram a segurança necessária para consolidar 5.000 hectares com autonomia total.",
      author: "Proprietário",
      role: "Fazenda em Lagoa do Mato - MA",
      date: "2026-03"
    }
  },
  {
    id: "novo-santo-antonio",
    name: "Fazenda em Novo Santo Antônio",
    shortName: "FNSA",
    type: "individual",
    featured: true,
    contractDate: "2026-03",
    testimonial: {
      quote: "Excelente oportunidade no interior do Piauí. Região tranquila, com fácil acesso e ótima localização para pecuária e agricultura.",
      author: "Proprietário",
      role: "Fazenda em Novo Santo Antônio - PI",
      date: "2026-03"
    }
  },
  {
    id: "fazenda-cocal",
    name: "Fazenda em Cocal",
    shortName: "FC",
    type: "individual",
    featured: true,
    contractDate: "2026-03"
  }
];
