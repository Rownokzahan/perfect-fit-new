import ProductCardSkeleton from "@/components/cards/ProductCard/ProductCardSkeleton";
import WishlistContainer from "./components/WishlistContainer";

const WishlistLoadingPage = () => {
  return (
    <WishlistContainer>
      {[...Array(6)].map((_, idx) => (
        <ProductCardSkeleton key={idx} />
      ))}
    </WishlistContainer>
  );
};

export default WishlistLoadingPage;