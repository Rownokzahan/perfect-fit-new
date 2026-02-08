import { useEffect, useState, useCallback } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import CarouselArrowButton from "./CarouselArrowButton";

interface CarouselArrowButtonsProps {
  emblaApi: EmblaCarouselType | undefined;
}

const CarouselArrowButtons = ({ emblaApi }: CarouselArrowButtonsProps) => {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("init", onSelect);
    emblaApi.on("reInit", onSelect);

    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("init", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <>
      <CarouselArrowButton
        onClick={() => emblaApi?.scrollPrev()}
        isDisabled={!canScrollPrev}
        position="prev"
      />

      <CarouselArrowButton
        onClick={() => emblaApi?.scrollNext()}
        isDisabled={!canScrollNext}
        position="next"
      />
    </>
  );
};

export default CarouselArrowButtons;
