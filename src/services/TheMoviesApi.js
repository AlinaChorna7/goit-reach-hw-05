import axios from "axios";

const API_KEY = 'e7afc97253756bde4794256be54685bd';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
        return response.data.results || [];
    } catch (error) {
        console.error('Error fetching trending movies:', error);
        return [];
    }
};

export const fetchMovieQuery = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: API_KEY,
                query,
                language: 'en-US',
                page: 1,
                include_adult: false,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies by query:', error);
        throw error;
    }
};

export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
    }
};

export const fetchMovieCast = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching movie cast:', error);
        throw error;
    }
};

export const fetchMovieReviews = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                page: 1,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching movie reviews:', error);
        throw error;
    }
};
