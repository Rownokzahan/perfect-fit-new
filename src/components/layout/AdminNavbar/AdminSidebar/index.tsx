"use client";

import { FaHome, FaShoppingBag } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import AdminSidebarLink from "./AdminSidebarLink";
import { BiSolidCategory } from "react-icons/bi";
import { BsFillBoxFill } from "react-icons/bs";
import Logo from "@/components/ui/Logo";
import clsx from "clsx";
import { MdClose } from "react-icons/md";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const Links = [
  {
    name: "Dashboard",
    Icon: FaHome,
    path: "/admin/dashboard",
  },
  {
    name: "Categories",
    Icon: BiSolidCategory,
    path: "/admin/categories",
  },
  {
    name: "Products",
    Icon: FaShoppingBag,
    path: "/admin/products",
  },
  {
    name: "Orders",
    Icon: BsFillBoxFill,
    path: "/admin/orders",
  },
  {
    name: "Customers",
    Icon: FaUserGroup,
    path: "/admin/customers",
  },
];

interface AdminSidebarProps {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}

const AdminSidebar = ({ isSidebarOpen, closeSidebar }: AdminSidebarProps) => {
  const pathname = usePathname();

  useEffect(() => {
    if (isSidebarOpen) {
      closeSidebar();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <aside
      className={clsx(
        "fixed z-40 inset-y-0 w-60 border-e border-gray-200/80 bg-light-light",
        "lg:translate-x-0 duration-300",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="h-16 ps-7 pe-4 border-b border-gray-200/80 flex items-center justify-between">
        <Logo />

        <button onClick={closeSidebar} aria-label="Close Sidebar">
          <MdClose className="lg:hidden text-2xl text-dark-light" />
        </button>
      </div>

      <ul className="max-h-[calc(100%-64px)] p-4 text-sm font-medium space-y-3 overflow-y-auto">
        {Links?.map((link) => (
          <li key={link.name}>
            <AdminSidebarLink link={link} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AdminSidebar;
