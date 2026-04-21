# Snapshot Técnico: Nossa Terra Corporate
**Data**: 21/04/2026
**Contexto**: Registro pré-arquivamento para continuidade do redesign.

## 1. Stack Tecnológica (Core)
- **Framework**: Next.js (App Router) v16+
- **Linguagem**: TypeScript v6.0+
- **Styling**: Tailwind CSS v4 + Framer Motion (Animações Premium)
- **Componentes UI**: Base UI + Shadcn/UI + Lucide React (Icons)
- **Assets**: Gerenciamento de mídia de alta resolução (MP4/PNG HD) localmente.

## 2. Infraestrutura & Git
- **Checkpoint Atual**: Commit `3ad5b0b` ("chore: technical snapshot before property detail page redesign").
- **Status Remoto**: `origin/main` sincronizado (Push realizado com sucesso).
- **Ajuste de Pipeline**: `http.postBuffer` configurado para 500MB localmente para suportar o *Payload* de mídias pesadas.

## 3. Estado da Implementação (Página de Ativos)
- **Componentes Criados**:
    - `PropertyHero`: Hero cinematográfico com suporte a vídeo.
    - `PropertySpecs`: Visualização técnica estilo "Dossiê".
    - `MediaGallery`: Bento grid para evidências de infraestrutura.
    - `FloatingWhatsAppCTA`: Layer de conversão flutuante.
- **Modelagem de Dados**:
    - Centralizada em `src/data/properties.ts` e `src/data/clients.ts`.
    - Relacionamento Property -> Client estabelecido via `clientId`.

## 4. Backlog de Redesign (Pendências/Seeds)
- [ ] **Sticky Navigation**: Implementar `PropertyStickyNav.tsx` para seções técnicas.
- [ ] **Technical Grid Pattern**: Aplicar o padrão de grade radial da `ProblemSection` no Hero e seções de dados.
- [ ] **Integração de Clientes**: Exibir selos e depoimentos do proprietário associado no detalhe do imóvel.
- [ ] **Interactive Maps**: (Opcional) Renderização de polígonos GEO/CAR.
- [ ] **Performance Audit**: Validar LCP devido ao uso intenso de vídeos no Hero.

[NOTA TÉCNICA]
**Rollback Point**: O commit `3ad5b0b` é o ponto de segurança absoluto. Caso o novo redesign falhe, o retorno para este estado garante 100% de funcionalidade.
