"use server";

import { prisma } from "@/lib/prisma";
import { uploadImage } from "./user.actions";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

export async function createChpc(data: ChpcType) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return;
    }

    if (!data.description || !data.title || !data.img)
      return {
        error: true,
        success: false,
        message: "Except Link all fields are required",
      };

    const chpcCount = await prisma.homePageCarousel.count();

    if (chpcCount > 0) {
      return {
        error: true,
        success: false,
        message:
          "Home page carousel has reached please delete before adding new one",
      };
    }

    //upload img to coudinary
    const uploadedImage = await uploadImage(data.img);

    if (uploadedImage) {
      await prisma.homePageCarousel.create({
        data: {
          description: data.description,
          title: data.title,
          image: uploadedImage.url,
          link: data.link || "",
        },
      });

      revalidatePath("/hpc");

      return {
        success: true,
        error: false,
        message: "New Home page carousel created",
      };
    } else {
      return {
        success: false,
        error: true,
        message: "something went wrong please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      error: true,
      success: false,
      message: "something went wrong please try again",
    };
  }
}

export async function getAllHpc() {
  try {
    const { userId } = await auth();
    if (!userId) return;

    const allHpc = await prisma.homePageCarousel.findMany();

    return allHpc;
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

export async function deleteHpc(formData: FormData) {
  try {
    const id = formData.get("id") as string;

    if (id) {
      await prisma.homePageCarousel.delete({ where: { id } });
      revalidatePath("/ad/hpc");
      return;
    }
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
}


//@ts-expect-error because _ doesn't have any type but should be specified to get form state
export async function updateHpc(_, formData: FormData) {
  try {
    const { userId } = await auth();
    if (!userId)
      return { success: false, error: true, message: "Access denied" };

    const id = formData.get("id");
    const title = formData.get("title")?.toString().trim();
    const description = formData.get("description")?.toString().trim();
    const link = formData.get("link")?.toString().trim();

    if (!title && !description && !link) {
      return {
        error: true,
        success: false,
        message: "At least one field must be specified",
      };
    }

    const updatedHpc = {
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      ...(link ? { link } : {}),
    };

    if (!id)
      return { success: false, error: true, message: "Something went wrong" };

    await prisma.homePageCarousel.update({
      where: { id: String(id) },
      data: updatedHpc,
    });

    revalidatePath('/ad/hpc')

    return { success: true, error: false, message: "successfully updated hpc" };
  } catch (error) {
    console.log(error);
    return { error: true, success: false, message: "failed to update hpc" };
  }
}
