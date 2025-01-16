import DashboardMyAdsTableWrapper from "@/components/uiComponents/component/DashboardMyAdsTableWrapper";
import Loading from "@/components/uiComponents/component/Loading";

import React, { Suspense } from "react";

export default async function page() {
  return (
    <div className="w-full max-w-[1000px] mx-auto">
      <p className="mb-3 font-bold text-2xl text-gray_text">Your Posts</p>
      <Suspense fallback={<Loading />}>
        <DashboardMyAdsTableWrapper />
      </Suspense>
    </div>
  );
}
