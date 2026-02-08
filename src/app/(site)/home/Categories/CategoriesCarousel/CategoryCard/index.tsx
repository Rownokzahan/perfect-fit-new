import { Category } from "@/types/category";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const { slug, name, image } = category;

  return (
    <Link href={`/dresses?category=${slug}`} className="relative z-0 group">
      {/* Category image */}
      <figure className="w-full aspect-5/6 overflow-hidden">
        <Image
          width={500}
          height={700}
          src={image}
          alt=""
          className="size-full rounded object-cover object-top mix-blend-multiply group-hover:scale-105 duration-350"
        />
      </figure>

      {/* Category name */}
      <h3 className="h-max p-4 absolute z-10 inset-x-4 top-1/2 -translate-y-1/2 text-center truncate text-light font-semibold xl:text-xl">
        {name}
      </h3>

      {/* Overlay effect on active */}
      <div className="absolute inset-x-4 xl:inset-x-12 inset-y-[38%] group-active:inset-0 bg-dark/40 group-active:bg-dark/50 duration-350" />
    </Link>
  );
};

export default CategoryCard;
