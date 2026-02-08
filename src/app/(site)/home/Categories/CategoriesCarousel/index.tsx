import getCategories from "@/actions/categories/queries/getCategories";
import CategoryCard from "./CategoryCard";
import Carousel from "@/components/ui/Carousel";
import CarouselItem from "@/components/ui/Carousel/CarouselItem";

const CategoriesCarousel = async () => {
  const categories = await getCategories();

  return (
    <Carousel>
      {categories.map((category) => (
        <div
          key={category._id}
          className="shrink-0 w-[68%] sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <CarouselItem>
            <CategoryCard category={category} />
          </CarouselItem>
        </div>
      ))}
    </Carousel>
  );
};

export default CategoriesCarousel;
