import { LuTrash2 } from "react-icons/lu";
import CartItemImage from "../shared/CartItemImage";
import CartItemQuantity from "../shared/CartItemQuantity";
import useCart from "@/hooks/useCart";
import { FaRegHeart } from "react-icons/fa6";
import useWishlist from "@/hooks/useWishlist";
import toast from "react-hot-toast";
import { CustomizedProduct } from "@/types/product";
import CustomizedProductInfo from "@/components/ui/CustomizedProductInfo";

interface CartItemMobileProps {
  cartItem: CustomizedProduct;
}

const CartItemMobile = ({ cartItem }: CartItemMobileProps) => {
  const { _id, totalPrice } = cartItem;
  const { removeCartItem } = useCart();
  const { wishlist, addToWishlist } = useWishlist();

  const handleRemove = () => {
    removeCartItem(_id);
    toast.success("Item removed from cart.");
  };

  const handleMoveToWishlist = () => {
    removeCartItem(_id);
    if (!wishlist.includes(_id)) {
      addToWishlist(_id);
      toast.success("Item moved to wishlist.");
    } else {
      toast("Item is already in your wishlist.");
    }
  };

  return (
    <div className="rounded bg-light-light">
      <div className="p-4 grid grid-cols-[1.8fr_2fr] gap-4">
        <CartItemImage cartItem={cartItem} />

        <div className="w-full min-w-0 flex flex-col justify-between space-y-2">
          <CustomizedProductInfo customizedProduct={cartItem} />

          <div className="flex flex-wrap gap-2 items-center justify-between">
            <h3 className="font-medium">${totalPrice}</h3>
            <CartItemQuantity cartItem={cartItem} />
          </div>
        </div>
      </div>

      <div className="h-10 border-t grid grid-cols-2 divide-x">
        <button
          onClick={handleRemove}
          className="text-xs text-dark-light font-semibold flex items-center justify-center gap-1"
        >
          <LuTrash2 /> Remove
        </button>

        <button
          onClick={handleMoveToWishlist}
          className="text-xs text-dark-light font-semibold flex items-center justify-center gap-1"
        >
          <FaRegHeart />
          Add To Wishlist
        </button>
      </div>
    </div>
  );
};

export default CartItemMobile;
