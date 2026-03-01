import { useState } from "react";
import AdminMenuItem from "../AdminMenuItem";
import { AdminMenuGroupType } from "../adminMenu";
import AdminSubMenuItem from "./AdminSubMenuItem";
import { usePathname } from "next/navigation";

interface AdminMenuGroupProps {
  menuGroup: AdminMenuGroupType;
}

const AdminMenuGroup = ({ menuGroup }: AdminMenuGroupProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const { Icon, name, path, subItems } = menuGroup || {};

  return (
    <li>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full text-left"
      >
        <AdminMenuItem
          Icon={Icon}
          name={name}
          isActive={pathname.startsWith(path)}
          hasSubItems={true}
        />
      </button>

      {open && (
        <ul className="ps-6 mt-2">
          {subItems.map((subItem) => (
            <AdminSubMenuItem
              key={subItem.name}
              subItem={subItem}
              isActive={pathname === subItem.path}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default AdminMenuGroup;
