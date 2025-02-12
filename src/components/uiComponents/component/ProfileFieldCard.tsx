import React from "react";

export default function ProfileFieldCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <>
      <div className="flex flex-col">
        <p className="font-semibold text-slate-500 capitalize">{title}</p>
        <p className="text-sm whitespace-pre-line">{desc || "Not Entered"}</p>
      </div>
    </>
  );
}
