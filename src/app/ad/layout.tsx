import { getUserFromDb } from "@/actions/user.actions";
import DashboardSidebar from "@/components/uiComponents/component/DashboardSidebar";
import React from "react";

export default async function layout({ children }: { children: React.ReactNode }) {
  const user = await getUserFromDb()

  return (
    <div className="flex p-2 gap-2">
      <div>
        <DashboardSidebar user={user} />
      </div>
      <div className="flex-1 p-2">{children}</div>
    </div>
  );
}
