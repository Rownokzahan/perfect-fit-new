import Button from "@/components/ui/Button";
import Modal from "../Modal";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const AddToCartModal = () => {
  return (
    <Modal
      modalId="addToCartModal"
      containerClasses="!max-w-md py-6 px-4 sm:p-8"
    >
      <IoCheckmarkCircleOutline className="mb-2 text-5xl mx-auto" />

      <h3 className="text-center text-2xl font-medium">Added To Cart</h3>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button
          href="/dresses"
          variant="dark-outline"
          className="w-full text-sm sm:text-base text-nowrap"
        >
          Continue Shopping
        </Button>

        <Button href="/cart" className="w-full text-sm sm:text-base">
          View Cart
        </Button>
      </div>
    </Modal>
  );
};

export default AddToCartModal;
