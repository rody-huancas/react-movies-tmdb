import { devtools, persist } from "zustand/middleware";
import { create } from "zustand";
import { fetchDataMovies } from "../api/movieApi";

const storeMovie = (set) => ({
  movies: [],
  favoriteMovies: [],

  addToFavorites: (id) => {
    set((state) => ({
      favoriteMovies: [...state.favoriteMovies, id],
    }));
  },

  removeFromFavorites: (id) => {
    set((state) => ({
      favoriteMovies: state.favoriteMovies.filter((movieId) => movieId !== id),
    }));
  },

  setMovies: async () => {
    try {
      const response = await fetchDataMovies();
      set({ movies: response.results });
    } catch (error) {
      throw error;
    }
  },
});

export const useMovie = create(persist(devtools(storeMovie), { name: "movie-storage" }));
