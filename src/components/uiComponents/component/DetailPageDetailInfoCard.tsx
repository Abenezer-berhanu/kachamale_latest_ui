import { Separator } from "@/components/ui/separator";
import React from "react";

export default function DetailPageDetailInfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <span className="px-2">
      <p className="font-semibold text-sm">{title}</p>
      <p className="mb-1 text-gray_text text-sm">{value}</p>
      <Separator />
    </span>
  );
}
