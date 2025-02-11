/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface PropsInterface {
  label: string;
  placeholder: string;
  className?: string;
  onChange?: (e: any) => void;
  type?: string;
  disabled?: boolean;
  value?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any;
}

export default function CustomInput({
  disabled,
  label,
  placeholder,
  className,
  value,
  onChange,
  type = "text",
  ...props
}: PropsInterface) {
  return (
    <div className="flex flex-col gap-2 my-2">
      <b className="text-sm font-semibold">{label}</b>
      <input
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        className={`rounded-lg indent-3 py-2 border ${className}`}
        type={type}
        value={value == null ? "" : value}
        required
        {...props}
      />
    </div>
  );
}
