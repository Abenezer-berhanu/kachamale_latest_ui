import { create } from "zustand";

interface AdPostStoreType {
  id: number | string | null;
  slug: string | null;
  category: string | null;
  sellerCity: string | null;
  sellerStreet: string | null;
  images: string[] | null;
  make: string | null;
  model: string | null;
  yearOfManufacture: number | null;
  color: string | null;
  interiorColor: string | null;
  condition: string | null;
  transmission: string | null;
  keyFeatures: string[] | null;
  isCarRegistered: boolean;
  body: string | null;
  fuel: string | null;
  seats: number;
  numberOfCylinders: number | null;
  engineSize: string | null;
  horsePower: number | null;
  description: string | null;
  price: number | null;
  ownerId: string | null;
  negotiationAvailable: boolean;
  phoneNumber: string | null;
  payment: string | null;


   // Methods to update fields
   setId: (id: number | string | null) => void;
   setSlug: (slug: string | null) => void;
   setCategory: (category: string | null) => void;
   setSellerCity: (city: string | null) => void;
   setSellerStreet: (street: string | null) => void;
   setImages: (images: string[] | null) => void;
   setMake: (make: string | null) => void;
   setModel: (model: string | null) => void;
   setYearOfManufacture: (year: number | null) => void;
   setColor: (color: string | null) => void;
   setInteriorColor: (color: string | null) => void;
   setCondition: (condition: string | null) => void;
   setTransmission: (transmission: string | null) => void;
   setKeyFeatures: (features: string[] | null) => void;
   setIsCarRegistered: (isRegistered: boolean) => void;
   setBody: (body: string | null) => void;
   setFuel: (fuel: string | null) => void;
   setSeats: (seats: number) => void;
   setNumberOfCylinders: (cylinders: number | null) => void;
   setEngineSize: (size: string | null) => void;
   setHorsePower: (hp: number | null) => void;
   setDescription: (description: string | null) => void;
   setPrice: (price: number | null) => void;
   setOwnerId: (id: string | null) => void;
   setNegotiationAvailable: (available: boolean) => void;
   setPhoneNumber: (phone: string | null) => void;
   setPayment: (payment: string | null) => void;
}

export const useAdPostStore = create<AdPostStoreType>((set) => ({
 
}))