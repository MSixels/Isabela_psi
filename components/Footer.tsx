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

// UTM para medir quantas visitas vêm deste crédito (não é enfeite).
const CREDITO =
  "https://portifolio-theta-tan-81.vercel.app/?utm_source=isabelasixel&utm_medium=footer&utm_campaign=credito";

export default function Footer() {
  // TODO: página estática — o ano é resolvido no build. Numa virada de ano sem
  // redeploy, mostra o ano anterior até o próximo build.
  const ano = new Date().getFullYear();

  return (
    <footer className="px-6 py-14 md:px-[60px]">
      <div className="flex flex-wrap items-start justify-between gap-10">
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
          Psicanálise clínica com escuta cristã. Análise online, atendimento no
          Brasil e no exterior.
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
      </div>
      </div>

      {/* Fecho: © de um lado, crédito de autoria do outro. No mobile empilha. */}
      <div className="mt-12 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-ui text-[12px] text-texto-suave">
          © {ano} Isabela Sixel
        </span>
        <span className="font-ui text-[12px] text-texto-suave">
          Site por{" "}
          <AcaoLink
            href={CREDITO}
            evento="credito_dev"
            secao="rodape"
            variante="discreto"
            ariaLabel="Portfólio de Matheus Sixel, desenvolvedor do site"
          >
            Matheus Sixel
          </AcaoLink>
        </span>
      </div>
    </footer>
  );
}
