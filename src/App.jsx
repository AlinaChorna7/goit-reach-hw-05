import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';

import { lazy, Suspense } from 'react';


const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReview = lazy(() => import('./components/MovieReviews/MovieReviews'));

export default function App() {
    return (
        <div>
            <Navigation />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    
                    <Route path='/movies' element={<MoviesPage />  } />  
                    
                    <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
                        <Route path='cast' element={<MovieCast />} />
                        <Route path='reviews' element={<MovieReview />} />
                    </Route>   
                    <Route path='*' element={<NotFoundPage />} />
                    
                </Routes>
                </Suspense>
        </div>
    );
}
