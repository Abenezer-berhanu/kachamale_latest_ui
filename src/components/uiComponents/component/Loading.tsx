import React from "react";
import { HashLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <HashLoader size={20} />
    </div>
  );
}
