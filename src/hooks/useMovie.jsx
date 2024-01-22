import { useContext } from "react";
import MovieContext from "../context/MovieProvider";

const useMovie = () => {
  return useContext(MovieContext);
};

export default useMovie;
