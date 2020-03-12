export interface MovieModel {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genres?: string[];
  title: string;
  overview: string;
  release_date: string;
  production_companies?: [];
}
