import { properties } from "@/data/properties";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Maximize2, 
  CheckCircle2, 
  Phone, 
  FileDown, 
  Map, 
  Droplets, 
  Thermometer,
  ShieldCheck,
  TrendingUp,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PropertyPage({ params }: Props) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen pb-24">
      {/* Cinematic Hero */}
      <section className="relative h-[75vh] w-full overflow-hidden">
        <Image
          src={property.mainImage}
          alt={property.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-screen-2xl mx-auto w-full px-6 lg:px-8 pb-16">
            <Breadcrumb items={[
              { label: "Catálogo", href: "/imoveis" },
              { label: property.title }
            ]} />
            
            <Link 
              href="/imoveis" 
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 no-underline font-bold text-xs uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar à Lista
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <Badge className="bg-teal-500 text-white px-4 py-1.5 rounded-xl font-bold uppercase text-[9px] tracking-widest border-none mb-6">
                  {property.type}
                </Badge>
                <h1 className="text-4xl md:text-7xl font-serif font-extrabold text-white tracking-tight leading-none">
                  {property.title}
                </h1>
                <div className="flex items-center gap-4 text-white/70 mt-4 font-bold">
                  <MapPin className="w-5 h-5 text-teal-400" />
                  <span className="text-xl">{property.location}</span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col items-center md:items-end">
                <span className="text-primary/40 text-[10px] font-bold uppercase tracking-widest mb-1">Preço Sugerido</span>
                <span className="text-3xl md:text-5xl font-black text-primary tracking-tighter">
                  {property.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Details & Specs */}
          <div className="lg:col-span-8">
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-extrabold text-primary mb-8">Análise da Propriedade</h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                {property.description}
              </p>
            </div>

            {/* Technical Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {property.specs.map((spec) => (
                <div key={spec.label} className="bg-muted/20 p-8 rounded-3xl border border-muted/30 flex items-center justify-between">
                  <span className="text-primary/40 text-xs font-bold uppercase tracking-widest">{spec.label}</span>
                  <span className="text-primary font-black text-lg">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 bg-primary rounded-[3rem] text-white">
              <div className="flex flex-col items-center text-center gap-4">
                <ShieldCheck className="w-10 h-10 text-teal-400" />
                <div className="text-sm font-bold uppercase tracking-widest">Auditoria Jurídica 100%</div>
              </div>
              <div className="flex flex-col items-center text-center gap-4 border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
                <Droplets className="w-10 h-10 text-teal-400" />
                <div className="text-sm font-bold uppercase tracking-widest">Viabilidade Hídrica</div>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <TrendingUp className="w-10 h-10 text-teal-400" />
                <div className="text-sm font-bold uppercase tracking-widest">Potencial de ROI</div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Gen Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              {/* Lead Magnet */}
              <div className="bg-nt-orange-light/10 border border-nt-orange/20 p-10 rounded-[3rem]">
                <Badge className="bg-nt-orange text-white mb-6">Material Exclusivo</Badge>
                <h4 className="text-2xl font-serif font-black text-primary mb-4">Dossiê Técnico Completo</h4>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-8">
                  Baixe o relatório detalhado com análise de solo, histórico de chuvas e documentação completa.
                </p>
                <button className="w-full h-16 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-teal-950 transition-all shadow-xl shadow-primary/20">
                  <FileDown className="w-5 h-5" /> Baixar PDF
                </button>
              </div>

              {/* Direct Contact */}
              <div className="bg-white border border-muted p-10 rounded-[3rem] shadow-xl shadow-muted/20">
                <h4 className="text-2xl font-serif font-black text-primary mb-8">Agendar Visita Técnica</h4>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-2xl">
                    <CheckCircle2 className="w-5 h-5 text-teal-500" />
                    <span className="text-sm font-bold text-primary">Acompanhamento Pericial</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-2xl">
                    <CheckCircle2 className="w-5 h-5 text-teal-500" />
                    <span className="text-sm font-bold text-primary">Logística de Acesso Inclusa</span>
                  </div>
                </div>
                
                <a 
                  href={`https://api.whatsapp.com/send?phone=5586999279390&text=Gostaria%20de%20saber%20mais%20sobre%20a%20${property.title}`}
                  className="w-full h-20 bg-teal-600 text-white rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-teal-600/30 no-underline"
                >
                  <Phone className="w-6 h-6" /> Falar no WhatsApp
                </a>
                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold mt-6">
                  Atendimento Preferencial 24h
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
