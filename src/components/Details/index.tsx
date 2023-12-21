import React from "react";
import { useGetMovieDetails } from "../../service/tmdb";
import { useParams } from "react-router-dom";
import MovieCover from "../../components/Cover";
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
          <MovieCover
            alt={movieDetails.title}
            path={movieDetails.poster_path}
            size="w200"
          />
        </div>
        <AvailableOn movieId={movieDetails.id} />
      </div>

      <div className="movie_details__title">{movieDetails.title}</div>

      <div className="movie_details__info">
        <a href={movieDetails.homepage}>Official website</a>
        <div>{movieDetails.released}</div>
        <div>{movieDetails.release_date}</div>
        <div>{movieDetails.vote_average}</div>
        <div>
          {movieDetails.genres?.map((genre: any, idx: number) => (
            <div key={idx}>
              <span>{genre.name}</span>
            </div>
          ))}
        </div>
        <div>{movieDetails.overview}</div>
      </div>

      <div className="movie_details__cast">
        <Cast movieId={movieId} />
      </div>
    </section>
  );
};

export default MovieDetails;
