import { Link } from "react-router-dom";
import { URL_IMAGE } from "../../constants/globals-constants";
import { RiEyeLine } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { useMovie } from "../../store/movie.store";
import { MdFavorite } from "react-icons/md";

export const CardMovie = ({ movie }) => {
  const { backdrop_path, id, original_title, title } = movie;
  const { addToFavorites, removeFromFavorites, favoriteMovies } = useMovie();

  const isFavorite = favoriteMovies.includes(id);

  const handleToggleFavorites = () => {
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };

  return (
    <div className="relative overflow-hidden card_item flex w-full max-w-xs flex-col ">
      <div className="bg-primary p-7 rounded-xl shadow-lg flex flex-col justify-between items-center gap-5">
        <div className="w-full h-[300px] overflow-hidden">
          <img
            src={`${URL_IMAGE}${backdrop_path}`}
            alt={original_title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col gap-3 items-center">
          <h3 className="text-lg font-medium text-center">{title}</h3>
          <button
            onClick={handleToggleFavorites} // Utiliza la función de manejo de favoritos para agregar/quitar
            className={`w-full bg-indigo-600 flex items-center justify-center gap-3 py-2 ${
              isFavorite ? "bg-orange-600/80" : ""
            }`}
          >
            {isFavorite ? (
              <>
                <MdFavorite /> Remove from favorites
              </>
            ) : (
              <>
                <GrFavorite /> Add to favorites
              </>
            )}
          </button>
        </div>
      </div>

      <Link
        to={`/datail/${id}`}
        className="bg-indigo-600 w-12 h-12 flex items-center justify-center absolute top-10 -right-12 text-white rounded-l-xl view_movie transition-all duration-300 ease "
      >
        <RiEyeLine />
      </Link>
    </div>
  );
};
