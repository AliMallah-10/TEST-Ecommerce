import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-end gap-2">
      <Image src="/icons/logo.png" width={40} height={40} alt="logo" />
      <div className="relative">
        <h1 className="capitalize text-white text-al font-bold tracking-wide">
          sky
        </h1>
        <div className="absolute -right-2.5 bottom-1.5 w-2 h-2 rounded-full bg-sky-700"></div>
      </div>
    </Link>
  );
};

export default Logo;
