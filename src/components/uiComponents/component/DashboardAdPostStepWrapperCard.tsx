import React from "react";

export default function DashboardAdPostStepWrapperCard({
  step,
  children,
  className
}: {
  step?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`p-4 shadow-lg rounded-lg flex flex-col gap-3 w-full ${className}`}>
      {step && <h1 className="font-semibold text-xl capitalize text-gray_text">Step {step}</h1>}
      <div>{children}</div>
    </div>
  );
}
