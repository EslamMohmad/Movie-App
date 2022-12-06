import React from "react";
import { Box, Container, Grid, Avatar } from "@mui/material";
import HomePageLink from "./HomePageLink";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.header",
        color: "white",
        height: "70px",
      }}
      component="header"
    >
      <Container sx={{ height: "100%" }}>
        <Grid
          container
          sx={{
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item>
            <HomePageLink />
          </Grid>
          <Grid item>
            <Avatar src={require("../Images/adminImg.jpg")} alt="admin user" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
