import { Outlet, useParams, Link } from "react-router-dom"
import { fetchMovieDetails } from "../../services/TheMoviesApi"
import { useEffect, useState } from "react"
import MovieReview from "../../components/MovieReviews/MovieReviews"
import GoBack from "../../components/GoBack/GoBack"


export default function MovieDetailsPage(){
    const {movieId}= useParams()
    const[movie, setMovie]=useState(null)
useEffect(()=>{
const getMovieDetails = async()=>{
    try {
       const movieData = await fetchMovieDetails(movieId)
       setMovie(movieData) 
    } catch (error) {
        console.error('error fetching movie details', error)
    }
}   
  getMovieDetails()
}, []);


if (!movie) {
    return <p>Loading...</p>;
  }

    return(
        <div>
           <GoBack/>
            <h1>{movie.title}</h1>
<p>{movie.overview}</p>
<p>Release Date: {movie.release_date}</p>
<p>Rating: {movie.vote_average}</p>

<Link to={`/movies/${movieId}/cast`}>Cast</Link>
<Link to={`/movies/${movieId}/reviews`}>Reviews</Link>

<Outlet/>
        </div>
    )
} 