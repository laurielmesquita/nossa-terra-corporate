"use client";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

const profileOptions = [
  { value: "comprador", label: "🌾 Comprador / Investidor" },
  { value: "vendedor", label: "🏡 Proprietário / Vendedor" },
  { value: "produtor", label: "🚜 Produtor Rural" },
  { value: "outros", label: "💬 Outro" },
];

export default function ContatoPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", profile: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate background processing
    await new Promise((r) => setTimeout(r, 800));
    
    // Generate formatted WhatsApp message
    const profileLabel = profileOptions.find(o => o.value === form.profile)?.label || form.profile;
    const message = `Olá Aline! Acabo de ver o site da Nossa Terra e gostaria de iniciar uma consultoria.

*Nome:* ${form.name}
*Perfil:* ${profileLabel}
*E-mail:* ${form.email || 'Não informado'}
*Mensagem:* ${form.message}`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5586999279390&text=${encodeURIComponent(message)}`;
    
    setLoading(false);
    setSent(true);
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const backHomeBtnClass = "bg-accent hover:bg-teal-mid text-white rounded-2xl h-14 px-10 font-bold shadow-lg shadow-accent/30 flex items-center justify-center no-underline transition-all active:scale-95";
  const submitBtnClass = "w-full h-16 bg-primary hover:bg-teal-darkest text-white rounded-2xl font-extrabold text-lg shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="bg-white min-h-screen">
      {/* Compact Hero Section */}
      <section className="relative pt-40 pb-16 bg-primary group overflow-hidden">
        {/* Relevant Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454165833767-1330084bc6f9?w=1600&auto=format&fit=crop&q=80"
            alt="Atendimento Consultivo"
            fill
            priority
            className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-[3000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <Breadcrumb items={[{ label: "Contato" }]} />
            <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-white leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-in-up stagger-1">
              Vamos conversar sobre o seu <span className="text-accent italic">próximo passo no campo?</span>
            </h1>
            <p className="text-lg text-white/70 font-medium leading-relaxed max-w-2xl opacity-0 animate-fade-in-up stagger-2">
              O atendimento na Nossa Terra é pessoal e consultivo. Unimos segurança técnica e agilidade para o seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Main content grid */}
      <section className="py-24">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact channels & Info */}
            <div className="lg:col-span-5 space-y-8 opacity-0 animate-fade-in-up stagger-1">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-extrabold text-primary">Canais Diretos</h2>
                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="https://api.whatsapp.com/send?phone=5586999279390&text=Olá!%20Gostaria%20de%20falar%20sobre%20imóveis%20rurais."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-primary text-white hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 group no-underline shadow-xl shadow-primary/10"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                       <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                    </div>
                    <div>
                      <div className="font-extrabold text-xl">WhatsApp</div>
                      <div className="text-white/60 text-sm font-medium">Atendimento prioritário e imediato</div>
                    </div>
                  </a>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Rua+Professor+Diniz,+1199+-+Lourival+Parente,+Teresina+-+PI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-8 rounded-[2.5rem] bg-muted/30 border border-muted/50 flex items-center gap-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group no-underline"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
                      📍
                    </div>
                    <div>
                      <div className="font-extrabold text-lg text-primary font-serif leading-tight">Rua Professor Diniz, 1199</div>
                      <div className="text-muted-foreground text-xs font-medium uppercase tracking-widest mt-1">Lourival Parente, Teresina - PI</div>
                      <div className="text-accent text-[10px] font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
                        Traçar Rota <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <Separator className="bg-muted" />

              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-extrabold text-primary">Onde Estamos</h2>
                <div className="rounded-[3rem] overflow-hidden border-none shadow-2xl shadow-primary/10 h-[340px] relative mt-6 bg-muted">
                   <iframe
                    title="Localização Nossa Terra"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.123456789!2d-42.7938!3d-5.1182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78f936173456789%3A0x1234567890abcdef!2sRua+Professor+Diniz%2C+1199+-+Lourival+Parente%2C+Teresina+-+PI!5e0!3m2!1spt-BR!2sbr!4v1711577000000!5m2!1spt-BR!2sbr"
                    style={{ border: 0 } as React.CSSProperties}
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest">✓ CRECI Ativa</Badge>
                  <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest">✓ Perita Registral</Badge>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 opacity-0 animate-fade-in-up stagger-2">
              <div className="rounded-[3.5rem] bg-white border border-muted/50 shadow-[0_50px_100px_-20px_rgba(15,61,53,0.08)] p-10 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
                
                <div className="relative z-10 mb-12">
                  <h3 className="text-4xl font-serif font-extrabold text-primary mb-3 text-shadow-sm">Detalhe seu interesse</h3>
                  <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                    Preencha as informações abaixo para que a Aline inicie sua consultoria personalizada.
                  </p>
                </div>
                
                {sent ? (
                  <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                    <div className="w-24 h-24 rounded-full bg-accent text-white flex items-center justify-center text-4xl mb-8 shadow-xl shadow-accent/20">
                      ✓
                    </div>
                    <h3 className="text-3xl font-serif font-extrabold text-primary mb-4">Mensagem Recebida!</h3>
                    <p className="text-muted-foreground mb-12 max-w-sm text-lg font-medium leading-relaxed">
                      Sua solicitação foi enviada com sucesso. A Nossa Terra entrará em contato via WhatsApp em breve.
                    </p>
                    <Link href="/" className={backHomeBtnClass}>
                      Voltar para o início
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary/40 ml-1">Nome Completo</label>
                        <Input 
                          name="name" required value={form.name} onChange={handleChange} 
                          placeholder="Seu nome" 
                          className="h-16 bg-muted/30 border-none rounded-2xl px-8 focus:ring-accent/20 font-medium text-lg placeholder:text-muted-foreground/40"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary/40 ml-1">WhatsApp</label>
                        <Input 
                          name="phone" required value={form.phone} onChange={handleChange} 
                          placeholder="(86) 99927-9390" 
                          className="h-16 bg-muted/30 border-none rounded-2xl px-8 focus:ring-accent/20 font-medium text-lg placeholder:text-muted-foreground/40"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary/40 ml-1">E-mail (opcional)</label>
                      <Input 
                        type="email" name="email" value={form.email} onChange={handleChange} 
                        placeholder="seu@e-mail.com" 
                        className="h-16 bg-muted/30 border-none rounded-2xl px-8 focus:ring-accent/20 font-medium text-lg placeholder:text-muted-foreground/40"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary/40 ml-1">Seu Perfil</label>
                      <div className="relative">
                        <select 
                          name="profile" required value={form.profile} onChange={handleChange}
                          className="w-full h-16 bg-muted/30 border-none rounded-2xl px-8 outline-none focus:ring-2 focus:ring-accent/20 text-primary font-medium text-lg appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Selecione seu perfil...</option>
                          {profileOptions.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary/30">▼</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary/40 ml-1">Sua Mensagem / Busca</label>
                      <Textarea 
                        name="message" rows={5} value={form.message} onChange={handleChange}
                        placeholder="Descreva o que procura ou qual é sua dúvida sobre imóveis rurais..."
                        className="bg-muted/30 border-none rounded-[2.5rem] p-8 focus:ring-accent/20 font-medium text-lg resize-none min-h-[160px] placeholder:text-muted-foreground/40"
                      />
                    </div>

                    <button 
                      disabled={loading}
                      type="submit" 
                      className={submitBtnClass}
                    >
                      {loading ? (
                        <span className="flex items-center gap-3">
                          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processando...
                        </span>
                      ) : "Enviar Solicitação →"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
