const CARDS = [
  "Você funciona bem por fora e está exausta por dentro.",
  "Adia justamente o que mais importa e não entende por quê.",
  "Repete o mesmo padrão em relações diferentes.",
  "Reza pedindo paz e continua acordando às três da manhã.",
  "Sente que precisa dar conta de tudo — e sozinha.",
  "Tem uma inquietação constante que não consegue nomear.",
];

export default function Sintomas() {
  return (
    <section className="border-b border-areia px-6 py-[clamp(64px,8vw,104px)] md:px-[60px]">
      <div className="mb-11 max-w-[66ch]">
        <h2 className="font-display text-h2 font-light text-umbre">
          Talvez você se reconheça aqui
        </h2>
        <p className="mt-[14px] font-display text-corpo leading-[1.6] text-texto-corpo">
          Não é sobre um diagnóstico. É sobre o que aperta e você ainda não
          conseguiu nomear.
        </p>
      </div>

      {/* Lista real (semântica): seis frases que a pessoa pode reconhecer. */}
      <ul className="m-0 grid list-none grid-cols-1 gap-[14px] p-0 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3">
        {CARDS.map((texto, i) => (
          <li
            key={i}
            data-n={i + 1}
            className="sintoma-card relative overflow-hidden rounded-marca bg-superficie px-6 pt-[26px] pb-[30px]"
          >
            {/* Filete decorativo acima da frase. */}
            <span aria-hidden className="mb-5 block h-0.5 w-[26px] bg-barro" />
            <p className="relative font-display text-[19px] leading-[1.45] text-texto-corpo">
              {texto}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-10 max-w-[52ch] font-display text-[19px] italic leading-[1.55] text-texto-corpo">
        Se alguma dessas frases parou você por um instante, talvez seja hora de
        escutar o que está por baixo.
      </p>
    </section>
  );
}
