export type Movie = {
  name?: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: (number | string)[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieDetail = Movie & {
  runtime: number;
  status: string;
  tagline: string;
};

export type Genre = { id: number; name: string };
