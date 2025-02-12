import React from "react";
import DashboardAdPostStepWrapperCard from "./DashboardAdPostStepWrapperCard";
import CustomInput from "./CustomInput";
import Link from "next/link";
import CustomeButton from "./CustomeButton";
import ProfilePageBanner from "./ProfilePageBanner";
import { BadgeCheck } from "lucide-react";
import ProfileFieldCard from "./ProfileFieldCard";
import { Separator } from "@/components/ui/separator";
import ProfileDropZone from "./ProfileDropZone";

export default function ProfileWrapper({ user }: { user: UserProfileType }) {
  return (
    <div>
      <DashboardAdPostStepWrapperCard
        header={"Profile"}
        className="max-w-[700px] mx-auto"
      >
        <div className="mb-5">
          <ProfilePageBanner />
        </div>
        <div className="flex gap-1 px-3 pt-2 items-center mt-2">
          <p className="text-xl font-bold">Fredy Mercury</p>
          {/* <BadgeCheck className="text-blue-600 size-5" /> */}
          <p className="text-green-400 text-xs font-bold">Verified</p>
        </div>
        <div className="mb-2">
          <p className="text-sm px-3 text-slate-700">abebe@gmail.com</p>
        </div>
        <Separator />

        <div className="mt-5 px-3">
          <ProfileFieldCard
            title="Bio"
            desc="the mandem to incosiderate five star hotel smoking sigarate "
          />
        </div>

        <div className="my-8 px-3 grid grid-cols-1 md:grid-cols-2">
          <ProfileFieldCard title="Phone Number" desc="" />
          <div className="pl-2 border-l">
            <ProfileFieldCard title="location" desc="" />
          </div>
        </div>

        {/* image drop zone */}
        <div className="p-2 flex flex-col gap-2 my-3">
          <Separator />
          <p className="font-semibold text-lg">Change your profile picture</p>
          <ProfileDropZone />
        </div>
      </DashboardAdPostStepWrapperCard>
    </div>
  );
}
