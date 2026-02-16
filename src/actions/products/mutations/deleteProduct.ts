"use server";

import { connectToDatabase } from "@/lib/db";
import { validateId } from "@/lib/utils/validators";
import ProductModel from "@/models/ProductModel";
import { Id } from "@/types";
import { updateTag } from "next/cache";

export const deleteProduct = async (productId: Id) => {
  // Validate ID
  const validation = validateId(productId, "Product ID");
  if (!validation.valid) {
    return { success: false, message: validation.message };
  }

  try {
    await connectToDatabase();
    const deletedProduct = await ProductModel.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return { success: false, message: "Product not found" };
    }

    updateTag("products");
  } catch (err) {
    console.error("Failed to delete product", err);
    return { success: false, message: "Could not delete product" };
  }
};
