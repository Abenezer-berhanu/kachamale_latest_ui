import React from "react";
import DashboardAdPostStepWrapperCard from "./DashboardAdPostStepWrapperCard";
import CustomInput from "./CustomInput";
import Link from "next/link";
import CustomeButton from "./CustomeButton";
import ProfileImageUploader from "../functionalComponents/ProfileImageUploader";

export default function ProfileWrapper() {
  return (
    <div>
      <DashboardAdPostStepWrapperCard
        header={"Profile"}
        className="max-w-[700px] mx-auto"
      >
        <div className="flex flex-col">
          <CustomInput label="Full Name" placeholder="Abebe bikila" />
          <CustomInput
            label="User Name"
            placeholder="Abebe bikila"
            disabled={true}
          />
          <CustomInput
            label="Email"
            placeholder="Abebe@bikila.com"
            type="email"
          />
          <CustomInput
            label="Phone Number"
            placeholder="+251912345678"
            type="tel"
          />
          <div className="grid grid-cols-1 mdMob:grid-cols-2 gap-3">
            <ProfileImageUploader />
            <div className="flex flex-col justify-between gap-2">
              <Link href={""}><CustomeButton title="My Posts"/></Link>
              <Link href={""}><CustomeButton title="My Notification"/></Link>
              <Link href={""}><CustomeButton title="Post New Ad"/></Link>
            </div>
          </div>
        </div>
      </DashboardAdPostStepWrapperCard>
    </div>
  );
}
