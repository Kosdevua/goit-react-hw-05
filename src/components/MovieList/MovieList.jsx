import { NavLink, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {movies.map((item) => {
          return (
            <li key={item.id}>
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
