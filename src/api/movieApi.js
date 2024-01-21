import { configApi } from "./clientApi";

export const fetchDataMovies = async () => {
  try {
    const { data } = await configApi(`/popular`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
