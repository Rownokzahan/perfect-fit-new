const ProductCardSkeleton = () => {
  return (
    <div className="rounded-sm bg-light-light relative">
      <div className="aspect-5/6 p-3">
        <div className="size-full bg-gray-200 object-cover object-top rounded-t-sm animate-pulse" />
      </div>

      <div className="h-13 sm:h-15 px-4 pb-3 font-medium space-y-3">
        <div className="h-3 rounded-sm bg-gray-200 animate-pulse" />
        <div className="h-4 w-16 rounded-sm bg-gray-200 animate-pulse" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
