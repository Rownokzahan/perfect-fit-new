"use server";

import { connectToDatabase } from "@/lib/db";
import { uploadToImgBB } from "@/lib/services/imgbb";
import { requireAdmin } from "@/lib/utils/admin";
import { generateUniqueSlug } from "@/lib/utils/slug";
import {
  validateFile,
  validateId,
  validateNonEmptyString,
  validatePositiveNumber,
} from "@/lib/utils/validators";
import ProductModel from "@/models/ProductModel";
import { Id } from "@/types";
import { Error } from "mongoose";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";

interface CreateProductPayload {
  name: string;
  description?: string;
  price: number;
  stock: number;
  categoryId: Id;
  image: File;
}

export const createProduct = requireAdmin(
  async ({
    name,
    description,
    price,
    stock,
    image,
    categoryId,
  }: CreateProductPayload) => {
    // Basic validation
    const validators = [
      validateNonEmptyString(name, "Product name"),
      validatePositiveNumber(price, "Product price"),
      validatePositiveNumber(stock, "Product stock"),
      validateFile(image, "Product image"),
      validateId(categoryId, "Category Id"),
    ];

    for (const v of validators) {
      if (!v.valid) return { success: false, message: v.message };
    }

    try {
      await connectToDatabase();

      const slug = await generateUniqueSlug({ Model: ProductModel, name });

      // Upload image to ImgBB
      const imageUrl = await uploadToImgBB(image, slug);

      await ProductModel.create({
        name,
        description,
        slug,
        price: Number(price),
        stock: Number(stock),
        image: imageUrl,
        category: categoryId,
      });

      // Invalidate cache
      updateTag("products");
    } catch (err) {
      if (err instanceof Error.ValidationError) {
        const message = Object.values(err.errors)
          .map((e) => e.message)
          .join(", ");
        return { success: false, message };
      }

      console.error(err);
      return { success: false, message: "Something went wrong." };
    }

    // Redirect after success
    redirect(`/admin/products`);
  },
);
