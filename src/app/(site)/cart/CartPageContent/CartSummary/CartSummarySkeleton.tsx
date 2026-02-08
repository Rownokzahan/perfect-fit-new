const CartSummarySkeleton = () => {
  return (
    <div className="h-max p-4 sm:p-6 rounded bg-light-light sticky top-16">
      <div className="flex justify-between items-center animate-pulse">
        <p className="h-6 sm:h-7 w-31 rounded bg-gray-200" />
        <p className="h-5 w-8 rounded bg-gray-200" />
      </div>

      <div className="my-4 space-y-2 animate-pulse">
        <div className="flex justify-between items-center">
          <p className="h-5 w-20 rounded bg-gray-200" />
          <p className="h-5 w-12 rounded bg-gray-200" />
        </div>
        <div className="flex justify-between items-center">
          <p className="h-5 w-28 rounded bg-gray-200" />
          <p className="h-5 w-6 rounded bg-gray-200" />
        </div>
      </div>

      <div className="pt-3 border-t flex justify-between items-center animate-pulse">
        <p className="h-6 w-10 rounded bg-gray-200" />
        <p className="h-6 w-8 rounded bg-gray-200" />
      </div>

      <div className="mt-6 h-10.5 rounded-sm bg-gray-200 animate-pulse" />
    </div>
  );
};

export default CartSummarySkeleton;