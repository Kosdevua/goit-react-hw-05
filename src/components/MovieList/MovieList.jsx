import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {movies.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`movies/${item.id}`} state={location}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
