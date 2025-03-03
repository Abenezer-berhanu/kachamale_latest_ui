"use server";
import { v4 as uuidv4 } from "uuid";
import cloudinary from "@/lib/cloudinaryConfig";
import { prisma } from "@/lib/prisma";
import { createImages, createKeyFeatures, validateCarData } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createCar = async (carInfo: CarInfoType | any) => {
  const { userId } = await auth();

  if (!userId) {
    return { error: true, success: false, message: "Access denied" };
  }

  try {
    const validationErrors = validateCarData(carInfo);
    if (validationErrors?.error) {
      return { error: true, success: false, message: validationErrors.message };
    }

    if (
      !carInfo.images ||
      !Array.isArray(carInfo.images) ||
      carInfo.images.length === 0
    ) {
      return { error: true, success: false, message: "No images provided" };
    }

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

    carInfo.images = uploadedImages;
    const slug = uuidv4();

    const transformedCarInfo = {
      ...carInfo,
      mileage: Number(carInfo.mileage) || 0,
      numberOfCylinders: Number(carInfo.numberOfCylinders) || 0,
      horsePower: Number(carInfo.horsePower),
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
        seats: Number(transformedCarInfo.seats),
        sellerCity: transformedCarInfo.sellerCity,
        sellerStreet: transformedCarInfo.sellerStreet,
        slug: slug,
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
    console.error("Error creating car:", error);
    return {
      error: true,
      success: false,
      message: "Something went wrong, please try again",
    };
  }
};

export const handleDeleteCarClick = async (formData: FormData) => {
  const carId = formData.get("carId") as string;
  try {
    const { userId } = await auth();

    if (!userId) {
      return;
    }

    const deletedCar = await prisma.car.delete({
      where: {
        id: carId,
      },
    });

    if (deletedCar) {
      revalidatePath("/ad/last-5-ads");
      revalidatePath("/ad/posts");
    }
  } catch (error) {
    console.log("handleDeleteCarClick Action in car action file", error);
  }
};

export const getMyAds = async (pageNumber: number) => {
  try {
    const { userId } = await auth();

    if (!userId)
      return { success: false, error: true, message: "Access denied" };

    const takeAmount = Number(process.env.QUERY_LIMIT) || 10; // Default limit
    const totalCars = await prisma.car.count({
      where: {
        author: {
          clerkId: userId,
        },
      },
    });
    const totalPages = Math.ceil(totalCars / takeAmount);
    const skipAmount = (pageNumber - 1) * takeAmount;

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
      skip: skipAmount,
      take: takeAmount,
    });

    return { myAds, totalPages };
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
      take: Number(process.env.PERSONAL_QUERY_LIMIT || 5),
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
    console.log(info);
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
      message: "something went wrong please try again",
    };
  }
};

export const getCarsForHomePage = async (pageNumber: number) => {
  try {
    const takeAmount = Number(process.env.QUERY_LIMIT) || 10; // Default limit
    const totalCars = await prisma.car.count();
    const totalPages = Math.ceil(totalCars / takeAmount);
    const skipAmount = (pageNumber - 1) * takeAmount;

    const cars = await prisma.car.findMany({
      include: { images: true },
      skip: skipAmount,
      take: takeAmount,
    });

    return { cars, totalPages };
  } catch (error) {
    console.error("Error fetching cars:", error);
    return { error: true, message: "Something went wrong, try again" };
  }
};

export const getSingleCarBySlug = async (slug: string) => {
  try {
    const car = await prisma.car.findUnique({
      where: { slug: slug },
      include: {
        keyFeatures: true,
        images: true,
        author: {
          include: {
            profile: true,
          },
        },
        _count: {
          select: {
            keyFeatures: true,
          },
        },
      },
    });

    return car;
  } catch (error) {
    console.log(error);
  }
};

export async function getFilteredCars(filters: any) {
  try {
    const where: any = {};

    if (filters.q) {
      where.OR = [
        { slug: { contains: filters.q, mode: "insensitive" } },
        { description: { contains: filters.q, mode: "insensitive" } },
        {
          keyFeatures: {
            some: { value: { contains: filters.q, mode: "insensitive" } },
          },
        },
      ];
    }

    // Map frontend params to DB fields
    if (filters.bodyType) {
      where.body = { contains: filters.bodyType, mode: "insensitive" };
    }
    if (filters.condition) {
      where.condition = { contains: filters.condition, mode: "insensitive" };
    }
    if (filters.fuel) {
      where.fuel = { contains: filters.fuel, mode: "insensitive" };
    }
    if (filters.make) {
      where.make = { contains: filters.make, mode: "insensitive" };
    }
    if (filters.model) {
      where.model = { contains: filters.model, mode: "insensitive" };
    }
    if (filters.transmission) {
      where.transmission = {
        contains: filters.transmission,
        mode: "insensitive",
      };
    }

    // Capacity Filtering
    if (filters.capacity) {
      if (filters.capacity == "2 to 5 passenger") {
        where.seats = { lte: 5 };
      } else if (filters.capacity == "6+ passenger") {
        where.seats = { gte: 6 };
      } else {
        return {
          error: true,
          success: false,
          message: "Invalid capacity value",
        };
      }
    }

    // Year of Manufacture Filtering
    if (filters.yearOfManufacture) {
      const years = filters.yearOfManufacture.split(" to ").map(Number);
      if (years.length === 2 && !isNaN(years[0]) && !isNaN(years[1])) {
        where.yearOfManufacture = { gte: years[0], lte: years[1] };
      } else {
        return { error: true, success: false, message: "Invalid year format" };
      }
    }

    // Price Filtering
    if (filters.price) {
      const price = Number(filters.price);
      if (!isNaN(price) && price > 0) {
        where.price = { lte: price };
      } else {
        return { error: true, success: false, message: "Invalid price value" };
      }
    }

    // Fetch results from Prisma
    const cars = await prisma.car.findMany({
      where,
      include: { images: true, keyFeatures: true },
    });

    return {
      error: false,
      success: true,
      message: "Successfully filtered",
      cars: cars,
    };
  } catch (error) {
    console.error("Error fetching cars:", error);
    return {
      error: true,
      success: false,
      message: "An error occurred while fetching cars",
    };
  }
}

export async function getMaxPrice() {
  try {
    const maxPrice = await prisma.car.aggregate({
      _max: {
        price: true,
      },
    });

    return maxPrice;
  } catch (error) {
    console.log(error);
  }
}

export async function getMinPrice() {
  try {
    const minPrice = await prisma.car.aggregate({
      _min: {
        price: true,
      },
    });

    return minPrice;
  } catch (error) {
    console.log(error);
  }
}

export async function incrementCarViewCount(carId: string) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return { error: true, success: false, message: "Access denied" };
    }

    //check if the data has not saved or seen yet with this person
    const carSeenCount = await prisma.carSeenCount.findFirst({
      where: {
        carId: carId,
        userId: userId,
      },
    });

    if (!carSeenCount) {
      await prisma.carSeenCount.create({
        data: {
          carId: carId,
          userId: userId,
        },
      });
    }

    return;
  } catch (error) {
    console.log(error);
    return {
      error: true,
      success: false,
      message: "Something went wrong please check your connection",
    };
  }
}
