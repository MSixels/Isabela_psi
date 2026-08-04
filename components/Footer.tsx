import Image from "next/image";
import AcaoLink from "./AcaoLink";
import WhatsappButton from "./WhatsappButton";

const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#como", label: "Como funciona" },
  { href: "#formacao", label: "Formação" },
  { href: "#faq", label: "Perguntas" },
];

const PERFIL = "https://instagram.com/isabelasixelpsi";

export default function Footer() {
  // TODO: página estática — o ano é resolvido no build. Numa virada de ano sem
  // redeploy, mostra o ano anterior até o próximo build.
  const ano = new Date().getFullYear();

  return (
    <footer className="flex flex-wrap items-start justify-between gap-10 px-6 py-14 md:px-[60px]">
      <div>
        {/* ~190px de largura → faixa mini (150–260px), fio íntegro. */}
        <Image
          src="/marca/assinatura-fio-mini-umbre.svg"
          alt="Isabela Sixel"
          width={190}
          height={34}
          className="h-auto w-[190px]"
        />
        <p className="mt-[14px] max-w-[32ch] font-ui text-[13px] text-texto-suave">
          Psicanálise clínica com escuta cristã. Análise online, atendimento em
          todo o Brasil.
        </p>
      </div>

      {/* Única navegação por âncora no mobile (o menu do header some abaixo de
          900px) — por isso NÃO se esconde. */}
      <nav className="flex flex-col gap-[10px]">
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-ui text-[14px] text-texto-corpo transition-colors hover:text-barro"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex flex-col gap-[10px]">
        <AcaoLink
          href={PERFIL}
          evento="seguir_instagram"
          secao="rodape"
          variante="texto"
        >
          @isabelasixelpsi
        </AcaoLink>
        <WhatsappButton secao="rodape" variante="texto">
          Agendar pelo WhatsApp
        </WhatsappButton>
        <span className="mt-[6px] font-ui text-[12px] text-texto-suave">
          © {ano} Isabela Sixel
        </span>
      </div>
    </footer>
  );
}
