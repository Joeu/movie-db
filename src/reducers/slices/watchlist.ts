import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/types";

interface WatchlistState {
  movies: Movie[];
}

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
  },
});

export const { addToWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;
