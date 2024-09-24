import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/TheMoviesApi';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

 useEffect(()=>{
  const getTrendingMovies = async()=>{
    try {
      const movies = await fetchTrendingMovies()
      setTrendingMovies(movies)
    } catch (error) {
      console.error('Error fetching trending movies', error)
    }
  }
  getTrendingMovies()
 }, [])

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
}
