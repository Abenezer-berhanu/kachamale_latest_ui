import React from "react";
import CustomeButton from "./CustomeButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DetailPageContactInfo() {
  return (
    <div className="w-full bg-white shadow-md p-3 flex flex-col gap-3 rounded-lg">
      <div className="flex items-center gap-3 py-2">
        <div className="relative">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="w-3 h-3 bg-green-400 absolute right-0 bottom-0 rounded-full"></span>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Leul Assefa </h2>
          <small>Typically replies within a few hours</small>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <CustomeButton title="Show contact" />
        <CustomeButton title="Start chat" />
      </div>
    </div>
  );
}
