"use client";

import { UseFormReset } from "react-hook-form";
import toast from "react-hot-toast";
import ProductForm, { ProductFormData } from "@/components/forms/ProductForm";
import { Product } from "@/types/product";
import { Category } from "@/types/category";
import { useTransition } from "react";
import { updateProduct } from "@/actions/products/mutations/updateProduct";

interface UpdateProductFormProps {
  product: Product;
  categories: Category[];
}

const UpdateProductForm = ({ product, categories }: UpdateProductFormProps) => {
  const [isPending, startTransition] = useTransition();

  const { _id, name, image, price, category } = product || {};

  const handleUpdateProduct = async (
    data: ProductFormData,
    reset: UseFormReset<ProductFormData>,
  ) => {
    const numericPrice = Number(data.price);

    if (
      name === data.name &&
      image === data.image &&
      price === numericPrice &&
      category === data.category
    ) {
      toast.error("No changes made to the product.");
      return;
    }

    startTransition(async () => {
      const result = await updateProduct({
        productId: _id,
        categoryId: data.category,
        name: data.name,
        price: numericPrice,
        image: typeof data.image === "string" ? data.image : data.image[0],
      });

      if (result.success) {
        reset();
      } else {
        toast.error(result.message, { duration: 5000 });
      }
    });
  };

  return (
    <ProductForm
      key={name + image + price + category} // to change the default value
      label="Update Product"
      categories={categories}
      isFormSubmitting={isPending}
      onSubmit={handleUpdateProduct}
      defaultValues={{
        name,
        image,
        price: price.toString(),
        category: category?.toString() || "",
      }}
    />
  );
};

export default UpdateProductForm;
