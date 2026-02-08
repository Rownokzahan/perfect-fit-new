"use client";

import { useEffect, useRef, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import useModalById from "@/hooks/useModalById";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";

const UserIconButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { openModal: openAuthModal } = useModalById("authModal");
  const { openModal: openConfirmLogoutModal } =
    useModalById("confirmLogoutModal");

  const { data, isPending } = useSession();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on route change
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const isAuthenticated = !!data;
  const isAdmin = data?.user?.role === "admin";

  const toggleDropdown = () => {
    if (isAuthenticated) {
      setIsOpen((prev) => !prev);
    } else {
      openAuthModal();
    }
  };

  if (isPending) {
    return null;
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        aria-label="User menu"
        className="w-7 h-8 grid place-items-center"
      >
        <IoPersonOutline size={20} className="relative mt-px" />
      </button>

      {/* Dropdown menu (only for authenticated users) */}
      {isAuthenticated && isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-36 bg-light border rounded shadow z-10">
          {/* Dropdown arrow */}
          <div className="absolute -z-20 -top-1.75 left-1/2 -translate-x-1/2 size-3 rotate-45 bg-light border-l border-t" />

          {isAdmin && (
            <div className="px-4 py-2 text-sm text-dark hover:bg-light-light">
              <Link href="/admin/dashboard" className="animated-underline">
                Admin Panel
              </Link>
            </div>
          )}

          <div className="px-4 py-2 rounded-t text-sm text-dark hover:bg-light-light">
            <Link href="/my-orders" className="animated-underline">
              My Orders
            </Link>
          </div>

          <button
            onClick={() => openConfirmLogoutModal()}
            className="w-full px-4 py-2 rounded-b text-left font-medium text-sm text-red-600 hover:bg-light-light"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserIconButton;
