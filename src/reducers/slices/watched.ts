import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/types";

interface WatchedState {
  movies: Movie[];
}

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

export default watchedSlice.reducer;
