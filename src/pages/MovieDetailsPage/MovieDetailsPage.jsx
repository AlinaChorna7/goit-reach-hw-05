import { Outlet, useParams, Link } from "react-router-dom";
import { fetchMovieDetails } from "../../services/TheMoviesApi";
import { useEffect, useState } from "react";
import GoBack from "../../components/GoBack/GoBack";
import styles from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const movieData = await fetchMovieDetails(movieId);
                setMovie(movieData);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };
        getMovieDetails();
    }, [movieId]);

    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.container}>
            <GoBack />
            <div className={styles.movieDetails}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className={styles.poster}
                />
                <div className={styles.info}>
                    <h1 className={styles.title}>{movie.title}</h1>
                    <p className={styles.rating}>User score: {(movie.vote_average * 10).toFixed(2)}%</p>
                    <p className={styles.overview}>Overview: {movie.overview}</p>
                    <p className={styles.releaseDate}>
                        Genres: {movie.genres.map(genre => genre.name).join(', ')}
                    </p>
                </div>
            </div>
            <div className={styles.links}>
                <h2>Additional Information</h2>
                <Link to={`/movies/${movieId}/cast`} className={styles.link}>Cast</Link>
                <Link to={`/movies/${movieId}/reviews`} className={styles.link}>Reviews</Link>
            </div>
            <Outlet />
        </div>
    );
}
