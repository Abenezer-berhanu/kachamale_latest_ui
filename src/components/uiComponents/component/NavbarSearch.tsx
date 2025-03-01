"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarSearch() {
  const pathname = usePathname();

  if (pathname.includes("/search")) {
    return;
  }

  return (
    <Link href="/search">
      <Image
        src="/assets/searchLogoWhite.png"
        alt="search icon"
        width={24}
        height={24}
      />
    </Link>
  );
}

export default NavbarSearch;
