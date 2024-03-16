import axios from "axios";
import { configApi } from "./clientApi";

export const fetchDataMovies = async (page = 1) => {
  try {
    const { data } = await configApi(`/movie/popular?page=${page}`);
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

export const searchMovies = async (query) => {
  try {
    const response = await configApi("/search/movie", {
      params: {
        query,
      },
    });
    const filteredResults = response.data.results.filter(
      (movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.original_title.toLowerCase().includes(query.toLowerCase())
    );
    return { results: filteredResults };
  } catch (error) {
    throw error;
  }
};
