import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

export default function ProfilePageBanner({
  profileUrl,
}: {
  profileUrl: string;
}) {
  return (
    <div className="bg-[url(/assets/profileBanner.png)] h-28 bg-cover repeat-0 rounded-lg relative">
      <Avatar className="absolute size-14 p-1 bg-white bottom-[-25px] left-5">
        <AvatarImage
          src={profileUrl ? profileUrl : "https://github.com/shadcn.png"}
          alt="@shadcn"
          className="rounded-full"
        />
        <AvatarFallback></AvatarFallback>
      </Avatar>
    </div>
  );
}
