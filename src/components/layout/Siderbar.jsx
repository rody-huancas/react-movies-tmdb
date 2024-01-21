import { useState } from "react";
import { Link } from "react-router-dom";
// icons
import {
  RiCloseFill,
  RiFileVideoLine,
  RiHeartAddLine,
  RiHomeLine,
  RiMenuLine,
} from "react-icons/ri";

export const Siderbar = () => {
  const [showMenu, setshowMenu] = useState(false);

  const handleShowMenu = () => {
    setshowMenu(!showMenu);
  };

  return (
    <>
      <div
        className={`w-300 h-screen lg:left-0 px-6 py-10 bg-primary flex flex-col gap-7 z-40 transition-all duration-300 fixed top-0 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        <Link
          to={"/"}
          className="text-center font-black uppercase text-3xl text-white"
        >
          LOGO
        </Link>

        <nav className="flex flex-col gap-2">
          <Link
            to={"/"}
            className="flex items-center gap-4 hover:bg-secondary-900 transition-colors duration-300 py-2 px-5 rounded-xl"
          >
            <RiHomeLine /> Home
          </Link>
          <Link
            to={"/"}
            className="flex items-center gap-4 hover:bg-secondary-900 transition-colors duration-300 py-2 px-5 rounded-xl"
          >
            <RiFileVideoLine /> Más peliculas
          </Link>
          <Link
            to={"/"}
            className="flex items-center gap-4 hover:bg-secondary-900 transition-colors duration-300 py-2 px-5 rounded-xl"
          >
            <RiHeartAddLine /> Favoritos
          </Link>
        </nav>
      </div>

      <button
        className="fixed bottom-10 right-10 bg-purple-100 rounded-full p-3 box-content text-primary border-none outline-none lg:hidden z-50"
        onClick={handleShowMenu}
      >
        {showMenu ? <RiCloseFill /> : <RiMenuLine />}
      </button>
    </>
  );
};
