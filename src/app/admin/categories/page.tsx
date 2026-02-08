import { Suspense } from "react";
import CategoriesPageHeader from "./components/CategoriesPageHeader";
import CategoryTable from "./components/CategoryTable";
import CategoryTableSkeleton from "./components/CategoryTable/CategoryTableSkeleton";

export const metadata = {
  title: "Manage Categories - Admin",
};

const AdminCategoriesPage = async () => {
  return (
    <>
      <CategoriesPageHeader />

      <Suspense fallback={<CategoryTableSkeleton />}>
        <CategoryTable />
      </Suspense>
    </>
  );
};

export default AdminCategoriesPage;
