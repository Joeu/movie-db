import React from "react";
import { Movie } from "../../types/types";
import { MdMovieFilter, MdBookmarkAdd, MdBookmarkRemove } from "react-icons/md";

type ListItemProps = {
  item: Movie;
};

const ListItem = (props: ListItemProps) => {
  const { item } = props;

  return (
    <section className="item">
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
              <MdMovieFilter size={28} />
              <MdBookmarkAdd size={28} />
            </div>
          </div>
        </div>
        <article className="item__sinopsis">{item.overview}</article>
      </aside>
    </section>
  );
};

export default ListItem;
