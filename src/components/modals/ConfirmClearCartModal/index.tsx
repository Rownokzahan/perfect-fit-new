import useCart from "@/hooks/useCart";
import Modal from "../Modal";
import Button from "@/components/ui/Button";
import useModalById from "@/hooks/useModalById";
import { TbShoppingBagX } from "react-icons/tb";

const ConfirmClearCartModal = () => {
  const { closeModal } = useModalById("confirmClearCartModal");
  const { clearCart } = useCart();

  const handleClearCart = () => {
    clearCart();
    closeModal();
  };

  return (
    <Modal modalId="confirmClearCartModal" containerClasses="!max-w-sm p-8">
      <TbShoppingBagX className="mb-4 mx-auto text-4xl" />

      <p className="text-center text-dark-light">
        Are you sure you want to clear your shopping bag?
      </p>

      <div className="mt-6 flex flex-row gap-3">
        <Button
          onClick={closeModal}
          variant="dark-outline"
          className="w-full text-sm sm:text-base"
        >
          Cancel
        </Button>

        <Button
          onClick={handleClearCart}
          variant="primary"
          className="w-full text-sm sm:text-base"
        >
          Clear
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmClearCartModal;
