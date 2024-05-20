import getMovies from '../../service/searchQueryAPI';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../MovieList/MovieList';
import { ThreeDots } from 'react-loader-spinner';
import s from './MoviesPage.module.css';

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    if (event.target.elements.query.value.trim() === '') {
      return 'Please enter your search';
    }
    const query = event.target.elements.query.value.trim();
    setSearchParams({ query });
    event.target.reset();
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }
    const getData = async () => {
      setData([]);
      setLoading(true);
      setError('');
      try {
        const data = await getMovies(movieName);
        if (!data.length) {
          alert('Please enter another search');
        }
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
        setHasSearched(true);
      }
    };
    getData();
  }, [movieName]);

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input placeholder="Enter your search..." type="text" defaultValue={movieName} name="query" />
        <button type="submit">Search</button>
      </form>
      {loading && (
        <ThreeDots
          visible={true}
          height="60"
          width="60"
          color="#2b2b2b"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {hasSearched && !loading && data.length === 0 && <p>No results found</p>}
      {data.length > 0 && <MovieList type="movies" movies={data} />}
    </>
  );
};

export default MoviesPage;
