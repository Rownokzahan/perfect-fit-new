const CartItemListSkeleton = () => {
  return (
    <>
      <div className="hidden sm:block p-4 sm:p-6 rounded bg-light-light divide-y">
        <div className="pb-3">
          <div className="h-4 rounded bg-gray-100 animate-pulse" />
        </div>

        {[...Array(2)].map((_, index) => (
          <div key={index} className="py-6">
            <div className="h-58.5 rounded bg-gray-100/60 animate-pulse" />
          </div>
        ))}
      </div>

      <div className="sm:hidden space-y-2">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="rounded bg-light-light">
            <div className="p-4">
              <div className="h-66.5 rounded bg-gray-200 animate-pulse" />
            </div>

            <div className="h-10 border-t grid grid-cols-2 divide-x animate-pulse">
              <div className="flex items-center justify-center">
                <div className="h-4 w-18 rounded bg-gray-200" />
              </div>
              <div className="flex items-center justify-center">
                <div className="h-4 w-24 rounded bg-gray-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartItemListSkeleton;
