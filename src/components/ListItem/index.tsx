import React from "react";

import { MovieBase } from "../../types";
import MovieActions from "../MovieActions";
import { formatRate } from "../../utils/formatter";

type ListItemProps = {
  item: MovieBase;
  odd?: boolean;
};

const ListItem = (props: ListItemProps) => {
  const { item } = props;

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
              <span>{formatRate(item.vote_average)}</span>
            </div>
            <div className="item__actions">
              <MovieActions movie={item} />
            </div>
          </div>
        </div>
        <article className="item__sinopsis">{item.overview}</article>
      </aside>
    </section>
  );
};

export default ListItem;
