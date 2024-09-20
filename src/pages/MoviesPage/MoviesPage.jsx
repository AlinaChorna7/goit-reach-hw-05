

import { useState } from "react";
import  {fetchMovieQuery}  from "../../services/TheMoviesApi.js"; 
import { Link } from "react-router-dom";


export default function SearchMovies() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const moviesList = await fetchMovieQuery(query);
            setMovies(moviesList);
        } catch (error) {
            console.error('Error fetching movies by query', error);
        }
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
                <button type="submit">Search</button>
            </form>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

