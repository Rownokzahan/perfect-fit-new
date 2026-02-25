import Logo from "@/components/ui/Logo";
import useModalById from "@/hooks/useModalById";
import { useSession } from "@/lib/auth-client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";

interface NavMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const NAV_ITEMS = [
  { label: "Dresses", href: "/dresses" },
  { label: "Custom Dress", href: "/custom-dress" },
  { label: "Contact Us", href: "/contact" },
];

const NavMenu = ({ isOpen, closeMenu }: NavMenuProps) => {
  const pathname = usePathname();
  const { data } = useSession();
  const { openModal: openAuthModal } = useModalById("authModal");
  const { openModal: openConfirmLogoutModal } =
    useModalById("confirmLogoutModal");

  // Close menu on route change
  useEffect(() => {
    if (isOpen) {
      closeMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isAuthenticated = !!data;

  const handleLoginOrLogout = () => {
    closeMenu();

    if (isAuthenticated) {
      openAuthModal();
    } else {
      openConfirmLogoutModal();
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed z-40 inset-0 bg-black/60 backdrop-blur-xs"
        />
      )}

      {/* Drawer */}
      <aside
        className={clsx(
          "h-full w-10/12 shadow bg-light text-dark",
          "fixed z-50 top-0 left-0 transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
        inert={!isOpen}
      >
        {/* Header */}
        <div className="h-16 px-4 shadow flex items-center justify-between">
          <Logo />
          <button onClick={closeMenu} aria-label="Close menu">
            <MdClose className="text-2xl text-dark-light" />
          </button>
        </div>

        {/* Navigation */}
        <ul className="divide-y">
          {NAV_ITEMS.map((item) => {
            const { href, label } = item;
            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);

            return (
              <li key={href}>
                <Link
                  href={href}
                  className="block px-4 py-4 uppercase text-sm"
                  onClick={closeMenu}
                >
                  <span
                    className={clsx("animated-underline", {
                      "text-primary": isActive,
                    })}
                  >
                    {label}
                  </span>
                </Link>
              </li>
            );
          })}

          {/* Auth Button */}
          <li className="px-4 py-4">
            <button
              onClick={handleLoginOrLogout}
              className="bg-primary px-5 py-2 rounded font-semibold text-light"
            >
              {isAuthenticated ? "Login" : "Logout"}
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default NavMenu;
