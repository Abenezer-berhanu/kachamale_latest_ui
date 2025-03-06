"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { uploadImage } from "./user.actions";
import { revalidatePath } from "next/cache";

//@ts-expect-error because we don't have type of prevState
export async function createPA(prevState, formData: FormData) {
  try {
    const { userId } = await auth();

    if (!userId)
      return {
        error: true,
        success: false,
        message: "Access denied",
      };

    const { title, image, description, link } = Object.fromEntries(formData);

    if (!title || !image || !description || !link) {
      return {
        error: true,
        success: false,
        message: "All fields are required",
      };
    }

    const uploadedValue = await uploadImage(String(image));

    await prisma.promotionAd.create({
      data: {
        title: String(title),
        img: uploadedValue.url,
        description: String(description),
        link: String(link),
      },
    });

    revalidatePath("/ad/pa");
    return {
      success: true,
      message: "New Promotion Ad successfully created",
      error: false,
    };
  } catch (error) {
    if (error) {
      return {
        success: false,
        error: true,
        message: "Something went wrong please try again",
      };
    }
  }
}

export async function getAllPa() {
  try {
    const { userId } = await auth();
    if (!userId) return;

    const allPa = await prisma.promotionAd.findMany();

    return allPa;
  } catch (error) {
    if (error) {
      return {
        success: false,
        error: true,
        message: "something went wrong please try again",
      };
    }
  }
}