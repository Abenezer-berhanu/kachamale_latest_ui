import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const emailSchema = z.string().email();

const validateEmail = async (email: string) => {
  try {
    emailSchema.parse(email); // Will throw an error if invalid
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const hasLastName = (fullName: string) => {
  // Trim the input to remove extra spaces
  const trimmedName = fullName.trim();

  // Split the name by spaces
  const nameParts = trimmedName.split(" ");

  // Check if there are at least two parts
  return nameParts.length > 1;
};

export async function validateRegistrationFormInputValues(
  inputValues: RegistrationFormType
) {
  if (
    !inputValues.fullName ||
    !inputValues.email ||
    !inputValues.password ||
    !inputValues.passwordConfirm
  ) {
    throw new Error("All fields are required");
  }
  if (!hasLastName(inputValues.fullName)) {
    throw new Error("Last name is required");
  }

  const validEmail = await validateEmail(inputValues.email);
  if (!validEmail) {
    throw new Error("Invalid email");
  }

  if (inputValues.password != inputValues.passwordConfirm) {
    throw new Error("Password and confirm password must be the same");
  }
}

export function generateSlug(
  name: string,
  year: string | number,
) {
  // Convert the name to lowercase and replace spaces or special characters with hyphens
  const formattedName = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  // Return the formatted slug
  return `${formattedName}-${year}`;
}
