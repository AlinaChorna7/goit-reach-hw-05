import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../services/TheMoviesApi";

export default function MovieCast({movieId}){
const [cast, setCast]= useState([]);

useEffect(()=>{
    const getMovieCast = async()=>{
        try {
           const castData = await fetchMovieCast(movieId);
           setCast(castData) 
        } catch (error) {
            console.error('error fetching movie cast', error)
        }
    }
    getMovieCast()
}, [movieId])
 
return(
    <div>
        <ul>
            {cast.map(actor=>{
                <li key={actor.id}>{actor.name} as {actor.character}</li>
            })}
        </ul>
    </div>
)

}