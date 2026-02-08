import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

interface ManageCategoryLayoutProps {
  children: React.ReactNode;
}

const ManageCategoryLayout = ({ children }: ManageCategoryLayoutProps) => {
  return (
    <>
      <Link
        href={"/admin/categories"}
        className="mb-4 hidden sm:flex items-center font-semibold hover:text-primary duration-300"
      >
        <IoIosArrowBack className="text-lg" />
        Back to categories
      </Link>

      <Link
        href={"/admin/categories"}
        className="fixed sm:hidden top-5 bg-light-light"
      >
        <IoIosArrowBack className="text-2xl text-dark/90" />
      </Link>

      {children}
    </>
  );
};

export default ManageCategoryLayout;
