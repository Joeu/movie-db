import React from "react";
import { useGetMovieCredits } from "../../service/tmdb";
import TmdbImage from "../Cover";
import { MovieId } from "../../types";

type CastProps = {
  movieId: MovieId;
};

const Cast: React.FC<CastProps> = ({ movieId }) => {
  const { data, isLoading, isError } = useGetMovieCredits(movieId);

  const stars = data?.cast?.slice(0, 7);
  const rest = data?.cast?.slice(7);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error Retrieving data</p>;
  }

  return (
    <section className="cast">
      <h3>Starring</h3>
      <div className="cast__stars">
        {stars?.map((person: any, idx: number) => (
          <div className="cast__card" key={person.id}>
            <TmdbImage
              alt={person.name}
              path={person.profile_path}
              size="w154"
            />
            <div>
              <b>{person.name}</b> as {person.character}
            </div>
          </div>
        ))}
      </div>
      <hr />
      <h3>Full Cast</h3>
      <ul>
        {rest?.map((person: any, idx: number) => (
          <li key={person.id}>
            {person.name} as {person.character}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;
