import React, { useContext, useEffect } from "react";
import { Box, Grid, Alert, CircularProgress } from "@mui/material";
import MovieCard from "./MovieCard";
import { SearchContext } from "./../../../Contexts/SearchContext";
import useFetch from "../../../Hooks/useFetch";

const FoundedMovies = () => {
  const { movieTitle, prevTitle, setMovieList, movieList } =
    useContext(SearchContext);
  const [loading, error, preformFetch] = useFetch();

  const movieTitleHandling = (curr, prev) => {
    //check if [curr, prev] string has white space
    const arr = [curr, prev];
    const res = arr.map((title) => title.replaceAll(" ", ""));

    const [currentTitle, prevTitle] = res;
    return currentTitle === prevTitle;
  };

  useEffect(() => {
    if (movieTitle) {
      if (movieList.length && movieTitleHandling(movieTitle, prevTitle.current))
        return; // check if movieList is empty and current, prev title [true => stop]
      const depounce = setTimeout(() => {
        const URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
        preformFetch(`${URL}&s=${movieTitle}`, 1000).then((data) =>
          data.Response === "True"
            ? setMovieList(data.Search)
            : setMovieList([])
        );
      }, 1000);
      return () => clearTimeout(depounce);
    }
    // eslint-disable-next-line
  }, [movieTitle]);

  return (
    <>
      {loading && (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {movieList.length !== 0 && (
        <Box sx={{ my: 2 }}>
          <Grid
            container
            spacing="25px"
            sx={{ justifyContent: { sm: "flex-start", xs: "center" } }}
          >
            {movieList.map((movie) => (
              <Grid item key={movie.imdbID} lg={3} md={4} sm={6} xs={12}>
                <MovieCard movieObject={movie}>{movie.Title}</MovieCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      {!loading && error && (
        <Box>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}
    </>
  );
};

export default FoundedMovies;
