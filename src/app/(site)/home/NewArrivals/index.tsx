import { Suspense } from "react";
import NewArrivalProducts from "./NewArrivalProducts";
import NewArrivalProductsSkeleton from "./NewArrivalProducts/NewArrivalProductsSkeleton";

const NewArrivals = () => {
  return (
    <section className="ui-container my-16">
      <h3 className="mb-10 text-3xl font-semibold text-center">
        New <span className="text-primary">Arrivals</span>
      </h3>

      <Suspense fallback={<NewArrivalProductsSkeleton />}>
        <NewArrivalProducts />
      </Suspense>
    </section>
  );
};

export default NewArrivals;
