"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkDesktopProps {
  href: string;
  children: React.ReactNode;
}

const NavLinkDesktop = ({ href, children }: NavLinkDesktopProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={clsx("animated-underline", {
        "text-primary": isActive,
      })}
    >
      {children}
    </Link>
  );
};

export default NavLinkDesktop;
