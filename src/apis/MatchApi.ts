import { apiClient } from "./ApiClient";

export const getRandomMatch = () => {
  return apiClient.get("/api/random?pageNum=1", {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};
