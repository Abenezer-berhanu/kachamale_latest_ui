"use server";

import cloudinary from "@/lib/cloudinaryConfig";
import { prisma } from "@/lib/prisma";
import { createImages, createKeyFeatures, validateCarData } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

/* eslint-disable @typescript-eslint/no-explicit-any */

export const createCar = async (carInfo: CarInfoType | any) => {
  const { userId } = await auth();
  //TODO:
  // CHECK if all info has been sent to our server action
  // IF error show the error
  // Else upload images
  // and update the car info in the car
  // create car with author of clerk id userId

  if (!userId) {
    return { error: true, success: false, message: "Access denied" };
  }
  try {
    const validationErrors = validateCarData(carInfo);
    if (validationErrors?.error) {
      // TODO: 1
      return { error: true, success: false, message: validationErrors.message };
    } else {
      // TODO: 2
      const uploadedImages = [];

      for (let i = 0; i < carInfo.images.length; i++) {
        const uploadedImageResponse = await cloudinary.uploader.upload(
          carInfo.images[i],
          {
            folder: "kachamale",
          }
        );

        uploadedImages.push({
          url: uploadedImageResponse.secure_url,
          cldId: uploadedImageResponse.public_id,
        });
      }

      // Replace the images field in carInfo with the uploadedImages array
      carInfo.images = uploadedImages;
    }

    const transformedCarInfo = {
      ...carInfo,
      mileage: Number(carInfo.mileage) || 0, // Convert to number
      numberOfCylinders: Number(carInfo.numberOfCylinders) || 0, // Convert to number
    };

    const newCar = await prisma.car.create({
      data: {
        body: transformedCarInfo.body,
        category: transformedCarInfo.category,
        color: transformedCarInfo.color,
        condition: transformedCarInfo.condition,
        description: transformedCarInfo.description,
        engineSize: transformedCarInfo.engineSize,
        fuel: transformedCarInfo.fuel,
        horsePower: transformedCarInfo.horsePower,
        interiorColor: transformedCarInfo.interiorColor,
        isCarRegistered: transformedCarInfo.isCarRegistered,
        make: transformedCarInfo.make,
        mileage: transformedCarInfo.mileage,
        model: transformedCarInfo.model,
        negotiationAvailable: transformedCarInfo.negotiationAvailable,
        numberOfCylinders: transformedCarInfo.numberOfCylinders,
        phoneNumber: transformedCarInfo.phoneNumber,
        price: transformedCarInfo.price,
        role: transformedCarInfo.role,
        seats: transformedCarInfo.seats,
        sellerCity: transformedCarInfo.sellerCity,
        sellerStreet: transformedCarInfo.sellerStreet,
        slug: transformedCarInfo.slug,
        transmission: transformedCarInfo.transmission,
        yearOfManufacture: transformedCarInfo.yearOfManufacture,
        author: {
          connect: {
            clerkId: userId,
          },
        },
      },
    });

    for (const kf of transformedCarInfo.keyFeatures) {
      await createKeyFeatures(kf, newCar.id);
    }

    for (const img of transformedCarInfo.images) {
      await createImages(img, newCar.id);
    }

    revalidatePath("/ad/last-5-ads");
    return {
      success: true,
      error: false,
      message: "Car created successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
      success: false,
      message: "Something went wrong please try again",
    };
  }
};

export const getMyAds = async () => {
  try {
    const { userId } = await auth();

    if (!userId)
      return { success: false, error: true, message: "Access denied" };

    const myAds = await prisma.car.findMany({
      where: {
        author: {
          clerkId: userId,
        },
      },
      select: {
        body: true,
        make: true,
        model: true,
        color: true,
        price: true,
        id: true,
        sellerCity: true,
        sellerStreet: true,
        yearOfManufacture: true,
      },
      take: Number(process.env.QUERY_LIMIT),
    });

    return myAds;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: true,
      message: "Something went wrong please try again",
    };
  }
};

export const getMyLastAds = async () => {
  try {
    const { userId } = await auth();

    if (!userId)
      return { success: false, error: true, message: "Access denied" };

    const myAds = await prisma.car.findMany({
      where: {
        author: {
          clerkId: userId,
        },
      },
      select: {
        body: true,
        make: true,
        model: true,
        color: true,
        price: true,
        id: true,
        sellerCity: true,
        sellerStreet: true,
        yearOfManufacture: true,
      },
      take: Number(process.env.PERSONAL_QUERY_LIMIT),
      orderBy: {
        createdAt: "desc",
      },
    });

    return myAds;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: true,
      message: "Something went wrong please try again",
    };
  }
};

export const getSingleCar = async (carId: string) => {
  try {
    const car = await prisma.car.findUnique({
      where: { id: carId },
      include: {
        keyFeatures: true,
        images: true,
      },
    });

    return car;
  } catch (error) {
    console.log(error);
  }
};

export const updateCarField = async (
  carId: string,
  info: Record<string, any>,
  path: string
) => {
  try {
    // check if the value is truthy
    // update the field using prisma

    // Allowed fields that can have 0 or false as valid values
    const allowedFalsyFields = [
      "horsePower",
      "mileage",
      "negotiationAvailable",
      "numberOfCylinders",
      "price",
      "seats",
      "yearOfManufacture",
    ];

    // Check if any key in info is not in allowedFalsyFields and has a falsy value
    for (const key in info) {
      if (!allowedFalsyFields.includes(key) && !info[key]) {
        return {
          error: true,
          success: false,
          message: "Invalid entry",
        };
      }
    }

    if (!info) {
      return {
        error: true,
        success: false,
        message: "invalid entry",
      };
    }

    const updatedCar = await prisma.car.update({
      where: {
        id: carId,
      },
      data: info,
    });

    if (updatedCar) {
      revalidatePath(path);
      return {
        success: true,
        error: false,
        message: "Car information updated successfully",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      error: true,
      success: false,
      message: "something went wrong please check connection",
    };
  }
};
