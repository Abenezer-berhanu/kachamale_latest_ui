import { create } from "zustand";

interface StoreType {
  uid: string | null;
  setUserUid: (uid: string) => void;
  removeUid: () => void
}

export const useUserStore = create<StoreType>((set) => ({
  uid: null,
  setUserUid: (uid: string) => set(() => ({ uid: uid })),
  removeUid: () => set(() => ({ uid: null })),
}));
