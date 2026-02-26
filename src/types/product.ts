import { Id } from ".";

export type ProductStatus = "active" | "inactive" | "archived";

export interface Product {
  _id: Id;
  name: string;
  slug: string;
  description?: string;
  image: string;
  price: number;
  stock: number;
  category: Id;
  status: ProductStatus;
}

export interface CustomizedProduct {
  _id: Id;
  customizations: {
    bodiceType: string;
    sleeveType: string;
    skirtType: string;
    fabric: string;
  };
  measurements: {
    length: number;
    sleeveLength: number;
    chest: number;
    waist: number;
  };
  product?: {
    _id: Id;
    name: string;
    price: number;
    image: string;
  };

  isCustomDress: boolean;
  customDress?: {
    name: string;
    price: number;
  };

  request: string;
  quantity: number;
  totalPrice: number;
}

export interface PaginatedProducts {
  products: Product[];
  pagination: {
    totalItems: number;
    totalPages: number;
    page: number;
    limit: number;
  };
}
