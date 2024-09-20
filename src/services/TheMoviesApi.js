import axios from "axios";

const API_KEY =  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2FmYzk3MjUzNzU2YmRlNDc5NDI1NmJlNTQ2ODViZCIsIm5iZiI6MTcyNjg0NzkzMi43Njk0ODgsInN1YiI6IjY2ZTg1MzkzZDdiY2NhNTI0ZGIxMjM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kwUQA_BT3GY8SN2XmEvWdG-NTnjI296fhiF11YGLJnU'; 
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
    headers: {
        Authorization: `Bearer ${API_KEY}`,
    }
};

export const fetchTrendingMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day`, options
        );
        return response.data.results;
    } catch (error) {
        console.error('Error fetching trending movies:', error);
        throw error;
    }
};


export const fetchMovieDetails = async (movieId) => {
    try {
        console.log(`Fetching details for movie ID: ${movieId}`); 
        const response = await axios.get(`${BASE_URL}/movie/${movieId}`, options)
        return response.data; 
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
    }
};
export const fetchMovieCast = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, options);

        return response.data.cast; 
    } catch (error) {
        console.error('Error fetching movie cast:', error);
        throw error;
    }
};

export const fetchMovieReviews = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options);
   
        return response.data.results; 
    } catch (error) {
        console.error('Error fetching movie reviews:', error);
        throw error;
    }
};


export const fetchMovieQuery = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie`, ...options);
        return response.data.results; 
    } catch (error) {
        console.error('Error fetching movies by query:', error);
        throw error;
    }
};
