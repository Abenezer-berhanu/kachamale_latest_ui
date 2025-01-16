"use server";
import cloudinary from "@/lib/cloudinaryConfig";
import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  getCountFromServer,
  getDocs,
  getFirestore,
  limit,
  query,
  setDoc,
  where,
} from "firebase/firestore";
// import { cookies } from "next/headers";
import { v4 as uuid } from "uuid";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createCar(carInfo: any) {
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

async function getTotalDocumentCount(uid: string) {
  const db = getFirestore();
  const carsCollection = collection(db, "cars"); // Replace "cars" with your collection name

  try {
    const carsQuery = query(carsCollection, where("ownerId", "==", uid));
    const snapshot = await getCountFromServer(carsQuery);
    const totalCount = snapshot.data().count; // Get the count from snapshot
    return totalCount;
  } catch (error) {
    console.error("Error fetching document count:", error);
    return 0; // Return 0 in case of an error
  }
}

export async function fetchMyCars(page: number) {
  try {
    // const cookie = await cookies();
    // const uid = cookie.get("kachamaleUid")?.value;
    const uid = "test";
    if (!uid) {
      return {
        success: true,
        error: "Access denied",
      };
    }

    const carsCollection = collection(db, "cars");
    const q = query(
      carsCollection,
      where("ownerId", "==", uid),
      limit(page * 8)
    );
    const totalCars = await getTotalDocumentCount(uid);
    const querySnapshot = await getDocs(q);

    const cars = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Include the document ID
      ...doc.data(), // Spread the document data
    }));

    return { success: true, cars, totalCars: totalCars };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Something went wrong please check you Network",
    };
  }
}
