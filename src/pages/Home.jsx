import { fetchDataMovies } from "../api/movieApi";
import { CardMovie, Loader } from "../components";
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {loader ? (
        <div className="py-52">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {movies &&
            movies.map((movie) => (
              <>
                <CardMovie key={movie.id} movie={movie} />
              </>
            ))}
        </div>
      )}
    </>
  );
};
