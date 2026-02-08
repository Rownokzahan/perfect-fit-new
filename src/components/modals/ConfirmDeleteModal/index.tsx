"use client";

import Modal from "../Modal";
import useModalById from "@/hooks/useModalById";
import { resolveConfirmDeleteModal } from "@/hooks/useConfirmDeleteModal";
import Button from "@/components/ui/Button";
import { LuTrash2 } from "react-icons/lu";

const ConfirmDeleteModal = () => {
  const { modalData, closeModal } = useModalById("confirmDeleteModal");

  const handleCancel = () => {
    resolveConfirmDeleteModal(false);
    closeModal();
  };

  const handleDelete = () => {
    resolveConfirmDeleteModal(true);
    closeModal();
  };

  return (
    <Modal
      modalId="confirmDeleteModal"
      containerClasses="!max-w-sm py-6 px-4 sm:p-8"
    >
      <LuTrash2 className="mb-4 mx-auto text-4xl" />

      <p className="text-center text-dark-light">{modalData?.message}</p>

      <div className="mt-5 flex flex-row gap-3">
        <Button
          onClick={handleCancel}
          variant="dark-outline"
          className="w-full text-sm sm:text-base"
        >
          Cancel
        </Button>

        <Button
          onClick={handleDelete}
          variant="primary"
          className="w-full text-sm sm:text-base"
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
