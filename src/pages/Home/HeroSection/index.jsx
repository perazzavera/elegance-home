import { useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    src: "/images/bedroom.jpg",
    titulo: "Rest in Refined Serenity",
    texto: "Discover timeless comfort in bespoke bedroom designs",
  },
  {
    id: 2,
    src: "/images/living.jpg",
    titulo: "Where Elegance Meets Everyday Living",
    texto: "Transform your home with curated luxury and warmth",
  },
  {
    id: 3,
    src: "/images/kitchen.jpg",
    titulo: "Dine with Distinction",
    texto: "Style and sophistication for unforgettable moments",
  },
];

export default function HeroSection() {
  useEffect(() => {
    // Inicializa manualmente os componentes da Preline
    window.HSStaticMethods.autoInit();
  }, []);

  return (
    <section>
      {/* Slider */}
      <div
        data-hs-carousel='{
        "isAutoPlay": true,
        "loadingClasses": "opacity-0",
        "dotsItemClasses": "bg-white/70 border-0 hs-carousel-active:bg-rose hs-carousel-active:w-[20px] size-3 rounded-full cursor-pointer transition-all duration-300"
      }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full min-h-120 bg-white lg:min-h-150">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform  duration-700 opacity-0">
            {slides.map((slide) => (
              <div className="hs-carousel-slide">
                <div className="flex justify-center h-full bg-gray-100 dark:bg-neutral-900">
                  <div
                    className="h-full text-4xl text-gray-800 transition duration-700 dark:text-white w-full bg-center bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${slide.src})` }}
                  >
                    <div className="flex w-full h-full items-center">
                      <div className="text-white p-9 bg-gradient-to-r from-black/80 to-transparent h-full flex flex-col justify-center">
                        <h2 className="font-dm text-3xl text-shadow-black text-shadow-sm lg:text-6xl">
                          {slide.titulo}
                        </h2>
                        <p className="  font-montserrat text-lg lg:text-2xl lg:mb-4">
                          {slide.texto}
                        </p>
                        <Link className="text-xs font-montserrat bg-rose py-2 px-4 rounded-lg w-fit hover:bg-coral transition-all duration-300 lg:text-lg lg:py-3 lg:px-6">
                          Explore Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 start-2 inline-flex justify-center items-center size-6 bg-transparent border border-gray-100 text-white rounded-full shadow-2xs hover:bg-rose transition-all duration-300 -translate-y-1/2 focus:outline-hidden"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 end-2 inline-flex justify-center items-center size-6 bg-transparent border border-gray-100 text-white rounded-full shadow-2xs hover:bg-rose transition-all duration-300 -translate-y-1/2 focus:outline-hidden"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>

        <div class="hs-carousel-pagination justify-center absolute bottom-3 start-0 end-0 flex gap-x-2"></div>
      </div>
      {/* End Slider */}
    </section>
  );
}
