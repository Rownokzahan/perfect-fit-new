import { OrderStatusType } from "@/types/order";
import clsx from "clsx";

const statusStyles = {
  pending: {
    text: "Pending",
    className: "bg-yellow-50 text-yellow-600",
  },
  confirmed: {
    text: "Confirmed",
    className: "bg-blue-50 text-blue-600",
  },
  processing: {
    text: "Processing",
    className: "bg-purple-50 text-purple-600",
  },
  delivered: {
    text: "Delivered",
    className: "bg-green-50 text-green-600",
  },
};

interface OrderStatusBadgeProps {
  status: OrderStatusType;
}

const OrderStatusBadge = ({ status }: OrderStatusBadgeProps) => {
  const { text, className } = statusStyles[status];

  return (
    <div
      className={clsx(
        "h-max px-3 py-px rounded-2xl border border-gray-100 text-sm font-semibold",
        className
      )}
    >
      {text}
    </div>
  );
};

export default OrderStatusBadge;
