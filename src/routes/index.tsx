import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "../pages/Home";
import WatchList from "../pages/WatchList";

const queryClient = new QueryClient();

const Results = React.lazy(() => import("../pages/Results"));
const DetailsPage = React.lazy(() => import("../pages/Details"));

const AppRoutes: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/watchlist" Component={WatchList} />
        <Route path="/results" Component={Results} />
        <Route path="/movies/:movieId" Component={DetailsPage} />
        <Route path="/*" Component={Home} />
      </Routes>
    </Suspense>
  </QueryClientProvider>
);

export default AppRoutes;
