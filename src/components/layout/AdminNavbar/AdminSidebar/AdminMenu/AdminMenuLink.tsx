import Link from "next/link";
import AdminMenuItem from "./AdminMenuItem";
import { usePathname } from "next/navigation";
import { AdminMenuLinkType } from "./adminMenu";

interface AdminMenuLinkProps {
  item: AdminMenuLinkType;
}

const AdminMenuLink = ({ item }: AdminMenuLinkProps) => {
  const { name, Icon, path } = item || {};

  const pathname = usePathname();

  return (
    <li>
      <Link href={path} prefetch={false}>
        <AdminMenuItem
          Icon={Icon}
          name={name}
          isActive={pathname.startsWith(path)}
        />
      </Link>
    </li>
  );
};

export default AdminMenuLink;
