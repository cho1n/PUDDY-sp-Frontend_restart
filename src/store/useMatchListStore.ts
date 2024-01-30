import create from "zustand";
import { MatchListType } from "../types/match";

const useMatchListStore = create((set) => ({
  matchListValue: { pets: [] } as MatchListType,
  setMatchListValue: (matchList: MatchListType) =>
    set({ matchListValue: matchList }),
}));

export default useMatchListStore;
