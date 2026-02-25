import Logo from "@/components/ui/Logo";
import NavIcons from "../NavIcons";
import NavMenuButton from "./NavMenuButton";

const NavbarMobile = () => {
  return (
    <nav className="h-full lg:hidden">
      <div className="h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <NavMenuButton />
          <Logo />
        </div>

        <NavIcons />
      </div>
    </nav>
  );
};

export default NavbarMobile;
