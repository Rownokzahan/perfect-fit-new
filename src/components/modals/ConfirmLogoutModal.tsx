"use client";

import useModalById from "@/hooks/useModalById";
import Button from "../ui/Button";
import Modal from "./Modal";
import { LuLogOut } from "react-icons/lu";
import { signOut } from "better-auth/api";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const ConfirmLogoutModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { closeModal } = useModalById("confirmLogoutModal");
  const router = useRouter();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      closeModal();

      await signOut();
      router.push("/");
    } catch (error) {
      toast.error("Unexpected error occurred");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      modalId="confirmLogoutModal"
      containerClasses="!max-w-sm py-6 px-4 sm:p-8"
    >
      <LuLogOut className="mb-4 mx-auto text-4xl" />

      <p className="text-center text-dark-light">
        Are you sure you want to log out?
      </p>

      <div className="mt-5 flex flex-row gap-3">
        <Button
          onClick={closeModal}
          variant="dark-outline"
          className="w-full text-sm sm:text-base"
        >
          Cancel
        </Button>

        <Button
          onClick={handleLogout}
          variant="primary"
          className="w-full text-sm sm:text-base"
        >
          {isLoading ? "Logging out..." : "Logout"}
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmLogoutModal;
