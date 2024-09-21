import { useEffect, useState } from "react";
import { fetchMovieQuery } from "../../services/TheMoviesApi.js"; 
import { Link, useSearchParams } from "react-router-dom";
import styles from './MoviesPage.module.css';

export default function MoviesPage() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
 
    const queryFromURL = searchParams.get("query") || "";

    useEffect(() => {
        if (queryFromURL) {
            const getMovies = async () => {
                try {
                    const movieList = await fetchMovieQuery(queryFromURL);
                    setMovies(movieList);
                } catch (error) {
                    console.error('Error fetching movies by query', error);
                }
            };
            getMovies();
        }
    }, [queryFromURL]);

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchParams({ query });
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    placeholder="Search for movies" 
                />
                <button type="submit" className={styles.btnsbm}>Search</button>
            </form>
            {movies.length > 0 && (
                <ul className={styles.movieList}>
                    {movies.map(movie => (
                        <li key={movie.id} className={styles.movieItem}>
                            <Link to={`/movies/${movie.id}`} state={{ from: window.location.pathname }} className={styles.movieLink}>
                                {movie.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
