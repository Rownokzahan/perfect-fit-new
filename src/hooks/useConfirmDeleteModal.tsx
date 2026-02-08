import { useCallback } from "react";
import useModalById from "./useModalById";

let resolver: ((value: boolean) => void) | null = null;

export const useConfirmDeleteModal = () => {
  const { openModalWithData } = useModalById("confirmDeleteModal");

  const confirm = useCallback(
    (message: string): Promise<boolean> => {
      return new Promise((resolve) => {
        resolver = resolve;
        openModalWithData({ message });
      });
    },
    [openModalWithData]
  );

  return confirm;
};

export const resolveConfirmDeleteModal = (value: boolean) => {
  if (resolver) {
    resolver(value);
    resolver = null;
  }
};