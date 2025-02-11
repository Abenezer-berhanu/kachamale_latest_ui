"use server";
import { prisma } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

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
