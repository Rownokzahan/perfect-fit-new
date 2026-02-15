"use client";

import { createCategory } from "@/actions/categories/mutations/createCategory";
import CategoryForm, {
  CategoryFormData,
} from "@/components/forms/CategoryForm";
import { useTransition } from "react";
import { UseFormReset } from "react-hook-form";
import toast from "react-hot-toast";

const AddCategoryForm = () => {
  const [isPending, startTransition] = useTransition();

  const handleAddCategory = async (
    data: CategoryFormData,
    reset: UseFormReset<CategoryFormData>,
  ) => {
    startTransition(async () => {
      const result = await createCategory({
        name: data.name,
        image: data.image[0],
      });

      if (result.success) {
        reset();
      } else {
        toast.error(result.message, { duration: 5000 });
      }
    });
  };

  return (
    <CategoryForm
      label="Add Category"
      isFormSubmitting={isPending}
      onSubmit={handleAddCategory}
    />
  );
};

export default AddCategoryForm;
