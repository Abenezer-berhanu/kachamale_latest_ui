"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  //   signOut,
} from "firebase/auth";
import { validateRegistrationFormInputValues } from "@/lib/utils";
import { cookies } from "next/headers";

export const fetchUserProfile = async (uid: string) => {
  try {
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);
    return userDoc.data();
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (state: any, formData: FormData) => {
  const {
    email: formDataEmail,
    password: formDataPassword,
    fullName: formDataName,
    passwordConfirm: formDataConfirmPassword,
  } = Object.fromEntries(formData);

  const email = formDataEmail as string;
  const password = formDataPassword as string;
  const fullName = formDataName as string;
  const passwordConfirm = formDataConfirmPassword as string;

  const inputValues = {
    email,
    password,
    fullName,
    passwordConfirm,
  };

  //validate input values from registration form

  try {
    await validateRegistrationFormInputValues(inputValues);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      name: fullName,
      profile:
        user.photoURL ||
        "https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid",
      role: "user",
      phoneNumber: user.phoneNumber,
      uid: user.uid,
      isEmailVerified: false,
    });

    return { success: true, data: String(user) };
  } catch (error) {
    console.log("error happened at trying to create user", error);
    const errorText = String(error);
    if (errorText.includes("email-already-in-use")) {
      return {
        success: false,
        data: null,
        error: "email already in use or registered",
      };
    }
    if (errorText.includes("auth/weak-password")) {
      return {
        success: false,
        data: null,
        error: "Password should be at least 6 characters",
      };
    }

    return {
      success: false,
      data: null,
      //@ts-expect-error because the error might not be there
      error: error?.message || "Registration failed please try again",
    };
  }
};

export const signInUser = async (state: any, formData: FormData) => {
  const { email: formDataEmail, password: formDataPassword } =
    Object.fromEntries(formData);
  const email = formDataEmail as string;
  const password = formDataPassword as string;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const uid = userCredential.user.uid;
    const userInfo = await fetchUserProfile(uid);
    const cookieStore = await cookies();
    cookieStore.set("kachamaleUid", String(uid));
    return { success: true, data: String(uid + ",sep" + userInfo?.profile) };
  } catch (error: any) {
    const textError = String(error);
    if (textError.includes("auth/invalid-credential")) {
      return { success: false, error: "Incorrect email or password" };
    }
    return { success: false, error: "An error occurred. Please try again." };
  }
};
