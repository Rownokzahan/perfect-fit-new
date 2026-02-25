import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import NavbarWrapper from "./NavbarWrapper";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarDesktop />
      <NavbarMobile />
    </NavbarWrapper>
  );
};

export default Navbar;
