import getCategoryById from "@/actions/categories/queries/getCategoryById";
import UpdateCategoryForm from "./UpdateCategoryForm";

export const metadata = {
  title: "Edit Category - Admin",
};

interface Params {
  params: Promise<{ id: string }>;
}

const EditCategoryPage = async ({ params }: Params) => {
  const categoryId = (await params).id;
  const category = await getCategoryById(categoryId);

  if (!category) {
    return <div>Category Not Found</div>;
  }

  return <UpdateCategoryForm category={category} />;
};

export default EditCategoryPage;
