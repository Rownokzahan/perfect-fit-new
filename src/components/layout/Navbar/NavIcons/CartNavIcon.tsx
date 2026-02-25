import { getCartCount } from "@/actions/cart/queries/getCartCount";
import NavIconLink from "./NavIconLink";
import { Suspense } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const CartIcon = ({ count }: { count: number }) => (
  <NavIconLink href="/cart" count={count} ariaLabel="Go to cart">
    <HiOutlineShoppingBag size={23} className="relative bottom-0.5" />
  </NavIconLink>
);

const CartContent = async () => {
  const count = await getCartCount();

  return <CartIcon count={count} />;
};

const CartNavIcon = () => (
  <Suspense fallback={<CartIcon count={0} />}>
    <CartContent />
  </Suspense>
);

export default CartNavIcon;
