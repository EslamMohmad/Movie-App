import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const HomePageLink = () => {
  return (
    <Link to="/Movie-App">
      <Typography variant="h5">movie app</Typography>
    </Link>
  );
};

export default HomePageLink;
