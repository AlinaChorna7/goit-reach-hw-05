import { useState } from "react";
import { fetchMovieReviews } from "../../services/TheMoviesApi";

export default function MovieReview({movieId}){
    const[reviews, setReviews]= useState([]);

    useState(()=>{
        const getMovieReviews = async()=>{
            try {
                const reviewData = await fetchMovieReviews(movieId);
                setReviews(reviewData)
            } catch (error) {
                console.error('error fetching movie review', error)
            }
        }
        getMovieReviews()
    }, [movieId])

    return(
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews.map(review=>{
                    <li key={review.id}>
                       <p>{review.author} says: </p>
                       <p>{review.content}</p> 
                    </li>
                })}
            </ul>
        </div>
    )
}