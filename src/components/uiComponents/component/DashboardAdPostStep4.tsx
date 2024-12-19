"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomInput from "./CustomInput";
import DashboardAdPostStepWrapperCard from "./DashboardAdPostStepWrapperCard";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SelectGroup } from "@radix-ui/react-select";
import { useAdPostStore } from "@/hooks/adPostHook/store";
import { useToast } from "@/hooks/use-toast";
import CustomeButton from "./CustomeButton";
import { useEffect, useLayoutEffect, useState } from "react";
import { generateSlug } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { createCar } from "@/actions/dashboardActions";

export default function DashboardAdPostStep4() {
  const router = useRouter();
  const [uid, setUid] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (refresh) {
      location.reload();
      router.push("/ad/posts/");
    }
  }, [refresh]);

  useLayoutEffect(() => {
    const localUid = localStorage.getItem("kachamaleUid") || "";
    console.log(localUid);
    if (!localUid) {
      toast({
        variant: "destructive",
        title: "Oops!",
        description: "Login Required",
      });
      router.push("/");
    }
    const uidValue = localUid.split(",")[0];
    setUid(uidValue);
  }, [router]);

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const {
    setNegotiationAvailable,
    setHorsePower,
    setPrice,
    areYouOwnerOrBroker,
    setAreYouOwnerOrBroker,
    setDescription,
    setPhoneNumber,
    id,
    mileage,
    category,
    sellerCity,
    sellerStreet,
    images,
    make,
    model,
    yearOfManufacture,
    color,
    interiorColor,
    condition,
    transmission,
    keyFeatures,
    isCarRegistered,
    body,
    fuel,
    seats,
    numberOfCylinders,
    engineSize,
    horsePower,
    description,
    price,
    negotiationAvailable,
    phoneNumber,
  } = useAdPostStore();
  const handleNextClick = async () => {
    setLoading(true);
    if (
      !horsePower ||
      !price ||
      !areYouOwnerOrBroker ||
      !description ||
      !phoneNumber
    ) {
      toast({
        variant: "destructive",
        title: "Oops!",
        description: "All Fields are required",
      });
      setLoading(false);
      return;
    }

    if (!phoneNumber.includes("+")) {
      toast({
        variant: "destructive",
        title: "Oops!",
        description: "Phone number should start with +",
      });
      setLoading(false);
      return;
    }

    if (phoneNumber.length < 13) {
      toast({
        variant: "destructive",
        title: "Oops!",
        description: "Valid phone number must be at least 13 characters",
      });
      setLoading(false);
      return;
    }

    // generate slug
    const name = make! + model!;
    const generatedSlug = generateSlug(name, yearOfManufacture!);
    const carInfo = {
      role: areYouOwnerOrBroker,
      id,
      slug: generatedSlug,
      mileage,
      category,
      sellerCity,
      sellerStreet,
      images,
      make,
      model,
      yearOfManufacture,
      color,
      interiorColor,
      condition,
      transmission,
      keyFeatures,
      isCarRegistered,
      body,
      fuel,
      seats,
      numberOfCylinders,
      engineSize,
      horsePower,
      description,
      price,
      ownerId: uid,
      negotiationAvailable,
      phoneNumber,
    };

    try {
      const createdCar = await createCar(carInfo);
      if (createdCar?.success) {
        toast({
          title: "Ad posted successfully",
        });
        // refresh page and push the user to my posts
        setRefresh(true);
        return;
      }

      if (!createdCar?.success) {
        toast({
          variant: "destructive",
          description: "Something went wrong please try again",
        });
      }
      return;
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Something went wrong please try again",
      });
    } finally {
      setLoading(false);
      return;
    }
  };

  return (
    <DashboardAdPostStepWrapperCard
      step={4}
      className="mx-auto max-w-[700px] shadow-none h-full"
    >
      <div className="grid grid-cols-1 gap-10">
        <div className="border p-4 flex flex-col justify-between rounded-lg shadow-md">
          <div>
            <Select
              onValueChange={(e) =>
                setNegotiationAvailable(e == "negotiable" ? true : false)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder={
                    negotiationAvailable || "Is the price negotiable"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Is price negotiable</SelectLabel>
                  <SelectItem value={"negotiable"}>Yes</SelectItem>
                  <SelectItem value={"notNegotiable"}>No</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="">
            <CustomInput
              label="Horse power"
              placeholder="Enter the car Horse power"
              type="number"
              value={horsePower}
              onChange={(e) => setHorsePower(Number(e.target.value))}
            />
          </div>

          <div className="">
            <CustomInput
              label="Price"
              placeholder="Car Price"
              type="number"
              onChange={(e) => setPrice(Number(e.target.value))}
              value={price}
            />
          </div>
        </div>
        <Separator />

        <div className="border p-4 flex flex-col justify-between rounded-lg shadow-md">
          <div className="">
            <Select
              onValueChange={(e: "owner" | "broker") =>
                setAreYouOwnerOrBroker(e)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder={
                    areYouOwnerOrBroker || "Are Your Owner or Broker"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>Are your owner or broker</SelectGroup>
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
              <Textarea
                placeholder="Type your message here."
                id="message-2"
                value={description || ""}
                onChange={(e) => setDescription(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                This text will be used as a description about the car.
              </p>
            </div>
          </div>

          <div className="">
            <CustomInput
              value={phoneNumber}
              label="Phone Number"
              placeholder="+251023456789"
              type="tel"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
      </div>
      <CustomeButton
        disabled={loading}
        title={loading ? "submitting..." : "Submit"}
        className="w-fit mt-3 px-5 py-2 ml-auto"
        onClick={handleNextClick}
      />
    </DashboardAdPostStepWrapperCard>
  );
}
