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

export type ChatDetailType = {
  id: number;
  currentUserId: number;
  person: ChatPersonType | null;
  messages: ChatMessageType[];
};

export type ChatPersonType = {
  gender: boolean;
  dog: ChatDogType;
};

export type ChatMessageType = {
  id: number;
  content: string;
  senderId: number;
  createdAt: string;
};
