import { create } from "zustand";

interface StoreType {
  isPending: boolean;
  profile: string | null;
  name: string | null;
  phoneNumber: string | null;
  setProfile: (url: string | null) => void;
  setIsPending: (value: boolean) => void;
  setName: (name: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
}

export const useProfileStore = create<StoreType>((set) => ({
  isPending: false,
  profile: null,
  name: null,
  phoneNumber: null,
  setName: (newName: string) => set(() => ({ name: newName })),
  setIsPending: (value: boolean) => set(() => ({ isPending: value })),
  setProfile: (newProfile: string | null) =>
    set(() => ({ profile: newProfile })),
  setPhoneNumber: (newPhoneNumber: string) =>
    set(() => ({ phoneNumber: newPhoneNumber })),
}));
