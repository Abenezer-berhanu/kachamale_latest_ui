import React, { Suspense } from "react";
import Loading from "./Loading";
import DashboardSidebar from "./DashboardSidebar";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

async function DashboardSidebarWrapper() {
  const { userId } = await auth();

  if (!userId) return;
  const user = await prisma.user.findFirst({ where: { clerkId: userId } });

  return (
    <Suspense fallback={<Loading />}>
      <DashboardSidebar role={user?.role || ""} />
    </Suspense>
  );
}

export default DashboardSidebarWrapper;
