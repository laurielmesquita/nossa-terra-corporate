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
    name: "Fazenda Lagoa do Mato",
    shortName: "FLM",
    type: "individual",
    featured: true,
    contractDate: "2026-04",
    testimonial: {
      quote: "A estrutura organizacional e a consultoria documental da Nossa Terra nos deram a segurança necessária para consolidar 5.000 hectares com autonomia total.",
      author: "Proprietário",
      role: "Fazenda Lagoa do Mato - MA",
      date: "2026-04"
    }
  },
  {
    id: "cliente-exemplo",
    name: "Grupo Agropecuário Exemplo",
    shortName: "Agro-Exemplo",
    type: "enterprise",
    logoUrl: "/assets/logos/clients/agro-exemplo.png",
    featured: true,
    contractDate: "2026-04",
    testimonial: {
      quote: "A consultoria técnica e jurídica da Nossa Terra foi fundamental para a expansão de nossas operações no Piauí. Segurança total em cada hectare.",
      author: "Dr. Roberto Silva",
      role: "CEO - Agro Exemplo",
      date: "2026-04"
    }
  }
];
