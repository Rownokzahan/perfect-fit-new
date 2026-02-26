"use server";

import { connectToDatabase } from "@/lib/db";
import { validateId } from "@/lib/utils/validators";
import ProductModel from "@/models/ProductModel";
import { updateTag } from "next/cache";

export const softDeleteProduct = async (productId: string) => {
  // Validate ID
  const validation = validateId(productId, "Product ID");
  if (!validation.valid) {
    return { success: false, message: validation.message };
  }

  try {
    await connectToDatabase();
    // Soft delete: update status and deletedAt
    const result = await ProductModel.updateOne(
      { _id: productId, status: { $ne: "archived" } },
      { status: "archived", deletedAt: new Date() },
    );

    if (result.matchedCount === 0) {
      return {
        success: false,
        message: "Product not found or already archived",
      };
    }

    updateTag("products");
  } catch (err) {
    console.error("Failed to delete product", err);
    return { success: false, message: "Could not soft delete product" };
  }
};
