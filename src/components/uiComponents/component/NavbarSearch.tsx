"use client";

import { useState } from "react";

export default function NavbarSearch() {
  const [q, setQ] = useState("");

  return (
    <input
      type="text"
      placeholder="search something here"
      className="rounded-full w-full h-10 pl-10 outline-none"
      value={q}
      onChange={(e) => setQ(e.target.value)}
    />
  );
}
