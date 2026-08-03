import { notFound } from "next/navigation";

// A rota /artigos já existe, mas fica oculta (404) até haver 3 artigos
// publicados. Trava a decisão de arquitetura agora, sem custo.
// TODO: quando o conteúdo em MDX entrar, listar via getPosts() e remover o
// notFound() assim que artigos.length >= 3.
export default function ArtigosPage() {
  notFound();
}
