import { BiSolidCategory } from "react-icons/bi";
import { BsFillBoxFill } from "react-icons/bs";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { IconType } from "react-icons";

export interface AdminMenuLinkType {
  name: string;
  Icon: IconType;
  path: string;
}

export interface AdminSubMenuItemType {
  name: string;
  path: string;
}

export interface AdminMenuGroupType extends AdminMenuLinkType {
  subItems: AdminSubMenuItemType[];
}
export type AdminMenuType = AdminMenuLinkType | AdminMenuGroupType;

export const isGroupItem = (item: AdminMenuType): item is AdminMenuGroupType =>
  "subItems" in item;

export const adminMenu: AdminMenuType[] = [
  {
    name: "Dashboard",
    Icon: FaHome,
    path: "/admin/dashboard",
  },
  {
    name: "Categories",
    Icon: BiSolidCategory,
    path: "/admin/categories",
  },
  {
    name: "Products",
    Icon: FaShoppingBag,
    path: "/admin/products",
    subItems: [
      {
        name: "Products",
        path: "/admin/products",
      },
      {
        name: "Add Product",
        path: "/admin/products/add",
      },
      {
        name: "Inactive Products",
        path: "/admin/products/inactive",
      },
      {
        name: "Deleted Products",
        path: "/admin/products/deleted",
      },
    ],
  },
  {
    name: "Orders",
    Icon: BsFillBoxFill,
    path: "/admin/orders",
  },
  {
    name: "Customers",
    Icon: FaUserGroup,
    path: "/admin/customers",
  },
];
