import { connectToDatabase } from "@/lib/db";
import { requireAdmin } from "@/lib/utils/admin";
import ProductModel from "@/models/ProductModel";
import { Id } from "@/types";
import { updateTag } from "next/cache";

export const restoreProduct = requireAdmin(async (productId: Id) => {
  try {
    await connectToDatabase();

    const result = await ProductModel.updateOne(
      { _id: productId, status: "archived" },
      { $set: { status: "active", deletedAt: null } },
    );

    if (result.matchedCount === 0) {
      return {
        success: false,
        message: "Product not found or not soft-deleted",
      };
    }

    updateTag(`product-${productId}`);
    updateTag("products");
  } catch (err) {
    console.error("Failed to restore product", err);
    return { success: false, message: "Could not restore product" };
  }
});
