"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomeButton from "./CustomeButton";
import DashboardAdPostStepWrapperCard from "./DashboardAdPostStepWrapperCard";
import { getSingleCar, updateCarField } from "@/actions/car.actions";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { carBodyTypes, carData, fuelTypes } from "@/lib/data";
import { useAdUpdateStore } from "@/stores/update-store";
import CustomInput from "./CustomInput";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import CarUpdateCarModelComponent from "./CarUpdateCarModelComponenst";

type SingleCarFetchResType = Awaited<ReturnType<typeof getSingleCar>>;

export default function UpdateCarTable1({
  carInfo,
}: {
  carInfo: SingleCarFetchResType;
}) {
  const [loading, setLoading] = useState(false);
  const {
    setBody,
    body,
    color,
    setColor,
    description,
    setDescription,
    engineSize,
    setEngineSize,
    fuel,
    setFuel,
    horsePower,
    setHorsePower,
    interiorColor,
    setInteriorColor,
    setIsCarRegistered,
    make,
    setMake,
    isCarRegistered,
    model,
    step,
    setStep,
  } = useAdUpdateStore();

  const handleNextClick = () => {
    setStep(step == 1 ? 2 : 1);
  };
  const { toast } = useToast();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (refresh) {
      window.location.reload();
      setRefresh(false);
    }
  }, [refresh]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = async (clickedField: string, value: any) => {
    try {
      setLoading(true);
      // give it key and value structure
      // the use it on calling function
      // show toast of success

      const typeChangeValue =
        clickedField == "horsePower" ||
        clickedField == "mileage" ||
        clickedField == "numberOfCylinder" ||
        clickedField == "price" ||
        clickedField == "seats" ||
        clickedField == "yearOfManufacture"
          ? Number(value)
          : value;

      const updateInfo = { [clickedField]: typeChangeValue };

      const updatedCarInfo = await updateCarField(
        String(carInfo?.id),
        updateInfo,
        "/ad/last-5-ads"
      );
      if (updatedCarInfo?.success) {
        toast({
          description: updatedCarInfo?.message,
        });
      }
      setRefresh(true);
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Something went wrong please check you connection",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardAdPostStepWrapperCard step={step}>
      <div className="w-[900px]">
        <Table className="border">
          <TableCaption>Update and click submit button</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">Field Name</TableHead>
              <TableHead className="w-[120px]">Old value</TableHead>
              <TableHead className="">New value</TableHead>
              <TableHead className="text-right w-[120px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* body */}
            <TableRow>
              <TableCell className="font-medium">Body Type</TableCell>
              <TableCell>{carInfo?.body}</TableCell>
              <TableCell className="flex-1 border">
                <Select onValueChange={(value) => setBody(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={body || "New Body type"} />
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
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("body", body)}
                />
              </TableCell>
            </TableRow>
            {/* body close*/}

            {/* color */}
            <TableRow>
              <TableCell className="font-medium">Color</TableCell>
              <TableCell>
                <Badge
                  style={{
                    backgroundColor: carInfo?.color || "",
                  }}
                ></Badge>
              </TableCell>
              <TableCell className="flex-1 border">
                <div className="flex gap-2 items-center">
                  <CustomInput
                    label=""
                    placeholder=""
                    value={color}
                    type="color"
                    onChange={(e) => setColor(e.target.value)}
                  />
                  <Badge
                    style={{ backgroundColor: color ? color : "#8a8d91" }}
                    className="h-5 rounded-full"
                  ></Badge>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("color", color)}
                />
              </TableCell>
            </TableRow>
            {/* color close*/}

            {/* description */}
            <TableRow>
              <TableCell className="font-medium">Description</TableCell>
              <TableCell className="overflow-x-auto whitespace-nowrap max-w-[200px] first-letter:capitalize">
                {carInfo?.description}
              </TableCell>
              <TableCell className="flex-1 border">
                <Textarea
                  placeholder="Type your message here."
                  id="message-2"
                  value={description || ""}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("description", description)}
                />
              </TableCell>
            </TableRow>
            {/* description close*/}

            {/* enginesize */}
            <TableRow>
              <TableCell className="font-medium">Engine size</TableCell>
              <TableCell>{carInfo?.engineSize}</TableCell>
              <TableCell className="flex-1 border">
                <CustomInput
                  value={engineSize}
                  label=""
                  placeholder="Engine size"
                  type="number"
                  onChange={(e) => setEngineSize(e.target.value)}
                />
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("engineSize", engineSize)}
                />
              </TableCell>
            </TableRow>
            {/* enginesize close*/}

            {/* fuel */}
            <TableRow>
              <TableCell className="font-medium">Fuel</TableCell>
              <TableCell>{carInfo?.fuel}</TableCell>
              <TableCell className="flex-1 border">
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
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("fuel", fuel)}
                />
              </TableCell>
            </TableRow>
            {/* fuel close*/}

            {/* horsepower */}
            <TableRow>
              <TableCell className="font-medium">Horse power</TableCell>
              <TableCell>{carInfo?.horsePower}</TableCell>
              <TableCell className="flex-1 border">
                <CustomInput
                  label=""
                  placeholder="Enter the car Horse power"
                  type="number"
                  value={horsePower}
                  onChange={(e) => setHorsePower(e.target.value)}
                />
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("horsePower", horsePower)}
                />
              </TableCell>
            </TableRow>
            {/* horsepower close*/}

            {/* interior */}
            <TableRow>
              <TableCell className="font-medium">Interior</TableCell>
              <TableCell>
                <Badge
                  style={{
                    backgroundColor: carInfo?.interiorColor || "",
                  }}
                ></Badge>
              </TableCell>
              <TableCell className="flex-1 border">
                <div className="flex gap-2 items-center">
                  <CustomInput
                    label=""
                    placeholder=""
                    value={color}
                    type="color"
                    onChange={(e) => setInteriorColor(e.target.value)}
                  />
                  <Badge
                    style={{
                      backgroundColor: interiorColor
                        ? interiorColor
                        : "#8a8d91",
                    }}
                    className="h-5 rounded-full"
                  ></Badge>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("interiorColor", interiorColor)}
                />
              </TableCell>
            </TableRow>
            {/* interior close*/}

            {/* isCarRegistered */}
            <TableRow>
              <TableCell className="font-medium">Is car registered</TableCell>
              <TableCell>
                {carInfo?.isCarRegistered?.toLowerCase() == "yes"
                  ? "Registered"
                  : "Not Registered"}
              </TableCell>
              <TableCell className="flex-1 border">
                <Select
                  onValueChange={(value: "yes" | "no") =>
                    setIsCarRegistered(value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue
                      placeholder={"Is this car registered? - Yes"}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Is this car registered?</SelectLabel>
                      <SelectItem value={"yes"}>Yes</SelectItem>
                      <SelectItem value={"no"}>No</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() =>
                    handleClick("isCarRegistered", isCarRegistered)
                  }
                />
              </TableCell>
            </TableRow>
            {/* isCarRegistered close*/}

            {/* make */}
            <TableRow>
              <TableCell className="font-medium">Make</TableCell>
              <TableCell>{carInfo?.make}</TableCell>
              <TableCell className="flex-1 border">
                <Select onValueChange={(value) => setMake(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={make || "Select Car Make"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Car Make</SelectLabel>
                      {carData.map((item, idx) => (
                        <SelectItem key={idx} value={item.make}>
                          {item.make}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("make", make)}
                />
              </TableCell>
            </TableRow>
            {/* make close*/}

            {/* model */}
            <TableRow>
              <TableCell className="font-medium">Model</TableCell>
              <TableCell>{carInfo?.model}</TableCell>
              <TableCell className="flex-1 border">
                <CarUpdateCarModelComponent />
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("model", model)}
                />
              </TableCell>
            </TableRow>
            {/* model close*/}
          </TableBody>
        </Table>
      </div>

      <CustomeButton
        title="Next"
        className="w-fit py-2 px-4 text-sm ml-auto"
        onClick={handleNextClick}
        disabled={loading}
      />
    </DashboardAdPostStepWrapperCard>
  );
}
