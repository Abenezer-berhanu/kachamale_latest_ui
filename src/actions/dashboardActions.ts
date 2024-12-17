"use server"
import cloudinary from "@/lib/cloudinaryConfig";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createCar (carInfo:any) {
  try {
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
        id: uploadedImageResponse.public_id,
      });
    }

    // Replace the images field in carInfo with the uploadedImages array
    carInfo.images = uploadedImages;

    // Save the updated carInfo to Firestore
    await setDoc(doc(db, "cars", uuid()), carInfo);

    return { success: true, message: "Car created successfully" };

  } catch (error) {
    console.error("Error occurred while registering the car: " + error);
  }
}
