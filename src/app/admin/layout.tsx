import AdminNavbar from "@/components/layout/AdminNavbar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="max-w-384 mx-auto">
      <AdminNavbar />

      <main className="h-[calc(100vh-64px)] lg:ms-60 pt-6 px-4 sm:px-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
