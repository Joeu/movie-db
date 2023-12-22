import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import WatchList from "../pages/WatchList";
import { QueryClient, QueryClientProvider } from "react-query";
import Results from "../pages/Results";
import DetailsPage from "../pages/Details";

const queryClient = new QueryClient();

const AppRoutes: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/home" Component={Home} />
      <Route path="/watchlist" Component={WatchList} />
      <Route path="/results" Component={Results} />
      <Route path="/movies/:movieId" Component={DetailsPage} />
      <Route path="/*" Component={Home} />
    </Routes>
  </QueryClientProvider>
);

export default AppRoutes;
