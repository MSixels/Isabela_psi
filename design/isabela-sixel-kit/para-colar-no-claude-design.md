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


---

# ANEXO A — tokens CSS

Cole no `globals.css` do projeto:

```css
:root{
  /* cor */
  --cor-barro:#8E4B2E;   /* acento único */
  --cor-umbre:#3A2B23;   /* texto e fundo escuro */
  --cor-areia:#D8C4AC;   /* divisores e superfícies */
  --cor-aveia:#EFE6D9;   /* fundo da página */
  --cor-ocre:#B98A2E;     /* destaque raro */

  /* papéis */
  --fundo:var(--cor-aveia);
  --texto:var(--cor-umbre);
  --texto-suave:color-mix(in oklab, var(--cor-umbre) 62%, var(--cor-aveia));
  --linha:color-mix(in oklab, var(--cor-umbre) 16%, transparent);
  --acento:var(--cor-barro);

  /* tipografia */
  --fonte-display:'Petrona', Georgia, serif;
  --fonte-ui:'Karla', system-ui, sans-serif;
  --t-hero:clamp(38px, 6vw, 64px);
  --t-h2:34px; --t-h3:24px; --t-corpo:17px; --t-apoio:14px; --t-rotulo:11px;

  /* ritmo */
  --esp-1:8px; --esp-2:16px; --esp-3:24px; --esp-4:40px;
  --esp-5:64px; --esp-6:96px; --esp-7:140px;
  --raio:3px;
  --largura-texto:66ch;
}
```

# ANEXO B — a marca em SVG

Os SVGs abaixo usam `currentColor`: eles herdam a cor do elemento pai, então
basta aplicar `color: var(--texto)` ou `color: var(--cor-aveia)` no container.
Não dependem de fonte instalada — são contornos vetoriais.

