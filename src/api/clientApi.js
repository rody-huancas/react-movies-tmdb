import axios from "axios";
import { API_KEY } from "../constants/globals-constants";

export const configApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  params: {
    api_key: API_KEY,
  },
});
