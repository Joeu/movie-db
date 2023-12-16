import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import WhatchList from "../pages/WhatchList";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/home" Component={Home} />
    <Route path="/whatchlist" Component={WhatchList} />
  </Routes>
);

export default AppRoutes;
