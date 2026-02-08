import NoCategoryFound from "../NoCategoryFound";
import CategoryTableRow from "./CategoryTableRow";
import CategoryTableContainer from "./CategoryTableContainer";
import getCategories from "@/actions/categories/queries/getCategories";

const CategoryTable = async () => {
  const categories = await getCategories();

  if (categories.length === 0) {
    return <NoCategoryFound />;
  }

  return (
    <CategoryTableContainer>
      {categories.map((category) => (
        <CategoryTableRow key={category._id} category={category} />
      ))}
    </CategoryTableContainer>
  );
};

export default CategoryTable;
