import { apiClient } from "./ApiClient";

export const GetRecommendWalkRoad = () => {
  return apiClient.get("/api/trail", {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};

export const GetUserLocation = () => {
  return apiClient.get("/api/person", {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};
