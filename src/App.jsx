import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation'
import NotFoundPage from './pages/NotFoundPage'
import { lazy } from 'react';

const HomePage = lazy(()=> import('./pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'))
const MoviePage = lazy(()=> import('./pages/MoviesPage/MoviesPage'));
const MovieCast = lazy(()=> import('./components/MovieCast/MovieCast'))
const MovieReviews = lazy(()=> import('./components/MovieReviews/MovieReviews.jsx'))

function App() {
return(
  
  <Router>
  <Navigation/>

  <Suspense fallback={<div>Loading...</div>}>

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/movies' element={<MoviePage/>}/>
      <Route path='/movies/:movieid' element={<MovieDetailsPage/>}>
      <Route path='cast' element={<MovieCast/>}/>
      <Route path='review' element={<MovieReviews/>}/>
      </Route>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes  >
    </Suspense>
    </Router>
 
)
}

export default App
