import { Category } from "@/types/category";

interface CategoryOptionsProps {
  categories: Category[];
}

const CategoryOptions = ({ categories }: CategoryOptionsProps) => {
  if (!categories || categories.length === 0) {
    return <option value="">No categories found</option>;
  }

  return (
    <>
      <option value="" disabled>
        Select Category
      </option>

      {categories.map((category) => (
        <option key={category._id} value={category._id}>
          {category.name}
        </option>
      ))}
    </>
  );
};

export default CategoryOptions;
