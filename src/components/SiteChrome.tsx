"use client";

import { usePathname } from "next/navigation";
import Analytics from "@/components/Analytics";
import CrawlingBug from "@/components/CrawlingBug";
import Footer from "@/components/Footer";
import FreeQuotePopup from "@/components/FreeQuotePopup";
import Header from "@/components/Header";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isInternal = pathname.startsWith("/team/");

  if (isInternal) return <>{children}</>;

  return (
    <>
      <Header />
      <main className="flex-grow pb-16 lg:pb-0">{children}</main>
      <Footer />
      <FreeQuotePopup />
      <CrawlingBug />
      <Analytics />
    </>
  );
}
