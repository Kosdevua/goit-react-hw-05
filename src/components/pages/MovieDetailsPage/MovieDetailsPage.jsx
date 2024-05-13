import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import fetchMovieById from "../../service/detailsAPI";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovies] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieById(movieId);
        setMovies(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
      getData;
    };
    getData();
  }, [movieId]);
  console.log(movie);
  console.log({ movie });

  return (
    <>
      <h2>
        {movie && movie.title}
        <span>({movie && new Date(movie.release_date).getFullYear()})</span>
      </h2>
      <img
        width={200}
        src={movie && `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie && movie.title}
      />

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
