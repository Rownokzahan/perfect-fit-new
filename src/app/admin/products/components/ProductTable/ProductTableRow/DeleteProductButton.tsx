"use client";

import { useConfirmDeleteModal } from "@/hooks/useConfirmDeleteModal";
import { useDeleteProduct } from "@/lib/api/products/hooks";
import { Id } from "@/types";
import toast from "react-hot-toast";
import { LuTrash2 } from "react-icons/lu";

interface DeleteProductButtonProps {
  productId: Id;
  refetchProducts: () => void;
}

const DeleteProductButton = ({
  productId,
  refetchProducts,
}: DeleteProductButtonProps) => {
  const confirmDelete = useConfirmDeleteModal();

  const { deleteProduct } = useDeleteProduct(productId);

  const handleDelete = async () => {
    const confirmed = await confirmDelete(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await toast.promise(deleteProduct(), {
        loading: "Deleting product...",
        success: "Product deleted successfully!",
        error: "Failed to delete product",
      });

      refetchProducts();
    } catch (error) {
      toast.error("Failed to delete product", { duration: 5000 });
      console.error(error);
    }
  };

  return (
    <button onClick={handleDelete} className="size-6 grid place-items-center">
      <LuTrash2 />
    </button>
  );
};

export default DeleteProductButton;
