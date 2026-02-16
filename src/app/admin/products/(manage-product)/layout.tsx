import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

interface ManageProductLayoutProps {
  children: React.ReactNode;
}

const ManageProductLayout = ({ children }: ManageProductLayoutProps) => {
  return (
    <>
      <Link
        href={"/admin/products"}
        className="mb-4 hidden sm:flex items-center font-semibold hover:text-primary duration-300"
      >
        <IoIosArrowBack className="text-lg" />
        Back to products
      </Link>

      <Link href={"/admin/products"} className="fixed sm:hidden top-5 bg-light-light">
        <IoIosArrowBack className="text-2xl text-dark/90" />
      </Link>

      {children}
    </>
  );
};

export default ManageProductLayout;