## B1 · assinatura-fio — cabeçalho, ≥ 300 px de largura

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="20 -764 6881 1224" role="img" aria-label="Isabela Sixel">
  <g transform="scale(1,-1)" fill="currentColor"><path d="M50 0Q50 32 66 36L126 55L115 41V413L127 398L65 409Q50 411 50 444Q84 449 106.5 451.5Q129 454 151 454Q197 454 197 397V43L185 56L265 37Q265 22 261.5 14.5Q258 7 247 0ZM152 553Q128 553 115.0 566.5Q102 580 102 602Q102 624 117.5 638.0Q133 652 152 652Q176 652 189.5 638.5Q203 625 203 602Q203 581 187.5 567.0Q172 553 152 553Z" transform="translate(0,0)"/><path d="M201 -12Q128 -12 81.5 19.5Q35 51 35 95Q35 118 47.0 129.0Q59 140 77 140Q100 140 113 125Q113 72 137.0 45.0Q161 18 209 18Q253 18 278.0 40.0Q303 62 303 102Q303 133 287.0 152.0Q271 171 245.0 183.0Q219 195 189 206Q157 218 126.0 234.0Q95 250 75.0 275.5Q55 301 55 339Q55 394 99.0 428.0Q143 462 217 462Q259 462 293.0 451.0Q327 440 347.0 420.5Q367 401 367 376Q367 357 355.0 346.5Q343 336 325 336Q309 336 295 347Q295 388 272.0 410.0Q249 432 209 432Q172 432 150.0 414.0Q128 396 128 365Q128 339 142.5 322.5Q157 306 181.0 295.0Q205 284 232 273Q267 260 301.5 243.0Q336 226 359.0 199.5Q382 173 382 129Q382 86 359.0 54.5Q336 23 295.0 5.5Q254 -12 201 -12Z" transform="translate(410,0)"/><path d="M151 -12Q104 -12 73.0 15.5Q42 43 42 89Q42 146 78.5 182.0Q115 218 188 235L319 265L306 254V329Q306 382 288.0 406.5Q270 431 232 431Q186 431 161.0 403.5Q136 376 136 324Q131 319 122.0 316.0Q113 313 104 313Q87 313 77.0 323.0Q67 333 67 350Q67 383 90.0 408.0Q113 433 153.5 447.5Q194 462 244 462Q318 462 352.5 425.0Q387 388 387 307V72Q387 55 394.0 46.0Q401 37 414 37Q425 37 438.5 43.0Q452 49 461 56L468 29Q452 10 427.0 -1.0Q402 -12 379 -12Q347 -12 329.0 8.5Q311 29 311 67H307Q279 29 238.0 8.5Q197 -12 151 -12ZM189 35Q225 35 258.0 53.0Q291 71 313 103L307 86V236L320 234L206 207Q163 197 140.5 172.5Q118 148 118 111Q118 76 137.0 55.5Q156 35 189 35Z" transform="translate(931,0)"/><path d="M240 -12Q202 -12 160.5 -2.5Q119 7 84 26V692L95 677L37 688Q21 691 21 723Q61 729 80.0 731.5Q99 734 112 734Q137 734 148.5 723.0Q160 712 160 688V357L156 363H165Q197 410 242.5 436.0Q288 462 336 462Q386 462 422.5 436.0Q459 410 479.5 362.5Q500 315 500 250Q500 171 469.5 112.0Q439 53 381.0 20.5Q323 -12 240 -12ZM261 27Q340 27 376.0 76.0Q412 125 412 231Q412 323 385.0 366.0Q358 409 300 409Q269 409 243.5 397.5Q218 386 196.0 364.5Q174 343 153 313L163 336V44L153 62Q182 43 207.5 35.0Q233 27 261 27Z" transform="translate(1522,0)"/><path d="M237 -12Q176 -12 130.5 15.5Q85 43 60.0 92.0Q35 141 35 205Q35 278 65.5 336.0Q96 394 147.0 428.0Q198 462 258 462Q310 462 348.5 438.5Q387 415 409.0 373.0Q431 331 431 276Q431 257 424.0 250.5Q417 244 408 244H93V275L365 282L354 271Q356 319 342.5 354.0Q329 389 304.5 408.5Q280 428 247 428Q192 428 157.0 377.0Q122 326 122 233Q122 173 139.5 128.5Q157 84 191.0 59.0Q225 34 273 34Q313 34 350.0 54.5Q387 75 416 112L429 87Q408 57 377.0 34.5Q346 12 310.5 0.0Q275 -12 237 -12Z" transform="translate(2163,0)"/><path d="M42 0Q42 17 46.0 25.0Q50 33 58 36L118 55L107 41V692L119 677L57 688Q42 691 42 723Q75 728 98.0 731.0Q121 734 142 734Q188 734 188 676V43L176 56L257 37Q257 22 253.5 14.5Q250 7 239 0Z" transform="translate(2736,0)"/><path d="M151 -12Q104 -12 73.0 15.5Q42 43 42 89Q42 146 78.5 182.0Q115 218 188 235L319 265L306 254V329Q306 382 288.0 406.5Q270 431 232 431Q186 431 161.0 403.5Q136 376 136 324Q131 319 122.0 316.0Q113 313 104 313Q87 313 77.0 323.0Q67 333 67 350Q67 383 90.0 408.0Q113 433 153.5 447.5Q194 462 244 462Q318 462 352.5 425.0Q387 388 387 307V72Q387 55 394.0 46.0Q401 37 414 37Q425 37 438.5 43.0Q452 49 461 56L468 29Q452 10 427.0 -1.0Q402 -12 379 -12Q347 -12 329.0 8.5Q311 29 311 67H307Q279 29 238.0 8.5Q197 -12 151 -12ZM189 35Q225 35 258.0 53.0Q291 71 313 103L307 86V236L320 234L206 207Q163 197 140.5 172.5Q118 148 118 111Q118 76 137.0 55.5Q156 35 189 35Z" transform="translate(3136,0)"/><path d="M201 -12Q128 -12 81.5 19.5Q35 51 35 95Q35 118 47.0 129.0Q59 140 77 140Q100 140 113 125Q113 72 137.0 45.0Q161 18 209 18Q253 18 278.0 40.0Q303 62 303 102Q303 133 287.0 152.0Q271 171 245.0 183.0Q219 195 189 206Q157 218 126.0 234.0Q95 250 75.0 275.5Q55 301 55 339Q55 394 99.0 428.0Q143 462 217 462Q259 462 293.0 451.0Q327 440 347.0 420.5Q367 401 367 376Q367 357 355.0 346.5Q343 336 325 336Q309 336 295 347Q295 388 272.0 410.0Q249 432 209 432Q172 432 150.0 414.0Q128 396 128 365Q128 339 142.5 322.5Q157 306 181.0 295.0Q205 284 232 273Q267 260 301.5 243.0Q336 226 359.0 199.5Q382 173 382 129Q382 86 359.0 54.5Q336 23 295.0 5.5Q254 -12 201 -12Z" transform="translate(4002,0)"/><path d="M50 0Q50 32 66 36L126 55L115 41V413L127 398L65 409Q50 411 50 444Q84 449 106.5 451.5Q129 454 151 454Q197 454 197 397V43L185 56L265 37Q265 22 261.5 14.5Q258 7 247 0ZM152 553Q128 553 115.0 566.5Q102 580 102 602Q102 624 117.5 638.0Q133 652 152 652Q176 652 189.5 638.5Q203 625 203 602Q203 581 187.5 567.0Q172 553 152 553Z" transform="translate(4523,0)"/><path d="M279 0Q279 32 295 36L362 55L343 28L75 404L106 385L22 406Q22 421 26.5 428.5Q31 436 41 443H229Q229 411 213 407L147 388L164 414L432 40L403 58L486 37Q486 22 482.5 14.5Q479 7 468 0ZM14 0Q14 32 30 36L105 60L63 32L216 235L245 200L115 24L114 56L186 37Q186 19 182.5 11.5Q179 4 168 0ZM280 214 251 251 376 420 374 388 300 406Q300 424 303.5 431.5Q307 439 317 443H472Q472 412 456 407L386 384L427 411Z" transform="translate(4933,0)"/><path d="M237 -12Q176 -12 130.5 15.5Q85 43 60.0 92.0Q35 141 35 205Q35 278 65.5 336.0Q96 394 147.0 428.0Q198 462 258 462Q310 462 348.5 438.5Q387 415 409.0 373.0Q431 331 431 276Q431 257 424.0 250.5Q417 244 408 244H93V275L365 282L354 271Q356 319 342.5 354.0Q329 389 304.5 408.5Q280 428 247 428Q192 428 157.0 377.0Q122 326 122 233Q122 173 139.5 128.5Q157 84 191.0 59.0Q225 34 273 34Q313 34 350.0 54.5Q387 75 416 112L429 87Q408 57 377.0 34.5Q346 12 310.5 0.0Q275 -12 237 -12Z" transform="translate(5537,0)"/><path d="M42 0Q42 17 46.0 25.0Q50 33 58 36L118 55L107 41V692L119 677L57 688Q42 691 42 723Q75 728 98.0 731.0Q121 734 142 734Q188 734 188 676V43L176 56L257 37Q257 22 253.5 14.5Q250 7 239 0Z" transform="translate(6110,0)"/><path d="M 70.0 -173.5 L 166.7 -172.1 L 361.5 -166.3 L 459.5 -165.6 L 1055.7 -166.1 L 5126.3 -172.0 L 6280.0 -178.6 L 6335.1 -179.6 L 6413.5 -182.5 L 6486.7 -187.3 L 6554.4 -193.9 L 6606.4 -200.9 L 6663.1 -211.0 L 6705.4 -220.7 L 6750.0 -234.2 L 6781.9 -246.8 L 6808.7 -260.9 L 6830.3 -276.3 L 6847.6 -294.1 L 6855.7 -305.1 L 6862.0 -316.0 L 6866.6 -327.0 L 6869.4 -337.8 L 6870.6 -348.4 L 6870.2 -358.7 L 6868.1 -368.6 L 6864.6 -378.1 L 6859.6 -386.9 L 6853.2 -395.2 L 6839.6 -407.3 L 6826.3 -415.4 L 6806.7 -423.2 L 6788.9 -427.5 L 6769.3 -429.8 L 6748.0 -429.9 L 6728.0 -427.7 L 6707.2 -422.5 L 6690.1 -415.2 L 6676.8 -406.0 L 6667.7 -395.5 L 6664.0 -388.0 L 6662.6 -382.2 L 6662.3 -376.4 L 6663.3 -370.6 L 6665.5 -365.0 L 6669.0 -359.5 L 6673.7 -354.4 L 6679.7 -349.6 L 6695.7 -341.4 L 6696.3 -342.6 L 6682.8 -349.3 L 6671.5 -358.7 L 6667.8 -363.9 L 6665.3 -369.2 L 6664.0 -374.6 L 6664.1 -382.0 L 6666.2 -389.3 L 6669.0 -394.6 L 6677.9 -404.8 L 6690.9 -413.7 L 6707.8 -420.7 L 6728.3 -425.7 L 6748.0 -427.7 L 6769.1 -427.3 L 6788.4 -424.8 L 6805.8 -420.4 L 6824.8 -412.5 L 6837.6 -404.5 L 6850.5 -392.7 L 6856.4 -384.8 L 6862.2 -373.5 L 6864.9 -364.5 L 6866.2 -355.0 L 6865.9 -345.3 L 6864.2 -335.3 L 6860.8 -325.1 L 6855.7 -314.8 L 6849.0 -304.4 L 6840.4 -294.1 L 6822.8 -277.7 L 6800.7 -263.4 L 6773.3 -250.5 L 6740.8 -238.8 L 6703.4 -228.5 L 6661.4 -219.5 L 6605.0 -210.3 L 6553.3 -203.9 L 6485.9 -197.9 L 6413.0 -193.5 L 6334.8 -190.7 L 6280.0 -189.8 L 6175.9 -189.9 L 5126.3 -193.0 L 459.5 -186.6 L 361.5 -185.8 L 166.7 -179.9 L 70.0 -178.5 Z"/></g>
