"use client";

import { createProduct } from "@/actions/products/mutations/createProduct";
import ProductForm, { ProductFormData } from "@/components/forms/ProductForm";
import { isFile } from "@/lib/utils/file";
import { Category } from "@/types/category";
import { useTransition } from "react";
import { UseFormReset } from "react-hook-form";
import toast from "react-hot-toast";

interface AddProductFormProps {
  categories: Category[];
}

const AddProductForm = ({ categories }: AddProductFormProps) => {
  const [isPending, startTransition] = useTransition();

  const handleAddProduct = async (
    data: ProductFormData,
    reset: UseFormReset<ProductFormData>,
  ) => {
    const { name, price, image, category } = data;

    const firstImage = image[0];

    if (!isFile(firstImage)) {
      toast.error("Please select a valid image.", { duration: 5000 });
      return;
    }

    startTransition(async () => {
      const result = await createProduct({
        name,
        price: Number(price), // input makes it string
        categoryId: category,
        image: firstImage,
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
      label="Add Product"
      categories={categories}
      isFormSubmitting={isPending}
      onSubmit={handleAddProduct}
    />
  );
};

export default AddProductForm;
