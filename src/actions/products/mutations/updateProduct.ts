import { isFile } from "@/lib/utils/file";
import { Id } from "@/types";
import mongoose from "mongoose";

interface UpdateProductPayload {
  productId: Id;
  categoryId: Id;
  name: string;
  price: number;
  image: File | string;
}

export const updateProduct = async ({
  productId,
  categoryId,
  name,
  price,
  image,
}: UpdateProductPayload) => {
  // Basic validation
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

  if (
    !categoryId ||
    typeof categoryId !== "string" ||
    !mongoose.Types.ObjectId.isValid(categoryId)
  ) {
    return {
      success: false,
      message: "Invalid category ID",
    };
  }

  if (!name || typeof name !== "string") {
    return {
      success: false,
      message: "Name is required and must be a string.",
    };
  }

  if (!price || isNaN(Number(price))) {
    return {
      success: false,
      message: "Price is required and must be a number",
    };
  }

  if (!image || (typeof image !== "string" && !isFile(image))) {
    return {
      success: false,
      message: "Image is required and must be a string or valid file",
    };
  }
};
