import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../services/TheMoviesApi";
import { useParams } from "react-router-dom";
import styles from './MovieReviews.module.css';

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getMovieReviews = async () => {
            try {
                const reviewsData = await fetchMovieReviews(movieId);
                setReviews(reviewsData); 
            } catch (error) {
                console.error("Error fetching movie reviews:", error);
            }
        };
        getMovieReviews();
    }, [movieId]);

    if (!reviews.length) {
        return <p>No reviews available.</p>;
    }

    return (
        <ul className={styles.reviewsList}>
            {reviews.map(review => (
                <li key={review.id} className={styles.reviewItem}>
                    <h3>{review.author}</h3>
                    <p>{review.content}</p>
                </li>
            ))}
        </ul>
    );
}
