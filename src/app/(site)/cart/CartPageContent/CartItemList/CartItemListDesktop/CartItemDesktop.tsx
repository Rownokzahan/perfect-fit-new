import CartItemImage from "../shared/CartItemImage";
import CartItemQuantity from "../shared/CartItemQuantity";
import { RxCross2 } from "react-icons/rx";
import useCart from "@/hooks/useCart";
import toast from "react-hot-toast";
import { CustomizedProduct } from "@/types/product";
import CustomizedProductInfo from "@/components/ui/CustomizedProductInfo";

interface CartItemDesktopProps {
  cartItem: CustomizedProduct;
}

const CartItemDesktop = ({ cartItem }: CartItemDesktopProps) => {
  const { _id, totalPrice } = cartItem;
  const { removeCartItem } = useCart();

  const handleRemove = () => {
    removeCartItem(_id);
    toast.success("Item removed from cart.");
  };

  return (
    <div className="py-6 grid grid-cols-1 sm:grid-cols-[2fr_2fr_1fr_1fr_1fr] gap-6">
      <CartItemImage cartItem={cartItem} />
      <CustomizedProductInfo customizedProduct={cartItem} />
      <CartItemQuantity cartItem={cartItem} />

      {/* Price */}
      <p className="font-medium self-center text-end">${totalPrice}</p>

      <button
        onClick={handleRemove}
        aria-label="Remove item from cart"
        className="place-self-center"
      >
        <RxCross2 />
      </button>
    </div>
  );
};

export default CartItemDesktop;
