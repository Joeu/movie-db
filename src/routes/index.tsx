import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import WhatchList from "../pages/WhatchList";
import { QueryClient, QueryClientProvider } from "react-query";
import Results from "../pages/Results";

const queryClient = new QueryClient();

const AppRoutes: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/home" Component={Home} />
      <Route path="/whatchlist" Component={WhatchList} />
      <Route path="/results" Component={Results} />
    </Routes>
  </QueryClientProvider>
);

export default AppRoutes;
