import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, SwitchTheme } from "./Components";
import { Container, Box, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./Theme/Theme";
import { SearchContextProvider } from "./Contexts/SearchContext";
import { FavoriteContextProvider } from "./Contexts/FavoriteContext";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(true);

  return (
    <ThemeProvider theme={currentTheme ? lightTheme : darkTheme}>
      <Header />
      <Box
        sx={{
          minHeight: "calc(100vh - 70px)",
          backgroundColor: "background.body",
          color: "text.primary",
        }}
      >
        <Container>
          <SwitchTheme
            setCurrentTheme={setCurrentTheme}
            currentThemeState={currentTheme}
          />
          <SearchContextProvider>
            <FavoriteContextProvider>
              <Outlet />
            </FavoriteContextProvider>
          </SearchContextProvider>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
