import storage from "redux-persist/lib/storage";

export const watchlistPersistConfig = {
  key: "watchlist",
  storage,
};

export const watchedPersistConfig = {
  key: "watched",
  storage,
};
