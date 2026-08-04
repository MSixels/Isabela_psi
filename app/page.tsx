import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sintomas from "@/components/Sintomas";
import Sobre from "@/components/Sobre";
import ComoFunciona from "@/components/ComoFunciona";
import Formacao from "@/components/Formacao";
import Conteudo from "@/components/Conteudo";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="px-4 py-6 md:px-12 md:py-14">
      {/* Moldura editorial: página centralizada em 1180px com fio areia ao redor. */}
      <div id="topo" className="mx-auto max-w-[1180px] border border-areia bg-aveia">
        <Header />
        <main id="conteudo-principal">
          <Hero />
          <Sintomas />
          <Sobre />
          <ComoFunciona />
          <Formacao />
          <Conteudo />
          <Faq />
          <CtaFinal />
        </main>
        <Footer />
      </div>
    </div>
  );
}
