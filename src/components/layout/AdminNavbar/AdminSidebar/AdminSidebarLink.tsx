"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface AdminSidebarLinkProps {
  link: {
    name: string;
    Icon: IconType;
    path: string;
  };
}

const AdminSidebarLink = ({ link }: AdminSidebarLinkProps) => {
  const { name, Icon, path } = link || {};

  const pathname = usePathname();
  const isActive = pathname.startsWith(path);

  return (
    <Link
      href={path}
      className={clsx(
        "w-full px-4 py-3 rounded flex items-center gap-4 duration-50",
        isActive ? "bg-primary/20" : "hover:bg-primary/5",
      )}
      prefetch={false}
    >
      <Icon
        className={clsx(
          "text-xl",
          isActive ? "text-primary" : "text-dark-light",
        )}
      />

      <span>{name}</span>
    </Link>
  );
};

export default AdminSidebarLink;
