import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieId, Movies, Notification } from "../../types/appTypes";
import persistReducer from "redux-persist/es/persistReducer";
import { watchlistPersistConfig } from "./persistConfig";
import { MovieBase } from "../../types";

type WatchlistState = {
  movies: MovieBase[];
  notification?: Notification | null;
};

const initialState: WatchlistState = {
  movies: [],
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action: PayloadAction<MovieBase>) => {
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
    removeFromWatchlist: (state, action: PayloadAction<MovieId>) => {
      state.movies = state.movies.filter(
        (movie: MovieBase) => movie.id !== action.payload
      );
    },
    clearNotifications: (state) => {
      state.notification = null;
    },
  },
});

export const { addToWatchlist, removeFromWatchlist, clearNotifications } =
  watchlistSlice.actions;
export const getWatchlist = (state: { watchlist: Movies }) => state.watchlist;

export const whatchlistReducer = persistReducer(
  watchlistPersistConfig,
  watchlistSlice.reducer
);
