import { fetchDataMovies } from "../api/movieApi";
import { Loader } from "../components";
import useMovie from "../hooks/useMovie";
import { useEffect, useState } from "react";

export const Home = () => {
  const { loader, changeStateLoader } = useMovie();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovieAll = async () => {
      try {
        changeStateLoader(true);
        const { results } = await fetchDataMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        changeStateLoader(false);
      }
    };

    fetchMovieAll();
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <h1>datos</h1>
        </div>
      )}
    </>
  );
};
