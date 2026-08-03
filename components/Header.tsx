import Image from "next/image";
import WhatsappButton from "./WhatsappButton";

const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#como", label: "Como funciona" },
  { href: "#formacao", label: "Formação" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#faq", label: "Perguntas" },
];

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-areia px-6 py-[22px] md:px-10">
      <a href="#topo" className="block leading-[0]">
        {/* Regra de marca por tamanho: mobile não comporta o fio, então usa a
            assinatura (wordmark, <140px); a partir de md entra a assinatura-fio
            a 300px, o mínimo permitido para essa versão. */}
        <Image
          src="/marca/assinatura-umbre.svg"
          alt="Isabela Sixel"
          width={132}
          height={17}
          priority
          className="h-auto w-[132px] md:hidden"
        />
        <Image
          src="/marca/assinatura-fio-umbre.svg"
          alt="Isabela Sixel"
          width={300}
          height={53}
          priority
          className="hidden h-auto w-[300px] md:block"
        />
      </a>

      <nav className="flex items-center gap-x-[26px] gap-y-3">
        <div className="hidden items-center gap-[26px] md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-ui text-[14px] text-texto-corpo transition-colors hover:text-barro"
            >
              {item.label}
            </a>
          ))}
        </div>
        <WhatsappButton secao="header" size="sm">
          Agendar conversa
        </WhatsappButton>
      </nav>
    </header>
  );
}
