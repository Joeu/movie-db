import React from "react";
import { useGetMovieDetails } from "../../service/tmdb";
import { useParams } from "react-router-dom";
import TmdbImage from "../../components/Cover";
import AvailableOn from "../AvailableOn";
import Cast from "../Cast/Cast";
import { MovieDetailsParams } from "../../types/routeTypes";
import Loading from "../Loading";
import { formatCurrency, formatDate, formatRate } from "../../utils/formatter";
import MovieActions from "../MovieActions";

const MovieDetails = () => {
  const { movieId } = useParams<MovieDetailsParams>();

  const { data: movieDetails } = useGetMovieDetails(movieId ?? "");

  if (!movieDetails) {
    return <Loading />;
  }

  const bgImageUrl = `url(https://image.tmdb.org/t/p/w780${movieDetails?.backdrop_path})`;

  return (
    <section className="movie_details">
      <header
        style={{
          backgroundImage: bgImageUrl,
        }}
      />

      <div className="movie_details__cover">
        <div className="movie_details__poster">
          <TmdbImage
            alt={movieDetails.title}
            path={movieDetails.poster_path}
            size="w200"
          />
        </div>
        <AvailableOn movieId={movieDetails.id} />
        <div className="movie_details__actions">
          <MovieActions movie={movieDetails} />
        </div>
      </div>

      <div className="movie_details__title">{movieDetails.title}</div>

      <div className="movie_details__info">
        <div className="movie_details__rate">
          <div className="movie_details__genre">
            {movieDetails.genres?.map((genre: any, idx: number) => (
              <span className="movie_details__chip" key={idx}>
                {genre.name}
              </span>
            ))}
          </div>
          <div>{`${movieDetails.runtime} min`}</div>
          <div>Release date: {formatDate(movieDetails.release_date)}</div>
          <div>{formatRate(movieDetails.vote_average)}</div>
          <div>{formatCurrency(movieDetails.revenue)}</div>
        </div>
        <a href={movieDetails.homepage}>Official website</a>
        <div>{movieDetails.overview}</div>
      </div>

      <Cast movieId={movieDetails.id} />
    </section>
  );
};

export default MovieDetails;
