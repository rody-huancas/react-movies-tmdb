import { useParams } from "react-router-dom";
import { searchMovies } from "../api/movieApi";
import { useEffect, useState } from "react";
import { CardMovie, Loader } from "../components";

const SearchMovie = () => {
  const { title } = useParams();

  const [loader, setLoader] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, [title]);

  const fetchMovies = async () => {
    try {
      setLoader(true);
      const response = await searchMovies(title);
      setMovies(response.results);
    } catch (error) {
      throw error;
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          {movies.length === 0 ? (
            <div className="text-center text-red-400 text-2xl uppercase font-bold py-10">
              There are no results for{" "}
              <span className="text-indigo-100/80">{title}</span>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <h1 className="text-center text-2xl font-bold uppercase py-5">
                Results of <span className="text-indigo-500">{title}</span>
              </h1>

              <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 gap-5">
                {movies.map((movie) => (
                  <CardMovie key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SearchMovie;