</svg>
```

## B2 · assinatura-fio-compacta — rodapé e e-mail, 140–300 px

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="20 -764 6882 1225" role="img" aria-label="Isabela Sixel">
  <g transform="scale(1,-1)" fill="currentColor"><path d="M50 0Q50 32 66 36L126 55L115 41V413L127 398L65 409Q50 411 50 444Q84 449 106.5 451.5Q129 454 151 454Q197 454 197 397V43L185 56L265 37Q265 22 261.5 14.5Q258 7 247 0ZM152 553Q128 553 115.0 566.5Q102 580 102 602Q102 624 117.5 638.0Q133 652 152 652Q176 652 189.5 638.5Q203 625 203 602Q203 581 187.5 567.0Q172 553 152 553Z" transform="translate(0,0)"/><path d="M201 -12Q128 -12 81.5 19.5Q35 51 35 95Q35 118 47.0 129.0Q59 140 77 140Q100 140 113 125Q113 72 137.0 45.0Q161 18 209 18Q253 18 278.0 40.0Q303 62 303 102Q303 133 287.0 152.0Q271 171 245.0 183.0Q219 195 189 206Q157 218 126.0 234.0Q95 250 75.0 275.5Q55 301 55 339Q55 394 99.0 428.0Q143 462 217 462Q259 462 293.0 451.0Q327 440 347.0 420.5Q367 401 367 376Q367 357 355.0 346.5Q343 336 325 336Q309 336 295 347Q295 388 272.0 410.0Q249 432 209 432Q172 432 150.0 414.0Q128 396 128 365Q128 339 142.5 322.5Q157 306 181.0 295.0Q205 284 232 273Q267 260 301.5 243.0Q336 226 359.0 199.5Q382 173 382 129Q382 86 359.0 54.5Q336 23 295.0 5.5Q254 -12 201 -12Z" transform="translate(410,0)"/><path d="M151 -12Q104 -12 73.0 15.5Q42 43 42 89Q42 146 78.5 182.0Q115 218 188 235L319 265L306 254V329Q306 382 288.0 406.5Q270 431 232 431Q186 431 161.0 403.5Q136 376 136 324Q131 319 122.0 316.0Q113 313 104 313Q87 313 77.0 323.0Q67 333 67 350Q67 383 90.0 408.0Q113 433 153.5 447.5Q194 462 244 462Q318 462 352.5 425.0Q387 388 387 307V72Q387 55 394.0 46.0Q401 37 414 37Q425 37 438.5 43.0Q452 49 461 56L468 29Q452 10 427.0 -1.0Q402 -12 379 -12Q347 -12 329.0 8.5Q311 29 311 67H307Q279 29 238.0 8.5Q197 -12 151 -12ZM189 35Q225 35 258.0 53.0Q291 71 313 103L307 86V236L320 234L206 207Q163 197 140.5 172.5Q118 148 118 111Q118 76 137.0 55.5Q156 35 189 35Z" transform="translate(931,0)"/><path d="M240 -12Q202 -12 160.5 -2.5Q119 7 84 26V692L95 677L37 688Q21 691 21 723Q61 729 80.0 731.5Q99 734 112 734Q137 734 148.5 723.0Q160 712 160 688V357L156 363H165Q197 410 242.5 436.0Q288 462 336 462Q386 462 422.5 436.0Q459 410 479.5 362.5Q500 315 500 250Q500 171 469.5 112.0Q439 53 381.0 20.5Q323 -12 240 -12ZM261 27Q340 27 376.0 76.0Q412 125 412 231Q412 323 385.0 366.0Q358 409 300 409Q269 409 243.5 397.5Q218 386 196.0 364.5Q174 343 153 313L163 336V44L153 62Q182 43 207.5 35.0Q233 27 261 27Z" transform="translate(1522,0)"/><path d="M237 -12Q176 -12 130.5 15.5Q85 43 60.0 92.0Q35 141 35 205Q35 278 65.5 336.0Q96 394 147.0 428.0Q198 462 258 462Q310 462 348.5 438.5Q387 415 409.0 373.0Q431 331 431 276Q431 257 424.0 250.5Q417 244 408 244H93V275L365 282L354 271Q356 319 342.5 354.0Q329 389 304.5 408.5Q280 428 247 428Q192 428 157.0 377.0Q122 326 122 233Q122 173 139.5 128.5Q157 84 191.0 59.0Q225 34 273 34Q313 34 350.0 54.5Q387 75 416 112L429 87Q408 57 377.0 34.5Q346 12 310.5 0.0Q275 -12 237 -12Z" transform="translate(2163,0)"/><path d="M42 0Q42 17 46.0 25.0Q50 33 58 36L118 55L107 41V692L119 677L57 688Q42 691 42 723Q75 728 98.0 731.0Q121 734 142 734Q188 734 188 676V43L176 56L257 37Q257 22 253.5 14.5Q250 7 239 0Z" transform="translate(2736,0)"/><path d="M151 -12Q104 -12 73.0 15.5Q42 43 42 89Q42 146 78.5 182.0Q115 218 188 235L319 265L306 254V329Q306 382 288.0 406.5Q270 431 232 431Q186 431 161.0 403.5Q136 376 136 324Q131 319 122.0 316.0Q113 313 104 313Q87 313 77.0 323.0Q67 333 67 350Q67 383 90.0 408.0Q113 433 153.5 447.5Q194 462 244 462Q318 462 352.5 425.0Q387 388 387 307V72Q387 55 394.0 46.0Q401 37 414 37Q425 37 438.5 43.0Q452 49 461 56L468 29Q452 10 427.0 -1.0Q402 -12 379 -12Q347 -12 329.0 8.5Q311 29 311 67H307Q279 29 238.0 8.5Q197 -12 151 -12ZM189 35Q225 35 258.0 53.0Q291 71 313 103L307 86V236L320 234L206 207Q163 197 140.5 172.5Q118 148 118 111Q118 76 137.0 55.5Q156 35 189 35Z" transform="translate(3136,0)"/><path d="M201 -12Q128 -12 81.5 19.5Q35 51 35 95Q35 118 47.0 129.0Q59 140 77 140Q100 140 113 125Q113 72 137.0 45.0Q161 18 209 18Q253 18 278.0 40.0Q303 62 303 102Q303 133 287.0 152.0Q271 171 245.0 183.0Q219 195 189 206Q157 218 126.0 234.0Q95 250 75.0 275.5Q55 301 55 339Q55 394 99.0 428.0Q143 462 217 462Q259 462 293.0 451.0Q327 440 347.0 420.5Q367 401 367 376Q367 357 355.0 346.5Q343 336 325 336Q309 336 295 347Q295 388 272.0 410.0Q249 432 209 432Q172 432 150.0 414.0Q128 396 128 365Q128 339 142.5 322.5Q157 306 181.0 295.0Q205 284 232 273Q267 260 301.5 243.0Q336 226 359.0 199.5Q382 173 382 129Q382 86 359.0 54.5Q336 23 295.0 5.5Q254 -12 201 -12Z" transform="translate(4002,0)"/><path d="M50 0Q50 32 66 36L126 55L115 41V413L127 398L65 409Q50 411 50 444Q84 449 106.5 451.5Q129 454 151 454Q197 454 197 397V43L185 56L265 37Q265 22 261.5 14.5Q258 7 247 0ZM152 553Q128 553 115.0 566.5Q102 580 102 602Q102 624 117.5 638.0Q133 652 152 652Q176 652 189.5 638.5Q203 625 203 602Q203 581 187.5 567.0Q172 553 152 553Z" transform="translate(4523,0)"/><path d="M279 0Q279 32 295 36L362 55L343 28L75 404L106 385L22 406Q22 421 26.5 428.5Q31 436 41 443H229Q229 411 213 407L147 388L164 414L432 40L403 58L486 37Q486 22 482.5 14.5Q479 7 468 0ZM14 0Q14 32 30 36L105 60L63 32L216 235L245 200L115 24L114 56L186 37Q186 19 182.5 11.5Q179 4 168 0ZM280 214 251 251 376 420 374 388 300 406Q300 424 303.5 431.5Q307 439 317 443H472Q472 412 456 407L386 384L427 411Z" transform="translate(4933,0)"/><path d="M237 -12Q176 -12 130.5 15.5Q85 43 60.0 92.0Q35 141 35 205Q35 278 65.5 336.0Q96 394 147.0 428.0Q198 462 258 462Q310 462 348.5 438.5Q387 415 409.0 373.0Q431 331 431 276Q431 257 424.0 250.5Q417 244 408 244H93V275L365 282L354 271Q356 319 342.5 354.0Q329 389 304.5 408.5Q280 428 247 428Q192 428 157.0 377.0Q122 326 122 233Q122 173 139.5 128.5Q157 84 191.0 59.0Q225 34 273 34Q313 34 350.0 54.5Q387 75 416 112L429 87Q408 57 377.0 34.5Q346 12 310.5 0.0Q275 -12 237 -12Z" transform="translate(5537,0)"/><path d="M42 0Q42 17 46.0 25.0Q50 33 58 36L118 55L107 41V692L119 677L57 688Q42 691 42 723Q75 728 98.0 731.0Q121 734 142 734Q188 734 188 676V43L176 56L257 37Q257 22 253.5 14.5Q250 7 239 0Z" transform="translate(6110,0)"/><path d="M 70.0 -171.5 L 166.7 -169.3 L 361.5 -160.2 L 459.5 -159.1 L 855.5 -159.4 L 5126.3 -165.5 L 5442.5 -167.5 L 6335.2 -176.6 L 6413.7 -179.5 L 6475.1 -183.4 L 6543.8 -189.9 L 6606.8 -198.3 L 6663.5 -208.6 L 6705.9 -218.6 L 6750.7 -232.3 L 6782.6 -245.1 L 6809.6 -259.4 L 6831.3 -275.1 L 6848.8 -293.1 L 6856.9 -304.2 L 6863.3 -315.4 L 6867.9 -326.5 L 6870.7 -337.6 L 6871.9 -348.4 L 6871.4 -358.9 L 6869.3 -368.9 L 6865.7 -378.5 L 6860.5 -387.6 L 6854.0 -395.9 L 6840.2 -408.1 L 6826.7 -416.3 L 6807.0 -424.1 L 6789.0 -428.3 L 6769.3 -430.5 L 6747.9 -430.7 L 6727.9 -428.4 L 6707.0 -423.1 L 6689.8 -415.8 L 6676.4 -406.5 L 6667.2 -395.8 L 6663.5 -388.1 L 6662.1 -382.3 L 6661.8 -376.3 L 6662.8 -370.4 L 6665.0 -364.7 L 6668.6 -359.2 L 6673.4 -354.0 L 6679.4 -349.2 L 6695.5 -340.9 L 6696.5 -343.1 L 6683.0 -349.7 L 6671.9 -359.1 L 6668.2 -364.1 L 6665.8 -369.3 L 6664.5 -374.7 L 6664.6 -381.9 L 6666.7 -389.1 L 6669.5 -394.3 L 6678.3 -404.4 L 6691.2 -413.2 L 6708.0 -420.1 L 6728.4 -425.0 L 6748.1 -426.9 L 6769.0 -426.5 L 6788.2 -424.0 L 6805.6 -419.6 L 6824.4 -411.7 L 6837.0 -403.7 L 6849.6 -392.0 L 6855.5 -384.2 L 6861.1 -373.1 L 6863.7 -364.2 L 6864.9 -355.0 L 6864.6 -345.4 L 6862.8 -335.7 L 6859.5 -325.7 L 6854.5 -315.5 L 6847.8 -305.3 L 6839.3 -295.1 L 6821.7 -279.0 L 6799.8 -265.0 L 6772.5 -252.2 L 6740.2 -240.8 L 6702.9 -230.7 L 6660.9 -221.8 L 6604.6 -212.8 L 6553.0 -206.7 L 6485.7 -200.8 L 6412.8 -196.5 L 6334.7 -193.7 L 6280.0 -192.9 L 6175.9 -193.1 L 5442.5 -198.5 L 5126.3 -199.5 L 459.5 -193.1 L 361.5 -191.9 L 166.7 -182.7 L 70.0 -180.5 Z"/></g>
</svg>
```

