"use client";
import React, { useState } from "react";
import CustomeButton from "./CustomeButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface UserType {
  email: string;
  isEmailVerified: boolean;
  name: string;
  phoneNumber: string | null;
  profile: {
    id: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    avatarUrl: any;
    bio: string | null;
    location: string | null;
    socialLinks: string | null;
    userUid: string;
  } | null;
}

export default function DetailPageContactInfo({
  phone,
  user,
}: {
  phone: string;
  user: UserType | null
}) {
  const [showPN, setShowPN] = useState(false);

  return (
    <div className="w-full bg-white shadow-md p-3 flex flex-col gap-3 rounded-lg">
      <div className="flex items-center gap-3 py-2">
        <div className="relative">
          <Avatar>
            <AvatarImage
              src={
                user?.profile
                  ? user?.profile.avatarUrl
                  : "https://github.com/shadcn.png"
              }
            />
            <AvatarFallback>{user?.name?.slice(0, 2)}</AvatarFallback>
          </Avatar>
          {/* <span className="w-3 h-3 bg-green-400 absolute right-0 bottom-0 rounded-full"></span> */}
        </div>
        <div>
          <h2 className="text-lg font-semibold">{user?.name}</h2>
          <small>Typically replies within a few hours</small>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          href={showPN ? `tel:${phone}` : ""}
          onClick={() => setShowPN(true)}
          className="bg-main_blue rounded-xl text-white font-semibold w-full py-3 text-center"
        >
          {showPN ? phone : "Show contact"}
        </Link>

        <CustomeButton title="Start chat" />
      </div>
    </div>
  );
}
