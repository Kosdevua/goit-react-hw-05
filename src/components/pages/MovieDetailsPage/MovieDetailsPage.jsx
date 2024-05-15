import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import fetchMovieById from "../../service/detailsAPI";
import s from "./MovieDetailsPage.module.css";
// import MovieCast from "../../MovieCast/MovieCast";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovies] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieById(movieId);
        setMovies(data);
      } catch (error) {
        setError(error.message);
      }
      getData;
    };
    getData();
  }, [movieId]);

  return (
    <>
      <div className={s.details_wrapper}>
        <div>
          <img
            width={200}
            src={
              movie && `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            }
            alt={movie && movie.title}
          />
        </div>
        <div>
          <h2>
            {movie && movie.title}
            <span>({movie && new Date(movie.release_date).getFullYear()})</span>
          </h2>
          <p>
            User score:{" "}
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
              movie.genres.map((genre) => {
                return <span key={genre.id}>{genre.name} </span>;
              })}
          </p>
        </div>
      </div>
      <div>
        <hr />

        <nav>
          <Link to="cast">Home</Link>
          <Link to="reviews">Movies</Link>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
