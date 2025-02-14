

/* eslint-disable @typescript-eslint/no-explicit-any */
interface CarType {
  id: number | string;
  slug: string;
  category: string;
  sellerCity: string;
  sellerStreet: string;
  images: string[];
  make: string;
  model: string;
  yearOfManufacture: number;
  color: string;
  interiorColor: string;
  condition: string;
  transmission: string;
  keyFeatures: string[];
  isCarRegistered: boolean;
  body: string;
  fuel: string;
  seats: number;
  numberOfCylinders: number;
  engineSize: string;
  horsePower: number;
  description: string;
  price: number;
  negotiationAvailable: boolean;
  phoneNumber: string;
  payment: string;
}

interface CarInfoType {
  role: string;
  id: string;
  slug: string;
  mileage: number;
  category: string;
  sellerCity: string;
  sellerStreet: string;
  make: string;
  model: string;
  yearOfManufacture: number;
  color: string;
  interiorColor: string;
  condition: string;
  transmission: string;
  keyFeatures: any;
  isCarRegistered: string;
  body: string;
  fuel: string;
  seats: number;
  numberOfCylinders: string;
  engineSize: string;
  horsePower: number;
  description: string;
  price: number;
  negotiationAvailable: boolean;
  phoneNumber: string;
  images: any;
  authorClerkId: string;
}

interface UserProfileType {
  id: string;
  avatarUrl: string;
  bio: string | null;
  location: string | null;
  socialLinks: string | null;
  userUid: string;
}

interface UserType {
  uid: string;
  clerkId: string;
  email: string;
  isEmailVerified: boolean;
  name: string;
  phoneNumber: string;
  role: "USER" | "ADMIN";
  createdAt: string;
  updatedAt: string;
  profile: UserProfile;
}


