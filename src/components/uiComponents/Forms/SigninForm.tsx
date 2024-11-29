import React from "react";
import CustomInput from "../component/CustomInput";
import Link from "next/link";
import CustomeButton from "../component/CustomeButton";

export default function SigninForm() {
  return (
    <form action="">
      <CustomInput label="Email" placeholder="Jhon@gmail.com" type="email" />
      <CustomInput label="Password" placeholder="Password" type="password" />

      <Link
        className="font-semibold text-main_blue hover:underline text-sm"
        href="/auth/forgot-password"
      >
        Forgot Password
      </Link>

      <CustomeButton title="Login" className="my-7 py-2 w-full" />
    </form>
  );
}
