import { configureStore } from "@reduxjs/toolkit";
import watchedReducer from "./slices/watched";
import watchlistReducer from "./slices/watchlist";

const store = configureStore({
  reducer: {
    watched: watchedReducer,
    watchlist: watchlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
