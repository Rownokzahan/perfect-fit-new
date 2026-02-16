import { Suspense } from "react";
import CategorySelector from "./CategorySelector";
import SearchBar from "./SearchBar";
import SortSelector from "./SortSelector";
import DropdownSkeleton from "../Dropdown/DropdownSkeleton";

const ProductFilters = () => {
  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between text-xs sm:text-sm">
      <SearchBar />

      <div className="min-w-0 flex items-center gap-4 lg:gap-8 overflow-ellipsis">
        <Suspense fallback={<DropdownSkeleton />}>
          <CategorySelector />
        </Suspense>

        <SortSelector />
      </div>
    </div>
  );
};

export default ProductFilters;
