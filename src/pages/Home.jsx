import { CardMovie, Loader } from "../components";
import { useEffect, useState } from "react";
import { useMovie } from "../store/movie.store";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

export const Home = () => {
  const [loader, setLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const movies = useMovie((state) => state.movies);
  const setMovies = useMovie((state) => state.setMovies);

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  const fetchMovies = async () => {
    try {
      setLoader(true);
      await setMovies(currentPage);
    } catch (error) {
      throw error;
    } finally {
      setLoader(false);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 gap-5">
            {movies &&
              movies.map((movie) => (
                <CardMovie key={movie.id} movie={movie} />
              ))}
          </div>
          <div className="w-full flex items-center justify-center gap-5 py-10">
            <button
              className="rounded-full bg-indigo-600/90 p-4"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <TbPlayerTrackNextFilled className="rotate-180" />
            </button>
            <button
              className="rounded-full bg-indigo-600/90 p-4"
              onClick={handleNextPage}
            >
              <TbPlayerTrackNextFilled />
            </button>
          </div>
        </>
      )}
    </>
  );
};
