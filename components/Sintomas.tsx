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

      {/* Grade com fio de 1px: o fundo areia aparece nos gaps entre os cards.
          minmax(min(100%,300px),1fr) evita overflow abaixo de 300px de largura. */}
      <div
        className="grid gap-px border border-areia bg-areia"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
        }}
      >
        {CARDS.map((texto, i) => (
          <div key={i} className="bg-aveia px-[34px] py-9">
            <div className="mb-[14px] font-ui text-[11px] tracking-[0.18em] text-barro">
              {String(i + 1).padStart(2, "0")}
            </div>
            <p className="font-display text-[22px] leading-[1.4] text-umbre">
              {texto}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-[52ch] font-display text-[19px] italic leading-[1.55] text-texto-corpo">
        Se alguma dessas frases parou você por um instante, talvez seja hora de
        escutar o que está por baixo.
      </p>
    </section>
  );
}
