import Button from "@/components/ui/Button";
import useCart from "@/hooks/useCart";
import useModalById from "@/hooks/useModalById";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const CartSummary = () => {
  const { cart, cartTotal } = useCart();
  const { data } = useSession();
  const { openModal: openAuthModal } = useModalById("authModal");
  const router = useRouter();

  const handleAuthRedirect = useCallback(() => {
    openAuthModal();
    router.replace("?callbackUrl=/checkout", { scroll: false });
  }, [openAuthModal, router]);

  const isAuthenticated = !!data;

  return (
    <div className="h-max p-4 sm:p-6 rounded bg-light-light sticky top-16">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold sm:text-lg">Cart Summary</h3>
        <p className="text-dark-light text-sm">{cart?.length} items</p>
      </div>

      <div className="my-4 space-y-2 text-sm text-dark-light">
        <div className="flex justify-between items-center">
          <p>Subtotal</p>
          <p>${cartTotal}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Shipping Charges</p>
          <p>$0</p>
        </div>
      </div>

      <div className="pt-3 border-t flex justify-between items-center">
        <p className="font-semibold">Total</p>
        <p className="font-medium text-end">${cartTotal}</p>
      </div>

      <div className="mt-6">
        {isAuthenticated ? (
          <Button onClick={handleAuthRedirect} className="w-full">
            Proceed to Checkout
          </Button>
        ) : (
          <Button href="/checkout" className="w-full">
            Proceed to Checkout
          </Button>
        )}
      </div>
    </div>
  );
};

export default CartSummary;
