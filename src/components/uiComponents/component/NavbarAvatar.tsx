"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserStore } from "@/hooks/authHook/store";
import React, { useLayoutEffect, useState } from "react";
import CustomeButton from "./CustomeButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarAvatar({userProfileUrl}: {userProfileUrl: string}) {
  const pathname = usePathname();
  const { uid, setUserUid } = useUserStore();
  useLayoutEffect(() => {
    const uid = localStorage.getItem("kachamaleUid") || "";
    if (uid) {
      setUserUid(uid);
    }
  }, [uid]);

  return (
    <div className="flex items-center">
      {uid ? (
        <Link href={"/ad/dashboard"}>
          <Avatar>
            <AvatarImage
              src={userProfileUrl}
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      ) : (
        <Link href={"/auth/signin"}>
          {!pathname.includes("/signin") && (
            <CustomeButton title="Login" className="ml-5" />
          )}
        </Link>
      )}
    </div>
  );
}
