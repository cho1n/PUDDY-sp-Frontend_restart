export type ChatListType = {
  chats: ChatProfileType[];
};

export type ChatProfileType = {
  id: number;
  person: ChatPersonType | null;
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
  personId: number;
  gender: boolean;
  dog: ChatDogType;
};

export type ChatMessageType = {
  id: number;
  chatId: number;
  content: string;
  senderId: number;
  createdAt: string;
};
