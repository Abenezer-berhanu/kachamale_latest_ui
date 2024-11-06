"use client";

import Image from "next/image";
import { useState } from "react";

export default function NavbarSearch() {
  const [q, setQ] = useState("");

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="search something here"
        className="rounded-full w-full h-10 pl-10 pr-3 outline-none text-ellipsis overflow-hidden whitespace-nowrap"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        style={{ paddingLeft: "2.5rem" }}
      />
      {/* Search Icon inside the input */}
      <div className="absolute top-0 left-3 h-full flex items-center pointer-events-none">
        <Image
          src="/assets/searchLogo.png"
          alt="search logo"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      </div>
    </div>
  );
}
