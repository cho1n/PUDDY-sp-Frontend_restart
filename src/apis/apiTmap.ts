import axios from "axios";

export const apiTmap = axios.create({
  baseURL: import.meta.env.VITE_TMAP_WALK_ROAD_API_URL,
});
