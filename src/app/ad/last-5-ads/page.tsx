import { getMyLastAds } from "@/actions/car.actions";
import DashboardCarTable from "@/components/uiComponents/component/DashboardCarTable";
import React from "react";

export default async function page() {
  const cars = await getMyLastAds();
  return (
    <div className="w-full mx-auto">
      <p className="mb-3 font-bold text-2xl text-gray_text">Your Posts</p>
      {/* @ts-expect-error because expected to have such error*/}
      <DashboardCarTable cars={cars} action={true} />
    </div>
  );
}
