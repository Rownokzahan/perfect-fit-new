import { HiOutlineHeart } from "react-icons/hi2";
import NavIconLink from "./NavIconLink";
import { getWishlistCount } from "@/actions/wishlist/queries/getWishlistCount";
import { Suspense } from "react";

const WishlistIcon = ({ count }: { count: number }) => (
  <NavIconLink href="/wish-list" count={count} ariaLabel="Go to wishlist">
    <HiOutlineHeart size={23} />
  </NavIconLink>
);

const WishlistContent = async () => {
  const count = await getWishlistCount();

  return <WishlistIcon count={count} />;
};

const WishlistNavIcon = () => (
  <Suspense fallback={<WishlistIcon count={0} />}>
    <WishlistContent />
  </Suspense>
);

export default WishlistNavIcon;
