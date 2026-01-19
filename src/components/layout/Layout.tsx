import { ReactNode } from "react";
import Header from "@/components/landing/Header";

interface LayoutProps {
  children: ReactNode;
}

/**
 * Persistent layout wrapper that keeps the Header mounted across route changes.
 * This prevents the navbar from "flashing" during page transitions.
 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
