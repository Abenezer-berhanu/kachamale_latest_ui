"use client";
import CustomInput from "../component/CustomInput";
import Link from "next/link";
import CustomeButton from "../component/CustomeButton";
import { useActionState, useEffect } from "react";
import { signInUser } from "@/actions/authActions";
import { useToast } from "@/hooks/use-toast";

export default function SigninForm() {
  const [state, signinUserAction, isPending] = useActionState(signInUser, null);
  const { toast } = useToast();

  useEffect(() => {
    if (!state?.success && state?.error) {
      toast({
        variant: "destructive",
        title: "Error occurred",
        description: state?.error || "Something went wrong please try again",
      });
    }

    // else save the data to localstorage and push user to dashboard
    if (state?.success && state?.data) {
      localStorage.setItem("kachamaleUid", state.data);
      location.replace("/");
    }
  }, [state]);
  return (
    <form action={signinUserAction}>
      <CustomInput
        label="Email"
        placeholder="Jhon@gmail.com"
        type="email"
        name="email"
        disabled={isPending}
      />
      <CustomInput
        label="Password"
        placeholder="Password"
        type="password"
        name="password"
        disabled={isPending}
      />

      <Link
        className="font-semibold text-main_blue hover:underline text-sm"
        href="/auth/forgot-password"
      >
        Forgot Password
      </Link>

      <CustomeButton
        title={isPending ? "Loading..." : "Login"}
        className="my-7 py-2 w-full"
        disabled={isPending}
      />
    </form>
  );
}
