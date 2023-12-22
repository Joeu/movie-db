import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getWatched } from "../../reducers/slices/watched";
import { getWatchlist } from "../../reducers/slices/watchlist";
import List from "../List";

const WatchTabs = () => {
  const [selected, setSelected] = useState("watchlist");
  const watched = useSelector(getWatched);
  const watchlist = useSelector(getWatchlist);

  return (
    <div>
      <div>
        <button onClick={() => setSelected("watchlist")}>Watchlist</button>
        <button onClick={() => setSelected("watched")}>Watched</button>
      </div>
      <div style={{ display: selected === "watchlist" ? "block" : "none" }}>
        <List data={watchlist} />
      </div>
      <div style={{ display: selected === "watched" ? "block" : "none" }}>
        <List data={watched} />
      </div>
    </div>
  );
};

export default WatchTabs;
