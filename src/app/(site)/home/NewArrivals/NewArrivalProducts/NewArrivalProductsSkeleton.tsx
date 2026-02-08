import ProductCardSkeleton from "@/components/cards/ProductCard/ProductCardSkeleton";

const NewArrivalProductsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
      {[...Array(8)].map((_, idx) => (
        <ProductCardSkeleton key={idx} />
      ))}
    </div>
  );
};

export default NewArrivalProductsSkeleton;
