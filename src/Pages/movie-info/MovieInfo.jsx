import React, { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";
import { Alert, Box, CircularProgress, Grid } from "@mui/material";
import MoviePoster from "./Components/MoviePoster";
import MovieDetails from "./Components/MovieDetails";
import useFetch from "./../../Hooks/useFetch";
import { FavoriteContext } from "./../../Contexts/FavoriteContext";

const MovieInfo = () => {
  const { handleFavoriteMovieList, handleFavoriteIcon } =
    useContext(FavoriteContext);

  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();
  const [loading, error, preformFetch] = useFetch();

  useEffect(() => {
    const URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`;
    preformFetch(URL).then((data) => setMovieDetails(data));
    // eslint-disable-next-line
  }, [id]);

  return (
    <Box sx={{ mt: 2 }}>
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
      {movieDetails.Response === "True" ? (
        <Grid container direction="row" spacing={4}>
          <Grid item md={5} xs={12}>
            <MoviePoster
              details={movieDetails}
              handleFavList={handleFavoriteMovieList}
              handleFavIcon={handleFavoriteIcon}
            />
          </Grid>
          <Grid
            item
            md={7}
            xs={12}
            sx={{
              ".MuiBox-root:not(:last-child)": { mb: 2 },
              ".text p": {
                pl: { xs: 0, md: 3 },
                pt: 1,
                fontWeight: "bold",
                fontSize: "15px",
              },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <MovieDetails
              details={movieDetails}
              handleFavList={handleFavoriteMovieList}
              handleFavIcon={handleFavoriteIcon}
            />
          </Grid>
        </Grid>
      ) : (
        !loading &&
        error && (
          <Box>
            <Alert severity="error">{error}</Alert>
          </Box>
        )
      )}
    </Box>
  );
};

export default MovieInfo;
