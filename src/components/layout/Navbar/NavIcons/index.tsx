import CartNavIcon from "./CartNavIcon";
import UserIconButton from "./UserIconButton";
import WishlistNavIcon from "./WishlistNavIcon";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-1.5 text-xl">
      <UserIconButton />
      <WishlistNavIcon />
      <CartNavIcon />
    </div>
  );
};

export default NavIcons;
