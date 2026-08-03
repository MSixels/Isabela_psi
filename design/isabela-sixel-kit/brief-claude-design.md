# Brief para o Claude Design — landing page Isabela Sixel

Cole este arquivo inteiro no Claude Design como contexto inicial. Ele contém tudo o que foi decidido: marca, cores, tipografia, estrutura, copy e restrições legais.

---

## 1. O que é

Landing page de marca pessoal de uma psicanalista clínica que atende **100% online**. Não é institucional nem é um blog: é uma página de conversão que recebe quem chega do Instagram e transforma interesse em uma primeira conversa.

**Meta de negócio:** 5 pacientes ativos por mês.
**Ação nº 1 da página:** agendar uma primeira conversa de 20 minutos, gratuita, via WhatsApp.

## 2. Quem chega aqui

Mulher, 25–45 anos (a faixa declarada é 18–55; a comunicação mira o centro). Cristã ou aberta à espiritualidade. Já pensou em terapia e não foi. Queixa mais provável: ansiedade, exaustão, procrastinação ou um padrão que se repete nas relações.

Ela não chega buscando "psicanálise". Chega buscando **alívio para algo que não consegue nomear**. A página tem que reconhecer o sintoma antes de oferecer o método.

## 3. Posicionamento

> **Análise online para mulheres que carregam mais do que conseguem nomear.**
> Psicanálise clínica com escuta cristã. Um espaço para entender o que se repete — sem julgamento, no seu tempo.

O diferencial é a **psicanálise lida a partir da fé cristã**. Não é decoração: é o que separa essa página de mil outras. Os temas (ansiedade, procrastinação, relações) são o assunto; a fé é a lente.

## 4. Restrições que não podem ser violadas

Psicanálise não é profissão regulamentada no Brasil, então não há CRP nem resolução do CFP aplicável. Mas:

- **Nunca prometer cura ou resultado.** Nada de "cura interior", "cura definitiva", "supere sua ansiedade". Use linguagem de processo: elaborar, escutar, entender, atravessar, nomear.
- **Nunca sugerir que ela é psicóloga.** Nada de "psicóloga", "tratamento psicológico", "diagnóstico", "terapia cognitiva".
- **Nunca falar em tratar transtorno.** Falar *sobre* ansiedade, sim. Sugerir que trata transtorno diagnosticado, não. Prefira "sofrimento psíquico", "angústia", "o que aperta".
- **Sem depoimentos de pacientes.** Nem anônimos.
- **Sem preço na página.** Só por contato, por enquanto.

## 5. Marca

Arquivos em `svg/`. Use os que **não têm sufixo de cor** — eles usam `currentColor` e herdam a cor do CSS.

| Onde | Arquivo | Largura |
|---|---|---|
| Cabeçalho | `assinatura-fio.svg` | ≥ 300 px |
| Rodapé | `assinatura-fio-compacta.svg` | 140–300 px |
| Espaços apertados | `assinatura.svg` | < 140 px |
| Favicon / avatar | `selo.svg` | ≥ 16 px |

**Regras:** área de respiro de 1 módulo (altura-x do nome) em volta. Não recolorir fora da paleta, não esticar, não redesenhar o fio, não usar selo e assinatura juntos no mesmo bloco.

## 6. Cor

Importe `tokens/tokens.css` (variáveis CSS) ou `tokens/tailwind-theme.css` (Tailwind v4).

| Token | Hex | Papel |
|---|---|---|
| aveia | `#EFE6D9` | fundo padrão da página |
| umbre | `#3A2B23` | texto principal e seções invertidas |
| barro | `#8E4B2E` | **acento único**: links, botões, detalhes |
| areia | `#D8C4AC` | divisores, superfícies secundárias |
| ocre | `#B98A2E` | destaque raro — **nunca texto pequeno** (2,52:1 sobre aveia, reprova) |

Contrastes medidos: umbre/aveia 10,96:1 (AAA) · barro/aveia 5,32:1 (AA) · aveia/umbre 10,96:1 (AAA).

**Um acento só.** Nada de teal, rosa ou salmão — saíram da paleta de propósito.

## 7. Tipografia

- **Petrona** (Google Fonts, pesos 300 e 400 + itálico) — títulos, citações, texto de artigo. Tudo que se lê devagar.
- **Karla** (400, 500) — botões, rótulos, navegação, formulários. Tudo que se opera.

