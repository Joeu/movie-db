import React from "react";
import { ImageSize } from "../../types/appTypes";

type TmdbImageProps = {
  alt: string;
  path: string;
  size: ImageSize;
};

const TmdbImage: React.FC<TmdbImageProps> = ({ alt, path, size }) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/${size}${path}`}
      alt={`Poster for ${alt}`}
    />
  );
};

export default TmdbImage;
