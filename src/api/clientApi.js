import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const configApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  params: {
    api_key: API_KEY,
  },
});

// export const configApiImage = axios.create({
//   baseURL: `${import.meta.env.VITE_API_IMAGE}`,
// });
