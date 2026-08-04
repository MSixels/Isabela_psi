import FotoPlaceholder from "./FotoPlaceholder";
import SectionLabel from "./SectionLabel";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="revelar grid border-b border-areia md:grid-cols-[0.85fr_1.15fr]"
    >
      {/* Coluna da foto (ambiente acolhedor). TODO: trocar por <Image fill
          className="object-cover"> quando a foto real chegar. */}
      <FotoPlaceholder
        label="FOTO — Isabela, ambiente acolhedor"
        className="aspect-[4/3] md:aspect-auto md:min-h-[420px]"
      />

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
