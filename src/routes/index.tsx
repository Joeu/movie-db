import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import WatchList from "../pages/WatchList";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/watchlist" Component={WatchList} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