Escala: hero `clamp(38px, 6vw, 64px)` / h2 `34px` / h3 `24px` / corpo `17px` / apoio `14px` / rótulo `11px` com `0.18em` e maiúsculas.

Largura de texto: máximo `66ch`.

## 8. Estrutura da página

1. **Hero** — foto dela (rosto, olhando para a câmera), nome, o posicionamento da seção 3, botão primário. Sem carrossel, sem vídeo de fundo.
   CTA: **"Agendar uma primeira conversa"** → WhatsApp com mensagem pré-preenchida.

2. **"Talvez você se reconheça aqui"** — 4 a 6 cartões em linguagem de sintoma, não de diagnóstico. **É esta seção que converte.** Exemplos de tom:
   - "Você funciona bem por fora e está exausta por dentro."
   - "Adia justamente o que mais importa e não entende por quê."
   - "Repete o mesmo padrão em relações diferentes."
   - "Reza pedindo paz e continua acordando às três da manhã."

3. **Sobre** — foto, história em primeira pessoa, por que psicanálise, por que a fé entra. Curto e humano. Currículo não entra aqui.

4. **Como funciona** — derruba a objeção de quem nunca fez análise: online por vídeo, semanal, cerca de 50 minutos, sigilo absoluto, sem número mínimo de sessões, como é a primeira conversa.

5. **Formação** — Instituto Fazendo a Diferença, cursos, tempo de prática, participação em observatórios clínicos semanais. Aqui sim, credencial.

6. **Conteúdo** — últimos posts do Instagram + CTA de seguir. *(Depende de a conta virar profissional; ver seção 10.)*

7. **FAQ** — principal arma de SEO. Perguntas: psicanálise online funciona? Qual a diferença entre psicanálise e psicologia? Quanto tempo dura uma análise? Psicanálise e fé cristã são compatíveis? Preciso ter um problema grave para fazer análise?

8. **CTA final** — repetição do agendamento.

Rota `/artigos` deve existir no código, mas **fica oculta** até haver 3 textos publicados.

## 9. Tom da copy

Acolhedor e próximo, nunca clínico nem professoral. Frases curtas. Segunda pessoa. Ela escreve os próprios textos — a página deve soar como ela, não como uma clínica.

Referências de tom que ela admira: Ângela Sirino, Pedro Onari (Instituto Onari), crisaquinopsi.

**Evitar:** jargão psicanalítico sem tradução, promessa de resultado, tom de coach, exclamações, emoji na página (no Instagram sim, na landing não).

## 10. SEO

Atendimento 100% online → mirar nacional, não local.

- Cabeça (ganha devagar): `psicanálise online`, `psicanalista online`
- **Onde realmente ganha:** `psicanálise cristã online`, `psicanálise e fé cristã`, `psicanalista cristã online` — volume menor, concorrência baixíssima, intenção altíssima
- Cauda longa via artigos: `por que procrastino mesmo sabendo o que fazer`, `diferença entre psicanálise e terapia`, `análise online funciona mesmo`

H1 único no hero. Um H2 por seção. FAQ com marcação `FAQPage` em JSON-LD.

## 11. Técnico

Next.js (App Router, SSG + ISR) + TypeScript + Tailwind v4 → Vercel.
Backend em Go no Fly.io região GRU, para o worker que sincroniza o Instagram.
Postgres no Supabase.

**Sobre o feed do Instagram:** a Basic Display API foi desligada em dezembro de 2024. A integração exige Graph API e **conta profissional (Business ou Creator)** — contas pessoais não têm acesso. A conta dela ainda é pessoal, então a seção 6 fica com dados estáticos até a conversão acontecer. Quando acontecer: worker em Go de 6 em 6 horas chamando `/me/media`, persistindo no Postgres; o Next lê do banco, nunca da Meta. Não esquecer a rotina de refresh do token de 60 dias com alerta de falha.

Painel admin: **adiar**. Começar com conteúdo em MDX no repositório — enquanto for o dev editando, é mais rápido que construir CMS.

## 12. Qualidade mínima

Responsivo até 360 px. Foco de teclado visível. `prefers-reduced-motion` respeitado. Imagens com `alt` real. Lighthouse ≥ 95 em performance e acessibilidade — a página é quase toda estática, não há desculpa.
