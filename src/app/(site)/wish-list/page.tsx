import { getWishlistedProducts } from "@/actions/wishlist/queries/getWishlistedProducts";
import NoWishlistProductFound from "./components/NoWishlistProductFound";
import WishlistContainer from "./components/WishlistContainer";
import ProductCard from "@/components/cards/ProductCard";

export const metadata = {
  title: "My Wishlist",
};

const WishlistPage = async () => {
  const products = await getWishlistedProducts();

  if (products.length === 0) {
    return <NoWishlistProductFound />;
  }

  return (
    <WishlistContainer>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </WishlistContainer>
  );
};

export default WishlistPage;
