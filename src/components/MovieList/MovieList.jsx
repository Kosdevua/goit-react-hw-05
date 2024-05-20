import { NavLink, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {movies.map(item => {
          return (
            <li className={s.wrapper} key={item.id}>
              <NavLink to={`/movies/${item.id}`} state={location}>
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
