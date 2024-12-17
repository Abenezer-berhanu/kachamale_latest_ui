"use client";
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
import { useAdPostStore } from "@/hooks/adPostHook/store";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function DashboardAdPostStep1() {
  const { toast } = useToast();
  const {
    sellerCity,
    setSellerCity,
    sellerStreet,
    setSellerStreet,
    images,
    removeImage,
    setStep,
    step,
  } = useAdPostStore();

  const handleNextClick = () => {
    if (!sellerCity || !sellerStreet || !images.length) {
      toast({
        variant: "destructive",
        title: "Oops!",
        description: "All Fields are required",
      });
      return;
    }

    if (images.length < 5) {
      toast({
        variant: "destructive",
        title: "Oops!",
        description: "Minimum 5 images should be provided.",
      });
      return;
    }

    setStep(step + 1);
  };

  return (
    <DashboardAdPostStepWrapperCard step={1} className="max-w-[700px] mx-auto">
      <div>
        <Select onValueChange={(e) => setSellerCity(e)}>
          <SelectTrigger className="w-full h-12">
            <SelectValue placeholder={sellerCity || "Select city"} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select city</SelectLabel>
              {citiesList.map((city, idx) => (
                <SelectItem
                  value={`${city.city}, ${city.admin_name}`}
                  key={idx}
                >
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
          value={sellerStreet}
          placeholder="Enter Your Location in you city"
          onChange={(e) => setSellerStreet(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <b className="text-sm font-semibold">Image</b>
        <div className="flex gap-2 p-2 overflow-x-auto">
          {images &&
            images.length > 0 &&
            images.map((img) => (
              <div key={uuidv4()} className="relative">
                <Image
                  src={img as string}
                  alt="text"
                  width={100}
                  height={100}
                  className="w-12 h-12 rounded-lg m-2 border p-1"
                />
                <button
                  className="absolute top-0 right-0 text-red-500"
                  onClick={() => removeImage(img)}
                >
                  <X />
                </button>
              </div>
            ))}
        </div>
        <DashboardImageDragAndDrop />
      </div>

      <CustomeButton
        title="Next"
        className="w-fit mt-3 px-5 py-2 ml-auto"
        onClick={handleNextClick}
      />
    </DashboardAdPostStepWrapperCard>
  );
}
