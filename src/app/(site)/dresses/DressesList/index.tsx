import NoDressFound from "./NoDressFound";
import ProductCard from "@/components/cards/ProductCard";
import Pagination from "@/components/ui/Pagination";
import { PaginatedProducts } from "@/types/product";

interface DressesListProps {
  productsPromise: Promise<PaginatedProducts>;
}

const DressesList = async ({ productsPromise }: DressesListProps) => {
  const { products, pagination } = await productsPromise;

  if (products.length === 0) {
    return <NoDressFound />;
  }

  const { totalItems, totalPages } = pagination;

  return (
    <div className="space-y-6">
      <p className="text-sm text-dark-light text-center sm:text-left">
        {totalItems} dress{totalItems > 1 ? "es" : ""} found
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default DressesList;
