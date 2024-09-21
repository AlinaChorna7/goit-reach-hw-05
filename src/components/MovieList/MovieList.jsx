import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/TheMoviesApi";
import { Link } from "react-router-dom";
import styles from './MovieList.module.css';

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const moviesList = await fetchTrendingMovies();
                setMovies(moviesList);
            } catch (error) {
                console.error('Error fetching trending movies:', error);
            }
        };
        getMovies();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Trending Movies</h1>
            <ul className={styles.movieList}>
                {movies.map(movie => (
                    <li key={movie.id} className={styles.movieItem}>
                        <Link to={`/movies/${movie.id}`} state={{ from: window.location.pathname }} className={styles.movieLink}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
