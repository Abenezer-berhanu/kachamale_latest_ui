"use client";
import { useActionState, useEffect } from "react";
import CustomInput from "../component/CustomInput";
import CustomeButton from "../component/CustomeButton";
import { useToast } from "@/hooks/use-toast";
import { registerUser } from "@/actions/authActions";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const { push } = useRouter();
  const [state, registerUserAction, isPending] = useActionState(
    registerUser,
    null
  );
  const { toast } = useToast();

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Registration successfull",
        description: "User Registered successfully please login",
      });
      push("/auth/signin");
    }
    if (!state?.success && state?.error) {
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: state?.error || "Something went wrong please try again",
      });
    }
  }, [state]);

  return (
    <form action={registerUserAction}>
      <CustomInput
        label="Full Name"
        placeholder="John Doe"
        disabled={isPending}
        name="fullName"
      />

      <CustomInput
        label="Email"
        placeholder="Jhon@gmail.com"
        type="email"
        disabled={isPending}
        name="email"
      />

      <CustomInput
        label="Password"
        placeholder="Password"
        type="password"
        disabled={isPending}
        name="password"
      />

      <CustomInput
        label="Confirm Password"
        placeholder="Confirm Password"
        type="password"
        disabled={isPending}
        name="passwordConfirm"
      />

      <CustomeButton
        title={isPending ? "Loading..." : "Register"}
        className="my-7 py-2 w-full"
        disabled={isPending}
      />
    </form>
  );
}
