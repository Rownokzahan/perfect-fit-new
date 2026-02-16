"use server";

import { connectToDatabase } from "@/lib/db";
import { uploadToImgBB } from "@/lib/services/imgbb";
import { generateUniqueSlug } from "@/lib/utils/slug";
import {
  validateId,
  validateImageOrUrl,
  validateNonEmptyString,
  validatePositiveNumber,
} from "@/lib/utils/validators";
import ProductModel from "@/models/ProductModel";
import { Id } from "@/types";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";

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
  const validators = [
    validateId(productId, "Product Id"),
    validateId(categoryId, "Category Id"),
    validateNonEmptyString(name, "Product name"),
    validatePositiveNumber(price, "Product price"),
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
    await ProductModel.findByIdAndUpdate(
      productId,
      {
        name,
        slug,
        price: Number(price),
        image: imageUrl,
        category: categoryId,
      },
      { new: true, runValidators: true },
    );

    updateTag(`product-${productId}`);
    updateTag("products");
  } catch (err) {
    console.error(err);
    return { success: false, message: "Failed to update product" };
  }

  // Redirect after success
  redirect(`/admin/products`);
};
