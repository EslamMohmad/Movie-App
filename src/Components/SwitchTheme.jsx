import { Grid, Switch, Typography } from "@mui/material";
import React from "react";

const SwitchTheme = ({ setCurrentTheme, currentThemeState }) => {
  return (
    <Grid container sx={{ alignItems: "center" }}>
      <Grid item>
        <Typography>light</Typography>
      </Grid>
      <Grid item>
        <Switch
          checked={!currentThemeState}
          onChange={() => setCurrentTheme(!currentThemeState)}
        />
      </Grid>
      <Grid item>
        <Typography>dark</Typography>
      </Grid>
    </Grid>
  );
};

export default SwitchTheme;
