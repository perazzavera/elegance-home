import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./Botoes";

const Item = ({ produtoSelecionado }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel();
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla">
      <div
        className="embla__viewport overflow-hidden rounded-xl shadow-md shadow-black/20"
        ref={emblaMainRef}
      >
        <div className="embla__container flex touch-pinch-zoom w-full rounded-xl">
          {produtoSelecionado.imagens.map((item, index) => (
            <div
              className="embla__slide transform-3d shrink-0 h-110 min-w-full rounded-xl lg:h-150"
              key={index}
            >
              <div className="embla__slide__number flex rounded-xl w-full h-full">
                <img
                  className="object-cover h-full w-full object-center"
                  src={item}
                  alt={item}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container flex gap-4 my-6">
            {produtoSelecionado.imagens.map((item, index) => (
              <Thumb
                item={item}
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
