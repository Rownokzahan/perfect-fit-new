import useCart from "@/hooks/useCart";
import useWishlist from "@/hooks/useWishlist";
import UserIconButton from "./UserIconButton";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi2";
import NavIconLink from "./NavIconLink";

const NavIcons = () => {
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  return (
    <div className="flex items-center gap-1.5 text-xl">
      <UserIconButton />

      <NavIconLink
        href="/wish-list"
        count={wishlist.length}
        ariaLabel="Go to wishlist"
      >
        <HiOutlineHeart size={23} />
      </NavIconLink>

      <NavIconLink href="/cart" count={cart.length} ariaLabel="Go to cart">
        <HiOutlineShoppingBag size={23} className="relative bottom-0.5" />
      </NavIconLink>
    </div>
  );
};

export default NavIcons;
