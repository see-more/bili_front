import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./theme-toggle";

const Navbar = () => {
  return (
    <nav className="fixed z-30 flex w-full items-center justify-between border-b border-primary bg-primary-foreground px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src={"/logo.png"}
          priority={true}
          alt="biliup"
          width={30}
          height={30}
        />
        <h2 className="text-primary max-sm:hidden">Biliup</h2>
      </Link>
      <div className="flex-between hidden items-center gap-5 max-sm:flex">
        <ModeToggle />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
