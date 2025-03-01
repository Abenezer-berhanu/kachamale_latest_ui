"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (e.target.value.length > 3) {
      newParams.set("q", e.target.value.toLowerCase());
      replace(`${pathname}?${newParams.toString()}`);
    }
    if (e.target.value.length < 3) {
      newParams.delete("q");
      replace(`${pathname}?${newParams.toString()}`);
    }
  };

  return (
    <div className="w-full px-3">
      <input
        className="border-2 border-gray-300 p-2 w-full rounded-full indent-2"
        type="text"
        placeholder="Enter what you want to search for"
        id="search"
        onChange={handleChange}
      />
    </div>
  );
}
