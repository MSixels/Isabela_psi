import Image from "next/image";
import SectionLabel from "./SectionLabel";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="revelar grid border-b border-areia md:grid-cols-[0.85fr_1.15fr]"
    >
      {/* Duas placas de marca sobrepostas: citação por padrão, crossfade para a
          de marca no hover (só onde há hover; ver globals). A de marca é
          decorativa (alt vazio + aria-hidden): quem não tem hover não perde nada. */}
      <div className="sobre-placa relative aspect-[4/3] md:aspect-auto md:min-h-[420px]">
        <Image
          src="/placa-marca.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 768px) 501px, 100vw"
          className="sobre-marca object-cover"
        />
        <Image
          src="/placa-citacao.jpg"
          alt="Isabela Sixel — psicanálise clínica. Escuto o que se repete: o padrão que insiste em aparecer."
          fill
          sizes="(min-width: 768px) 501px, 100vw"
          className="sobre-citacao object-cover"
        />
      </div>

      <div className="px-6 py-[clamp(56px,7vw,96px)] md:px-[60px]">
        <SectionLabel className="mb-[22px]">Sobre</SectionLabel>

        <div className="max-w-[60ch]">
          <p className="mb-[22px] font-display text-[20px] leading-[1.6] text-umbre">
            Sou Isabela Sixel. Atendo mulheres que aprenderam a dar conta de
            tudo e chegam cansadas de segurar sozinhas o que ninguém vê.
          </p>
          <p className="mb-5 font-display text-corpo leading-[1.7] text-texto-corpo">
            Vim para a psicanálise porque ela não corre atrás de respostas
            prontas. Ela escuta o que se repete — o pensamento que volta, o
            padrão que insiste, a angústia que não tem nome — e dá tempo para que
            isso seja elaborado.
          </p>
          <p className="font-display text-corpo leading-[1.7] text-texto-corpo">
            A fé cristã não fica do lado de fora da sala. Para mim, ela é a
            lente: é a partir dela que escuto o que você traz. Sem julgamento, no
            seu tempo.
          </p>
        </div>
      </div>
    </section>
  );
}
