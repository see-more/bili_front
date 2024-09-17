import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import React from "react";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="relative bg-primary-foreground">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <div className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-20 max-md:pb-14 sm:px-8">
          <div className="w-full">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default RootLayout;
