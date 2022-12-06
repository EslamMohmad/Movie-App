import React from "react";
import { Stack } from "@mui/material";
import { SearchMovie, FoundedMovies } from "./Components";

const Home = () => {
  return (
    <Stack>
      <SearchMovie />
      <FoundedMovies />
    </Stack>
  );
};

export default Home;
