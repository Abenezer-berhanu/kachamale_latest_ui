/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface AdUpdateStoreType {
  step: number;
  areYouOwnerOrBroker: null | "owner" | "broker" ;   // role
  id: number | string | null;
  slug: string | null;
  category: string | null;
  sellerCity: string | null;
  sellerStreet: string | null;
  images: string[] | [];
  make: string | null;
  model: string | null;
  yearOfManufacture: number | null;
  color: string | null;
  interiorColor: string | null;
  condition: string | null;
  transmission: string | null;
  keyFeatures: string[] | [];
  isCarRegistered: "yes" | "no" ;
  body: string | null;
  fuel: string | null;
  seats: number;
  numberOfCylinders: number | null;
  engineSize: string | null;
  horsePower: number | null;
  description: string | null;
  mileage: number;
  price: number | null;
  ownerId: string | null;
  negotiationAvailable: boolean;
  phoneNumber: string | null;

  // Methods to update fields
  setStep: (stepValue: number) => void;
  setAreYouOwnerOrBroker: (ownerOrBrokerValue: "owner" | "broker") => void
  setMileAge: (mileAgeValue: number) => void;
//   setId: (id: number | string) => void;
  setSlug: (slug: string | null) => void;
  setCategory: (category: string | null) => void;
  setSellerCity: (city: string | null) => void;
  setSellerStreet: (street: string | null) => void;
  setImages: (images: any) => void;
  removeImage: (image:string) => void;
  setMake: (make: string | null) => void;
  setModel: (model: string | null) => void;
  setYearOfManufacture: (year: number | null) => void;
  setColor: (color: string | null) => void;
  setInteriorColor: (color: string | null) => void;
  setCondition: (condition: string | null) => void;
  setTransmission: (transmission: string | null) => void;
  setKeyFeatures: (features: string[] | []) => void;
  setIsCarRegistered: (isRegistered: "yes" | "no") => void;
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
  resetStore: () => void
}

export const useAdUpdateStore = create<AdUpdateStoreType>((set) => ({
  step: 1,
  areYouOwnerOrBroker: null,
  id: uuidv4(),
  slug: null,
  mileage: 0,
  category: "car",
  sellerCity: null,
  sellerStreet: null,
  images: [],
  make: null,
  model: null,
  yearOfManufacture: null,
  color: null,
  interiorColor: null,
  condition: null,
  transmission: null,
  keyFeatures: [],
  isCarRegistered: "yes",
  body: null,
  fuel: null,
  seats: 5,
  numberOfCylinders: null,
  engineSize: null,
  horsePower: null,
  description: null,
  price: null,
  ownerId: null,
  negotiationAvailable: false,
  phoneNumber: null,
//   setId: (newId: string | number) => set({ id: newId }),
  setAreYouOwnerOrBroker: (value:"owner" | "broker") => set({ areYouOwnerOrBroker: value}),
  setMileAge: (newMileAge: number) => set({mileage: newMileAge}),
  setStep: (stepValue) => set({ step: stepValue }),
  setSlug: (newSlug: string | null) => set({ slug: newSlug }),
  setCategory: (newCategory: string | null) => set({ category: newCategory }),
  setSellerCity: (newCity: string | null) => set({ sellerCity: newCity }),
  setSellerStreet: (newStreet: string | null) =>
    set({ sellerStreet: newStreet }),
  setImages: (image: string) => {
    set((state: any) => ({
      images: [image, ...state.images],
    }));
  },
  removeImage: (imgParam: string) => {
    set((state: any) => ({
      images: state.images.filter((img: string) => img !== imgParam),
    }));
  },
  setMake: (newMake: string | null) => set({ make: newMake }),
  setModel: (newModel: string | null) => set({ model: newModel }),
  setYearOfManufacture: (newYear: number | null) =>
    set({ yearOfManufacture: newYear }),
  setColor: (newColor: string | null) => set({ color: newColor }),
  setInteriorColor: (newInteriorColor: string | null) =>
    set({ interiorColor: newInteriorColor }),
  setCondition: (newCondition: string | null) =>
    set({ condition: newCondition }),
  setTransmission: (newTransmission: string | null) =>
    set({ transmission: newTransmission }),
  setKeyFeatures: (features: string[] | []) => set({ keyFeatures: features }),
  setIsCarRegistered: (isRegistered: "yes" | "no") =>
    set({ isCarRegistered: isRegistered }),
  setBody: (newBody: string | null) => set({ body: newBody }),
  setFuel: (newFuel: string | null) => set({ fuel: newFuel }),
  setSeats: (newSeats: number) => set({ seats: newSeats }),
  setNumberOfCylinders: (cylinders: number | null) =>
    set({ numberOfCylinders: cylinders }),
  setEngineSize: (newSize: string | null) => set({ engineSize: newSize }),
  setHorsePower: (hp: number | null) => set({ horsePower: hp }),
  setDescription: (newDescription: string | null) =>
    set({ description: newDescription }),
  setPrice: (newPrice: number | null) => set({ price: newPrice }),
  setOwnerId: (id: string | null) => set({ ownerId: id }),
  setNegotiationAvailable: (available: boolean) =>
    set({ negotiationAvailable: available }),
  setPhoneNumber: (phone: string | null) => set({ phoneNumber: phone }),
  resetStore: () =>
    set({
      step: 1,
      areYouOwnerOrBroker: null,
      id: uuidv4(),
      slug: null,
      mileage: 0,
      category: "car",
      sellerCity: null,
      sellerStreet: null,
      images: [],
      make: null,
      model: null,
      yearOfManufacture: null,
      color: null,
      interiorColor: null,
      condition: null,
      transmission: null,
      keyFeatures: [],
      isCarRegistered: "yes",
      body: null,
      fuel: null,
      seats: 5,
      numberOfCylinders: null,
      engineSize: null,
      horsePower: null,
      description: null,
      price: null,
      ownerId: null,
      negotiationAvailable: false,
      phoneNumber: null,
    }),
}));