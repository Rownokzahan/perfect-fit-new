import CarouselDotsSkeleton from "./CarouselDots/CarouselDotsSkeleton";

interface CarouselSkeletonProps {
  children: React.ReactNode;
  showDots?: boolean;
}

const CarouselSkeleton = ({
  children,
  showDots = true,
}: CarouselSkeletonProps) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex">{children}</div>
        </div>
      </div>

      {showDots && <CarouselDotsSkeleton />}
    </div>
  );
};

export default CarouselSkeleton;
