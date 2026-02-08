"use client";

import updateCategory, {
  UpdateCategoryPayload,
} from "@/actions/categories/mutations/updateCategory";
import CategoryForm, {
  CategoryFormData,
} from "@/components/forms/CategoryForm";
import { Category } from "@/types/category";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { UseFormReset } from "react-hook-form";
import toast from "react-hot-toast";

interface UpdateCategoryFormProps {
  category: Category;
}

const UpdateCategoryForm = ({ category }: UpdateCategoryFormProps) => {
  const { _id, name, image } = category || {};
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const handleUpdateCategory = async (
    data: CategoryFormData,
    reset: UseFormReset<CategoryFormData>,
  ) => {
    if (name === data.name && image === data.image) {
      toast.error("No changes made to the category.");
      return;
    }

    const payload: UpdateCategoryPayload = {
      categoryId: _id,
      name: data.name,
      image: typeof data.image === "string" ? data.image : data.image[0],
    };

    startTransition(async () => {
      const result = await updateCategory(payload);

      if (result.success) {
        reset();
        router.push("/admin/categories");
        toast.success(result.message, { duration: 5000 });
      } else {
        toast.error(result.message, { duration: 5000 });
      }
    });
  };

  return (
    <CategoryForm
      label="Update Category"
      isFormSubmitting={isPending}
      onSubmit={handleUpdateCategory}
      defaultValues={{
        name,
        image,
      }}
    />
  );
};

export default UpdateCategoryForm;
