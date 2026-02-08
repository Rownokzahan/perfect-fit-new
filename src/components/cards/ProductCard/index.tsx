import { Product } from "@/types/product";
import Image from "next/image";
import WishlistButton from "./WishlistButton";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { _id, slug, image, name, price } = product || {};

  return (
    <article className="rounded-sm bg-light-light relative">
      <Link href={`/dresses/${slug}/customize`}>
        <figure className="aspect-5/6 p-3">
          <Image
            width={400}
            height={700}
            src={image}
            alt="Product Image"
            className="size-full object-cover object-top rounded-t-sm bg-gray-200"
            unoptimized
          />
        </figure>

        <div className="px-4 pb-3 font-medium space-y-1">
          <p className="truncate text-xs sm:text-sm">{name}</p>
          <p className="text-sm sm:text-base">${price}</p>
        </div>
      </Link>

      <WishlistButton productId={_id} />
    </article>
  );
};

export default ProductCard;
