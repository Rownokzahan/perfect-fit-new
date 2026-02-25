"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavIconLinkProps {
  children: React.ReactNode;
  href: string;
  count: number;
  ariaLabel: string;
}

const NavIconLink = ({
  href,
  ariaLabel,
  children,
  count,
}: NavIconLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="w-7 h-8 grid place-items-center relative"
    >
      <span
        className={clsx("animated-underline", {
          "text-primary": isActive,
        })}
      >
        {children}
      </span>

      {count > 0 && (
        <div className="absolute shadow -top-1 -right-1 size-4 rounded-full bg-primary grid">
          <span className="place-self-center text-light text-xs font-medium">
            {count}
          </span>
        </div>
      )}
    </Link>
  );
};

export default NavIconLink;
