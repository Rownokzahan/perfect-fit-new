import { getProducts } from "@/actions/products/queries/getProducts";
import ProductsPageHeader from "./components/ProductsPageHeader";
import ProductTableSkeleton from "./components/ProductTable/ProductTableSkeleton";
import { Suspense } from "react";
import ProductTable from "./components/ProductTable";
import ProductFilters from "@/components/ui/ProductFilters";

export const metadata = {
  title: "Manage Product - Admin",
};

interface Params {
  searchParams: Promise<{
    search?: string;
    page?: string;
    category?: string;
    sort?: string;
  }>;
}

const AdminProductsPage = async ({ searchParams }: Params) => {
  const { search, page, category, sort } = await searchParams;
  const productsPromise = getProducts({
    search,
    page,
    category,
    sort,
    limit: 6,
  });

  return (
    <>
      <ProductsPageHeader />
      <ProductFilters />

      <Suspense fallback={<ProductTableSkeleton />}>
        <ProductTable productsPromise={productsPromise} />
      </Suspense>
    </>
  );
};

export default AdminProductsPage;
