import { adminMenu, isGroupItem } from "./adminMenu";
import AdminMenuGroup from "./AdminMenuGroup";
import AdminMenuLink from "./AdminMenuLink";

const AdminMenu = () => {
  return (
    <ul className="max-h-[calc(100%-64px)] p-4 text-sm font-medium space-y-3 overflow-y-auto">
      {adminMenu.map((item, index) => {
        if (isGroupItem(item)) {
          return <AdminMenuGroup key={index} menuGroup={item} />;
        }

        return <AdminMenuLink key={index} item={item} />;
      })}
    </ul>
  );
};

export default AdminMenu;
