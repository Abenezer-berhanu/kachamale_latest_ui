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

interface RegistrationFormType {
  fullName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

interface ProfileUpdateFormParamType {
  name?: string;
  email?: string;
  phoneNumber?: string;
  profile?:string;
}

interface UserData {
  createdAt: string;
  email: string;
  isEmail: boolean;
  name: string;
  phoneNumber: string | null;
  profile: {
    url: string;
    id: string;
  };
  role: "user" | "admin";
  uid: string;
  updatedAt: string;
}
