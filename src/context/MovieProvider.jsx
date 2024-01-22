import { createContext, useState } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);

  const changeStateLoader = (state) => {
    setLoader(state);
  };

  return (
    <MovieContext.Provider value={{ loader, changeStateLoader }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider };
export default MovieContext;
