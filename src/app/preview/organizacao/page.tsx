import { 
  Folder, 
  CheckCircle2, 
  Eye, 
  XCircle, 
  AlertTriangle, 
  Check, 
  FileText,
  ShieldCheck,
  Scale,
  TrendingUp,
  MapPin,
  Sprout,
  Home,
  ArrowRight,
  BookOpen
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function OrganizacaoPage() {
  const indexItems = [
    { id: "visao-geral", num: "01", label: "Visão Geral", desc: "Estrutura dos 7 módulos" },
    { id: "modulos-principais", num: "02", label: "Módulos Negócio", desc: "Clientes e Imóveis" },
    { id: "modulos-tecnicos", num: "03", label: "Módulos Apoio", desc: "Técnico e Marketing" },
    { id: "fluxos", num: "04", label: "Fluxos de Trabalho", desc: "Processos passo a passo" },
    { id: "nomenclatura", num: "05", label: "Boas Práticas", desc: "Nomenclatura e Regras" },
    { id: "acesso", num: "06", label: "Níveis de Acesso", desc: "Segurança e Permissões" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 overflow-x-hidden">
      {/* ═══════════════════════════════ CAPA ═══════════════════════════════ */}
      <section id="intro" className="bg-primary min-h-screen flex flex-col justify-center p-6 md:p-24 relative overflow-hidden pt-32">
        {/* Subtle Background Glow */}
        <div className="absolute bottom-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full bg-accent opacity-10 blur-[120px]" />
        
        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
          
          {/* Left: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-10">
              <div className="text-white font-serif text-3xl font-bold tracking-tight">Nossa Terra</div>
              <div className="w-1.5 h-1.5 rounded-full bg-accent translate-y-[4px]" />
              <div className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase translate-y-[4px]">Google Drive</div>
            </div>

            <div className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-accent" /> Administração & Gestão
            </div>
            
            <h1 className="text-white font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-10 tracking-tighter max-w-4xl">
              Organização <span className="text-accent italic">Inteligente</span> do Repositório
            </h1>
            
            <p className="text-white/60 text-xl font-light max-w-lg leading-relaxed mb-12">
              Estrutura corporativa completa, fluxos de trabalho e governança de dados para a excelência operacional.
            </p>

            <div className="flex gap-4">
              <Badge variant="outline" className="text-accent border-accent/30 rounded-full px-4 py-1.5 text-[10px] uppercase font-bold tracking-widest bg-accent/5">
                <Check className="w-3 h-3 mr-2" /> CRECI ATIVA
              </Badge>
              <Badge variant="outline" className="text-accent border-accent/30 rounded-full px-4 py-1.5 text-[10px] uppercase font-bold tracking-widest bg-accent/5">
                <Check className="w-3 h-3 mr-2" /> PERITA JUDICIÁRIA
              </Badge>
            </div>
          </div>

          {/* Right: Modern Index (Book Style) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-10 bg-accent/5 rounded-[3rem] blur-3xl -z-10" />
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-6">
                <BookOpen className="w-5 h-5 text-accent" />
                <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">Índice Estrutural</span>
              </div>

              <div className="space-y-6">
                {indexItems.map((item) => (
                  <Link 
                    key={item.id} 
                    href={`#${item.id}`}
                    className="group flex items-center justify-between py-2 border-b border-white/5 hover:border-accent/40 transition-all no-underline"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-accent font-black text-xs group-hover:scale-110 transition-transform">{item.num}</span>
                      <div>
                        <div className="text-white font-bold text-sm tracking-wide group-hover:text-accent transition-colors">{item.label}</div>
                        <div className="text-white/30 text-[10px] uppercase tracking-widest font-medium mt-1">{item.desc}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <div className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-black">Nossa Terra &middot; 2026</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════ VISÃO GERAL (IMAGEM 01) ═══════════════════════════════ */}
      <section id="visao-geral" className="max-w-screen-xl mx-auto px-6 py-32">
        <div className="flex items-center gap-6 mb-16 border-b-2 border-gray-100 pb-10">
          <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-xl shadow-primary/20">01</div>
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-primary">Visão Geral da Estrutura</h2>
            <p className="text-gray-500 text-sm mt-2 font-medium">7 módulos organizacionais projetados para rastreabilidade total</p>
          </div>
        </div>

        <div className="bg-primary rounded-[3rem] p-10 md:p-20 mb-20 shadow-3xl shadow-primary/30 relative overflow-hidden group">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />
          
          <h3 className="text-white/30 text-[10px] font-bold uppercase tracking-[0.4em] mb-12 flex items-center gap-4">
            <Folder className="w-4 h-4" /> Nossa Terra Imobiliária (Drive Compartilhado)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            {[
              { label: "Clientes & Processos", id: "modulos-principais" },
              { label: "Imóveis & Catálogo", id: "modulos-principais" },
              { label: "Inteligência Documental", id: "modulos-tecnicos" },
              { label: "Marketing & Comunicação", id: "modulos-tecnicos" },
              { label: "Financeiro & Contratos", id: "modulos-tecnicos" },
              { label: "Jurídico & Compliance", id: "modulos-tecnicos" },
              { label: "Operações Internas", id: "modulos-tecnicos" }
            ].map((module, i) => (
              <Link 
                key={module.label} 
                href={`#${module.id}`}
                className="flex items-center gap-6 py-6 border-b border-white/10 last:border-0 group/item no-underline"
              >
                <span className="text-accent font-black text-xs min-w-[24px] opacity-40 group-hover/item:opacity-100 transition-opacity">0{i + 1}</span>
                <div className="bg-white/5 p-4 rounded-2xl group-hover/item:bg-accent/20 transition-all group-hover/item:-translate-y-1 border border-white/5 group-hover/item:border-accent/30">
                  <Folder className="w-6 h-6 text-white/40 group-hover/item:text-accent transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl tracking-tight group-hover/item:text-accent transition-colors">{module.label}</span>
                  <span className="text-white/20 text-[9px] uppercase tracking-widest mt-1 group-hover/item:text-accent/40">Clique para detalhar &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* MÓDULOS PRINCIPAIS (01 E 02) */}
        <div id="modulos-principais" className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          {/* Card 01 */}
          <div className="bg-white rounded-[2.5rem] border border-gray-100 p-12 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-10">
              <Badge className="bg-accent/10 text-accent font-black px-4 py-1 rounded-full text-xs">MÓDULO 01</Badge>
              <h4 className="text-3xl font-serif font-black text-primary">Clientes & Processos</h4>
            </div>
            <p className="text-gray-500 text-lg font-medium leading-relaxed mb-10 prose prose-sm">
              O coração operacional. Cada cliente possui um repositório blindado com histórico completo de interações e documentos.
            </p>
            <div className="bg-gray-50 rounded-[2rem] p-10 font-mono text-[13px] leading-relaxed text-gray-700 border border-gray-100">
              <div className="font-bold text-primary mb-3 flex items-center gap-2">
                <Folder className="w-4 h-4 text-accent" /> 01 — Clientes & Processos/
              </div>
              <div className="pl-6 space-y-2 border-l-2 border-gray-200 ml-2">
                <div className="text-accent font-bold">├── _Modelo_Pasta_Cliente/ <span className="text-gray-400 italic font-normal ml-2">← Template</span></div>
                <div className="pl-8 space-y-1 text-gray-500">
                   <div>├── 01_Documentos_Pessoais/</div>
                   <div>├── 02_Documentos_Imovel/</div>
                   <div>├── 03_Laudos_e_Pareceres/</div>
                   <div>├── 04_Comunicacoes/</div>
                   <div>└── 05_Contrato_e_Recibos/</div>
                </div>
                <div className="font-bold">├── Compradores/</div>
                <div className="font-bold">└── Vendedores/</div>
              </div>
            </div>
            <div className="mt-10 bg-accent/5 border-l-8 border-accent p-6 rounded-r-[1.5rem] flex items-start gap-4">
              <div className="bg-accent rounded-full p-1.5 mt-1">
                <FileText className="w-3 h-3 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] block mb-2">Padrão de nomenclatura</span>
                <span className="font-mono text-sm text-primary font-bold">2026-04_Laudo_Joao-Silva.pdf</span>
              </div>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-white rounded-[2.5rem] border border-gray-100 p-12 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-10">
              <Badge className="bg-accent/10 text-accent font-black px-4 py-1 rounded-full text-xs">MÓDULO 02</Badge>
              <h4 className="text-3xl font-serif font-black text-primary">Imóveis & Catálogo</h4>
            </div>
            <p className="text-gray-500 text-lg font-medium leading-relaxed mb-10 prose prose-sm">
              Base técnica de ativos. Este módulo alimenta diretamente o catálogo público do site com dados precisos e verificados.
            </p>
            <div className="bg-gray-50 rounded-[2rem] p-10 font-mono text-[13px] leading-relaxed text-gray-700 border border-gray-100">
              <div className="font-bold text-primary mb-3 flex items-center gap-2">
                <Folder className="w-4 h-4 text-accent" /> 02 — Imóveis & Catálogo/
              </div>
              <div className="pl-6 space-y-2 border-l-2 border-gray-200 ml-2">
                <div className="text-accent font-bold">├── _Modelo_Pasta_Imovel/</div>
                <div className="pl-8 space-y-1 text-gray-500">
                   <div>├── 01_Fotos_e_Videos/</div>
                   <div>├── 02_Documentacao_Legal/</div>
                   <div>├── 03_Mapas_e_Plantas/</div>
                   <div>├── 04_Laudo_Tecnico/</div>
                   <div>└── 05_Ficha_Tecnica.gdoc</div>
                </div>
                <div className="font-bold">├── Disponíveis/ <span className="text-accent/60 ml-2 font-normal">(Publicados no Site)</span></div>
                <div className="font-bold">├── Vendidos/</div>
                <div className="font-bold">└── Em_Análise/</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ MÓDULOS TÉCNICOS ═══════════════════════════════ */}
      <section id="modulos-tecnicos" className="bg-gray-50 py-32">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-16 border-b-2 border-gray-200 pb-10">
            <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-xl shadow-primary/20">02</div>
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-black text-primary">Módulos Especializados</h2>
              <p className="text-gray-500 text-sm mt-2 font-medium">Repositórios de apoio jurídico, marketing e governança</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Card 03 */}
            <div className="bg-white rounded-[2.5rem] border border-gray-200 p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-accent/10 p-3 rounded-2xl">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-primary">03 &middot; Inteligência Documental</h4>
              </div>
              <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8 italic">
                O diferencial competitivo da Nossa Terra: biblioteca pericial e jurisprudência agrária.
              </p>
              <div className="bg-gray-50 rounded-[1.5rem] p-8 font-mono text-[12px] leading-relaxed text-gray-600">
                <div className="font-bold text-primary flex items-center gap-2 mb-2">📁 Módulo 03/</div>
                <div className="pl-4 space-y-1">
                  <div>├── Modelos_e_Templates/</div>
                  <div className="pl-6 opacity-60">├── Laudos_Periciais/</div>
                  <div className="pl-6 opacity-60">├── Pareceres_Registrais/</div>
                  <div>├── Legislação_e_Referências/</div>
                  <div>└── Casos_de_Estudo_Anonimizados/</div>
                </div>
              </div>
            </div>

            {/* Card 04 */}
            <div className="bg-white rounded-[2.5rem] border border-gray-200 p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-accent/10 p-3 rounded-2xl">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-primary">04 &middot; Marketing & Comunicação</h4>
              </div>
              <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8 italic">
                Ativos visuais e estratégicos. A vitrine digital da nossa autoridade.
              </p>
              <div className="bg-gray-50 rounded-[1.5rem] p-8 font-mono text-[12px] leading-relaxed text-gray-600">
                <div className="font-bold text-primary flex items-center gap-2 mb-2">📁 Módulo 04/</div>
                <div className="pl-4 space-y-1">
                  <div>├── Identidade_Visual_Raiz/</div>
                  <div>├── Site_Corporate_Assets/</div>
                  <div>├── Redes_Sociais_Cronograma/</div>
                  <div>└── Propostas_Apresentadas/</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { id: "05", title: "Financeiro", icon: <Scale className="w-5 h-5 text-accent" />, desc: "Acesso restrito. Aline Nascimento.", folders: ["Honorários/", "Notas_Fiscais/", "Contratos/"] },
              { id: "06", title: "Jurídico", icon: <ShieldCheck className="w-5 h-5 text-accent" />, desc: "Legislação e Atos Sociais.", folders: ["CNPJ_e_Alvará/", "LGPD/", "Políticas/"] },
              { id: "07", title: "Operações", icon: <MapPin className="w-5 h-5 text-accent" />, desc: "Gestão técnica interna.", folders: ["Treinamentos/", "Fornecedores/", "Softwares/"] }
            ].map((mod) => (
              <div key={mod.id} className="bg-white rounded-[2rem] border border-gray-200 p-10 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-accent/5 p-3 rounded-xl">{mod.icon}</div>
                  <h4 className="text-lg font-serif font-bold text-primary">{mod.title}</h4>
                </div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-6">{mod.desc}</p>
                <div className="space-y-3">
                  {mod.folders.map(f => (
                    <div key={f} className="flex items-center gap-3 text-[11px] font-mono font-medium text-gray-600">
                      <Folder className="w-3 h-3 text-accent/30" /> {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ FLUXOS ═══════════════════════════════ */}
      <section id="fluxos" className="bg-white py-32">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-20 border-b-2 border-gray-100 pb-10">
            <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-xl shadow-primary/20">03</div>
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-black text-primary">Fluxos de Trabalho</h2>
              <p className="text-gray-500 text-sm mt-3 font-medium italic">O &quot;passo a passo&quot; para a consistência operacional</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gray-50 rounded-[3rem] p-12 border border-transparent hover:border-accent/30 transition-all group relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform">
                  <Sprout className="w-32 h-32 text-primary" />
               </div>
              <h5 className="text-2xl font-serif font-black text-primary mb-10 flex items-center gap-4">
                <div className="bg-primary p-3 rounded-2xl shadow-lg">
                  <Sprout className="w-6 h-6 text-accent" />
                </div>
                Novo Cliente (Lead)
              </h5>
              <div className="space-y-8 relative z-10">
                {[
                  "Criar pasta em 01 — Clientes/ seguindo nomenclatura",
                  "Duplicar estrutura do _Modelo_Pasta_Cliente",
                  "Coletar e auditar documentos pessoais do cliente",
                  "Vincular dossiê de imóvel à pasta do cliente",
                  "Aline Nascimento emite Parecer Técnico Digital",
                  "Formalização e transferência para Módulo 05"
                ].map((step, i) => (
                  <div key={step} className="flex gap-6 group/step">
                    <div className="bg-white text-primary border border-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 shadow-sm group-hover/step:bg-primary group-hover/step:text-white transition-colors">
                      {i + 1}
                    </div>
                    <p className="text-[15px] text-gray-700 leading-relaxed font-bold tracking-tight">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-[3rem] p-12 border border-transparent hover:border-accent/30 transition-all group relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform">
                  <Home className="w-32 h-32 text-primary" />
               </div>
              <h5 className="text-2xl font-serif font-black text-primary mb-10 flex items-center gap-4">
                <div className="bg-primary p-3 rounded-2xl shadow-lg">
                  <Home className="w-6 h-6 text-accent" />
                </div>
                Captação de Ativo (Imóvel)
              </h5>
              <div className="space-y-8 relative z-10">
                {[
                  "Abertura em 02 — Imóveis/Em_Análise/",
                  "Coleta e validação da Matrícula e ITR",
                  "Auditoria Técnica Pericial (Inteligência Documental)",
                  "Captação Visual (Fotos/Drones) via Módulo 04",
                  "Migração para Disponíveis/ (Pós-Validação)",
                  "Publicação automática no catálogo do site"
                ].map((step, i) => (
                  <div key={step} className="flex gap-6 group/step">
                    <div className="bg-white text-primary border border-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 shadow-sm group-hover/step:bg-primary group-hover/step:text-white transition-colors">
                      {i + 1}
                    </div>
                    <p className="text-[15px] text-gray-700 leading-relaxed font-bold tracking-tight">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ NOMENCLATURA ═══════════════════════════════ */}
      <section id="nomenclatura" className="bg-primary py-32 relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
         
         <div className="max-w-screen-xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
               <div>
                  <div className="bg-accent/20 text-accent font-black px-4 py-1.5 rounded-full text-[10px] tracking-[0.3em] uppercase mb-6 inline-block">Regras de Ouro</div>
                  <h2 className="text-4xl md:text-6xl font-serif font-black text-white leading-tight">
                     Padrão de Nomeclatura e <br />
                     <span className="text-accent">Organização Digital</span>
                  </h2>
               </div>
               <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] max-w-sm">
                  <AlertTriangle className="w-8 h-8 text-accent mb-4" />
                  <p className="text-white/70 text-sm font-medium leading-relaxed">
                    Nomes claros permitem que um documento seja localizado em segundos, mesmo anos após sua criação.
                  </p>
               </div>
            </div>

            <div className="bg-white rounded-[3rem] overflow-hidden shadow-3xl">
               <div className="overflow-x-auto">
                 <table className="w-full text-left">
                   <thead className="bg-gray-50 text-gray-400 border-b border-gray-100">
                     <tr>
                       <th className="px-10 py-8 font-bold uppercase text-[10px] tracking-[0.3em]">Categoria</th>
                       <th className="px-10 py-8 font-bold uppercase text-[10px] tracking-[0.3em] text-center">Formato Padrão</th>
                       <th className="px-10 py-8 font-bold uppercase text-[10px] tracking-[0.3em] text-right">Exemplo Prático</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100">
                      {[
                        { type: "Documentos de Cliente", pattern: "AAAA-MM_Tipo_Nome", example: "2026-04_Laudo_Ana-Costa.pdf" },
                        { type: "Dossier de Imóvel", pattern: "Cidade_Area_Tipo", example: "Floriano_120ha_Fazenda.pdf" },
                        { type: "Financeiro", pattern: "AAAA-MM_NF_Valor", example: "2026-04_NF_R$3500.pdf" },
                        { type: "Ativos de Marketing", pattern: "AAAA-MM_Canal_Desc", example: "2026-04_IG_Carrossel-Solo.png" }
                      ].map((row) => (
                        <tr key={row.type} className="group/row hover:bg-teal-50/30 transition-colors">
                          <td className="px-10 py-10">
                            <div className="flex items-center gap-4">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover/row:opacity-100 transition-opacity" />
                              <span className="font-serif text-xl font-black text-primary">{row.type}</span>
                            </div>
                          </td>
                          <td className="px-10 py-10 text-center">
                            <code className="bg-gray-100 text-primary font-bold px-5 py-2 rounded-xl text-xs">{row.pattern}</code>
                          </td>
                          <td className="px-10 py-10 text-right">
                            <span className="font-mono text-sm font-black text-accent tracking-tighter">{row.example}</span>
                          </td>
                        </tr>
                      ))}
                   </tbody>
                 </table>
               </div>
            </div>

            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
               <div className="flex items-center gap-4 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
                  <XCircle className="w-4 h-4 text-red-500" /> Sem Espaços
               </div>
               <div className="flex items-center gap-4 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Use Hífens (-)
               </div>
               <div className="flex items-center gap-4 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Use Underscores (_)
               </div>
            </div>
         </div>
      </section>

      {/* ═══════════════════════════════ ACESSO ═══════════════════════════════ */}
      <section id="acesso" className="bg-white py-32">
        <div className="max-w-screen-xl mx-auto px-6">
           <div className="flex items-center gap-6 mb-20 border-b-2 border-gray-100 pb-10">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-xl shadow-primary/20">05</div>
              <div>
                <h2 className="text-3xl md:text-5xl font-serif font-black text-primary">Níveis de Acesso</h2>
                <p className="text-gray-500 font-medium mt-3">Governança, Privacidade e Segurança da Informação</p>
              </div>
           </div>

           <div className="overflow-x-auto rounded-[3rem] border border-gray-100 bg-white shadow-2xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-400 border-b border-gray-100">
                    <th className="px-10 py-10 font-bold uppercase text-[10px] tracking-[0.3em]">Módulo Estrutural</th>
                    <th className="px-10 py-10 text-center font-bold uppercase text-[10px] tracking-[0.3em]">Aline Nascimento</th>
                    <th className="px-10 py-10 text-center font-bold uppercase text-[10px] tracking-[0.3em]">Equipe Interna</th>
                    <th className="px-10 py-10 text-center font-bold uppercase text-[10px] tracking-[0.3em]">Agência Técnica</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { mod: "01 — Clientes", p1: "Integral", p2: "Restrito", p3: "Bloqueado" },
                    { mod: "02 — Imóveis", p1: "Integral", p2: "Total", p3: "Bloqueado" },
                    { mod: "03 — Inteligência", p1: "Integral", p2: "Leitura", p3: "Bloqueado" },
                    { mod: "04 — Marketing", p1: "Integral", p2: "Total", p3: "Total" },
                    { mod: "05 — Financeiro", p1: "Integral", p2: "Bloqueado", p3: "Bloqueado" },
                    { mod: "06 — Jurídico", p1: "Integral", p2: "Bloqueado", p3: "Bloqueado" },
                    { mod: "07 — Operações", p1: "Integral", p2: "Total", p3: "Parcial" }
                  ].map((row) => (
                    <tr key={row.mod} className="hover:bg-teal-50/10 transition-colors">
                      <td className="px-10 py-8 font-serif text-lg font-black text-primary">{row.mod}</td>
                      <td className="px-10 py-8 text-center text-accent font-bold"><CheckCircle2 className="w-4 h-4 mx-auto mb-1 opacity-40" /> {row.p1}</td>
                      <td className="px-10 py-8 text-center font-bold">
                        {row.p2 === "Bloqueado" ? <span className="text-red-400 flex flex-col items-center gap-1 opacity-40"><XCircle className="w-4 h-4" /> {row.p2}</span> : 
                         row.p2 === "Leitura" || row.p2 === "Restrito" ? <span className="text-amber-500 flex flex-col items-center gap-1"><Eye className="w-4 h-4" /> {row.p2}</span> : 
                         <span className="text-green-600 flex flex-col items-center gap-1"><CheckCircle2 className="w-4 h-4" /> {row.p2}</span>}
                      </td>
                      <td className="px-10 py-8 text-center font-bold">
                        {row.p3 === "Bloqueado" ? <span className="text-red-400 flex flex-col items-center gap-1 opacity-40"><XCircle className="w-4 h-4" /> {row.p3}</span> : 
                         <span className="text-green-600 flex flex-col items-center gap-1"><CheckCircle2 className="w-4 h-4" /> {row.p3}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
           </div>
        </div>
      </section>

      {/* FOOTER DO DOCUMENTO ORIGINAL (REDUNDANTE MAS MANTIDO PARA ESTILO) */}
      <footer className="bg-white py-24 px-6 md:px-24 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-gray-100">
        <div className="text-primary font-serif font-black text-3xl tracking-tighter uppercase">Nossa Terra &middot; Inteligência</div>
        <div className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.4em] text-center md:text-right">
           Excelência em Gestão de Ativos Rurais <br />
           <span className="text-accent mt-2 inline-block">NossaTerra.imb.br</span>
        </div>
      </footer>
    </div>
  );
}
