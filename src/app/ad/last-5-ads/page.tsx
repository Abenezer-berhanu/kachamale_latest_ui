import DashboardCarTable from "@/components/uiComponents/component/DashboardCarTable";
import { mockCar } from "@/lib/data";
import React from "react";

export default function page() {
  const id = 1;
  const cars = mockCar.filter((car) => car.sellerId === id);
  return (
    <div className="w-full max-w-[1000px] mx-auto">
      <p className="mb-3 font-bold text-2xl text-gray_text">Your Posts</p>
      <DashboardCarTable cars={cars} action={true} />
    </div>
  );
}
