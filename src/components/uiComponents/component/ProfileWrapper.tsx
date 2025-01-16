"use client";
import React, { useLayoutEffect, useState } from "react";
import DashboardAdPostStepWrapperCard from "./DashboardAdPostStepWrapperCard";
import CustomInput from "./CustomInput";
import Link from "next/link";
import CustomeButton from "./CustomeButton";
import ProfileImageUploader from "../functionalComponents/ProfileImageUploader";
import { updateUserProfile } from "@/actions/profileAction";
import { useProfileStore } from "@/hooks/profileHook/store";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { fetchUserProfile } from "../../../actions/authActions";

export default function ProfileWrapper() {
  const { refresh } = useRouter();
  const [refetch, setRefetch] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userInfo, setUserInfo]: any | UserData = useState(null);
  const { toast } = useToast();
  const { profile, setProfile, isPending, setIsPending } = useProfileStore();


  useLayoutEffect(() => {
    const getUserProfile = async () => {
      const userData = (await fetchUserProfile()) as UserData;
      setUserInfo(userData);
    };

    getUserProfile();
  }, [refetch]);

  const formAction = async (e: FormData) => {
    try {
      const { name, phone: phoneNumber } = Object.fromEntries(e);

      const allFields = { name, phoneNumber, profile };

      // Filter out fields with falsy values
      const truthyFields = Object.fromEntries(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(allFields).filter(([_, value]) => Boolean(value))
      );

      if (
        !truthyFields?.name &&
        !truthyFields?.email &&
        !truthyFields?.profile
      ) {
        toast({
          variant: "destructive",
          title: "Invalid entry",
          description:
            "At least one field must be specified to update profile.",
        });

        return;
      }

      setIsPending(true);

      const updatedUser = await updateUserProfile(truthyFields);
      if (!updatedUser?.success && updatedUser?.error) {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: updatedUser.error,
        });
        return;
      }

      if (updatedUser?.success && updatedUser.data) {
        toast({
          title: "Profile updated successfully",
          description: "Your profile has been updated",
        });

        refresh();
        setProfile(null);
        setRefetch(!refetch);
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Something went wrong please try again",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div>
      <DashboardAdPostStepWrapperCard
        header={"Profile"}
        className="max-w-[700px] mx-auto"
      >
        <form action={formAction} className="flex flex-col">
          <CustomInput
            name="name"
            label="Full Name"
            placeholder={userInfo?.name}
            disabled={isPending}
            required="no"
          />
          <CustomInput
            name="email"
            label="Email"
            placeholder={userInfo?.email}
            type="email"
            disabled={true}
          />
          <CustomInput
            name="phone"
            label="Phone Number"
            placeholder={userInfo?.phone}
            type="tel"
            disabled={isPending}
            required={"no"}
          />
          <div className="grid grid-cols-1 mdMob:grid-cols-2 gap-3">
            <ProfileImageUploader />
            <div className="flex flex-col justify-between gap-2">
              <Link href={""}>
                <CustomeButton title="My Posts" />
              </Link>
              <Link href={""}>
                <CustomeButton title="My Notification" />
              </Link>
              <Link href={""}>
                <CustomeButton title="Post New Ad" />
              </Link>
            </div>
          </div>
          <CustomeButton
            title={isPending ? "Pending..." : "Update"}
            className="mt-6 py-3 w-fit px-6"
          />
        </form>
      </DashboardAdPostStepWrapperCard>
    </div>
  );
}
