import { apiClient } from "./ApiClient";

export const getChatList = () => {
  return apiClient.get(`/api/chat`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};
