"use client";

export default function CustomeButton({
  title,
  onClick,
  className,
}: {
  title: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={`bg-main_blue rounded-xl text-white font-semibold w-full py-2 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
