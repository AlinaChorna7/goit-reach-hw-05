import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../services/TheMoviesApi";

export default function HomePage(){
    const [movies, setMovies]= useState([]);

    useEffect(()=>{
        const getMovies = async()=>{
            try {
              const moviesList = await fetchTrendingMovies();
              setMovies(moviesList);  
            } catch (error) {
                console.error('Error fetching movies in HomePage:', error);
            }
        }
        getMovies()
    },[]);
    return(
        <div>
            <h1>Trending Movies</h1>
            <ul>
            {movies.map(movie=>(
                <li key={movie.id}>{movie.title}</li>
            ))}
            </ul>
        </div>
    )
}