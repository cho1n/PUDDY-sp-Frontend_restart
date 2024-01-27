import { PostInputType } from "../types/community";
import { apiClient } from "./ApiClient";

export const postCreatePost = (postInputType: PostInputType) => {
  return apiClient.post("api/post", JSON.stringify(postInputType), {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};

export const postLikePost = (postId: number) => {
  return apiClient.post(
    `/api/match/${postId}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("accessToken"),
      },
    }
  );
};

export const getPostList = () => {
  return apiClient.get("api/post", {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};

export const getPostDetail = (postId: number) => {
  return apiClient.get(`/api/match/${postId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};
