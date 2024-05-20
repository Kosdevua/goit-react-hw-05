import { useEffect, useState } from 'react';
import fetchTrend from '../../service/trandsAPI';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrend().then(response => {
      setMovies(response); // Отримання результатів з об'єкту відповіді
    });
  }, []);

  return <MovieList movies={movies} />;
};

export default HomePage;
