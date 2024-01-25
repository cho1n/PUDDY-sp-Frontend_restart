import create from "zustand";

const useDogIdStore = create((set) => ({
  dogId: null,
  setDogId: (dogId: number) => set({ dogId }),
}));

export default useDogIdStore;
