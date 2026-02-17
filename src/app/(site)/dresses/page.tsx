import ProductFilters from "@/components/ui/ProductFilters";
import DressesList from "./DressesList";
import { getProducts } from "@/actions/products/queries/getProducts";
import { Suspense } from "react";
import DressesListSkeleton from "./DressesList/DressesListSkeleton";

export const metadata = {
  title: "Dresses",
};

interface Params {
  searchParams: Promise<{
    search?: string;
    page?: string;
    category?: string;
    sort?: string;
  }>;
}

const DressesPage = async ({ searchParams }: Params) => {
  const { search, page, category, sort } = await searchParams;
  const productsPromise = getProducts({
    search,
    page,
    category,
    sort,
    limit: 10,
  });

  return (
    <div className="ui-container mt-8 mb-12">
      <ProductFilters />

      <Suspense fallback={<DressesListSkeleton />}>
        <DressesList productsPromise={productsPromise} />
      </Suspense>
    </div>
  );
};

export default DressesPage;
