"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  carBodyTypes,
  fuelTypes,
} from "@/lib/data";
import CustomInput from "./CustomInput";
import DashboardAdPostStepWrapperCard from "./DashboardAdPostStepWrapperCard";
import { Separator } from "@/components/ui/separator";

export default function DashboardAdPostStep2() {
  return (
    <DashboardAdPostStepWrapperCard
      step={3}
      className="mx-auto max-w-[700px] shadow-none h-full"
    >
      <div className="grid grid-cols-1 gap-10">
        <div className="border p-4 flex flex-col justify-between rounded-lg shadow-md">
          <div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Car Body type" />
              </SelectTrigger>
              <SelectContent>
                {carBodyTypes.map((item, idx) => (
                  <SelectItem key={idx} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="">
            <CustomInput
              label="Mileage"
              placeholder="Enter the car mileage"
              type="number"
            />
          </div>

          <div className="">
            <CustomInput
              label="Number of cylinder"
              placeholder="Number of cylinder"
              type="number"
            />
          </div>
        </div>

        <Separator />

        <div className="border p-4 flex flex-col justify-between rounded-lg shadow-md">
          <div className="">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Is this car registered?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"Yes"}>Yes</SelectItem>
                <SelectItem value={"No"}>No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5 my-2">
            <b className="text-sm font-semibold">Car fuel type</b>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Car Transmission" />
              </SelectTrigger>
              <SelectContent>
                {fuelTypes.map((item, idx) => (
                  <SelectItem key={idx} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>


          <div className="">
            <CustomInput
              label="Number of seats"
              placeholder="Number of seats"
              type="number"
            />
          </div>

          <div className="">
            <CustomInput
              label="Engine size"
              placeholder="Engine size"
              type="number"
            />
          </div>
        </div>
      </div>
    </DashboardAdPostStepWrapperCard>
  );
}
