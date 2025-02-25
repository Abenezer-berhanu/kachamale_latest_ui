"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface FilterCheckboxProps {
  title: string;
  paramKey: string;
  icon?: React.ReactNode;
  dependentKey?: string; // The parameter to remove (e.g., "model")
}

const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  title,
  paramKey,
  icon,
  dependentKey,
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentValue = searchParams.get(paramKey);
  const isActive = currentValue === title.toLowerCase(); // Ensure case consistency

  const handleChange = () => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (isActive) {
      newParams.delete(paramKey); // Unselect if already selected
    } else {
      newParams.set(paramKey, title.toLowerCase()); // Update with new make/model

      // Always remove dependentKey (e.g., model) when changing make
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
        checked={isActive} // Ensures active state updates
        onChange={handleChange}
        className="hidden"
      />
      <span
        className={`p-2 rounded border transition-all ${
          isActive ? "bg-main_blue text-white" : "bg-gray-200"
        }`}
      >
        {icon}
      </span>
      <span className={isActive ? "font-bold text-main_blue" : ""}>
        {title}
      </span>
    </label>
  );
};

export default FilterCheckbox;
