import axios from "axios";

const API_KEY =  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2FmYzk3MjUzNzU2YmRlNDc5NDI1NmJlNTQ2ODViZCIsIm5iZiI6MTcyNjg0NzkzMi43Njk0ODgsInN1YiI6IjY2ZTg1MzkzZDdiY2NhNTI0ZGIxMjM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kwUQA_BT3GY8SN2XmEvWdG-NTnjI296fhiF11YGLJnU'; 
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    }
  };
  
  export const fetchTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
    return response.data.results;
  };
  
  export const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, options);
    return response.data;
  };
  
  export const fetchMovieCast = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, options);
    return response.data.cast;
  };
  
  export const fetchMovieReviews = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options);
    return response.data.results;
  };
  
  export const fetchMoviesByQuery = async (query) => {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      ...options,
      params: { query, include_adult: false },
    });
    return response.data.results;
  };