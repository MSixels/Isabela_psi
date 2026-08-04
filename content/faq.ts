export type QA = { pergunta: string; resposta: string };

// Fonte única das perguntas. O texto aqui é o MESMO que aparece na tela e no
// JSON-LD — nunca duplicar a string, para o markup nunca divergir do visível
// (divergência = spam para o Google). Copy revisada juridicamente; não editar.
export const FAQ: QA[] = [
  {
    pergunta: "Psicanálise online funciona?",
    resposta:
      "Funciona. O que sustenta uma análise é o vínculo e a escuta, e isso acontece por vídeo tanto quanto numa sala. Você fala de onde se sente segura, no seu horário. Muita gente descobre que se abre com mais facilidade em casa.",
  },
  {
    pergunta: "Qual a diferença entre psicanálise e psicologia?",
    resposta:
      "São campos distintos. A psicologia é uma profissão regulamentada, com abordagens variadas. A psicanálise é um método de escuta do inconsciente: parte do que se repete, dos lapsos, do que insiste em aparecer. Aqui o trabalho é psicanalítico — escutar o que ainda não foi dito.",
  },
  {
    pergunta: "Quanto tempo dura uma análise?",
    resposta:
      "Não há prazo fixo, e isso é parte do método. Cada processo tem seu tempo. Não existe número mínimo de sessões: você segue enquanto fizer sentido para você.",
  },
  {
    pergunta: "Psicanálise e fé cristã são compatíveis?",
    resposta:
      "Para mim, sim. A fé não fica do lado de fora da sala. Ela entra como parte de quem você é e de como você dá sentido ao que vive. A escuta psicanalítica não julga sua crença — trabalha com ela, no seu tempo.",
  },
  {
    pergunta: "Preciso ter um problema grave para fazer análise?",
    resposta:
      "Não. Você não precisa estar em crise para se escutar. Muita gente chega por uma inquietação difícil de nomear, um cansaço que não passa, um padrão que se repete. Isso basta.",
  },
];

// Gera o JSON-LD FAQPage a partir do MESMO array acima — texto idêntico ao
// visível por construção.
export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((qa) => ({
      "@type": "Question",
      name: qa.pergunta,
      acceptedAnswer: { "@type": "Answer", text: qa.resposta },
    })),
  };
}
