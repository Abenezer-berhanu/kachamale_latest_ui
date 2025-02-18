import { getMyAds } from "@/actions/car.actions";
import DashboardCarTable from "@/components/uiComponents/component/DashboardCarTable";
import Loading from "@/components/uiComponents/component/Loading";
import React, { Suspense } from "react";

export default async function page() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cars: any = await getMyAds();

  return (
    <div className="w-full max-w-[1000px] mx-auto">
      <p className="mb-3 font-bold text-2xl text-gray_text">Your Posts</p>

      {cars.error ? (
        <div>
          <p>No car has been found.</p>
        </div>
      ) : (
        <Suspense fallback={<Loading />}>
          <DashboardCarTable cars={cars} action={true} />
        </Suspense>
      )}
    </div>
  );
}
