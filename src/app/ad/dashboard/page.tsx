import DashboardCarTable from "@/components/uiComponents/component/DashboardCarTable";
import Notification from "@/components/uiComponents/component/Notification";
import { mockCar, notifications } from "@/lib/data";
import React from "react";

export default function page() {
  const id = 1;
  const cars = mockCar.filter((car) => car.sellerId === id);
  return (
    <div className="min-h-screen grid grid-cols-3 gap-10">
      <div className="w-full col-span-2 max-md:col-span-3">
        <p className="mb-3 font-bold text-2xl text-gray_text">Your Posts</p>
        <DashboardCarTable cars={cars} />
      </div>
      <div className="w-full space-y-3 max-md:col-span-3">
        <p className="text-2xl font-bold text-gray_text">Notification</p>
        {notifications.map((item, idx) => (
          <Notification data={item} key={idx} />
        ))}
      </div>
    </div>
  );
}
