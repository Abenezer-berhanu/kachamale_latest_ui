import DashboardSidebarWrapper from "@/components/uiComponents/component/DashboardSidebarWrapper";
import React from "react";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex p-2 gap-2">
      <div>
        <DashboardSidebarWrapper />
      </div>
      <div className="flex-1 p-2">{children}</div>
    </div>
  );
}
