import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';

import { lazy, Suspense } from 'react';


const SearchMovies = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReview = lazy(() => import('./components/MovieReviews/MovieReviews'));

export default function App() {
    return (
        <div>
            <Navigation />
           
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    
                    <Route path='/movies' element={<Suspense fallback={<div>Loading...</div>}><SearchMovies />  </Suspense>} />  
                    
                    <Route path='/movies/:movieId' element={<Suspense fallback={<div>Loading...</div>}><MovieDetailsPage /></Suspense>}>
                        <Route path='cast' element={<Suspense fallback={<div>Loading...</div>}><MovieCast /></Suspense>} />
                        <Route path='reviews' element={<Suspense fallback={<div>Loading...</div>}><MovieReview /></Suspense>} />
                    </Route>   
                    <Route path='*' element={<Suspense fallback={<div>Loading...</div>}><NotFoundPage /></Suspense>} />
                </Routes>
        
        </div>
    );
}
