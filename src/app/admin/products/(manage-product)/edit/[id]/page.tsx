import { getCategories } from "@/actions/categories/queries/getCategories";
import UpdateProductForm from "./UpdateProductForm";
import { getProductById } from "@/actions/products/queries/getProductById";

export const metadata = {
  title: "Edit Product - Admin",
};

interface Params {
  params: Promise<{ id: string }>;
}

const EditProductPage = async ({ params }: Params) => {
  const productId = (await params).id;

  const [product, categories] = await Promise.all([
    getProductById(productId),
    getCategories(),
  ]);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return <UpdateProductForm product={product} categories={categories} />;
};

export default EditProductPage;
