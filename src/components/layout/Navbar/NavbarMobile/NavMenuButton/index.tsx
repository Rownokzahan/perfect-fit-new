"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NavMenu from "./NavMenu";

const NavMenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Open menu"
        onClick={() => {
          setIsMenuOpen(true);
        }}
      >
        <RxHamburgerMenu className="text-2xl" />
      </button>

      <NavMenu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
    </>
  );
};

export default NavMenuButton;
