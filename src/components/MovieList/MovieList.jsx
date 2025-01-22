import { Link, useLocation } from 'react-router-dom';
import './MovieList.css';

export default function MovieList({ movies }) {
    const location = useLocation(); 

    return (
        <div className="movie-gallery">
            {movies.map(movie => (
                <div key={movie.id} className="movie-card">
                    <Link 
                        to={`/movies/${movie.id}`} 
                        state={{ from: location }} 
                        className="movie-link"
                    >
                        <div className="movie-image">
                            
                            <img 
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                alt={movie.title} 
                            />
                        </div>
                        <div className="movie-title">{movie.title}</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
