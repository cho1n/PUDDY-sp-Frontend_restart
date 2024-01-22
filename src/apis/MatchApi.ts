import { apiClient } from "./ApiClient";

export const getRandomMatch = () => {
  return apiClient.get(`/api/random`, {
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
