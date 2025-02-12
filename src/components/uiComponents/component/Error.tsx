import React from "react";

export default function Error({ error }: { error: string }) {
  return (
    <div className="text-2xl font-semibold text-slate-500 text-center flex items-center justify-center w-full h-full">
      {error}
    </div>
  );
}
