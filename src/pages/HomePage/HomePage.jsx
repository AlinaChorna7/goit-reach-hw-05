import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "../../services/TheMoviesApi"
import { Link } from "react-router-dom";

export default function HomePage(){
const [ movies, setMovies]= useState([]);

useEffect(()=>{
    const getMovies= async()=>{
        try {
            const moviesList = await fetchTrendingMovies();
            console.log(moviesList)
            setMovies(moviesList)
        } catch (error) {
            console.error('error feychin trending movies on HomePage', error)
        }
    } 
    getMovies()
}, [])

return (
    <div>
        <h1>Trending movies</h1>
        <ul>
            {movies.map(movie => (
                <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>
            ))}
        </ul>
    </div>
);
}

