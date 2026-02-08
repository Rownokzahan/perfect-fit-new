import { ModalId, ModalsState } from "@/types/modal";
import { create } from "zustand";

type State = ModalsState;

type Action = {
  openModalById: <T extends ModalId>(
    modalId: T,
    data: ModalsState[T]["data"]
  ) => void;

  closeModalById: (modalId: ModalId) => void;
};

const initialState: State = {
  authModal: { isOpen: false, data: null },
  addToCartModal: { isOpen: false, data: null },
  confirmClearCartModal: { isOpen: false, data: null },
  orderSuccessModal: { isOpen: false, data: null },
  confirmDeleteModal: { isOpen: false, data: { message: "" } },
  confirmLogoutModal: { isOpen: false, data: null },
};

export const useModalsStateStore = create<State & { actions: Action }>(
  (set) => ({
    ...initialState,

    actions: {
      openModalById: (modalId, data = null) =>
        set((state) => ({
          ...state,
          [modalId]: { isOpen: true, data },
        })),

      closeModalById: (modalId) =>
        set((state) => ({ ...state, [modalId]: initialState[modalId] })),
    },
  })
);
