import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import { DotButton, useDotButton } from "./Paginacao";

const slides = [
  {
    id: 1,
    src: "/images/bedroom.jpg",
    titulo: "Descanse com Serenidade Refinada",
    texto: "Descubra o conforto atemporal em designs de quartos sob medida",
  },
  {
    id: 2,
    src: "/images/living.jpg",
    titulo: "Onde a Elegância Encontra o Cotidiano",
    texto:
      "Transforme sua casa com luxo e aconchego cuidadosamente selecionados",
  },
  {
    id: 3,
    src: "/images/kitchen.jpg",
    titulo: "Jante com Sofisticação",
    texto: "Estilo e sofisticação para momentos inesquecíveis",
  },
];

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 7000 }),
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
    <section>
      <div className="embla z-0 relative" ref={emblaRef}>
        <div className="embla__container flex w-full overflow-hidden z-0">
          {slides.map((slide) => (
            <div className="embla__slide w-full shrink-0 h-[500px] lg:h-[600px] z-0">
              <div
                className="h-full bg-center bg-cover z-0"
                style={{ backgroundImage: `url(${slide.src})` }}
              >
                <div className="h-full bg-linear-to-r from-black/80 to-black/0 flex items-center px-4 lg:px-20 text-white">
                  <div className="grid grid-cols-1 gap-2">
                    <h3 className="font-dm text-4xl">{slide.titulo}</h3>
                    <p className="text-xl">{slide.texto}</p>
                    <Link className="bg-rose w-fit py-2 px-6 rounded-xl hover:bg-coral transition-all duration-300">
                      Veja mais
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls absolute -mt-8 w-full">
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
    </section>
  );
}
