export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  area: string;
  type: string;
  description: string;
  tagline?: string;
  mainImage: string;
  images: string[];
  videoUrl?: string;
  coordinates?: string;
  mapImage?: string;
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
    description: "Situada no estratégico eixo de expansão agrícola de Lagoa do Mato (MA), a Fazenda Lagoa do Mato é um ativo de 5.000 hectares projetado para operações de alta escala. Com 1.000 hectares já consolidados em regime de integração lavoura-pecuária, a propriedade destaca-se por sua aptidão agrícola superior e uma matriz hídrica inigualável, composta por 07 poços artesianos com vazão de 30k L/h, sendo 04 deles operados via energia solar. Inserida em uma janela de pluviometria estável entre 1.200 e 1.400 mm/ano, o ativo oferece infraestrutura operacional completa — incluindo galpões de maquinário e alojamento técnico para 30 colaboradores — equilibrada por uma sede de alto luxo com 07 suítes, escritório administrativo e lazer privativo, garantindo viabilidade financeira e excelência residencial para o investidor institucional.",
    tagline: "Ativo de alta escala com 5.000 hectares e infraestrutura completa para integração lavoura-pecuária no Maranhão.",
    mainImage: "/assets/customers/2603-flm/fotos/01-sede-principal-panoramica.jpg",
    images: [
      "/assets/customers/2603-flm/fotos/02-sede-detalhe-varanda.jpeg",
      "/assets/customers/2603-flm/fotos/03-area-produtiva-lavoura.jpeg"
    ],
    videoUrl: "/assets/customers/2603-flm/videos/02-panoramica-drone-01.mp4",
    coordinates: "LAT: -10.3421° / LONG: -45.9238°",
    mapImage: "/assets/customers/2603-flm/fotos/03-area-produtiva-lavoura.jpeg",
    specs: [
      { label: "Matriz Hídrica", value: "07 Poços (4 Solares)" },
      { label: "Teor de Argila", value: "28% - 35% (Média)" },
      { label: "Altitude", value: "320m - 380m" },
      { label: "Topografia", value: "Plana / Suave Ondulada" },
      { label: "Matéria Orgânica", value: "2.5% — 3.2%" },
      { label: "Pluviometria", value: "1.200mm - 1.400mm" },
      { label: "Benfeitorias", value: "Sede 7 Suítes + Piscina" },
      { label: "Operacional", value: "Alojamento 30 Pessoas" }
    ],
    featured: true,
    opportunity: true,
    clientId: "lagoa-do-mato"
  },
  {
    id: "fazenda-novo-santo-antonio-333",
    title: "Fazenda Novo Santo Antônio — 333 ha",
    location: "Novo Santo Antônio / PI",
    price: "R$ 500.000,00",
    area: "333 ha",
    type: "Pecuária e Agricultura",
    description: "Excelente oportunidade de investimento no interior do Piauí, localizada a aproximadamente 100 km de Teresina. A propriedade conta com 333 hectares de área total, com ampla área de pasto formado e 50% de aproveitamento para agricultura. Possui recurso hídrico privilegiado com nascente de água, além de infraestrutura com curral estruturado e casa sede. Região tranquila com fácil acesso e grande potencial de valorização.",
    tagline: "Oportunidade estratégica com 333 ha e excelente recurso hídrico a 100 km de Teresina.",
    mainImage: "/assets/customers/2603-fnsa/fotos/01-sede-panoramica-palmeiras.jpg",
    images: [
      "/assets/customers/2603-fnsa/fotos/02-varanda-entrada-principal.jpg",
      "/assets/customers/2603-fnsa/fotos/03-reservatorio-recurso-hidrico.jpg",
      "/assets/customers/2603-fnsa/fotos/04-infraestrutura-cerca-divisoria.jpg"
    ],
    videoUrl: "/assets/customers/2603-fnsa/videos/01-apresentacao-geral-fnsa.mp4",
    coordinates: "LAT: -5.2861° / LONG: -42.2345°",
    mapImage: "/assets/customers/2603-fnsa/fotos/04-infraestrutura-cerca-divisoria.jpg",
    specs: [
      { label: "Aproveitamento", value: "50% Agricultura" },
      { label: "Recursos Hídricos", value: "Nascente Própria" },
      { label: "Localização", value: "100km de Teresina" },
      { label: "Infraestrutura", value: "Curral + Casa" }
    ],
    featured: true,
    opportunity: true,
    clientId: "novo-santo-antonio"
  },
  {
    id: "fazenda-cocal-653",
    title: "Fazenda Cocal — 653 ha",
    location: "Cocal / PI",
    price: "Sob Consulta",
    area: "653 ha",
    type: "Pecuária e Irrigação",
    description: "Propriedade produtiva de 653 hectares em Cocal (PI), totalmente cercada e com divisórias. Infraestrutura operacional de ponta com centro de manejo completo (embarcadouro, brete, balança e curral), energia trifásica e sistema de irrigação por aspersão em 10 hectares. Inclui casa sede de alto padrão com piscinas e churrasqueira, galpão conjugado e trator Massey Ferguson 292. Ativo de porteira fechada com 200 cabeças de gado e 100 búfalos.",
    tagline: "Ativo de porteira fechada com 653 ha, infraestrutura de irrigação e gado de elite.",
    mainImage: "/assets/customers/2603-fc/fotos/01-placeholder-dossie.png",
    coordinates: "LAT: -3.4731° / LONG: -41.5542°",
    mapImage: "/assets/customers/2603-fc/fotos/01-placeholder-dossie.png",
    images: [],
    specs: [
      { label: "Irrigação", value: "10 ha Aspersão" },
      { label: "Maquinário", value: "Trator MF 292" },
      { label: "Rebanho", value: "200 Gado / 100 Búfalos" },
      { label: "Energia", value: "Trifásica" }
    ],
    featured: true,
    opportunity: false,
    clientId: "fazenda-cocal"
  }
];
