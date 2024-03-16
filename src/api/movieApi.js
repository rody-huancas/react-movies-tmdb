import { configApi } from "./clientApi";

export const fetchDataMovies = async (page = 1) => {
  try {
    const { data } = await configApi(`/popular?page=${page}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchDetailMovie = async (id) => {
  try {
    const { data } = await configApi(`/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
