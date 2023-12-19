import React from "react";

type CardProps = {
  item: any;
};

const Card = (props: CardProps) => {
  const { item } = props;
  return (
    <section className="card">
      <h3>{item.title}</h3>
      <div className="card__cover">
        <div>
          <image />
        </div>
        <div>{item.vote_average}</div>
      </div>
    </section>
  );
};

export default Card;
