import React from "react";
import { useGetMovieDetails } from "../../service/tmdb";
import { useParams } from "react-router-dom";
import TmdbImage from "../../components/Cover";
import AvailableOn from "../AvailableOn";
import Cast from "../Cast/Cast";

const MovieDetails = () => {
  const { movieId } = useParams();

  const { data: movieDetails } = useGetMovieDetails(movieId);

  if (!movieDetails) {
    return <div>Loading...</div>;
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
          <div>Release date: {movieDetails.release_date}</div>
          <div>{movieDetails.vote_average}</div>
          <div>{movieDetails.revenue}</div>
        </div>
        <a href={movieDetails.homepage}>Official website</a>
        <div>{movieDetails.overview}</div>
      </div>

      <Cast movieId={movieId} />
    </section>
  );
};

export default MovieDetails;
