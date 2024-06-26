import { useEffect, useState, useRef } from 'react';
import { NavLink, Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import fetchMovieById from '../../service/detailsAPI';
import s from './MovieDetailsPage.module.css';
import { ThreeDots } from 'react-loader-spinner';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const backLocationRef = useRef(location.state?.from || '/');

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
      <NavLink to={backLocationRef.current}>Go back</NavLink>

      {loading ? (
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
      ) : (
        <div className={s.details_wrapper}>
          <div>
            <img
              className={s.img_wrapper}
              width={500}
              src={movie && `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie && movie.title}
            />
          </div>
          <div className={s.discription_wrapper}>
            <h2>
              {movie && movie.title}
              <span>({movie && new Date(movie.release_date).getFullYear()})</span>
            </h2>
            <p>
              User score:
              <span>
                {movie && Math.round(movie.vote_average) * 10}
                <span>%</span>
              </span>
            </p>
            <h3>Overview</h3>
            <p>{movie && movie.overview}</p>
            <h3>Genres</h3>
            <p>
              {movie &&
                movie.genres.map(genre => {
                  return <span key={genre.id}>{genre.name} </span>;
                })}
            </p>
          </div>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <hr />
        <nav className={s.link_wrapper}>
          <NavLink to="cast">Cast </NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
