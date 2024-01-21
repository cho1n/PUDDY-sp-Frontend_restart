import { apiClient } from "./ApiClient";

export const getRandomMatch = (pageNum: number) => {
  return apiClient.get(`/api/random?pageNum=${pageNum}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};
export const postmatch = (personId: number) => {
  return apiClient.post(
    `/api/match/${personId}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("accessToken"),
      },
    }
  );
};
export const getMatch = () => {
  return apiClient.get(`/api/match`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};
