import { getCategoryById } from "@/actions/categories/queries/getCategoryById";
import UpdateCategoryForm from "./UpdateCategoryForm";

export const metadata = {
  title: "Edit Category - Admin",
};

interface Params {
  params: Promise<{ id: string }>;
}

const EditCategoryPage = async ({ params }: Params) => {
  const { id } = await params;

  const category = await getCategoryById(id);

  if (!category) {
    return <div>Category Not Found</div>;
  }

  return <UpdateCategoryForm category={category} />;
};

export default EditCategoryPage;
