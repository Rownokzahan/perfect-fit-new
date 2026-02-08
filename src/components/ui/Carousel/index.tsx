"use client";

import useEmblaCarousel from "embla-carousel-react";
import CarouselArrowButtons from "./CarouselArrowButtons";
import CarouselDots from "./CarouselDots";

interface CarouselProps {
  children: React.ReactNode;
  showArrows?: boolean;
  showDots?: boolean;
}

const Carousel = ({
  children,
  showArrows = true,
  showDots = true,
}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -mx-2 sm:-mx-3">{children}</div>
        </div>

        <div className="hidden sm:block">
          {showArrows && <CarouselArrowButtons emblaApi={emblaApi} />}
        </div>
      </div>

      {showDots && <CarouselDots emblaApi={emblaApi} />}
    </div>
  );
};

export default Carousel;
