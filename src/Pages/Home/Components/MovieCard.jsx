import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Box,
  Fab,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useNavigate } from "react-router-dom";

import Waiting from "../../../Utils/Waiting";
import { FavoriteContext } from "../../../Contexts/FavoriteContext";

const MovieCard = ({ movieObject: { Title, Year, imdbID, Type, Poster } }) => {
  const { handleFavoriteIcon } = useContext(FavoriteContext);
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        position: "relative",
        ":hover .cardContent": { bottom: 0 },
        ":hover img": { transform: "scale(1.05)" },
        height: "100%",
      }}
      className="parentCard"
    >
      {handleFavoriteIcon(imdbID) && (
        <Fab
          disableRipple={true}
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
            width: "50px",
            height: "50px",
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            ":hover": { backgroundColor: "primary.main" },
          }}
        >
          <FavoriteIcon />
        </Fab>
      )}
      <CardActionArea
        sx={{ height: "100%" }}
        onClick={async () => {
          await Waiting(700);
          navigate(`/Movie-App/movie/${imdbID}`);
        }}
      >
        <CardMedia
          component="img"
          image={Poster}
          alt={Type}
          sx={{
            height: "100%",
            transition: "1s transform",
          }}
        />
      </CardActionArea>
      <CardContent
        className="cardContent"
        sx={{
          position: "absolute",
          width: "100%",
          backgroundColor: "#a5a5a5ad",
          transition: "0.4s ease bottom",
          bottom: "-200px",
          ":last-child": { paddingBottom: "16px" },
          backdropFilter: "blur(1px)",
        }}
      >
        <Box sx={{ color: "grey.900" }}>
          <Typography
            variant="body1"
            fontSize="18px"
            fontWeight="bold"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {Title}
          </Typography>
          <Typography variant="body2" sx={{ my: 0.5 }}>
            {Type}
          </Typography>
          <Typography variant="body2">{Year}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
