import React from "react";
import { useGetMovieCredits } from "../../service/tmdb";

type CastProps = {
  movieId?: string;
};

const Cast: React.FC<CastProps> = ({ movieId }) => {
  const { data, isLoading, isError } = useGetMovieCredits(movieId);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error Retrieving data</p>;
  }

  return (
    <section>
      <ul>
        {data?.cast?.map((person: any, idx: number) => (
          <li key={person.id}>
            {person.name} as {person.character}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;
