"use server";

import { connectToDatabase } from "@/lib/db";
import { uploadToImgBB } from "@/lib/services/imgbb";
import { requireAdmin } from "@/lib/utils/admin";
import { generateUniqueSlug } from "@/lib/utils/slug";
import {
  validateId,
  validateImageOrUrl,
  validateNonEmptyString,
  validatePositiveNumber,
} from "@/lib/utils/validators";
import ProductModel from "@/models/ProductModel";
import { Id } from "@/types";
import { Error } from "mongoose";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";

interface UpdateProductPayload {
  productId: Id;
  categoryId: Id;
  name: string;
  description?: string;
  price: number;
  stock: number;
  image: File | string;
}

export const updateProduct = requireAdmin(async ({
  productId,
  categoryId,
  name,
  description,
  price,
  stock,
  image,
}: UpdateProductPayload) => {
  // Basic validation
  const validators = [
    validateId(productId, "Product Id"),
    validateId(categoryId, "Category Id"),
    validateNonEmptyString(name, "Product name"),
    validatePositiveNumber(price, "Product price"),
    validatePositiveNumber(stock, "Product stock"),
    validateImageOrUrl(image, "Product image"),
  ];

  for (const v of validators) {
    if (!v.valid) return { success: false, message: v.message };
  }

  try {
    await connectToDatabase();

    // Fetch the existing category
    const existingProduct = await ProductModel.findById(productId);
    if (!existingProduct) {
      return { success: false, message: "Product not found" };
    }

    // Generate slug only if name changed
    let slug = existingProduct.slug;

    if (name !== existingProduct.name) {
      slug = await generateUniqueSlug({
        Model: ProductModel,
        name,
        excludeId: productId,
      });
    }

    // Handle image upload
    const imageUrl =
      typeof image === "string" ? image : await uploadToImgBB(image, slug);

    // Update product
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      {
        name,
        slug,
        description,
        price: Number(price),
        stock: Number(stock),
        image: imageUrl,
        category: categoryId,
      },
      { new: true, runValidators: true },
    );

    updateTag(`product-${updatedProduct?.slug}`);
    updateTag(`product-${productId}`);
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
});
