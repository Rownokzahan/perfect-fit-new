"use server";

import { connectToDatabase } from "@/lib/db";
import ProductModel from "@/models/ProductModel";
import { Id } from "@/types";
import mongoose from "mongoose";
import { updateTag } from "next/cache";

export const deleteProduct = async (productId: Id) => {
  if (
    !productId ||
    typeof productId !== "string" ||
    !mongoose.Types.ObjectId.isValid(productId)
  ) {
    return {
      success: false,
      message: "Invalid product ID",
    };
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
