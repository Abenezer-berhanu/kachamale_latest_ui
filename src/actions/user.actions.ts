"use server";
import cloudinary from "@/lib/cloudinaryConfig";
import { prisma } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function syncUserToDb() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!user || !userId)
      return { error: true, success: false, message: "Access denied" };

    const existingUser = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (existingUser)
      return { error: true, success: false, message: "User already exists" };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [dbUser, _] = await prisma.$transaction([
      prisma.user.create({
        data: {
          name: `${user.firstName || ""} ${user.lastName || ""}`,
          email: user.emailAddresses[0].emailAddress,
          clerkId: userId,
          isEmailVerified:
            user.emailAddresses[0].verification?.status.toLocaleLowerCase() ==
            "verified"
              ? true
              : false,

          phoneNumber:
            user.phoneNumbers.length > 0 ? String(user.phoneNumbers[0]) : "",
        },
      }),

      prisma.profile.create({
        data: {
          avatarUrl: user.imageUrl || "",
          user: {
            connect: {
              clerkId: userId,
            },
          },
        },
      }),
    ]);

    console.log("User information", dbUser);

    return {
      success: true,
      error: false,
      message: "user successfully registered",
      data: dbUser,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: true,
      message: "something went wrong registering user",
      data: null,
    };
  }
}

export async function getUserFromDb() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user)
      return { success: false, error: true, message: "Access denied" };

    const existUser = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (existUser) return { success: true, error: false, message: existUser };

    if (!existUser)
      return { success: false, error: true, userNotFound: true, message: null };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: true,
      message: "something went wrong please check your connection",
    };
  }
}

export async function getMyProfile() {
  try {
    const { userId } = await auth();

    if (!userId)
      return { success: false, error: true, message: "Access denied" };

    const existUser = await getUserFromDb();

    if (!existUser)
      return { success: false, error: true, message: "User not found" };

    const userInfo = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
      include: {
        profile: true,
      },
    });

    return {
      success: true,
      error: false,
      message: "user successfully found",
      data: userInfo,
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
      success: false,
      message: "something went wrong please check your connection",
    };
  }
}

export async function uploadImage(file: string) {
  try {
    const uploadedImage = await cloudinary.uploader.upload(file, {
      folder: "kachamale",
    });
    return { url: uploadedImage.secure_url, cldId: uploadedImage.public_id };
  } catch (error) {
    console.log("error happend at uploadImage function", error);
    throw new Error("could not upload image");
  }
}

export async function changeProfilePicture(file: string) {
  try {
    //check file existence - done
    // upload the file - done
    // update user profile url

    if (!file) {
      return {
        error: true,
        success: false,
        message: "Something went wrong please check your connection",
      };
    }

    const { userId } = await auth();
    const uploadedImage = await uploadImage(file);

    if (!userId || !uploadedImage) {
      return {
        error: true,
        success: false,
        message: "Something went wrong please check your connection",
      };
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
      include: {
        profile: true,
      },
    });

    if (!currentUser) {
      return {
        error: true,
        success: false,
        message: "User not found",
      };
    }

    const profileId = currentUser?.profile?.id;

    await prisma.profile.update({
      where: {
        id: profileId,
      },
      data: {
        avatarUrl: uploadedImage.url,
      },
    });

    revalidatePath("/ad/profile");
    return {
      success: true,
      error: false,
      message: "Profile updated successfully",
    };
  } catch (error) {
    console.log("error happend at changeProfilePicture function", error);
    return {
      error: true,
      success: false,
      message: "Something went wrong please check your connection",
    };
  }
}

export async function changeProfileBio(bio: string) {
  try {
    // check if bio has value
    // change the bio from the profile

    if (bio.length < 1) {
      return {
        error: true,
        success: false,
        message: "Please enter a bio before submitting",
      };
    } else {
      const { userId } = await auth();

      if (!userId) {
        return {
          error: true,
          success: false,
          message: "Access Denied",
        };
      }

      const currentUser = await prisma.user.findUnique({
        where: {
          clerkId: userId,
        },
        include: {
          profile: true,
        },
      });

      if (!currentUser) {
        return {
          error: true,
          success: false,
          message: "User not found",
        };
      }

      const profileId = currentUser?.profile?.id;

      await prisma.profile.update({
        where: {
          id: profileId,
        },

        data: { bio: bio },
      });

      revalidatePath("/ad/profile");
      return {
        success: true,
        error: false,
        message: "Profile updated successfully",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      error: true,
      success: false,
      message: "Something went wrong please check your connection",
    };
  }
}
