import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie, Movies } from "../../types/types";

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
  },
});

export const { addToWatchlist } = watchlistSlice.actions;
export const getWatchlist = (state: { watchlist: Movies }) => state.watchlist;

export default watchlistSlice.reducer;
