import { Link } from "react-router-dom";
import { URL_IMAGE } from "../../constants/globals-constants";
// icons
import { RiEyeLine } from "react-icons/ri";

export const CardMovie = ({ movie }) => {
  const { backdrop_path, id, original_title, title } = movie;

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
        <div>
          <h3>{title}</h3>
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
