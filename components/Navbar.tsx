import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="fixed z-30 border-b border-primary bg-gray-100 flex w-full justify-between px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src={"/logo.png"}
          priority={true}
          alt="biliup"
          width={30}
          height={30}
        />
        <p className="text-white max-sm:hidden">Biliup</p>
      </Link>
      <div className="flex-between hidden gap-5 max-sm:block">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
