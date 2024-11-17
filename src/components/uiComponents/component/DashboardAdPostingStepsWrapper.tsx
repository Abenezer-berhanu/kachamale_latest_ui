import React from "react";
import DashboardAdPostStep1 from "./DashboardAdPostStep1";
import DashboardAdPostStep4 from "./DashboardAdPostStep4";
import DashboardAdPostStep3 from "./DashboardAdPostStep3";
import DashboardAdPostStep2 from "./DashboardAdPostStep2";

export default function DashboardAdPostingStepsWrapper() {
  const currentStep: number = 2;
  return (
    <div className="flex items-center justify-center h-full border">
      {currentStep == 1 ? (
        <DashboardAdPostStep1 />
      ) : currentStep == 2 ? (
        <DashboardAdPostStep2 />
      ) : currentStep == 3 ? (
        <DashboardAdPostStep3 />
      ) : (
        <DashboardAdPostStep4 />
      )}
    </div>
  );
}
