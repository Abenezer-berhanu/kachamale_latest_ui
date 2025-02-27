"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface FilterCheckboxProps {
  title: string;
  paramKey: string;
  icon?: React.ReactNode;
  dependentKey?: string;
}

function FilterCheckBox({
  title,
  paramKey,
  icon,
  dependentKey,
}: FilterCheckboxProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentValue = searchParams.get(paramKey);
  const isActive = currentValue === title.toLowerCase();

  const handleChange = () => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (isActive) {
      newParams.delete(paramKey);
    } else {
      newParams.set(paramKey, title.toLowerCase());

      if (dependentKey) {
        newParams.delete(dependentKey);
      }
    }

    replace(`${pathname}?${newParams.toString()}`);
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={isActive}
        onChange={handleChange}
        className="hidden"
      />
      <span
        className={`p-2 rounded border transition-all ${
          isActive ? "bg-main_blue text-white" : "bg-gray-200"
        }`}
      >
        {icon} {/* Render Icon as a component */}
      </span>
      <span className={isActive ? "font-bold text-main_blue" : ""}>
        {title}
      </span>
    </label>
  );
}

export default FilterCheckBox;
