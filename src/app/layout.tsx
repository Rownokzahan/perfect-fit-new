import { Metadata } from "next";
import "@/styles/index.css";
import { quicksand } from "@/fonts";
import { Toaster } from "react-hot-toast";
import AuthModal from "@/components/modals/AuthModal";
import ConfirmDeleteModal from "@/components/modals/ConfirmDeleteModal";
import { Suspense } from "react";
import AddToCartModal from "@/components/modals/AddToCartModal";

export const metadata: Metadata = {
  title: {
    template: "%s | Perfect Fit",
    default: "Perfect Fit",
  },
  description: "A custom dress making website",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-light antialiased`}>
        {children}

        <Suspense fallback={null}>
          <AuthModal />
          <ConfirmDeleteModal />
          <AddToCartModal />
        </Suspense>

        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
