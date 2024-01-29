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
    `/api/post/${postId}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("accessToken"),
      },
    }
  );
};

export const getPostList = (pageNum: number) => {
  return apiClient.get("api/post", {
    params: {
      pageNum: pageNum,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};

export const getPostDetail = (postId: number) => {
  return apiClient.get(`/api/post/${postId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};
