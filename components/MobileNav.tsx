"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { TextAlignRightIcon } from "@radix-ui/react-icons";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <div className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger className="flex items-center">
          <TextAlignRightIcon
            width={30}
            height={30}
            className="cursor-pointer text-primary outline-none"
          />
        </SheetTrigger>

        <SheetContent side="left" className="flex flex-col border-none">
          <VisuallyHidden.VisuallyHidden>
            <SheetTitle>Dont remove this hidden titile</SheetTitle>
          </VisuallyHidden.VisuallyHidden>

          <SheetHeader>
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                priority={true}
                src={"/logo.png"}
                alt="biliup"
                width={30}
                height={30}
              />
              <h2 className="text-primary">Biliup</h2>
            </Link>
          </SheetHeader>
          <VisuallyHidden.VisuallyHidden>
            <SheetDescription>
              Dont remove this hidden description
            </SheetDescription>
          </VisuallyHidden.VisuallyHidden>
          <div className="mt-10 flex w-full flex-col">
            {sidebarLinks &&
              sidebarLinks.length > 0 &&
              sidebarLinks.map((link) => {
                if (link === undefined) return;
                const isActive =
                  pathname === link.route ||
                  pathname.startsWith(`${link.route}/`);
                return (
                  <Link
                    href={link.route}
                    key={link.label}
                    className={cn(
                      "flex w-full items-center justify-start gap-4 rounded-lg p-4",
                      {
                        "bg-primary/10": isActive,
                      },
                    )}
                  >
                    <link.iconCompoent
                      width={30}
                      height={20}
                      widths={20}
                      className="text-primary"
                    />
                    <p
                      className={cn("text-lg font-semibold dark:text-primary")}
                    >
                      {link.label}
                    </p>
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
