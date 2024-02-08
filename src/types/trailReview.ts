import { ProfileType } from "./comment";

export interface TrailReviewListType {
  count: number;
  trailReviews: TrailReviewType[];
}

export interface TrailReviewType {
  id: number;
  reviewer: ProfileType;
  star: number;
  content: string;
  createdAt: string;
  isMine: boolean;
}

export interface TrailReviewInputType {
  content: string;
  star: number;
}
