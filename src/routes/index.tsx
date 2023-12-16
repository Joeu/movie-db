import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import WhatchList from "../pages/WhatchList";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/whatchlist" Component={WhatchList} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
