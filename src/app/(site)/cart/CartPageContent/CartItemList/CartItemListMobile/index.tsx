import useCart from "@/hooks/useCart";
import CartItemMobile from "./CartItemMobile";

const CartItemListMobile = () => {
  const { cart } = useCart();

  return (
    <div className="sm:hidden space-y-2">
      {cart.map((cartItem) => (
        <CartItemMobile key={cartItem._id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CartItemListMobile;
