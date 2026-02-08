import useCart from "@/hooks/useCart";
import CartItemDesktop from "./CartItemDesktop";

const CartItemListDesktop = () => {
  const { cart } = useCart();

  return (
    <div className="hidden sm:block p-4 sm:p-6 rounded bg-light-light divide-y">
      <div className="pb-3 grid grid-cols-1 sm:grid-cols-[2fr_2fr_1fr_1fr_1fr] gap-6 uppercase text-xs text-dark-light">
        <span className="font-semibold text-start">Item</span>
        <span className="font-semibold text-start">Details</span>
        <span className="font-semibold place-items-center">Quantity</span>
        <span className="font-semibold text-end self-center">Price</span>
        <span className="font-semibold"></span>
      </div>

      {cart.map((item) => (
        <CartItemDesktop key={item._id} cartItem={item} />
      ))}
    </div>
  );
};

export default CartItemListDesktop;
