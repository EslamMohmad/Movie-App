import React, { createContext, useState, useRef, useEffect } from "react";

export const SearchContext = createContext();
export const SearchContextProvider = ({ children }) => {
  const prevTitle = useRef();
  const [movieTitle, setMovieTitle] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const depunce = setTimeout(() => {
      prevTitle.current = movieTitle;
    }, 1000);

    return () => clearTimeout(depunce);
  }, [movieTitle]);

  const sharedValuse = {
    movieTitle,
    prevTitle,
    setMovieTitle,
    movieList,
    setMovieList,
  };
  return (
    <SearchContext.Provider value={sharedValuse}>
      {children}
    </SearchContext.Provider>
  );
};
