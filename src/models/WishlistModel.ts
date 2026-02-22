import { model, models, Schema } from "mongoose";

const WishlistSchema = new Schema(
  {
    ownerId: {
      type: String,
      unique: true,
      required: true,
    },
    userType: {
      type: String,
      enum: ["guest", "user"],
      required: true,
    },
    items: {
      type: [
        {
          productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
          },
          addedAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      _id: false,
    },
  },
  { timestamps: true },
);

const WishlistModel = models.Wishlist || model("Wishlist", WishlistSchema);

export default WishlistModel;
