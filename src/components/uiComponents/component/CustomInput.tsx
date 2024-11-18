import React from "react";

interface PropsInterface {
  label: string;
  placeholder: string;
  className?: string;
  onChange?: () => void;
  type?: string;
  disabled?: boolean;
  props?: any;
}

export default function CustomInput({
  disabled,
  label,
  placeholder,
  className,
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
        required
        {...props}
      />
    </div>
  );
}
