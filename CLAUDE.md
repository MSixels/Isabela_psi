# Landing — Isabela Sixel

Landing page de marca pessoal de uma psicanalista clínica que atende 100% online.
Não é institucional nem blog: é página de conversão. Meta de negócio: 5 pacientes
ativos por mês. Ação nº 1: agendar uma primeira conversa de 20 min via WhatsApp.

## Stack

- Next.js App Router · TypeScript · Tailwind v4 · SSG + ISR → Vercel
- Conteúdo de artigos em MDX no repo. **Sem CMS.**
- FASE 2 (não agora, e opcional): sincronização do feed do Instagram via Route
  Handler do Next + Vercel Cron diário, gravando no Postgres do Supabase.
  **Sem serviço novo, sem Fly.io, sem backend Go para isto.** Um fetch agendado
  por dia não justifica um deploy target próprio.

## Regras que não se negociam

### Copy — restrições legais
A copy das 8 seções já foi escrita e revisada. **Não reescrever, não "melhorar",
não sugerir alternativas mais persuasivas.** Se um texto precisar mudar, pergunte.

Psicanálise não é profissão regulamentada no Brasil (sem CRP, sem resolução do CFP),
mas estas quatro regras valem sempre:

1. **Nunca prometer cura ou resultado.** Proibido: "cura", "supere", "elimine sua
   ansiedade", "transforme sua vida". Use linguagem de processo: elaborar, escutar,
   entender, atravessar, nomear.
2. **Nunca sugerir que ela é psicóloga.** Proibido: "psicóloga", "tratamento
   psicológico", "diagnóstico", "terapia cognitiva", "sessão de terapia".
3. **Nunca falar em tratar transtorno.** Falar *sobre* ansiedade, sim. Sugerir que
   trata transtorno diagnosticado, não. Prefira "sofrimento psíquico", "angústia".
4. **Sem depoimentos de pacientes** (nem anônimos) e **sem preço na página.**

### Marca
Cores e fontes vêm de `tokens.css` / `tailwind-theme.css`. **Nunca inventar cor,
nunca aproximar hex, nunca adicionar uma sexta cor.** Um acento só: barro `#8E4B2E`.

| token | hex | papel |
|---|---|---|
| aveia | `#EFE6D9` | fundo padrão |
| umbre | `#3A2B23` | texto e seções escuras |
| barro | `#8E4B2E` | acento único: links, botões |
| areia | `#D8C4AC` | divisores e superfícies |
| ocre  | `#B98A2E` | destaque raro — **nunca texto pequeno** (2,52:1, reprova) |

Tipografia: **Petrona** (300/400 + itálico) para leitura; **Karla** (400/500) para
UI, botões, rótulos. Nunca o contrário. Carregar via `next/font`.

Logo por tamanho — a regra é: quando não couber o fio, o fio sai inteiro. Nunca
engrossar por conta própria, nunca remover só parte dele.

| onde | arquivo | largura |
|---|---|---|
| cabeçalho | `assinatura-fio` | ≥ 300 px |
| rodapé, e-mail | `assinatura-fio-compacta` | 140–300 px |
| espaço apertado | `assinatura` | < 140 px |
| favicon, avatar | `selo` | ≥ 16 px |

### Arquivos que NÃO vão para produção
- `Landing Isabela Sixel.dc.html` — formato do Claude Design. É **espelho de layout,
  copy e espaçamento**, não código. Reconstruir em Next.js olhando para ele.
- `support.js` — runtime do preview do design. Ignorar completamente.

## Estrutura

```
app/
  layout.tsx          fontes, metadata, favicon, JSON-LD base
  page.tsx            monta as 8 seções
  artigos/page.tsx    notFound() enquanto artigos.length < 3
components/           Header Hero Sintomas Sobre ComoFunciona
                      Formacao Conteudo Faq CtaFinal Footer
content/
  instagram.ts        posts curados (FASE 1)
  faq.ts              perguntas + gerador do JSON-LD
lib/
  posts.ts            getPosts() — única porta de entrada de posts
public/
  marca/ favicon/ instagram/
```

Ordem das seções (não alterar): Hero → Talvez você se reconheça aqui → Sobre →
Como funciona → Formação → Conteúdo → FAQ → CTA final → Footer.

## Convenções

- Server Components por padrão. `'use client'` só onde houver estado ou evento.
- Nenhum componente importa `POSTS_CURADOS` direto — sempre via `getPosts()`.
- URLs derivadas de `NEXT_PUBLIC_SITE_URL`. **Nunca hardcodar domínio** — ele ainda
  não foi registrado.
- WhatsApp: `https://wa.me/5532984015847?text=` + mensagem pré-preenchida, sempre
  com `encodeURIComponent`.
- Marcar com `// TODO:` tudo que estiver entre `[colchetes]` no design (fotos,
  cursos da formação, anos de prática) e os pontos de FASE 2.

## SEO

- Um `<h1>` só, no hero. Um `<h2>` por seção.
- FAQ com JSON-LD `FAQPage`.
- Foco: `psicanálise cristã online`, `psicanálise e fé cristã`, `psicanalista cristã online`.
  Atendimento é nacional/online — **não otimizar para busca local.**
- Meta description e Open Graph em todas as rotas.

## Critérios de aceite

- Responsivo até 360 px sem scroll horizontal.
- Foco de teclado visível em todo elemento interativo.
- `prefers-reduced-motion` respeitado.
- `alt` real em toda imagem — descrevendo a imagem, não repetindo o título ao lado.
- Lighthouse ≥ 95 em performance e acessibilidade. A página é quase toda estática.
- `npm run build` sem warning de TypeScript.

## Como trabalhar aqui

Uma seção por vez, com commit ao final de cada uma. Não gerar a página inteira de
uma vez: o design é a referência de verdade e cada seção precisa ser conferida
contra ele antes da próxima.
