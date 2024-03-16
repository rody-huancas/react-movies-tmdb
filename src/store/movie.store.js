import { devtools, persist } from "zustand/middleware";
import { create } from "zustand";
import { fetchDataMovies } from "../api/movieApi";

const storeMovie = (set) => ({
  movies: [],
  setMovies: async () => {
    try {
      const response = await fetchDataMovies();
      set({ movies: response.results });
    } catch (error) {
      throw error;
    }
  },
});

export const useMovie = create()(
  devtools(storeMovie)
);
