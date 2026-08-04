export type Post = {
  id: string;
  src: string;
  alt: string;
  /**
   * Permalink do post real no Instagram. Ausente nos placeholders de marca —
   * quando presente, o card passa a linkar seu próprio post (não o perfil).
   */
  permalink?: string;
};

// TODO: PLACEHOLDERS DE MARCA. As três imagens são templates do kit
// (design/isabela-sixel-kit/instagram), NÃO publicações reais da Isabela.
// Quando houver posts reais (curadoria manual ou FASE 2), trocar src/alt e
// preencher `permalink` de cada um — o JSX já linka sozinho quando existir.
export const POSTS_CURADOS: Post[] = [
  {
    id: "citacao",
    src: "/instagram/post-citacao.png",
    alt: "Publicação: O que não se elabora, se repete.",
  },
  {
    id: "capa-tema",
    src: "/instagram/post-capa-tema.png",
    alt: "Publicação sobre ansiedade: A pressa de garantir o amanhã.",
  },
  {
    id: "selo",
    src: "/instagram/post-selo.png",
    alt: "Publicação da marca Isabela Sixel.",
  },
];
