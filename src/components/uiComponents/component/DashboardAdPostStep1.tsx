import React from "react";
import DashboardAdPostStepWrapperCard from "./DashboardAdPostStepWrapperCard";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import citiesList from "@/lib/et";
import CustomInput from "./CustomInput";
import { DashboardImageDragAndDrop } from "./DashboardImageDragAndDrop";
import CustomeButton from "./CustomeButton";

export default function DashboardAdPostStep1() {
  return (
    <DashboardAdPostStepWrapperCard step={1} className="max-w-[700px] mx-auto">
      <div>
        <Select>
          <SelectTrigger className="w-full h-12">
            <SelectValue placeholder="Select city" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select city</SelectLabel>
              {citiesList.map((city, idx) => (
                <SelectItem value={city.city} key={idx}>
                  {city.city}, {city.admin_name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4">
        <CustomInput
          label="Address / street"
          placeholder="Enter Your Location in you city"
        />
      </div>

      <div className="flex flex-col gap-2">
        <b className="text-sm font-semibold">Image</b>
        <DashboardImageDragAndDrop />
      </div>

      <CustomeButton title="Next" className="w-fit mt-3 px-5 py-2 ml-auto" disabled={true}/>
    </DashboardAdPostStepWrapperCard>
  );
}
