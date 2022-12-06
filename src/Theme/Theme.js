import { createTheme } from "@mui/material";
import { darkModePalette, lightModePalette } from "./Palette";

export const lightTheme = createTheme({
  palette: lightModePalette,
});
export const darkTheme = createTheme({
  palette: darkModePalette,
});
