import { AlertDogType } from "./alert";

export type CommentListType = {
  comments: CommentType[];
};

export type CommentType = {
  person: ProfileType;
  content: string;
  createdAt: string;
  isMine: boolean;
};

export type ProfileType = {
  gender: boolean;
  dog: AlertDogType;
};
