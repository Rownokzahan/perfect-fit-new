import CartItemListSkeleton from "./CartItemList/CartItemListSkeleton";
import CartSummarySkeleton from "./CartSummary/CartSummarySkeleton";

const CartPageContentSkeleton = () => {
  return (
    <div className="ui-container mb-12 mt-5 sm:mt-12 grid grid-cols-1 lg:grid-cols-[60%_1fr] gap-8">
      <div className="space-y-4">
        <div className="h-19 sm:h-14 p-4 sm:px-6 rounded bg-light-light flex justify-between items-start gap-3">
          <div className="flex-1 animate-pulse">
            <div className="h-5 w-4/5 max-w-52 rounded bg-gray-200" />
            <p className="sm:hidden mt-1 h-4 w-14 rounded bg-gray-200" />
          </div>

          <div className="h-5 w-14 rounded bg-gray-200 animate-pulse" />
        </div>

        <CartItemListSkeleton />
      </div>

      <CartSummarySkeleton />
    </div>
  );
};

export default CartPageContentSkeleton;
