import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie, Movies } from "../../types/types";

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
      state.movies.push(action.payload);
    },
  },
});

export const { addToWatched } = watchedSlice.actions;
export const getWatched = (state: { watched: Movies }) => state.watched;

export default watchedSlice.reducer;
