import { useMovie } from "../store/movie.store"
import { CardMovie } from "../components/home/CardMovie"

export const Favorites = () => {
  const movies = useMovie((state) => state.movies);
  const favoriteMovies = useMovie((state) => state.favoriteMovies);

  const favoriteMoviesData = movies.filter((movie) =>
    favoriteMovies.includes(movie.id)
  );

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4">Favorite Movies</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {favoriteMoviesData.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
