import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { prisma } from "./prisma";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateSlug(name: string, year: string | number) {
  // Convert the name to lowercase and replace spaces or special characters with hyphens
  const formattedName = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  // Return the formatted slug
  return `${formattedName}-${year}`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validateCarData(carInfo: any) {
  const requiredFields = [
    "body",
    "category",
    "color",
    "condition",
    "description",
    "engineSize",
    "fuel",
    "horsePower",
    "interiorColor",
    "isCarRegistered",
    "make",
    "mileage",
    "model",
    "negotiationAvailable",
    "numberOfCylinders",
    "phoneNumber",
    "price",
    "role",
    "seats",
    "sellerCity",
    "sellerStreet",
    "slug",
    "transmission",
    "yearOfManufacture",
  ];

  for (const field of requiredFields) {
    if (carInfo[field as keyof typeof carInfo] === undefined) {
      return {
        success: false,
        error: true,
        message: `Missing required field: ${field}`,
      };
    }
  }
}

export const createKeyFeatures = async (
  keyFeatureInfo: { label: string; value: string },
  carId: string
) => {
  try {
    const keyFeature = await prisma.keyFeature.create({
      data: {
        label: keyFeatureInfo.label,
        value: keyFeatureInfo.value,
        Car: {
          connect: {
            id: carId,
          },
        },
      },
    });

    return keyFeature;
  } catch (error) {
    console.log("error happend at creating keyFeature helper function", error);
    throw new Error("Error creating keyFeature helper function");
  }
};

export const createImages = async (
  imageInfo: { cldId: string; url: string },
  carId: string
) => {
  try {
    const newImage = await prisma.image.create({
      data: {
        url: imageInfo.url,
        cldId: imageInfo.cldId,
        Car: {
          connect: {
            id: carId,
          },
        },
      },
    });

    return newImage;
  } catch (error) {
    console.log("error happend at creating keyFeature helper function", error);
    throw new Error("Error creating keyFeature helper function");
  }
};
