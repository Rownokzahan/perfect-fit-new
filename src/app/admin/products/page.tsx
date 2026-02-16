import ProductFilters from "@/components/ui/ProductFilters";
import ProductsPageHeader from "./components/ProductsPageHeader";
import ProductTable from "./components/ProductTable";

export const metadata = {
  title: "Manage Product - Admin",
};

const AdminProductsPage = () => {
  return (
    <>
      <ProductsPageHeader />
      <ProductFilters />

      <div className="h-[calc(100%-194px)] sm:h-[calc(100%-140px)] overflow-y-auto">
        <ProductTable />
      </div>
    </>
  );
};

export default AdminProductsPage;
