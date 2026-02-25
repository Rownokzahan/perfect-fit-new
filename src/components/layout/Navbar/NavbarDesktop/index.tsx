import Logo from "@/components/ui/Logo";
import NavLinkDesktop from "./NavLinkDesktop";
import NavIcons from "../NavIcons";

const NavbarDesktop = () => {
  return (
    <nav className="h-full hidden lg:flex justify-between items-center">
      <div className="flex items-center gap-12">
        <Logo />

        <div className="flex items-center gap-6">
          <NavLinkDesktop href="/dresses">
            Dresses
          </NavLinkDesktop>
          <NavLinkDesktop href="/custom-dress">
            Custom Dress
          </NavLinkDesktop>
          <NavLinkDesktop href="/contact">
            Contact Us
          </NavLinkDesktop>
        </div>
      </div>

      <NavIcons />
    </nav>
  );
};

export default NavbarDesktop;
