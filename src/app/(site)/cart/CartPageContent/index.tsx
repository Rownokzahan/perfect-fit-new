"use client";

import useCart from "@/hooks/useCart";
import useModalById from "@/hooks/useModalById";
import NoCartItemFound from "./NoCartItemFound";
import CartSummary from "./CartSummary";
import ConfirmClearCartModal from "@/components/modals/ConfirmClearCartModal";
import CartItemList from "./CartItemList";
import CartPageContentSkeleton from "./CartPageContentSkeleton";

const CartPageContent = () => {
  const { cart, isHydrated } = useCart();
  const { openModal: openConfirmClearCartModal } = useModalById(
    "confirmClearCartModal"
  );

  if (!isHydrated) {
    return <CartPageContentSkeleton />;
  }

  if (cart?.length === 0) {
    return <NoCartItemFound />;
  }

  return (
    <>
      <div className="ui-container mb-12 mt-5 sm:mt-12 grid grid-cols-1 lg:grid-cols-[60%_1fr] gap-8">
        <div className="space-y-4">
          <div className="p-4 sm:px-6 rounded bg-light-light flex justify-between items-start gap-3">
            <h3 className="flex items-center flex-wrap">
              <span className="me-1 font-semibold">Your Shopping Bag</span>
              <span className="text-dark-light text-sm">
                ({cart?.length} items)
              </span>
            </h3>

            <button
              onClick={openConfirmClearCartModal}
              className="mt-0.75 font-medium text-sm text-primary text-nowrap"
            >
              Clear All
            </button>
          </div>

          <CartItemList />
        </div>

        <CartSummary />
      </div>

      <ConfirmClearCartModal />
    </>
  );
};

export default CartPageContent;
