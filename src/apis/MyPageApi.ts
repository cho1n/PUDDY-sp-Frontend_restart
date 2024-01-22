import { UpdateProfileInputType } from "../types/update";
import { apiClient } from "./ApiClient";

export const getMyPage = () => {
  return apiClient.get(`/api/person/mypage`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};

export const patchProfile = (profile: UpdateProfileInputType) => {
  return apiClient.patch(`/api/person`, JSON.stringify(profile), {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};

export const getUserInfo = () => {
  return apiClient.get(`/api/person`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};

export const patchMainDog = (dogId: number) => {
  return apiClient.patch(`/api/dog/${dogId}/change-main`, null, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};
