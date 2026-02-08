"use client";

import Logo from "@/components/ui/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import NavigationMenu from "./NavigationMenu";
import { useState } from "react";
import NavIcons from "../shared/NavIcons";

const NavbarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="h-full lg:hidden">
      <div className="h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            aria-label="Open menu"
            onClick={() => {
              setIsMenuOpen(true);
            }}
          >
            <RxHamburgerMenu className="text-2xl" />
          </button>
          <Logo />
        </div>

        <NavIcons />
      </div>

      <NavigationMenu
        isOpen={isMenuOpen}
        closeMenu={() => setIsMenuOpen(false)}
      />
    </nav>
  );
};

export default NavbarMobile;
