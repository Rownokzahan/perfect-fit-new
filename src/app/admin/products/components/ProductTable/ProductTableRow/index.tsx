import Image from "next/image";
import Link from "next/link";
import { TbEdit } from "react-icons/tb";
import DeleteProductButton from "./DeleteProductButton";
import { Product } from "@/types/product";

interface AdminProductTableRowProps {
  product: Product;
}

const AdminProductTableRow = ({
  product,
}: AdminProductTableRowProps) => {
  const { _id, image, name, price } = product || {};

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-3">
        <div className="size-16 relative">
          <Image
            src={image}
            alt={name}
            className="size-full rounded-md object-cover bg-gray-200"
            fill
            unoptimized
          />
        </div>
      </td>
      <td className="px-4 py-3 font-medium text-dark/65">{name}</td>
      <td className="px-4 py-3 font-semibold">${price}</td>

      <td className="px-4 py-3">
        <div className="flex items-center justify-center gap-2 text-lg text-dark-light">
          <Link
            href={`/admin/products/edit/${_id}`}
            className="size-6 grid place-items-center"
          >
            <TbEdit />
          </Link>

          <DeleteProductButton
            productId={_id}
          />
        </div>
      </td>
    </tr>
  );
};

export default AdminProductTableRow;
