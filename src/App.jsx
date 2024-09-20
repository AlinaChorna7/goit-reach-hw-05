
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import HomePage from './pages/HomePage/HomePage';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReview from './components/MovieReviews/MovieReviews';
import Navigation from './components/Navigation/Navigation';
import SearchMovies from './pages/MoviesPage/MoviesPage';

export default function App() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/movies' element={<SearchMovies />} />
                <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
                    <Route path='cast' element={<MovieCast />} />
                    <Route path='reviews' element={<MovieReview />} />
                </Route>
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}
