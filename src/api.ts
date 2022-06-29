const API_KEY = "c5db3f44685f4f998fe09a6423a816b2";
const BASE_PATH = "https://api.themoviedb.org/3";

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Imovie[];
  total_pages: number;
  total_results: number;
}

interface Imovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
}

export interface IGetUpCommingMovies {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IUpComming[];
  total_pages: number;
  total_results: number;
}

interface IUpComming {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
}

export interface IGetMovieInfo {
  title: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  runtime: number;
  original_language: string;
  vote_average: string;
  genres: MovieGenres[];
  homepage: string;
  tagline: string;
}

interface MovieGenres {
  name: string;
}

interface SearchList {
  id: number;
  original_title: string;
  name: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  backdrop_path: string;
  media_type: string;
}

export interface IGetSearchLsit {
  page: number;
  results: SearchList[];
  total_pages: number;
  total_results: number;
}

interface ITvShows {
  id: number;
  backdrop_path: string;
  poster_path: string;
  name: string;
  overview: string;
  release_date: string;
}

export interface IGetTvShowsResult {
  page: number;
  results: ITvShows[];
  total_pages: number;
  total_results: number;
}

interface TvShowGenres {
  name: string;
}

export interface IGetTvShowInfo {
  name: string;
  backdrop_path: string;
  overview: string;
  first_air_date: string;
  runtime: number;
  original_language: string;
  vote_average: string;
  genres: TvShowGenres[];
  homepage: string;
  tagline: string;
}

export const getMovies = async () => {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(response =>
    response.json()
  );
};

export const getMovieInfo = async (movieId?: string) => {
  return fetch(`${BASE_PATH}/movie/${movieId}?api_key=${API_KEY}`).then(response =>
    response.json()
  );
};

export const getUpCommingMovies = async () => {
  return fetch(`${BASE_PATH}/movie/upcoming?api_key=${API_KEY}`).then(response =>
    response.json()
  );
};

export const searchKeyword = async (keyword?: string) => {
  return fetch(
    `${BASE_PATH}/search/multi?api_key=${API_KEY}&language=en-US&query=${keyword}&include_adult=false`
  ).then(response => response.json());
};

export const getTvShows = async () => {
  return fetch(`
    ${BASE_PATH}/tv/popular?api_key=${API_KEY}&language=en-US`).then(response =>
    response.json()
  );
};

export const getTvShowInfo = async (tvId?: string) => {
  return fetch(`${BASE_PATH}/tv/${tvId}?api_key=${API_KEY}`).then(response =>
    response.json()
  );
};
