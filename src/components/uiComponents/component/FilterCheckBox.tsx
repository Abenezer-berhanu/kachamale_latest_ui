"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface FilterCheckboxProps {
  title: string;
  paramKey: string;
  icon?: React.ReactNode;
}

function FilterCheckBox({ title, paramKey, icon }: FilterCheckboxProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentValue = searchParams.get(paramKey);

  const handleChange = () => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (currentValue === title) {
      newParams.delete(paramKey); // Unselect if already selected
    } else {
      newParams.set(paramKey, title); // Replace with the new value
    }

    replace(`${pathname}?${newParams.toString()}`);
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={currentValue === title}
        onChange={handleChange}
        className="hidden"
      />
      <span
        className={`p-2 rounded border ${
          currentValue === title ? "bg-main_blue text-white" : "bg-gray-200"
        }`}
      >
        {icon} {/* Render Icon as a component */}
      </span>
      {title}
    </label>
  );
}

export default FilterCheckBox;
