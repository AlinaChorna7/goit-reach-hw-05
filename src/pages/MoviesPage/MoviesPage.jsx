import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../services/TheMoviesApi';
import MovieList from '../../components/MovieList/MovieList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const getMovies = async () => {
      if (!query) return;
      const movies = await fetchMoviesByQuery(query);
      setMovies(movies);
    };
    getMovies();
  }, [query]);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.query.value.trim();
    setSearchParams({ query });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}
