export type Movie = {
  id: number;
  title: string;
  overview: string;
  year: number | string;
  poster_path: string;
  vote_average: number;
};

export type ImageSize =
  | "w92"
  | "w154"
  | "w185"
  | "w200"
  | "w500"
  | "w780"
  | "original";
