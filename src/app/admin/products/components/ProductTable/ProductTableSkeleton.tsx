import ProductTableContainer from "./ProductTableContainer";
import ProductTableRowSkeleton from "./ProductTableRow/ProductTableRowSkeleton";

const ProductTableSkeleton = () => {
  return (
    <ProductTableContainer>
      {[...Array(5)].map((_, idx) => (
        <ProductTableRowSkeleton key={idx} />
      ))}
    </ProductTableContainer>
  );
};

export default ProductTableSkeleton;
