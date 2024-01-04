import React from "react";
import { MdBookmarkAdd, MdBookmarkRemove, MdMovieFilter } from "react-icons/md";
import { ActionType, MovieBase } from "../../types";
import { useActions } from "../../hooks/useActions";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../../reducers/slices/watchlist";
import { addToWatched } from "../../reducers/slices/watched";
import { useDispatch } from "react-redux";

const actionIconMapping = (type: ActionType) => {
  switch (type) {
    case "watchlist":
      return {
        icon: MdBookmarkAdd,
        actionCb: addToWatchlist,
        payloadType: "movie",
      };
    case "watched":
      return {
        icon: MdMovieFilter,
        actionCb: addToWatched,
        payloadType: "movie",
      };
    case "remove":
      return {
        icon: MdBookmarkRemove,
        actionCb: removeFromWatchlist,
        payloadType: "id",
      };
  }
};

type MovieActionProps = { movie: MovieBase };

const MovieActions: React.FC<MovieActionProps> = ({ movie }) => {
  const { mappedActions } = useActions();
  const dispatch = useDispatch();

  const handleClick = (e: any, action: any, payload: any) => {
    e.stopPropagation();

    if (payload === "movie") {
      dispatch(action(movie));
    }
    if (payload === "id") {
      dispatch(action(movie.id));
    }
  };

  return (
    <div className="movie-actions">
      {mappedActions.map((action: ActionType, idx: number) => {
        const {
          icon: IconComp,
          actionCb,
          payloadType,
        } = actionIconMapping(action);
        return (
          <IconComp
            key={idx}
            size={28}
            onClick={(e) => handleClick(e, actionCb, payloadType)}
          />
        );
      })}
    </div>
  );
};

export default MovieActions;
