import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import Cast from '../components/Cast';
// import Reviews from '../components/Reviews';


const API_KEY = 'e7afc97253756bde4794256be54685bd';

export default function MovieDetailsPage(){
const {movieId}= useParams();
const[movieDateils, setMovieDetails]= useState(null);
const [cast, setCast]=useState([]);
const [review, setReview]= useState([]);


useEffect(()=>{
const fetchMoviesDetails = async()=>{
    try {
        const detailsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
        setMovieDetails(detailsResponse.data)

        const castResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
        setCast(castResponse.data.results)

        const reviewResponse = await axios.get()
    } catch (error) {
        console.error(`Error fetching movie details`, error);
    }
} 
}
)
}