import { useSession } from "@/lib/auth-client";
import { PiUserCircleDuotone } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

interface AdminTopbarProps {
  openSidebar: () => void;
}

const AdminTopbar = ({ openSidebar }: AdminTopbarProps) => {
  const { data } = useSession();

  return (
    <header className="h-16 px-4 sm:px-6 border-b border-gray-200/80 bg-light-light flex items-center">
      <button
        onClick={() => {
          openSidebar();
        }}
      >
        <RxHamburgerMenu className="lg:hidden text-2xl" />
      </button>

      <div className="ms-auto flex items-center gap-1">
        <PiUserCircleDuotone size={42} className="text-dark/20" />

        <div className="space-y-px">
          <h3 className="w-24 truncate font-medium text-sm">
            {data?.user.name}
          </h3>
          <p className="ms-px text-xs font-semibold text-dark-light">Admin</p>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;
