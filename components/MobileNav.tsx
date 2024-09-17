"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <div className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/menu.svg"}
            alt={"menu"}
            height={30}
            width={30}
            className="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent side="left" className="border-none">
          <SheetHeader>
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                priority={true}
                src={"/logo.png"}
                alt="biliup"
                width={30}
                height={30}
              />
              <p>Biliup</p>
            </Link>
          </SheetHeader>
          <div className="flex h-[cacl(100vh-72px)] flex-col items-start justify-around">
            {sidebarLinks.map((link) => {
              if (link === undefined) return;
              const isActive =
                pathname === link.route ||
                pathname.startsWith(`${link.route}/`);
              return (
                <Link
                  href={link.route}
                  key={link.label}
                  className={cn(
                    "flex h-full w-full items-center justify-start gap-4 overflow-auto rounded-lg p-4",
                    {
                      "bg-primary": isActive,
                    },
                  )}
                >
                  <Image
                    src={link.imgUrl}
                    alt={link.label}
                    width={28}
                    height={28}
                  />
                  <p className="text-lg font-semibold">{link.label}</p>
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
