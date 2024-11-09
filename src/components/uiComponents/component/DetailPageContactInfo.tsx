"use client";
import React, { useState } from "react";
import CustomeButton from "./CustomeButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { users } from "@/lib/data";
import Link from "next/link";

interface UserType {
  phoneNumber: string | number;
  id: string | number;
  profile: string;
  fullName: string;
  email: string;
}

export default function DetailPageContactInfo({
  phone,
}: {
  phone: string | string;
}) {
  const user: UserType = users.filter((user) => user.phoneNumber === phone)[0];
  const [text, setText] = useState(false);
  const contactPhone = user.phoneNumber;

  return (
    <div className="w-full bg-white shadow-md p-3 flex flex-col gap-3 rounded-lg">
      <div className="flex items-center gap-3 py-2">
        <div className="relative">
          <Avatar>
            <AvatarImage
              src={
                user?.profile ? user.profile : "https://github.com/shadcn.png"
              }
            />
            <AvatarFallback>{user?.fullName?.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <span className="w-3 h-3 bg-green-400 absolute right-0 bottom-0 rounded-full"></span>
        </div>
        <div>
          <h2 className="text-lg font-semibold">{user?.fullName}</h2>
          <small>Typically replies within a few hours</small>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          href={text ? `tel:${contactPhone}` : ""}
          onClick={() => setText(true)}
          className="bg-main_blue rounded-xl text-white font-semibold w-full py-3 text-center"
        >
          {text ? contactPhone : "Show contact"}
        </Link>
        
        <CustomeButton title="Start chat" />
      </div>
    </div>
  );
}
