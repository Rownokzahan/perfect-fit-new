"use client";

import { softDeleteProduct } from "@/actions/products/mutations/softDeleteProduct";
import { useConfirmDeleteModal } from "@/hooks/useConfirmDeleteModal";
import { Id } from "@/types";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { LuLoader, LuTrash2 } from "react-icons/lu";

interface DeleteProductButtonProps {
  productId: Id;
}

const DeleteProductButton = ({ productId }: DeleteProductButtonProps) => {
  const confirmDelete = useConfirmDeleteModal();
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    const confirmed = await confirmDelete(
      "Are you sure you want to soft delete this product?",
    );

    if (!confirmed) {
      return;
    }

    startTransition(async () => {
      const error = await softDeleteProduct(productId);
      if (error) {
        toast.error(error.message);
      }
    });
  };

  return (
    <button onClick={handleDelete} className="size-6 grid place-items-center">
      {isPending ? <LuLoader /> : <LuTrash2 />}
    </button>
  );
};

export default DeleteProductButton;
