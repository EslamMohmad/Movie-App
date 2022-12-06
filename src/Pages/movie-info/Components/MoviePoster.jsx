import React from "react";
import { Card, CardMedia, useTheme, Fab } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MoviePoster = ({ details, handleFavList, handleFavIcon }) => {
  const { shape, shadows } = useTheme();
  const { Poster, Type, imdbID } = details;

  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: shape.borderRadius - 3,
        ":hover": { boxShadow: { md: shadows[15] } },
        backgroundColor: { xs: "transparent" },
        backgroundImage: { xs: "none" },
        boxShadow: { xs: "none", md: "inherit" },
      }}
    >
      <Fab
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
          width: "50px",
          height: "50px",
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          ":hover": { backgroundColor: "primary.dark" },
        }}
        onClick={() => handleFavList(details)}
      >
        {handleFavIcon(imdbID) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </Fab>
      <CardMedia
        image={Poster}
        component="img"
        alt={Type}
        height="100%"
        sx={{
          width: { sm: "50%", md: "100%" },
          mx: { sm: "auto" },
          maxHeight: { xs: "600px", md: "unset" },
          objectFit: { xs: "contain", md: "cover" },
        }}
      />
    </Card>
  );
};

export default MoviePoster;
