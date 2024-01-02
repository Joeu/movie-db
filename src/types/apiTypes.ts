// Movie

type Collection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};
type Genre = {
  id: number;
  name: string;
};
type ProductionCompany = {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type MovieBase = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  popularity: number;
  release_date: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

type MovieExtraDetails = {
  belongs_to_collection: Collection;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  production_companies: ProductionCompany[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
};

export type TrendingMoviesResponde = {
  page: number;
  results: Array<MovieBase & { media_type: string }>;
};

export type MovieDetailsResponse = MovieBase & MovieExtraDetails;

// Cast & Crew

type PersonBase = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;

  credit_id: string;
};

type PersonCast = PersonBase & {
  cast_id: number;
  character: string;
  order: number;
};

type PersonCrew = PersonBase & {
  department: string;
  job: string;
};

export type CreditsResponse = {
  id: number;
  cast: PersonCast[];
  crew: PersonCrew[];
};
