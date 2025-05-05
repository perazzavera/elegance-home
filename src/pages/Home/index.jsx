import Categorias from "./Categorias";
import Depoimentos from "./Depoimentos";
import Destaques from "./Destaques";
import HeroSection from "./HeroSection";
import Newsletter from "./Newsletter";
import NovaColecao from "./NovaColecao";
import ServicosDesign from "./ServicosDesign";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NovaColecao />
      <Categorias />
      <Destaques />
      <ServicosDesign />
      <Depoimentos />
      <Newsletter />
    </>
  );
}
