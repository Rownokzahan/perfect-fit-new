import clsx from "clsx";
import { IconType } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

interface AdminMenuItemProps {
  Icon: IconType;
  name: string;
  isActive: boolean;
  hasSubItems?: boolean;
}

const AdminMenuItem = ({
  Icon,
  name,
  isActive,
  hasSubItems = false,
}: AdminMenuItemProps) => {
  return (
    <span
      className={clsx(
        "w-full px-4 py-3 rounded flex items-center gap-4 justify-between duration-50",
        isActive ? "bg-primary/20" : "hover:bg-primary/5",
      )}
    >
      <span className="flex items-center gap-3">
        <Icon
          size={16}
          className={clsx(isActive ? "text-primary" : "text-dark-light")}
        />

        <span>{name}</span>
      </span>

      {hasSubItems && <IoIosArrowDown size={14} className="-me-1" />}
    </span>
  );
};

export default AdminMenuItem;
