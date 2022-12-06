import React from "react";
import { Box, Stack, Typography, Rating, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MovieDetails = ({ details, handleFavList, handleFavIcon }) => {
  const { Title, Year, Country, Genre, Plot, Runtime, imdbRating, imdbID } =
    details;

  return (
    <Stack>
      <Box sx={{ color: "info.dark" }}>
        <Typography variant="h4">{Title}</Typography>
        <Typography variant="h6">({Year})</Typography>
      </Box>
      <Box className="text">
        <Typography
          variant="body1"
          sx={{
            color: "grey.500",
            fontSize: "12px",
          }}
          component="span"
        >
          movie produced in
        </Typography>
        <Typography variant="body1" sx={{ color: "text.primary" }}>
          {Country}
        </Typography>
      </Box>
      <Box className="text">
        <Typography
          variant="body1"
          sx={{
            color: "grey.500",
            fontSize: "12px",
          }}
          component="span"
        >
          categories
        </Typography>
        <Typography variant="body1" sx={{ color: "text.primary" }}>
          {Genre}
        </Typography>
      </Box>
      <Box className="text">
        <Typography
          variant="body1"
          sx={{
            color: "grey.500",
            fontSize: "12px",
          }}
          component="span"
        >
          movie is about
        </Typography>
        <Typography variant="body1" sx={{ color: "text.primary" }}>
          {Plot}
        </Typography>
      </Box>
      <Box className="text">
        <Typography
          variant="body1"
          sx={{
            color: "grey.500",
            fontSize: "12px",
          }}
          component="span"
        >
          movie time
        </Typography>
        <Typography variant="body1" sx={{ color: "text.primary" }}>
          {Runtime}
        </Typography>
      </Box>
      <Box className="text">
        <Typography
          variant="body1"
          sx={{
            color: "grey.500",
            fontSize: "12px",
          }}
          component="span"
        >
          rating
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          variant="body1"
          sx={{
            color: "text.primary",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography sx={{ mr: 2 }}>{imdbRating}</Typography>
          <Rating
            name="read-only"
            value={+imdbRating}
            precision={0.1}
            readOnly
            max={10}
          />
        </Stack>
      </Box>
      <Box sx={{ my: 2 }}>
        <Button
          sx={{ width: "100%" }}
          variant="contained"
          onClick={() => handleFavList(details)}
        >
          {handleFavIcon(imdbID) ? "remove to favorate" : " add to favorate"}
          <Box component="span" sx={{ mb: "0 !important", ml: 1, pt: "5px" }}>
            {handleFavIcon(imdbID) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Box>
        </Button>
      </Box>
    </Stack>
  );
};

export default MovieDetails;
