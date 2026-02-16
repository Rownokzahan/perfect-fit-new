"use client";

import ProductTableRow from "./ProductTableRow";
import ProductTableContainer from "./ProductTableContainer";
import useProducts from "@/hooks/useProducts";
import ProductTableSkeleton from "./ProductTableSkeleton";
import NoProductFound from "./NoProductFound";
import Pagination from "@/components/ui/Pagination";

const ProductTable = () => {
  const {
    products,
    isProductsLoading,
    refetchProducts,
    pagination: { totalPages },
  } = useProducts({ limit: 6 });

  if (isProductsLoading) {
    return <ProductTableSkeleton />;
  }

  if (products.length === 0) {
    return <NoProductFound />;
  }

  return (
    <>
      <ProductTableContainer>
        {products.map((product) => (
          <ProductTableRow
            key={product.id}
            product={product}
            refetchProducts={refetchProducts}
          />
        ))}
      </ProductTableContainer>

      <Pagination totalPages={totalPages} />
    </>
  );
};

export default ProductTable;
