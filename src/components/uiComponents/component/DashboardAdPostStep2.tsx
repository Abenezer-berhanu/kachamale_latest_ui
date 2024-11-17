"use client";
import DashboardAdPostStepWrapperCard from "./DashboardAdPostStepWrapperCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { carData, keyFeatures, transmissions } from "@/lib/data";
import CustomInput from "./CustomInput";
import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

export default function DashboardAdPostStep2() {
  const [selected, setSelected] = useState([]);
  return (
    <DashboardAdPostStepWrapperCard
      step={2}
      className="mx-auto max-w-[700px] shadow-none h-full"
    >
      <div className="grid grid-cols-1 gap-10">
        <div className="border p-4 flex flex-col justify-between rounded-lg shadow-md">
          <div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Car Make" />
              </SelectTrigger>
              <SelectContent>
                {carData.map((item, idx) => (
                  <SelectItem key={idx} value={item.make}>
                    {item.make}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="my-2 flex flex-col gap-1.5">
            <b className="text-sm font-semibold">Car model</b>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Car Model" />
              </SelectTrigger>
              <SelectContent>
                {carData[0].models.map((item, idx) => (
                  <SelectItem key={idx} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="">
            <CustomInput
              label="Manufacture Year"
              placeholder="Enter the manufacturer year"
            />
          </div>

          <div className="">
            <CustomInput label="Car color" placeholder="#8a8d91" />
          </div>
        </div>

        <div className="border p-4 flex flex-col justify-between rounded-lg shadow-md">
          <div className="">
            <CustomInput label="Interior color" placeholder="#8a8d91" />
          </div>

          <div className="flex flex-col gap-1.5 my-2">
            <b className="text-sm font-semibold">Car Transmission</b>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Car Transmission" />
              </SelectTrigger>
              <SelectContent>
                {transmissions.map((item, idx) => (
                  <SelectItem key={idx} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5 my-2">
            <b className="text-sm font-semibold">Select Car Key Features</b>
            {/* <pre>{JSON.stringify(selected)}</pre> */}
            <MultiSelect
              options={keyFeatures}
              value={selected}
              onChange={setSelected}
              labelledBy="select all key features the car has"
            />
          </div>
        </div>
      </div>
    </DashboardAdPostStepWrapperCard>
  );
}
