import { Separator } from "@/components/ui/separator";
import CustomeButton from "@/components/uiComponents/component/CustomeButton";
import SigninForm from "@/components/uiComponents/Forms/SigninForm";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <div className="h-fit w-full max-w-[380px] shadow-md p-8">
        <div>
          <h1 className="text-2xl my-3 text-center font-bold capitalize">
            Sign in to your account
          </h1>
          <CustomeButton
            isGoogle={true}
            title="Continue with google"
            className="my-6 py-2 w-full"
          />
          <div className="flex gap-1 my-3 w-full items-center justify-center">
            <Separator className="w-full max-w-[160px]" />
            <p className="text-sm font-semibold">OR</p>
            <Separator className="w-full max-w-[160px]" />
          </div>
          <SigninForm />

          <Link
            href={"/auth/signup"}
            className="my-2 text-gray_text flex items-center justify-center"
          >
            Don{"'"}t have an account?
            <p className="font-semibold text-main_blue">Sign up</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
