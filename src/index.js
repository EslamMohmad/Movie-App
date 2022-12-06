import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";

import "./index.css";
import MovieInfo from "./Pages/movie-info/MovieInfo";
import Home from "./Pages/Home/Home";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="Movie-App" element={<App />}>
        <Route path="/Movie-App" element={<Home />} />
        <Route path="/Movie-App/movie/:id" element={<MovieInfo />} />
      </Route>
    </Routes>
  </Router>
);
