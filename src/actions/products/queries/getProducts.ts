import { connectToDatabase } from "@/lib/db";
import { toPlainObject } from "@/lib/utils/object";
import CategoryModel from "@/models/CategoryModel";
import ProductModel from "@/models/ProductModel";
import { PaginatedProducts } from "@/types/product";
import { SortOrder } from "mongoose";
import { cacheTag } from "next/cache";

const sortMap: Record<string, Record<string, SortOrder>> = {
  newest: { createdAt: -1 },
  "price-asc": { price: 1 },
  "price-desc": { price: -1 },
  "name-asc": { name: 1 },
  "name-desc": { name: -1 },
};

interface GetProductsProps {
  search?: string;
  page?: string | number;
  category?: string;
  sort?: string;
  limit?: string | number;
}

export const getProducts = async ({
  search,
  page = 1,
  category: categorySlug,
  sort = "newest",
  limit = 20,
}: GetProductsProps): Promise<PaginatedProducts> => {
  "use cache";
  cacheTag("products");

  const currentPage = Math.max(1, Number(page) || 1);
  const currentLimit = Math.max(1, Math.min(100, Number(limit) || 20));
  const skip = (currentPage - 1) * currentLimit;

  const sortOption = sortMap[sort] ?? sortMap.newest;

  const filters: Record<string, unknown> = {};

  if (search?.trim()) {
    filters.name = {
      $regex: search.trim(),
      $options: "i",
    };
  }

  try {
    await connectToDatabase();

    if (categorySlug && categorySlug !== "all") {
      const category = await CategoryModel.findOne(
        { slug: categorySlug },
        { _id: 1 },
      ).lean();

      if (category) {
        filters.category = category._id;
      }
    }

    const [products, totalItems] = await Promise.all([
      ProductModel.find({ ...filters, status: "active" })
        .sort(sortOption)
        .skip(skip)
        .limit(currentLimit)
        .lean(),

      ProductModel.countDocuments({ ...filters, status: "active" }),
    ]);

    return {
      products: toPlainObject(products),
      pagination: {
        totalItems,
        totalPages: Math.ceil(totalItems / currentLimit),
        page: currentPage,
        limit: currentLimit,
      },
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);

    return {
      products: [],
      pagination: {
        totalItems: 0,
        totalPages: 0,
        page: 1,
        limit: 20,
      },
    };
  }
};
