import { DogTag } from "./sign";
export type MatchListType = {
  pets: MatchType[];
};

export type MatchType = {
  id: number;
  login: string;
  gender: boolean;
  age: number;
  mainAddress: string;
  dog: MatchDogType;
};

export type MatchDogType = {
  name: string;
  gender: boolean;
  image: string;
  type: string;
  age: number;
  tags: DogTag[];
};
