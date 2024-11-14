import DashboardSidebar from "@/components/uiComponents/component/DashboardSidebar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex p-2 gap-2">
      <div>
        <DashboardSidebar />
      </div>
      <div>{children}</div>
    </div>
  );
}
