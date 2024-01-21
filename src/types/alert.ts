export type AlertListType = {
  matches: AlertProfileType[];
};
export type AlertProfileType = {
  id: number;
  gender: boolean;
  dog: AlertDogType;
};
export type AlertDogType = {
  image: string;
  name: string;
};
