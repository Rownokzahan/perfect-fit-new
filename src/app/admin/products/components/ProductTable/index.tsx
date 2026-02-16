import ProductTableRow from "./ProductTableRow";
import ProductTableContainer from "./ProductTableContainer";
import NoProductFound from "./NoProductFound";
import Pagination from "@/components/ui/Pagination";
import { PaginatedProducts } from "@/types/product";

interface ProductTableProps {
  productsPromise: Promise<PaginatedProducts>;
}

const ProductTable = async ({ productsPromise }: ProductTableProps) => {
  const { products, pagination } = await productsPromise;

  if (products.length === 0) {
    return <NoProductFound />;
  }

  return (
    <>
      <ProductTableContainer>
        {products.map((product) => (
          <ProductTableRow key={product._id} product={product} />
        ))}
      </ProductTableContainer>

      <Pagination totalPages={pagination.totalPages} />
    </>
  );
};

export default ProductTable;
