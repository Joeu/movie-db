import React from "react";
import { useNavigate } from "react-router-dom";
import MovieActions from "../MovieActions";
import { formatRate } from "../../utils/formatter";
import { MdStarRate } from "react-icons/md";

type CardProps = {
  item: any;
};

const Card = (props: CardProps) => {
  const { item } = props;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movies/${item.id}`);
  };

  return (
    <section className="card" onClick={handleCardClick}>
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
        <div className="card__vote-actions">
          <div className="card__vote">
            <MdStarRate size={16} />
            <span>{formatRate(item.vote_average)}</span>
          </div>
          <MovieActions movie={item} />
        </div>
      </div>
    </section>
  );
};

export default Card;
