import CustomizedProductPreview from "@/components/ui/CustomizedProductPreview";
import { CustomizedProduct } from "@/types/product";

interface CartItemImageProps {
  cartItem: CustomizedProduct;
}

const CartItemImage = ({ cartItem }: CartItemImageProps) => {
  const {
    customizations: { bodiceType, sleeveType, skirtType },
    product,
    isCustomDress,
  } = cartItem;

  return (
    <CustomizedProductPreview
      isCustomDress={isCustomDress}
      productImage={product?.image}
      bodice={bodiceType}
      sleeve={sleeveType}
      skirt={skirtType}
    />
  );
};

export default CartItemImage;
