import React from "react";
import DashboardAdPostStepWrapperCard from "./DashboardAdPostStepWrapperCard";

import ProfilePageBanner from "./ProfilePageBanner";

import ProfileFieldCard from "./ProfileFieldCard";
import { Separator } from "@/components/ui/separator";
import ProfileDropZone from "./ProfileDropZone";

export default function ProfileWrapper({ user }: { user: UserType }) {
  return (
    <div>
      <DashboardAdPostStepWrapperCard
        header={"Profile"}
        className="max-w-[700px] mx-auto"
      >
        <div className="mb-5">
          <ProfilePageBanner profileUrl={String(user?.profile?.avatarUrl)} />
        </div>
        <div className="flex gap-1 px-3 pt-2 items-center mt-2">
          <p className="text-xl font-bold">{user?.name}</p>
          {/* <BadgeCheck className="text-blue-600 size-5" /> */}
          {user?.isEmailVerified && (
            <p className="text-green-400 text-xs font-bold">Verified</p>
          )}
          {!user?.isEmailVerified && (
            <p className="text-yellow-500 text-xs font-bold">Not verified</p>
          )}
        </div>
        <div className="mb-2">
          <p className="text-sm px-3 text-slate-700">{user.email}</p>
        </div>
        <Separator />

        <div className="mt-5 px-3">
          <ProfileFieldCard title="Bio" desc={user?.profile?.bio} />
        </div>

        <div className="my-8 px-3 grid grid-cols-1 md:grid-cols-2">
          <ProfileFieldCard title="Phone Number" desc={user?.phoneNumber} />
          <div className="pl-2 border-l">
            <ProfileFieldCard title="location" desc={user?.profile.location} />
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
