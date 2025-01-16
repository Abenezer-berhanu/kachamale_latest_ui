"use server";
import cloudinary from "@/lib/cloudinaryConfig";
import { db } from "@/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";
// import { cookies } from "next/headers";
import { fetchUserProfile } from "./authActions";

export const updateUserProfile = async (user: ProfileUpdateFormParamType) => {
  try {
    // const cookie = await cookies();
    // const uid = cookie.get("kachamaleUid")?.value;
    const uid = "test";
    if (!uid) {
      return { success: false, data: null, error: "Access denied" };
    }

    const existedUserInfo = await fetchUserProfile();

    const profileId = existedUserInfo?.profile.id;

    await cloudinary.uploader.destroy(profileId);

    if (user?.profile) {
      //upload the image to cloudinary
      const uploadedImageResponse = await cloudinary.uploader.upload(
        user.profile,
        {
          folder: "kachamale",
        }
      );

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { profile, ...restUser } = user;

      const newUserInfo = {
        profile: {
          url: uploadedImageResponse.secure_url,
          id: uploadedImageResponse.public_id,
        },
        ...restUser,
      };

      const userDocRef = doc(db, "users", String(uid));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await updateDoc(userDocRef, newUserInfo as any);
      return { success: true, data: true };
    }

    const userDocRef = doc(db, "users", String(uid));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await updateDoc(userDocRef, user as any);
    return { success: true, data: true };
  } catch (error) {
    console.log(error);
    return { success: false, data: null, error: "Something went wrong" };
  }
};
