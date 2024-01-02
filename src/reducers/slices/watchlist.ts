import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie, Movies } from "../../types/appTypes";
import persistReducer from "redux-persist/es/persistReducer";
import { watchlistPersistConfig } from "./persistConfig";

type WatchlistState = {
  movies: Movies;
  notification?: {
    message?: string | null;
    type?: "success" | "error";
  };
};

const initialState: WatchlistState = {
  movies: [],
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action: PayloadAction<Movie>) => {
      if (!state.movies.some((item) => item.id === action.payload.id)) {
        state.notification = {
          message: `${action.payload.title} added to watched list`,
          type: "success",
        };
        state.movies.push(action.payload);
      } else {
        state.notification = {
          message: `${action.payload.title} already added to watched list`,
          type: "error",
        };
      }
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
