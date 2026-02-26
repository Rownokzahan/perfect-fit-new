const ProductFormSkeleton = () => {
  return (
    <div>
      {/* Page Title Skeleton */}
      <div className="h-8 w-48 mx-auto bg-gray-200 rounded animate-pulse" />

      {/* Form Skeleton */}
      <div className="max-w-xl mt-8 mx-auto p-8 rounded bg-light-light space-y-6">
        {/* Input fields */}
        <div className="h-12.5 bg-gray-200 rounded animate-pulse" />
        <div className="h-30.5 bg-gray-200 rounded animate-pulse" />
        <div className="h-12.5 bg-gray-200 rounded animate-pulse" />
        <div className="h-12.5 bg-gray-200 rounded animate-pulse" />
        <div className="h-12.5 bg-gray-200 rounded animate-pulse" />

        {/* Image Upload */}
        <div className="h-52 w-full bg-gray-200 rounded animate-pulse" />

        {/* Submit Button Skeleton */}
        <div className="h-12.5 bg-gray-300 rounded animate-pulse" />
      </div>
    </div>
  );
};

export default ProductFormSkeleton;
