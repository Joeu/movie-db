import React from "react";
import { Movie } from "../../types/types";

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
          <span>{Math.round(item.vote_average * 10) / 10}</span>
        </div>
        <article className="item__sinopsis">{item.overview}</article>
      </aside>
    </section>
  );
};

export default ListItem;
