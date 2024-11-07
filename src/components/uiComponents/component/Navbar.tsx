import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavbarSearch from "./NavbarSearch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <div className="h-[72px] bg-main_blue px-4 sm:px-8 md:px-16 flex items-center justify-between">
      {/* Left Side: Logo and Search */}
      <div className="flex items-center gap-4 flex-1 max-w-[800px]">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/assets/logo.png"
            unoptimized
            alt="logo"
            width={200}
            height={200}
            className="max-w-[120px] sm:max-w-[154px] h-[44px] object-contain"
          />
        </Link>

        {/* Show Search Input on large screens, icon on tablet/smaller */}
        <div className="hidden md:flex flex-1 px-3">
          <NavbarSearch />
        </div>
        <div className="md:hidden flex items-center">
          <button aria-label="Search">
            <Image
              src="/assets/searchLogoWhite.png"
              alt="search icon"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {/* Right Side: Avatar */}
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
