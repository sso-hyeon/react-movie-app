const API_KEY = "c5db3f44685f4f998fe09a6423a816b2";
const BASE_PATH = "https://api.themoviedb.org/3";

interface Imovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
}

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

export function getMovies() {
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(response =>
        response.json()
    );
}
