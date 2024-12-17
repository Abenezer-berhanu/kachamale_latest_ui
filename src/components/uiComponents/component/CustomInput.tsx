import React from "react";

interface PropsInterface {
  label: string;
  placeholder: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
  name?: string;
  required?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any;
}

export default function CustomInput({
  name,
  disabled,
  label,
  placeholder,
  className,
  onChange,
  required,
  value,
  type = "text",
  ...props
}: PropsInterface) {
  return (
    <div className="flex flex-col gap-2 my-2">
      <b className="text-sm font-semibold">{label}</b>
      <input
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={value} // Use defaultValue for uncontrolled input
        className={`rounded-lg indent-3 py-2 border ${className}`}
        type={type}
        required={required === "no" ? false : true}
        {...props}
      />
    </div>
  );
}
