import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavbarSearch from "./NavbarSearch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <div className="h-[72px] bg-main_blue grid grid-cols-2 items-center px-16">
      <div className="flex gap-4">
        <Link href={"/"} className="flex items-center justify-center">
          <Image
            src={"/assets/logo.png"}
            unoptimized
            alt="logo"
            width={200}
            height={200}
            className="max-w-[154px] h-[44px] object-contain"
          />
        </Link>
        <div className="flex-1 h-10 relative">
          <NavbarSearch />
          <Image
            src={"/assets/searchLogo.png"}
            alt="search logo"
            width={100}
            height={100}
            className="absolute top-0 bottom-0 my-auto left-3 h-[20px] w-[20px]"
          />
          <Link
            href={"/search"}
            className="absolute h-[20px] w-[20px] right-5 top-0 bottom-0 my-auto "
          >
            <Image
              src={"/assets/filterLogo.png"}
              alt="filter logo"
              width={100}
              height={100}
              className="h-[20px] w-[20px]"
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-end">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
