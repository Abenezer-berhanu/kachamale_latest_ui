import { getMyLastAds } from "@/actions/car.actions";
import DashboardCarTable from "@/components/uiComponents/component/DashboardCarTable";
import Loading from "@/components/uiComponents/component/Loading";

import React, { Suspense } from "react";

export default async function page() {
  const cars = await getMyLastAds();
  return (
    <div className="w-full max-w-[1000px] mx-auto">
      <p className="mb-3 font-bold text-2xl text-gray_text">Your Posts</p>
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error because */}
        <DashboardCarTable cars={cars} action={true} />
      </Suspense>
    </div>
  );
}
