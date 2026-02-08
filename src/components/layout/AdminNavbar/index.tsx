"use client";

import { useState } from "react";
import AdminTopbar from "./AdminTopbar";
import AdminSidebar from "./AdminSidebar";

const AdminNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header>
      <AdminTopbar openSidebar={() => setIsSidebarOpen(true)} />

      <AdminSidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
    </header>
  );
};

export default AdminNavbar;
