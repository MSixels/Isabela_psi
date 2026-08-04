import { POSTS_CURADOS, type Post } from "@/content/instagram";

export type { Post };

// Única porta de entrada de posts. Hoje devolve os curados de content/instagram;
// na FASE 2 pode passar a ler do Postgres sem que nenhum componente saiba a
// origem. Nenhum componente importa POSTS_CURADOS direto — sempre via aqui.
export function getPosts(): Post[] {
  return POSTS_CURADOS;
}
