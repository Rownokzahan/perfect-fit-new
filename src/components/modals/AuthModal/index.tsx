"use client";

import AuthContent from "@/components/auth/AuthContent";
import Modal from "../Modal";

const AuthModal = () => {
  return (
    <Modal modalId="authModal">
      <AuthContent />
    </Modal>
  );
};

export default AuthModal;
