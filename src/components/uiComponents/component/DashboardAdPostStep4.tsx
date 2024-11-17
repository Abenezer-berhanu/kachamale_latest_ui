"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomInput from "./CustomInput";
import DashboardAdPostStepWrapperCard from "./DashboardAdPostStepWrapperCard";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function DashboardAdPostStep4() {
  return (
    <DashboardAdPostStepWrapperCard
      step={4}
      className="mx-auto max-w-[700px] shadow-none h-full"
    >
      <div className="grid grid-cols-1 gap-10">
        <div className="border p-4 flex flex-col justify-between rounded-lg shadow-md">
          <div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Is the price negotiable" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"negotiable"}>Yes</SelectItem>
                <SelectItem value={"notNegotiable"}>No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="">
            <CustomInput
              label="Horse power"
              placeholder="Enter the car Horse power"
              type="number"
            />
          </div>

          <div className="">
            <CustomInput label="Price" placeholder="Car Price" type="number" />
          </div>
        </div>
        <Separator />
        <div className="border p-4 flex flex-col justify-between rounded-lg shadow-md">
          <div className="">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Are Your Owner or Broker" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"owner"}>Owner</SelectItem>
                <SelectItem value={"broker"}>Broker</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5 my-2">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message-2" className="my-1.5">
                Description
              </Label>
              <Textarea placeholder="Type your message here." id="message-2" />
              <p className="text-sm text-muted-foreground">
                This text will be used as a description about the car.
              </p>
            </div>
          </div>

          <div className="">
            <CustomInput
              label="Phone Number"
              placeholder="Phone Number"
              type="tel"
            />
          </div>
        </div>
      </div>
    </DashboardAdPostStepWrapperCard>
  );
}
