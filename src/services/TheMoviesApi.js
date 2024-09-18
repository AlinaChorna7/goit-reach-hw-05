import axios from "axios";

const API_KEY = 'e7afc97253756bde4794256be54685bd';
export const fetchTrendingMovies = async()=>{
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching trending movies:', error);
        throw error;
        
    }
}