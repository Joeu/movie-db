import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWatchlist } from "../../reducers/slices/watchlist";

type CardProps = {
  item: any;
};

const Card = (props: CardProps) => {
  const { item } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch(addToWatchlist(item));
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
        <div>{Math.round(item.vote_average * 10) / 10}</div>
      </div>
    </section>
  );
};

export default Card;
