import CarouselSkeleton from "@/components/ui/Carousel/CarouselSkeleton";
import CategoryCardSkeleton from "./CategoryCard/CategoryCardSkeleton";

const CategoriesCarouselSkeleton = () => {
  return (
    <CarouselSkeleton>
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="shrink-0 w-[68%] sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <CategoryCardSkeleton />
        </div>
      ))}
    </CarouselSkeleton>
  );
};

export default CategoriesCarouselSkeleton;
