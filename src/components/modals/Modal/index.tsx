"use client";

import useModalById from "@/hooks/useModalById";
import { ModalId } from "@/types/modal";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";

interface ModalProps {
  modalId: ModalId;
  children: React.ReactNode;
  containerClasses?: string;
  closeOnOutsideClick?: boolean;
  disableScroll?: boolean;
}

const Modal = ({
  modalId,
  children,
  containerClasses = "",
  closeOnOutsideClick = true,
  disableScroll = true,
}: ModalProps) => {
  const { isModalOpen, closeModal } = useModalById(modalId);
  const pathname = usePathname();

  useEffect(() => {
    closeModal();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    // Disable body scroll if disableScroll is true and modal is open
    if (isModalOpen && disableScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = ""; // Ensure cleanup to avoid side effects
    };
  }, [isModalOpen, disableScroll]);

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="fixed z-50 inset-0 px-3 grid place-items-center">
      <div
        onClick={closeOnOutsideClick ? closeModal : undefined}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs"
      />

      <div
        className={clsx(
          "w-full max-w-lg rounded bg-light relative",
          containerClasses
        )}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className={clsx(
            "size-6 rounded-full bg-light text-lg text-dark-light",
            "flex justify-center items-center",
            "absolute right-0 -top-8 sm:top-0 sm:-right-8"
          )}
        >
          <FaXmark />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
