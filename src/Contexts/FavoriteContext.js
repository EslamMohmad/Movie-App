import { useState, createContext } from "react";

export const FavoriteContext = createContext();
export const FavoriteContextProvider = ({ children }) => {
  const [favoriteList, setFavoriteList] = useState([]);

  const handleFavoriteMovieList = (movieID) => {
    //imdbID
    const check = favoriteList.some((movie) => movie.imdbID === movieID.imdbID);
    if (check) {
      setFavoriteList((prev) =>
        prev.filter((movie) => movie.imdbID !== movieID.imdbID)
      );
    } else {
      setFavoriteList((prev) => [...prev, movieID]);
    }
  };

  const handleFavoriteIcon = (movieID) => {
    return favoriteList.some((movie) => movie.imdbID === movieID);
  };

  const sharedValues = {
    favoriteList,
    setFavoriteList,
    handleFavoriteMovieList,
    handleFavoriteIcon,
  };

  return (
    <FavoriteContext.Provider value={sharedValues}>
      {children}
    </FavoriteContext.Provider>
  );
};
