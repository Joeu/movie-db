import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie, Movies } from "../../types/types";
import persistReducer from "redux-persist/es/persistReducer";
import { watchedPersistConfig } from "./persistConfig";

type WatchedState = {
  movies: Movies;
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
        state.movies.push(action.payload);
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
