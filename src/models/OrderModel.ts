import { model, models, Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    deliveryDetails: {
      type: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        deliveryAddress: { type: String, required: true },
      },
      required: true,
      _id: false,
    },

    items: {
      type: [
        {
          id: { type: String, required: true },
          customizations: {
            type: {
              bodiceType: { type: String, required: true },
              sleeveType: { type: String, required: true },
              skirtType: { type: String, required: true },
              fabric: { type: String, required: true },
            },
            required: true,
            _id: false,
          },
          measurements: {
            type: {
              length: { type: Number, required: true },
              sleeveLength: { type: Number, required: true },
              chest: { type: Number, required: true },
              waist: { type: Number, required: true },
            },
            required: true,
            _id: false,
          },
          product: {
            type: {
              id: {
                type: Schema.Types.ObjectId,
                ref: "Product",
                required: true,
              },
              name: { type: String, required: true },
              price: { type: Number, required: true },
              image: { type: String, required: true },
            },
            required: false,
            default: undefined,
            _id: false,
          },
          isCustomDress: { type: Boolean, required: true },
          customDress: {
            type: {
              name: { type: String, required: true },
              price: { type: Number, required: true },
            },
            required: false,
            default: undefined,
            _id: false,
          },
          request: { type: String, required: false, default: "" },
          quantity: { type: Number, required: true },
          totalPrice: { type: Number, required: true },
        },
      ],
      required: true,
    },

    totalPrice: { type: Number, required: true },
    paymentMethod: {
      type: String,
      enum: ["cash on delivery", "online"],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "processing", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const OrderModel = models.Order || model("Order", OrderSchema);

export default OrderModel;
