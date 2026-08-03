# Kit de marca · isabela sixel

Marca fechada: assinatura tipográfica em **Petrona**, com o **fio** solto no fim.
Paleta **Argila**. Selo tipográfico ("is" recortado da própria Petrona).

Comece por **`guia-de-marca.html`** (abra no navegador) e por **`brief-claude-design.md`**
(cole inteiro no Claude Design para iniciar a landing).

## Pastas

| Pasta | O que tem |
|---|---|
| `svg/` | 7 artes × 4 versões de cor. **Use estes na web.** |
| `png/` | Fundo transparente, @1x e @2x, em umbre e aveia. |
| `favicon/` | 16 / 32 / 48 px, apple-touch 180, ícone 512, `site.webmanifest`. |
| `instagram/` | Capas de destaque 1080×1920 (4 cores), 3 templates de post 1080×1080, foto de perfil. |
| `tokens/` | `tokens.css`, `tokens.json`, `tailwind-theme.css` (Tailwind v4). |

## Qual arquivo usar

Os SVGs **sem sufixo de cor** usam `currentColor` — herdam a cor do CSS. São os certos para a web.
Os sufixados (`-umbre`, `-aveia`, `-barro`) têm a cor fixa: use em e-mail, PDF e onde não há CSS.

| Situação | Arquivo | Tamanho |
|---|---|---|
| Cabeçalho da landing | `assinatura-fio` | ≥ 300 px |
| Rodapé, assinatura de e-mail | `assinatura-fio-compacta` | 140–300 px |
| Espaço apertado | `assinatura` | < 140 px |
| Cartão, PDF, apresentação | `assinatura-descritor` | sem fio, sempre |
| Capa de destaque, carimbo | `selo-fio` | ≥ 44 px |
| Favicon, avatar, marca d'água | `selo` | ≥ 16 px |

## As três regras que não se quebram

1. **O fio nunca sai de dentro da letra.** É elemento próprio, sempre por baixo.
2. **Quando não couber, o fio sai inteiro.** Nunca engrossa por conta própria, nunca some pela metade.
3. **Selo e assinatura não convivem no mesmo bloco.** É uma marca, não duas.

## Fontes

- Petrona — https://fonts.google.com/specimen/Petrona (300, 400, itálico)
- Karla — https://fonts.google.com/specimen/Karla (400, 500)

Os SVGs **não dependem de fonte instalada**: são contornos vetoriais, não texto.

## Nota técnica

O fio tem espessura variável (21 unidades no corpo, afilando a 1,4 nas pontas) e uma
queda de ~11 unidades no meio do vão. É o que faz ele ler como fio e não como sublinhado.
A versão compacta usa 34 unidades para compensar opticamente os tamanhos menores.
