import create from "zustand";
import { persist } from "zustand/middleware";

interface NavStore {
  navMode: string;
  selectMode: (mode: string) => void;
}

const useNavStore = create(
  persist<NavStore>(
    (set) => ({
      navMode: "0",
      selectMode: (mode: string) => {
        set({ navMode: mode });
      },
    }),
    {
      name: "navMode",
    },
  ),
);

export default useNavStore;
