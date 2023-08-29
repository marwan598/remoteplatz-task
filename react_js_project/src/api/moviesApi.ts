import axios from 'axios';

const apiKey = 'eb6b5256f947de8dbfacc12fd377f596';
const apiBaseUrl = 'https://api.themoviedb.org/3';
const moviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${apiKey}`;

export const fallbackMoviePoster =
  'https://images.squarespace-cdn.com/content/v1/552a9778e4b010138bab2eda/a6b4597b-fc60-44f9-9a89-9aac7232a483/film-poster-placeholder.png';

export interface movie {
  poster_path: string;
  title: string;
}

export const moviePoster500 = (path: string) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : '';

export const moviePoster342 = (path: string) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : '';

export const moviePoster185 = (path: string) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : '';

const apiCall = async (endpoint: string, params: any) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error: ', error);
    return {};
  }
};
export const fetchMovies = () => {
  return apiCall(moviesEndpoint, {});
};

export const searchMovies = (params: any) => {
  return apiCall(searchMoviesEndpoint, params);
};
