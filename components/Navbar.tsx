import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="justify-between fixed z-30 flex w-full bg-red-100 px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex items-center gap-2">
        <Image src={"/logo.png"} alt="biliup" width={30} height={30} />
        <p className="text-white max-sm:hidden">Biliup</p>
      </Link>
      <div className="flex-between gap-5 hidden max-sm:block">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
