import React from "react";
import { ImageSize } from "../../types/types";

type MovieCoverProps = {
  alt: string;
  path: string;
  size: ImageSize;
};

const MovieCover: React.FC<MovieCoverProps> = ({ alt, path, size }) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/${size}${path}`}
      alt={`Poster for ${alt}`}
    />
  );
};

export default MovieCover;
