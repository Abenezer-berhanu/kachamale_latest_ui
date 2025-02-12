import DashboardAdPostingStepsWrapper from "@/components/uiComponents/component/DashboardAdPostingStepsWrapper";
import Loading from "@/components/uiComponents/component/Loading";
import React, { Suspense } from "react";

export default function page() {
  return (
    <div className="h-full">
      <Suspense fallback={<Loading />}>
        <DashboardAdPostingStepsWrapper />
      </Suspense>
    </div>
  );
}
