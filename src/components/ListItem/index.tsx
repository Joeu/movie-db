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
        <img src={item.cover} alt="test" />
      </div>
      <aside className="item__info">
        <div>
          <span>{item.title}</span>
          <span>8.3</span>
        </div>
        <article className="item__sinopsis">{item.sinopsis}</article>
      </aside>
    </section>
  );
};

export default ListItem;
