import { getCategories } from "@/actions/categories/queries/getCategories";
import CategoryDropdown from "./CategoryDropdown";

const CategorySelector = async () => {
  const categories = await getCategories();

  return <CategoryDropdown categories={categories} />;
};

export default CategorySelector;
