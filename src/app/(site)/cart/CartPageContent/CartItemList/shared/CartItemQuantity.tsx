import useCart from "@/hooks/useCart";
import { CustomizedProduct } from "@/types/product";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

interface CartItemQuantityProps {
  cartItem: CustomizedProduct;
}

const CartItemQuantity = ({ cartItem }: CartItemQuantityProps) => {
  const { _id, quantity } = cartItem;
  const { decreaseCartItemQuantity, increaseCartItemQuantity } = useCart();

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 place-items-center">
        <button
          onClick={() => decreaseCartItemQuantity(_id)}
          aria-label="Decrease quantity"
          className="size-6 border rounded grid place-items-center"
        >
          <HiOutlineMinus className="text-xs" />
        </button>

        <p className="font-medium text-sm">{quantity}</p>

        <button
          onClick={() => increaseCartItemQuantity(_id)}
          aria-label="Increase quantity"
          className="size-6 border rounded grid place-items-center"
        >
          <HiOutlinePlus className="text-xs" />
        </button>
      </div>
    </div>
  );
};

export default CartItemQuantity;
