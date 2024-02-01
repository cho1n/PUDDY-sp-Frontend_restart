import create from "zustand";

const usePersonIdStore = create((set) => ({
  PersonId: null,
  setPersonId: (PersonId: number) => set({ PersonId }),
}));

export default usePersonIdStore;
