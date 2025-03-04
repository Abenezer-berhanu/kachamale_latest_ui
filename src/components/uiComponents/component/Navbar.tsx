import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavbarSearch from "./NavbarSearch";
import CustomeButton from "./CustomeButton";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { getUserFromDb, syncUserToDb } from "@/actions/user.actions";

export default async function Navbar() {
  const user = await currentUser();

  if (user) {
    const existUser = await getUserFromDb();
    if (existUser?.userNotFound) {
      console.log("got here on navbar page but not expected to be got here");
      await syncUserToDb();
    }
  }

  return (
    <div className="h-[72px] bg-main_blue px-4 sm:px-8 md:px-16 flex items-center justify-between">
      {/* Left Side: Logo and Search */}
      <div className="flex items-center gap-4 flex-1 max-w-[800px]">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/assets/logo.png"
            unoptimized
            alt="logo"
            width={200}
            height={200}
            className="max-w-[120px] sm:max-w-[154px] h-[44px] object-contain"
          />
        </Link>

        {/* Show Search Input on large screens, icon on tablet/smaller */}
        <div className="flex items-center justify-center px-3">
          <NavbarSearch />
        </div>
      </div>

      {/* Right Side: Avatar */}
      {!user ? (
        <>
          <SignInButton mode="modal">
            <CustomeButton title="Login" className="text-white" />
          </SignInButton>
        </>
      ) : (
        <div className="flex gap-4">
          <div className="max-md:hidden flex items-center justify-center">
            <UserButton />
          </div>
          <Link href={"/ad/posts"}>
            <CustomeButton title="Dashboard" />
          </Link>
          <Link href={"/likes"} className="border-l-2 border-white pl-2">
            <CustomeButton title="likes" />
          </Link>
        </div>
      )}
    </div>
  );
}
