import { AlertDogType } from "./alert";
import { CommentType } from "./comment";

export type PostInputType = {
  title: string;
  content: string;
};

export type PostListType = {
  count: number;
  posts: PostType[];
};

export type PostDetailType = {
  id: number;
  person: ProfileType;
  title: string;
  content: string;
  createdAt: string;
  isLike: boolean;
  likeCount: number;
  comments: CommentType[];
  isMine: boolean;
};

export type PostType = {
  id: number;
  person: ProfileType;
  title: string;
  content: string;
  createdAt: string;
  likeCount: number;
  commentCount: number;
  isMine: boolean;
};

export type ProfileType = {
  gender: boolean;
  dog: AlertDogType;
};
