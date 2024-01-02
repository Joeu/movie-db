import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie, Movies } from "../../types/appTypes";
import persistReducer from "redux-persist/es/persistReducer";
import { watchedPersistConfig } from "./persistConfig";

type WatchedState = {
  movies: Movies;
  notification?: {
    message?: string | null;
    type?: "success" | "error";
  };
};

const initialState: WatchedState = {
  movies: [],
};

const watchedSlice = createSlice({
  name: "watched",
  initialState,
  reducers: {
    addToWatched: (state, action: PayloadAction<Movie>) => {
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
    removeFromWatched: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter(
        (movie: Movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addToWatched, removeFromWatched } = watchedSlice.actions;
export const getWatched = (state: { watched: Movies }) => state.watched;

export const watchedReducer = persistReducer(
  watchedPersistConfig,
  watchedSlice.reducer
);
