export type ChatListType = {
  persons: ChatProfileType[];
};

export type ChatProfileType = {
  id: number;
  personId: number;
  gender: boolean;
  dog: ChatDogType;
};

export type ChatDogType = {
  name: string;
  image: string;
};
