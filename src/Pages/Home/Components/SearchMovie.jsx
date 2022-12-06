import React, { useContext } from "react";
import { Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchContext } from "./../../../Contexts/SearchContext";

const SearchMovie = () => {
  const { setMovieTitle, movieTitle } = useContext(SearchContext);

  return (
    <Stack sx={{ alignItems: "center", my: 1, flexDirection: "row" }}>
      <SearchIcon sx={{ fontSize: "2rem", mr: 1.5 }} />
      <TextField
        fullWidth
        id="standard-basic"
        label="search for move"
        variant="standard"
        onChange={({ target }) => {
          setMovieTitle(target.value);
        }}
        value={movieTitle}
      />
    </Stack>
  );
};

export default SearchMovie;
