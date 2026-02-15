"use client";

import { deleteCategory } from "@/actions/categories/mutations/deleteCategory";
import { useConfirmDeleteModal } from "@/hooks/useConfirmDeleteModal";
import { Id } from "@/types";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { LuLoader, LuTrash2 } from "react-icons/lu";

interface DeleteCategoryButtonProps {
  categoryId: Id;
}

const DeleteCategoryButton = ({ categoryId }: DeleteCategoryButtonProps) => {
  const confirmDelete = useConfirmDeleteModal();
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    const confirmed = await confirmDelete(
      "Are you sure you want to delete this category?",
    );

    if (!confirmed) {
      return;
    }

    startTransition(async () => {
      const result = await deleteCategory(categoryId);
      if (!!result?.success) {
        toast.error(result.message);
      }
    });
  };

  return (
    <button onClick={handleDelete} className="size-6 grid place-items-center">
      {isPending ? <LuLoader /> : <LuTrash2 />}
    </button>
  );
};

export default DeleteCategoryButton;
