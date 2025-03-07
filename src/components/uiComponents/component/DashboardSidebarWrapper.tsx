import React, { Suspense } from "react";
import Loading from "./Loading";
import { getUserFromDb } from "@/actions/user.actions";
import DashboardSidebar from "./DashboardSidebar";

async function DashboardSidebarWrapper() {
  const user = await getUserFromDb();
  return (
    <Suspense fallback={<Loading />}>
      <DashboardSidebar user={user} />
    </Suspense>
  );
}

export default DashboardSidebarWrapper;
