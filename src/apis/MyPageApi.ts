import { apiClient } from "./ApiClient";

export const getMyPage = () => {
  return apiClient.get(`/api/person/mypage`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};
