import { RiSearch2Line } from "react-icons/ri";

export const Header = () => {
  return (
    <header className="w-full fixed bg-primary lg:pl-300 dark:bg-secondary-200 transition-all duration-300 z-40">
      <form className="flex items-center gap-2 w-40 p-7">
        <div className="flex items-center relative">
          <RiSearch2Line className="absolute p-2 box-content text-secondary-900" />
          <input
            type="text"
            placeholder="Buscar..."
            className="py-2 pl-10 pr-4 outline-none rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-700 text-secondary-100 font-medium py-2 px-6 rounded-lg"
        >
          Buscar
        </button>
      </form>
    </header>
  );
};
