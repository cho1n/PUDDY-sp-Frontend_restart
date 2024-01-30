import create from "zustand";
import { MatchListType } from "../types/match";

interface MatchListStore {
  matchListValue: MatchListType;
  setMatchListValue: (matchList: MatchListType) => void;
}

const useMatchListStore = create<MatchListStore>((set) => ({
  matchListValue: { pets: [] } as MatchListType,
  setMatchListValue: (matchList: MatchListType) =>
    set({ matchListValue: matchList }),
}));

export default useMatchListStore;
