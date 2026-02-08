import { useModalsStateStore } from "@/stores/useModalsStateStore";
import { ModalId, ModalsState } from "@/types/modal";

const useModalById = <T extends ModalId>(modalId: T) => {
  const modal = useModalsStateStore((state) => state[modalId]);
  const { openModalById, closeModalById } = useModalsStateStore(
    (state) => state.actions
  );

  const openModal = () => openModalById(modalId, null);
  const openModalWithData = (data: ModalsState[T]["data"]) =>
    openModalById(modalId, data);

  const closeModal = () => closeModalById(modalId);

  return {
    isModalOpen: modal.isOpen,
    modalData: modal.data,
    openModal,
    openModalWithData,
    closeModal,
  };
};

export default useModalById;
