import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../services/TheMoviesApi";
import { useParams } from "react-router-dom";
import styles from './MovieCast.module.css';

export default function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const getMovieCast = async () => {
            try {
                const castData = await fetchMovieCast(movieId);
                setCast(castData); 
            } catch (error) {
                console.error("Error fetching movie cast:", error);
            }
        };
        getMovieCast();
    }, [movieId]);

    if (!cast.length) {
        return <p>No cast information available.</p>;
    }

    return (
        <ul className={styles.castList}>
            {cast.map(actor => (
                <li key={actor.id} className={styles.actorItem}>
                    {actor.profile_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                            alt={actor.name}
                            className={styles.actorPhoto}
                        />
                    )}
                    <span className={styles.actorName}>
                        {actor.name} as {actor.character}
                    </span>
                </li>
            ))}
        </ul>
    );
}
