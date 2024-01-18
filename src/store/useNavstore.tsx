import create from "zustand";
import { persist } from "zustand/middleware";
import { NAV_MODE } from "../constants/footerNav.ts";

interface NavStore {
  navMode: string;
  selectMode: (mode: string) => void;
}

const useNavStore = create(
  persist<NavStore>(
    (set) => ({
      navMode: NAV_MODE.HOME,
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
