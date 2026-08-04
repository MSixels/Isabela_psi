import Image from "next/image";
import AcaoLink from "./AcaoLink";
import SectionLabel from "./SectionLabel";
import { getPosts } from "@/lib/posts";

const PERFIL = "https://instagram.com/isabelasixelpsi";

export default function Conteudo() {
  const posts = getPosts();

  return (
    <section
      id="conteudo"
      className="revelar border-b border-areia px-6 py-[clamp(64px,8vw,104px)] md:px-[60px]"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[46ch]">
          <SectionLabel className="mb-[18px]">Conteúdo</SectionLabel>
          <h2 className="font-display text-h2 font-light text-umbre">
            No Instagram, escrevo sobre o que aperta.
          </h2>
        </div>
        <AcaoLink
          href={PERFIL}
          evento="seguir_instagram"
          secao="conteudo"
          size="follow"
        >
          Seguir @isabelasixelpsi
        </AcaoLink>
      </div>

      {/* Imagens NÃO são links individuais: o único href da seção é o do perfil
          (acima). Quando um post tiver `permalink`, o card passa a linká-lo. */}
      <ul
        className="m-0 grid list-none gap-5 p-0"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
        }}
      >
        {posts.map((post) => {
          const img = (
            <Image
              src={post.src}
              alt={post.alt}
              width={1080}
              height={1080}
              sizes="(min-width: 640px) 360px, 90vw"
              className="block h-auto w-full"
            />
          );
          return (
            <li
              key={post.id}
              className="conteudo-card border border-areia leading-[0]"
            >
              {post.permalink ? (
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block leading-[0]"
                >
                  {img}
                </a>
              ) : (
                img
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
