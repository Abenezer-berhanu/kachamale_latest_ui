"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { carBodyTypes, fuelTypes } from "@/lib/data";
import CustomInput from "./CustomInput";
import DashboardAdPostStepWrapperCard from "./DashboardAdPostStepWrapperCard";
import { Separator } from "@/components/ui/separator";
import { SelectGroup } from "@radix-ui/react-select";
import { useToast } from "@/hooks/use-toast";
import CustomeButton from "./CustomeButton";
import { useAdPostStore } from "@/stores/post-store";

export default function DashboardAdPostStep2() {
  const { toast } = useToast();
  const {
    body,
    setBody,
    mileage,
    setMileAge,
    numberOfCylinders,
    setNumberOfCylinders,
    isCarRegistered,
    setIsCarRegistered,
    fuel,
    setFuel,
    seats,
    setSeats,
    engineSize,
    setStep,
    step,
    setEngineSize,
  } = useAdPostStore();

  const handleNextClick = () => {
    if (
      !body ||
      !numberOfCylinders ||
      !isCarRegistered ||
      !fuel ||
      !seats ||
      !engineSize
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
      step={3}
      className="mx-auto max-w-[700px] shadow-none h-full"
    >
      <div className="grid grid-cols-1 gap-10">
        <div className="border p-4 flex flex-col justify-between rounded-lg shadow-md">
          <div>
            <Select onValueChange={(value) => setBody(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={body || "Select Car Body type"} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Car Body type</SelectLabel>
                  {carBodyTypes.map((item, idx) => (
                    <SelectItem key={idx} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="">
            <CustomInput
              value={mileage}
              label="Mileage"
              placeholder="Enter the car mileage"
              type="number"
              onChange={(e) => setMileAge(e.target.value)}
            />
          </div>

          <div className="">
            <CustomInput
              value={numberOfCylinders}
              onChange={(e) => setNumberOfCylinders(e.target.value)}
              label="Number of cylinder"
              placeholder="Number of cylinder"
              type="number"
            />
          </div>
        </div>

        <Separator />

        <div className="border p-4 flex flex-col justify-between rounded-lg shadow-md">
          <div className="">
            <Select
              onValueChange={(value: "yes" | "no") => setIsCarRegistered(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={"Is this car registered? - Yes"} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Is this car registered?</SelectLabel>
                  <SelectItem value={"yes"}>Yes</SelectItem>
                  <SelectItem value={"no"}>No</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5 my-2">
            <b className="text-sm font-semibold">Car fuel type</b>
            <Select onValueChange={(value) => setFuel(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={fuel || "Select Car fuel type"} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select car fuel type</SelectLabel>
                  {fuelTypes.map((item, idx) => (
                    <SelectItem key={idx} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="">
            <CustomInput
              value={seats}
              label="Number of seats"
              placeholder="Number of seats"
              type="number"
              onChange={(e) => setSeats(e.target.value)}
            />
          </div>

          <div className="">
            <CustomInput
              value={engineSize}
              label="Engine size"
              placeholder="Engine size"
              type="number"
              onChange={(e) => setEngineSize(e.target.value)}
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
