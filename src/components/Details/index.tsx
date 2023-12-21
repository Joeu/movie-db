import React from "react";
import { useGetMovieDetails } from "../../service/tmdb";
import { useParams } from "react-router-dom";
import MovieCover from "../../components/Cover";
import AvailableOn from "../AvailableOn";

const MovieDetails = () => {
  const { movieId } = useParams();
  const { data, isLoading, isError } = useGetMovieDetails(movieId);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error Retrieving data</p>;
  }

  const bgImageUrl = `url(https://image.tmdb.org/t/p/w780${data.backdrop_path})`;

  return (
    <section className="movie_details">
      <header
        style={{
          backgroundImage: bgImageUrl,
        }}
      />

      <div className="movie_details__cover">
        <div className="movie_details__poster">
          <MovieCover alt={data.title} path={data.poster_path} size="w200" />
        </div>
        <AvailableOn movieId={data.id} />
      </div>

      <div className="movie_details__title">{data.title}</div>

      <div className="movie_details__info">
        <a href={data.homepage}>Official website</a>
        <div>{data.released}</div>
        <div>{data.release_date}</div>
        <div>{data.vote_average}</div>
        <div>
          {data.genres?.map((genre: any, idx: number) => (
            <div key={idx}>
              <span>{genre.name}</span>
            </div>
          ))}
        </div>
        <div>{data.overview}</div>
      </div>
    </section>
  );
};

export default MovieDetails;