## B3 · selo — favicon e avatar, ≥ 16 px

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="20 -682 742 724" role="img" aria-label="Isabela Sixel">
  <g transform="scale(1,-1)" fill="currentColor"><path d="M50 0Q50 32 66 36L126 55L115 41V413L127 398L65 409Q50 411 50 444Q84 449 106.5 451.5Q129 454 151 454Q197 454 197 397V43L185 56L265 37Q265 22 261.5 14.5Q258 7 247 0ZM152 553Q128 553 115.0 566.5Q102 580 102 602Q102 624 117.5 638.0Q133 652 152 652Q176 652 189.5 638.5Q203 625 203 602Q203 581 187.5 567.0Q172 553 152 553Z" transform="translate(0,0)"/><path d="M201 -12Q128 -12 81.5 19.5Q35 51 35 95Q35 118 47.0 129.0Q59 140 77 140Q100 140 113 125Q113 72 137.0 45.0Q161 18 209 18Q253 18 278.0 40.0Q303 62 303 102Q303 133 287.0 152.0Q271 171 245.0 183.0Q219 195 189 206Q157 218 126.0 234.0Q95 250 75.0 275.5Q55 301 55 339Q55 394 99.0 428.0Q143 462 217 462Q259 462 293.0 451.0Q327 440 347.0 420.5Q367 401 367 376Q367 357 355.0 346.5Q343 336 325 336Q309 336 295 347Q295 388 272.0 410.0Q249 432 209 432Q172 432 150.0 414.0Q128 396 128 365Q128 339 142.5 322.5Q157 306 181.0 295.0Q205 284 232 273Q267 260 301.5 243.0Q336 226 359.0 199.5Q382 173 382 129Q382 86 359.0 54.5Q336 23 295.0 5.5Q254 -12 201 -12Z" transform="translate(350,0)"/></g>
</svg>
```

> As demais versões (`assinatura` sem fio, `assinatura-descritor`, `selo-fio` e
> todas as variantes de cor fixa) estão no arquivo `isabela-sixel-kit.zip`.
