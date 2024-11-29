"use client";
import { sendSignInLinkToEmail } from "firebase/auth";
import CustomeButton from "../component/CustomeButton";
import { auth } from "@/lib/firebase";

export default function SigninGoogleAuthButton() {

  const handleEmailLinkAuth = async () => {
    const email = "abenu888@gmail.com";
    const actionCodeSettings = {
      // URL to redirect after sign-in, should be your app's domain
      url: "http://localhost:3000/",
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      alert("Email sent! Please check your inbox.");
      window.localStorage.setItem("emailForSignIn", email);
    } catch (error) {
      console.error("Error sending email link:", error);
    }
  };


  return (
    <CustomeButton
      isGoogle={true}
      title="Continue with google"
      className="my-6 py-3 w-full"
      onClick={handleEmailLinkAuth}
    />
  );
}
