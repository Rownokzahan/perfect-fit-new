import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Modal from "../Modal";
import Button from "@/components/ui/Button";

const OrderSuccessModal = () => {
  return (
    <Modal
      modalId="orderSuccessModal"
      containerClasses="!max-w-md py-6 px-4 sm:p-8"
    >
      <IoCheckmarkCircleOutline className="mb-2 text-5xl mx-auto" />

      <h3 className="text-center text-xl font-medium">
        Your order has been placed sucessfully!
      </h3>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button
          href="/dresses"
          variant="dark-outline"
          className="w-full text-sm sm:text-base text-nowrap"
        >
          Continue Shopping
        </Button>

        <Button href="/my-orders" className="w-full text-sm sm:text-base">
          View orders
        </Button>
      </div>
    </Modal>
  );
};

export default OrderSuccessModal;
