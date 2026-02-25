"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface NavbarWrapperProps {
  children: React.ReactNode;
}

const NavbarWrapper = ({ children }: NavbarWrapperProps) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY < 100);

      setIsScrollingUp(currentScrollY < lastScrollY && currentScrollY > 100);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isHomepage = pathname === "/";

  const navbarClasses = clsx(
    "w-full h-16 sm:h-18 px-4 lg:px-[6%]",
    "fixed z-40 top-0 left-0 transition-all duration-300",
    {
      "text-light": isHomepage && isAtTop,
      "bg-light text-dark shadow-xs": isScrollingUp && !isAtTop,
      "-translate-y-full": !isAtTop && !isScrollingUp,
      "shadow-xs bg-light": !isHomepage,
    },
  );

  return <header className={navbarClasses}>{children}</header>;
};

export default NavbarWrapper;
