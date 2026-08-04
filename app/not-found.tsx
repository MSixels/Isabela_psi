import Link from "next/link";
import Image from "next/image";

// 404 na identidade da marca — sóbria, sem humor nem ilustração. /artigos cai
// aqui enquanto não houver 3 textos, então ela será vista.
export default function NotFound() {
  return (
    <main
      id="conteudo-principal"
      className="mx-auto flex min-h-screen max-w-[520px] flex-col items-center justify-center px-6 py-16 text-center"
    >
      <Image
        src="/marca/assinatura-fio-mini-umbre.svg"
        alt="Isabela Sixel"
        width={225}
        height={40}
        className="h-auto w-[225px]"
      />
      <h1 className="mt-10 font-display text-[clamp(28px,5vw,40px)] font-light text-umbre">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-[40ch] font-display text-corpo leading-[1.7] text-texto-corpo">
        A página que você procurou não existe ou ainda não foi publicada.
      </p>
      <Link
        href="/"
        className="mt-8 font-ui text-[14px] text-barro transition-colors hover:text-barro-hover"
      >
        Voltar para a página inicial
      </Link>
    </main>
  );
}
