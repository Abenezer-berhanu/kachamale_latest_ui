import React from "react";
import { HashLoader } from "react-spinners";

export default function Loading({
  size,
}: {
  size?: "small" | "medium" | "large";
}) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <HashLoader size={size == "small" ? 14 : 20} />
    </div>
  );
}
