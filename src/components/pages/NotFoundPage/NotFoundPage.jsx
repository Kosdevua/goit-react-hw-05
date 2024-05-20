import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <NavLink to="/">go back</NavLink>
      <p>404</p>
      <p>NotFoundPage</p>
    </div>
  );
};

export default NotFoundPage;
