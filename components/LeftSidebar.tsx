"use client";
import React from "react";
import { sidebarLinks } from "@/constants/index";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ModeToggle } from "./theme-toggle";
const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky border-r border-primary left-0 top-0 flex h-screen w-fit flex-col justify-between gap-40 p-6 pt-28 max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks &&
          sidebarLinks.length > 0 &&
          sidebarLinks.map((link) => {
            if (link === undefined) return;
            const isActive =
              pathname === link.route || pathname.startsWith(`${link.route}/`);
            return (
              <Link
                href={link.route}
                key={link.label}
                className={cn(
                  "flex items-center justify-start gap-4 rounded-lg p-4",
                  {
                    "bg-black": isActive,
                    "text-white": isActive,
                  },
                )}
              >
                <Image
                  src={link.imgUrl}
                  alt={link.label}
                  width={28}
                  height={28}
                />
                <p className="text-lg font-semibold text-primary max-lg:hidden">
                  {link.label}
                </p>
              </Link>
            );
          })}
      </div>
      <div className="flex items-center justify-center p-4 lg:justify-start">
        <ModeToggle />
      </div>
    </section>
  );
};

export default LeftSidebar;
