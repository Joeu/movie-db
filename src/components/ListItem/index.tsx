import React from "react";
import { Movie } from "../../types/types";
import { MdMovieFilter, MdBookmarkAdd, MdBookmarkRemove } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromWatchlist } from "../../reducers/slices/watchlist";
import { addToWatched } from "../../reducers/slices/watched";

type ListItemProps = {
  item: Movie;
  odd?: boolean;
};

const ListItem = (props: ListItemProps) => {
  const { item } = props;
  const dispatch = useDispatch();

  const handleToWatchedClick = () => {
    dispatch(addToWatched(item));
    dispatch(removeFromWatchlist(item.id));
  };

  const handleBookmarkClick = () => {
    dispatch(removeFromWatchlist(item.id));
  };

  return (
    <section className={`item ${props.odd ? "odd" : ""}`}>
      <div className="item__cover">
        <img
          src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
          alt="test"
        />
      </div>
      <aside className="item__info">
        <div>
          <span>{item.title}</span>
          <div>
            <div className="item__rating">
              <span>{Math.round(item.vote_average * 10) / 10}</span>
            </div>
            <div className="item__actions">
              <MdMovieFilter size={28} onClick={handleToWatchedClick} />
              <MdBookmarkAdd size={28} onClick={handleBookmarkClick} />
            </div>
          </div>
        </div>
        <article className="item__sinopsis">{item.overview}</article>
      </aside>
    </section>
  );
};

export default ListItem;
