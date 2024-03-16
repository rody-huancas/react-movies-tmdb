import { CardMovie, Loader } from "../components";
import { useEffect, useState } from "react";
import { useMovie } from "../store/movie.store";

export const Home = () => {
  const [loader, setLoader] = useState(false);
  const movies = useMovie((state) => state.movies);
  const setMovies = useMovie((state) => state.setMovies);

  useEffect(() => {
    const fetchMovieAll = async () => {
      try {
        setLoader(true);
        await setMovies();
      } catch (error) {
        throw error;
      } finally {
        setLoader(false);
      }
    };
    fetchMovieAll();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 gap-5">
          {movies &&
            movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
        </div>
      )}
    </>
  );
};
