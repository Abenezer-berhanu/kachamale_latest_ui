import React, { useEffect, useState } from "react";
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
import {
  carMakeAndModel,
  keyFeatures as keyFeatureData,
  transmissions,
} from "@/lib/data";
import CustomInput from "./CustomInput";
import { MultiSelect } from "react-multi-select-component";
import { Separator } from "@/components/ui/separator";
import CustomeButton from "./CustomeButton";
import { useToast } from "@/hooks/use-toast";
import { useAdPostStore } from "@/stores/post-store";
import { Badge } from "@/components/ui/badge";
import CarPostingCarModelComponent from "./CarPostingCarModelComponent";

export default function DashboardAdPostStep2() {
  const [keyFeatureSelected, setKeyFeatureSelected] = useState([]);
  const { toast } = useToast();

  const {
    make,
    setMake,
    model,
    yearOfManufacture,
    setYearOfManufacture,
    color,
    setColor,
    interiorColor,
    setInteriorColor,
    transmission,
    setTransmission,
    keyFeatures,
    setKeyFeatures,
    setStep,
    step,
  } = useAdPostStore();

  useEffect(() => {
    setKeyFeatures(keyFeatureSelected);
  }, [keyFeatureSelected]);

  const handleNextClick = () => {
    if (
      !keyFeatures.length ||
      !transmission ||
      !interiorColor ||
      !color ||
      !yearOfManufacture ||
      !model ||
      !make
    ) {
      toast({
        variant: "destructive",
        title: "Oops!",
        description: "All Fields are required",
      });
      return;
    }

    setStep(step + 1);
  };

  const handleBackClick = () => {
    if (step === 1 || step < 1) return;
    setStep(step - 1);
  };

  return (
    <DashboardAdPostStepWrapperCard
      step={2}
      className="mx-auto max-w-[700px] shadow-none h-full"
    >
      <div className="grid grid-cols-1 gap-10">
        <div className="border p-4 flex flex-col justify-between rounded-lg shadow-md">
          {/* make */}
          <div>
            <Select onValueChange={(value) => setMake(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={make || "Select Car Make"} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Car Make</SelectLabel>
                  {carMakeAndModel.map((item, idx) => (
                    <SelectItem key={idx} value={item.title}>
                      {item.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* model */}
          <CarPostingCarModelComponent />

          {/* year of manufacture */}
          <div>
            <CustomInput
              label="Manufacture Year"
              type="number"
              placeholder="Enter the manufacturer year"
              value={yearOfManufacture || ""}
              onChange={(e) => setYearOfManufacture(Number(e.target.value))}
            />
          </div>

          {/* color */}
          <div>
            <CustomInput
              label="Car color"
              placeholder="#8a8d91"
              value={color}
              type="color"
              onChange={(e) => setColor(e.target.value)}
            />
            <Badge
              style={{ backgroundColor: color ? color : "#8a8d91" }}
            ></Badge>
          </div>
        </div>
        <Separator />
        <div className="border p-4 flex flex-col justify-between rounded-lg shadow-md">
          {/* interior color */}
          <div>
            <CustomInput
              label="Interior color"
              placeholder="#8a8d91"
              type="color"
              value={interiorColor}
              onChange={(e) => setInteriorColor(e.target.value)}
            />
            <Badge
              style={{
                backgroundColor: interiorColor ? interiorColor : "#8a8d91",
              }}
            ></Badge>
          </div>

          
          <div className="flex flex-col gap-1.5 my-2">
            <b className="text-sm font-semibold">Car Transmission</b>
            <Select onValueChange={(value) => setTransmission(value)}>
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder={transmission || "Select Car Transmission"}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Car Transmission</SelectLabel>
                  {transmissions.map((item, idx) => (
                    <SelectItem key={idx} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5 my-2">
            <b className="text-sm font-semibold">Select Car Key Features</b>
            <MultiSelect
              options={keyFeatureData}
              value={keyFeatureSelected}
              onChange={setKeyFeatureSelected}
              labelledBy="select all key features the car has"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <CustomeButton
            title="Back"
            disabled={step < 2}
            className="w-fit mt-3 px-5 py-2"
            onClick={handleBackClick}
          />
          <CustomeButton
            title="Next"
            className="w-fit mt-3 px-5 py-2 ml-auto"
            onClick={handleNextClick}
          />
        </div>
      </div>
    </DashboardAdPostStepWrapperCard>
  );
}
