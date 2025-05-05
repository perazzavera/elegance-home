import useEmblaCarousel from "embla-carousel-react";
import RatingStars from "../../../components/RatingStars";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { useCallback } from "react";
import { DotButton, useDotButton } from "../HeroSection/Paginacao";

const depoimentos = [
  {
    id: 1,
    nome: "Sophia Martinez",
    cargo: "Designer de Interiores",
    imagem:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    avaliacao: 5,
    texto:
      "A qualidade dos móveis da Elegance Home é excepcional. Meus clientes sempre ficam impressionados com o trabalho artesanal e a atenção aos detalhes. O serviço é personalizado e profissional.",
  },
  {
    id: 2,
    nome: "James Wilson",
    cargo: "Proprietário de Casa",
    imagem: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    avaliacao: 5,
    texto:
      "Transformar nossa sala de estar com as peças da Elegance Home foi a melhor decisão. Os móveis são não apenas bonitos, mas incrivelmente confortáveis. Aprecio os materiais sustentáveis e as práticas éticas.",
  },
  {
    id: 3,
    nome: "Emma Thompson",
    cargo: "Arquiteta",
    imagem: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    avaliacao: 4,
    texto:
      "Como arquiteta, valorizo peças que combinam forma e função. A Elegance Home entrega consistentemente móveis que aprimoram meus projetos com sua elegância atemporal e qualidade superior.",
  },
];

export default function Depoimentos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000 }),
    Fade(),
  ]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoPlay = emblaApi?.plugins()?.autoPlay;
    if (!autoPlay) return;
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );
  return (
    <section className="bg-gray-800 py-16 px-4 text-white lg:px-50">
      <h2 className="font-dm text-3xl text-center">
        O Que Nossos Clientes Dizem
      </h2>
      <p className="text-sm text-center">
        Leia sobre as experiências de nossos valiosos clientes
      </p>

      <div className="embla z-10 relative" ref={emblaRef}>
        <div className="embla__container flex w-full overflow-hidden">
          {depoimentos.map((item) => (
            <div
              key={item.id}
              className="embla__slide shrink-0 w-full bg-gray-700 p-4 rounded-xl my-6"
            >
              <div className="grid grid-cols-1 my-4 text-center">
                <img
                  className="w-25 h-25 rounded-full object-center object-cover border-2 border-coral mx-auto"
                  src={item.imagem}
                  alt={item.nome}
                />
                <h3 className="font-dm text-2xl">{item.nome}</h3>
                <p className="text-lg">{item.cargo}</p>
                <div className="flex justify-center">
                  <RatingStars rating={item.avaliacao} />
                </div>
              </div>
              <div>
                <p className="text-center">{item.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="embla__controls absolute mt-5">
          <div className="embla__dots w-full flex justify-center gap-4">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={` w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "bg-coral w-5" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
