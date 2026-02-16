import { getCategories } from "@/actions/categories/queries/getCategories";
import AddProductForm from "./AddProductForm";

export const metadata = {
  title: "Add Product - Admin",
};

const AddProductPage = async () => {
  const categories = await getCategories();

  return <AddProductForm categories={categories} />;
};

export default AddProductPage;
