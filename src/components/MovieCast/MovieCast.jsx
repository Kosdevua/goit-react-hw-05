import s from './MovieCast.module.css';
import { useParams } from 'react-router-dom';
import fetchCastById from '../service/castAPI';
import { useEffect, useState } from 'react';

const MovieCast = () => {
  const { movieId } = useParams();
  const [castDetails, setCastDetails] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCastDetails = async () => {
      try {
        const data = await fetchCastById(movieId);
        setCastDetails(() => [...data.cast]);
        // console.log(data);
        // console.log(data);
      } catch (error) {
        setError(error.message);
        alert(error);
      }
    };
    getCastDetails();
  }, [movieId]);
  console.log(error);
  // console.log('castDetails: ', castDetails);

  return (
    <ul className={s.movie_cast_wrapper}>
      {castDetails &&
        castDetails.map(detail => (
          <li key={detail.id}>
            <p>{detail.original_name}</p>
            <img className={s.image_wrapper} src={`https://image.tmdb.org/t/p/w500/${detail.profile_path}`} alt="" />
          </li>
        ))}
    </ul>
  );
};

export default MovieCast;
