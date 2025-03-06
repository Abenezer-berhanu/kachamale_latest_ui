import { create } from "zustand";

interface ChpcStoreType {
  image: any;
  loading: boolean;

  //actions
  setImage(image: string): void;
  setLoading(loading: boolean): void;
}

export const useChpcStore = create<ChpcStoreType>((set) => ({
  image: null,
  loading: false,

  setImage: (image: string) => set({ image: image }),
  setLoading: (loading: boolean) => set({ loading: loading }),
}));
