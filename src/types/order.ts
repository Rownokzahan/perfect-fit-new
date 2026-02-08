import { Id } from ".";
import { CustomizedProduct } from "./product";

export type OrderStatusType =
  | "pending"
  | "confirmed"
  | "processing"
  | "delivered";

export interface Order {
  _id: Id;
  user: Id;
  createdAt: string;
  status: OrderStatusType;
  deliveryDetails: {
    name: string;
    email: string;
    phoneNumber: string;
    deliveryAddress: string;
  };
  items: CustomizedProduct[];
  totalPrice: number;
  paymentMethod: "cash on delivery" | "online";
}
