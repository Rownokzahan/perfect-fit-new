import { Suspense } from "react";
import CategoriesCarousel from "./CategoriesCarousel";
import CategoriesCarouselSkeleton from "./CategoriesCarousel/CategoriesCarouselSkeleton";

const Categories = () => {
  return (
    <section className="ui-container my-16">
      <h3 className="mb-10 font-semibold text-2xl sm:text-3xl text-center">
        Shop By <span className="text-primary">Categories</span>
      </h3>

      <Suspense fallback={<CategoriesCarouselSkeleton />}>
        <CategoriesCarousel />
      </Suspense>
    </section>
  );
};

export default Categories;
