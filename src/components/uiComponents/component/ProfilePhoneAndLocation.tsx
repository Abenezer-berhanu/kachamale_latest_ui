"use client";
import { useState } from "react";
import ProfileFieldCard from "./ProfileFieldCard";
import { Input } from "@/components/ui/input";
import CustomeButton from "./CustomeButton";
import { useToast } from "@/hooks/use-toast";
import { updateUserPhoneAndLocation } from "@/actions/user.actions";

export default function ProfilePhoneAndLocation({
  phoneNumber,
  location,
}: {
  phoneNumber: string;
  location: string;
}) {
  const [showInputs, setShowInputs] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [updatedValue, setUpdatedValue] = useState({
    phoneNumber: "",
    location: "",
  });
  const isInputsEmpty = !updatedValue.location && !updatedValue.phoneNumber;
  const isPhoneNumberValid =
    !updatedValue.phoneNumber.includes("+") && updatedValue.phoneNumber;

  const handleSubmitClick = async () => {
    try {
      setLoading(true);
      if (isInputsEmpty || isPhoneNumberValid) {
        toast({
          variant: "destructive",
          description:
            "Before submitting please enter valid information. phone number must start with '+'",
        });
      } else {
        const response = await updateUserPhoneAndLocation(updatedValue);

        if (response.error) {
          toast({
            variant: "destructive",
            description: response.message,
          });
        }
        toast({
          description: response.message,
        });

        setUpdatedValue({ phoneNumber: "", location: "" });
        setShowInputs(false);
      }
    } catch (error) {
      console.log(error)
      toast({
        variant: "destructive",
        description: "Something went wrong please check your connection",
      });
    } finally {
      setLoading(false);
    }
  };
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value, // Dynamically updating state based on input name
    }));
  };

  return (
    <div className="border rounded-lg my-8 px-3 py-3 shadow-sm">
      <div className="px-1 mb-2 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-1 pr-2 py-2">
          <ProfileFieldCard title="Phone Number" desc={phoneNumber} />
          {showInputs && (
            <Input
              type="tel"
              placeholder="enter you phone number"
              name="phoneNumber"
              onChange={handleChange}
            />
          )}
        </div>
        <div className="pl-2 border-l flex flex-col gap-1 py-2">
          <ProfileFieldCard title="location" desc={location} />
          {showInputs && (
            <Input
              type="text"
              placeholder="enter you location: country - city - street"
              name="location"
              onChange={handleChange}
            />
          )}
        </div>
      </div>
      <div className="flex items-center gap-5">
        {showInputs && <CustomeButton
          title={loading ? "updating..." : "Submit"}
          className="text-sm p-2"
          disabled={loading || isInputsEmpty}
          onClick={handleSubmitClick}
        />}
        <p
          className="text-green-500 font-semibold cursor-pointer"
          onClick={() => setShowInputs(!showInputs)}
        >
          {showInputs ? "Hide" : "Update"}
        </p>
      </div>
    </div>
  );
}
