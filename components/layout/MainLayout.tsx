"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { usePathname } from "next/navigation";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHiddenHeaderPage =
    pathname === "/tennis" ||
    pathname === "/yosakoi" ||
    pathname === "/live-stage";

  return (
    <div className="flex flex-col min-h-screen">
      {!isHiddenHeaderPage && <Header />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
