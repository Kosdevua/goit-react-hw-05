import './App.css';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import MovieCast from './components/MovieCast/MovieCast';
import Navigation from './components/Navigation/Navigation';
import MovieReviews from './components/MovieReviews/MovieReviews';
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
// import MoviesPage from './pages/MoviesPage/MoviesPage';
// import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading ...</p>}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
