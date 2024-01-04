import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getWatched } from "../../reducers/slices/watched";
import { getWatchlist } from "../../reducers/slices/watchlist";
import List from "../List";
import TabButton from "./TabButton/TabButton";
import { useActions } from "../../hooks/useActions";

const Tabs = () => {
  const { setCurrentActions } = useActions();
  const [selected, setSelected] = useState("watchlist");
  const watched = useSelector(getWatched);
  const watchlist = useSelector(getWatchlist);

  setCurrentActions(selected);

  return (
    <div className="tab-container">
      <div className="tab-container__tabs">
        <TabButton
          onClick={() => setSelected("watchlist")}
          selected={selected === "watchlist"}
        >
          Watchlist
        </TabButton>
        <TabButton
          onClick={() => setSelected("watched")}
          selected={selected === "watched"}
        >
          Watched
        </TabButton>
      </div>
      <div
        className="tab-container__content"
        style={{ display: selected === "watchlist" ? "block" : "none" }}
      >
        <List data={watchlist.movies} />
      </div>
      <div
        className="tab-container__content"
        style={{ display: selected === "watched" ? "block" : "none" }}
      >
        <List data={watched.movies} />
      </div>
    </div>
  );
};

export default Tabs;
