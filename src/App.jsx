import './App.css';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import MovieCast from './components/MovieCast/MovieCast';
import Navigation from './components/Navigation/Navigation';
import MovieReviews from './components/MovieReviews/MovieReviews';
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage/NotFoundPage'));
const MovieDetailsPage = lazy(() => import('./components/pages/MovieDetailsPage/MovieDetailsPage'));
const MoviesPage = lazy(() => import('./components/pages/MoviesPage/MoviesPage'));
const HomePage = lazy(() => import('./components/pages/HomePage/HomePage'));
// import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
// import MovieDetailsPage from './components/pages/MovieDetailsPage/MovieDetailsPage';
// import MoviesPage from './components/pages/MoviesPage/MoviesPage';
// import HomePage from './components/pages/HomePage/HomePage';

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
