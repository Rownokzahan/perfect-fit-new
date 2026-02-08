import { useEffect, useState, useCallback } from "react";
import { EmblaCarouselType } from "embla-carousel";
import CarouselDot from "./CarouselDot";

interface CarouselDotsProps {
  emblaApi: EmblaCarouselType | undefined;
}

const CarouselDots = ({ emblaApi }: CarouselDotsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    onSelect(); // Set initial selection

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const handleClick = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };

  if (scrollSnaps.length === 1) {
    return null;
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      {scrollSnaps.map((_, index) => (
        <CarouselDot
          key={index}
          isActive={index === selectedIndex}
          ariaLabel={`Go to slide ${index + 1}`}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
