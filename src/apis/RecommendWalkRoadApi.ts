import { apiClient } from "./ApiClient";

export const GetRecommendWalkRoad = () => {
  return apiClient.get("/api/trail", {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};
