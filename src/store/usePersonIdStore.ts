import create from "zustand";
interface PersonIdStore {
  PersonId: number;
  setPersonId: (personId: number) => void;
}

const usePersonIdStore = create<PersonIdStore>((set) => ({
  PersonId: 0 as number,
  setPersonId: (personId: number) => set({ PersonId: personId }),
}));

export default usePersonIdStore;
