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
import { getSingleCar } from "@/actions/car.actions";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { carData, transmissions } from "@/lib/data";
import { useAdUpdateStore } from "@/stores/update-store";
import CustomInput from "./CustomInput";
import citiesList from "@/lib/et";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

type SingleCarFetchResType = Awaited<ReturnType<typeof getSingleCar>>;

export default function UpdateCarStep2({
  carInfo,
}: {
  carInfo: SingleCarFetchResType;
}) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const {
    model,
    setModel,
    numberOfCylinders,
    setNumberOfCylinders,
    phoneNumber,
    setPhoneNumber,
    price,
    setPrice,
    seats,
    setSeats,
    sellerCity,
    setSellerCity,
    sellerStreet,
    setSellerStreet,
    transmission,
    setTransmission,
    areYouOwnerOrBroker,
    setAreYouOwnerOrBroker,
    step,
    setStep,
    negotiationAvailable,
    setNegotiationAvailable,
  } = useAdUpdateStore();

  const handleClick = async (clickedField: string) => {
    try {
        setLoading(true)
      console.log(clickedField);
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Something went wrong please check you connection",
      });
    } finally {
        setLoading(false)
    }
  };

  const handleNextClick = () => {
    setStep(step == 1 ? 2 : 1);
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
            {/* model */}
            <TableRow>
              <TableCell className="font-medium">Model</TableCell>
              <TableCell>{carInfo?.model}</TableCell>
              <TableCell className="flex-1 border">
                <Select onValueChange={(value) => setModel(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={model || "Select Car Model"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Car Model</SelectLabel>
                      {carData[0].models.map((item, idx) => (
                        <SelectItem key={idx} value={item}>
                          {item}
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
                  onClick={() => handleClick("model")}
                />
              </TableCell>
            </TableRow>
            {/* model close*/}

            {/* isNegotationAvailable */}
            <TableRow>
              <TableCell className="font-medium">
                Is Negotiation Available
              </TableCell>
              <TableCell>
                {carInfo?.negotiationAvailable ? "Available" : "Not Available"}
              </TableCell>
              <TableCell className="flex-1 border">
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
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("negotiationAvailable")}
                />
              </TableCell>
            </TableRow>
            {/* isNegoation close*/}

            {/* number of cylinder */}
            <TableRow>
              <TableCell className="font-medium">Number of cylinder</TableCell>
              <TableCell>{carInfo?.numberOfCylinders}</TableCell>
              <TableCell className="border">
                <CustomInput
                  value={numberOfCylinders}
                  onChange={(e) => setNumberOfCylinders(e.target.value)}
                  label=""
                  placeholder="Number of cylinder"
                  type="number"
                />
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("numberOfCylinders")}
                />
              </TableCell>
            </TableRow>
            {/* number of cylinder close*/}

            {/* phoneNumber */}
            <TableRow>
              <TableCell className="font-medium">Phone Number</TableCell>
              <TableCell>{carInfo?.phoneNumber}</TableCell>
              <TableCell className="flex-1 border">
                <CustomInput
                  value={phoneNumber}
                  label=""
                  placeholder="+251023456789"
                  type="tel"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("phoneNumber")}
                />
              </TableCell>
            </TableRow>
            {/* phoneNumber close*/}

            {/* price */}
            <TableRow>
              <TableCell className="font-medium">Price</TableCell>
              <TableCell className="">
                {carInfo?.price?.toLocaleString()}
              </TableCell>
              <TableCell className="flex-1 border">
                <CustomInput
                  label=""
                  placeholder="Car Price"
                  type="number"
                  onChange={(e) => setPrice(Number(e.target.value))}
                  value={price}
                />
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("price")}
                />
              </TableCell>
            </TableRow>
            {/* price close*/}

            {/* seat */}
            <TableRow>
              <TableCell className="font-medium">Number of seats</TableCell>
              <TableCell>{carInfo?.seats}</TableCell>
              <TableCell className="flex-1 border">
                <CustomInput
                  value={seats}
                  label=""
                  placeholder="Number of seats"
                  type="number"
                  onChange={(e) => setSeats(e.target.value)}
                />
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("seats")}
                />
              </TableCell>
            </TableRow>
            {/* seat close*/}

            {/* sellerCity */}
            <TableRow>
              <TableCell className="font-medium">Seller City</TableCell>
              <TableCell>{carInfo?.sellerCity}</TableCell>
              <TableCell className="flex-1 border">
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
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("sellerCity")}
                />
              </TableCell>
            </TableRow>
            {/* sellerCity close*/}

            {/* sellerStreet */}
            <TableRow>
              <TableCell className="font-medium">Seller Street</TableCell>
              <TableCell>{carInfo?.sellerStreet}</TableCell>
              <TableCell className="flex-1 border">
                <CustomInput
                  label=""
                  value={sellerStreet}
                  placeholder="Enter Your Location in you city"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSellerStreet(e.target.value)
                  }
                />
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("sellerStreet")}
                />
              </TableCell>
            </TableRow>
            {/* sellerStreet close*/}

            {/* transmission */}
            <TableRow>
              <TableCell className="font-medium">Transmission</TableCell>
              <TableCell>{carInfo?.transmission}</TableCell>
              <TableCell className="flex-1 border">
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
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("transmission")}
                />
              </TableCell>
            </TableRow>
            {/* transmission close*/}

            {/* role */}
            <TableRow>
              <TableCell className="font-medium">Role</TableCell>
              <TableCell>{carInfo?.role}</TableCell>
              <TableCell className="flex-1 border">
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
              </TableCell>
              <TableCell className="text-right">
                <CustomeButton
                  title={loading ? "processing..." : "Submit"}
                  className="text-sm p-2"
                  disabled={loading}
                  onClick={() => handleClick("role")}
                />
              </TableCell>
            </TableRow>
            {/* setRole close*/}
          </TableBody>
        </Table>
      </div>
      <CustomeButton
        title="Back"
        className="w-fit py-2 px-4 text-sm mt-auto"
        onClick={handleNextClick}
        disabled={loading}
      />
    </DashboardAdPostStepWrapperCard>
  );
}
