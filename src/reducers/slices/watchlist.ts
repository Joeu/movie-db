import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie, Movies } from "../../types/types";
import persistReducer from "redux-persist/es/persistReducer";
import { watchlistPersistConfig } from "./persistConfig";

type WatchlistState = {
  movies: Movies;
};

const initialState: WatchlistState = {
  movies: [],
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload);
    },
    removeFromWatchlist: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter(
        (movie: Movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export const getWatchlist = (state: { watchlist: Movies }) => state.watchlist;

export const whatchlistReducer = persistReducer(
  watchlistPersistConfig,
  watchlistSlice.reducer
);
