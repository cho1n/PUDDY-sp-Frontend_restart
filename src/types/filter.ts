import { DogTag } from "./sign";

export type FilterInputType = {
  type: string;
  neuter: boolean;
  tags: DogTag[];
};
