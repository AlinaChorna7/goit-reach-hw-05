import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../services/TheMoviesApi";
import { useParams } from "react-router-dom";

export default function MovieReview() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getMovieReviews = async () => {
            try {
                const reviewData = await fetchMovieReviews(movieId);
                if (reviewData.results) {
                    setReviews(reviewData.results);
                } else {
                    setReviews([]);
                }
            } catch (error) {
                console.error("Error fetching movie reviews:", error);
                setReviews([]);
            }
        };
        getMovieReviews();
    }, [movieId]);

    if (!reviews.length) {
        return <p>No reviews available.</p>;
    }

    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <p>{review.author} says:</p>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
