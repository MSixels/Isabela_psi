import Image from "next/image";
import SectionLabel from "./SectionLabel";
import WhatsappButton from "./WhatsappButton";

export default function Hero() {
  return (
    <section className="grid border-b border-areia md:grid-cols-[1.1fr_0.9fr]">
      {/* Coluna de texto */}
      <div className="flex flex-col justify-center px-6 py-16 md:px-[60px] md:py-[88px]">
        <SectionLabel className="mb-[26px]">Psicanálise cristã online</SectionLabel>

        <h1 className="max-w-[15ch] font-display text-hero font-light leading-[1.1] text-umbre">
          Análise online para mulheres que carregam mais do que conseguem
          nomear.
        </h1>

        <p className="mt-[26px] max-w-[46ch] font-display text-[18px] leading-[1.65] text-texto-corpo">
          Psicanálise clínica com escuta cristã. Um espaço para entender o que
          se repete — sem julgamento, no seu tempo.
        </p>

        <WhatsappButton secao="hero" size="md" className="mt-9 self-start">
          Agendar uma primeira conversa
        </WhatsappButton>

        <p className="mt-4 font-ui text-[14px] text-texto-suave">
          Uma primeira conversa, gratuita, pelo WhatsApp.
        </p>
      </div>

      {/* Coluna da foto (retrato 3:4, mesma proporção do slot). É o LCP da
          página → priority. Renderiza ~531px no desktop (coluna 0.9fr de 1180). */}
      <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[480px]">
        <Image
          src="/hero-isabela.jpg"
          alt="Isabela Sixel, psicanalista, sorrindo para a câmera."
          fill
          priority
          sizes="(min-width: 768px) 531px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
