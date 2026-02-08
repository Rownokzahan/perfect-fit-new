import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-18 min-h-dvh">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
