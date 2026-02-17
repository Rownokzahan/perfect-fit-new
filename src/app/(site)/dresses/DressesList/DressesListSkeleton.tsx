import ProductCardSkeleton from "@/components/cards/ProductCard/ProductCardSkeleton";

const DressesListSkeleton = () => {
  return (
    <div className="space-y-6">
      <p className="h-4 w-30 mx-auto sm:mx-0 rounded bg-gray-200 animate-pulse" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6">
        {[...Array(8)].map((_, idx) => (
          <ProductCardSkeleton key={idx} />
        ))}
      </div>
    </div>
  );
};

export default DressesListSkeleton;
