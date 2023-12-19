import React from "react";

type CardProps = {
  item: any;
};

const Card = (props: CardProps) => {
  const { item } = props;
  return (
    <section className="card">
      <div className="card__title">
        <p>{item.title}</p>
      </div>
      <div className="card__cover">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
            alt={`Poster for ${item.title}`}
          />
        </div>
        <div>{item.vote_average}</div>
      </div>
    </section>
  );
};

export default Card;
