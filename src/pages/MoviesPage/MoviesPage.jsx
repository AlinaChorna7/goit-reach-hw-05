import {useState, useEffect  } from "react";
import axios  from "axios";

const API_KEY = 'e7afc97253756bde4794256be54685bd';

export default function MoviesPage(){
    const [query, setQuery]= useState('')
    const [movies, setMovies]= useState([]);

    const searchMovie = async ()=>{
        try {
           const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
setMovies(response.data.results);
        } catch (error) {
            console.error('Error searching movies:', error)
        }
    }
const handleSearching = (event)=>{
    event.preventDefault()
    searchMovie()
};

return(
    <div>
        <h1>Search Movies</h1>
<form onSubmit={handleSearching}>
<input type="text"
value={query}
onChange={(event)=> setQuery(event.target.value)}/>
<button type="submit">Search</button>
</form>
<ul>
    {movies.map(movie =>(
        <li key={movie.id}>{movie.title}</li>
    ))}
</ul>
    </div>
)
}