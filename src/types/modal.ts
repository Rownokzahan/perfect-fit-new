type ModalState<Data = null> = {
  isOpen: boolean;
  data: Data;
};

export interface ModalsState {
  authModal: ModalState;
  addToCartModal: ModalState;
  confirmClearCartModal: ModalState;
  orderSuccessModal: ModalState;
  confirmDeleteModal: ModalState<{ message: string }>;
  confirmLogoutModal: ModalState;
}

export type ModalId = keyof ModalsState;
