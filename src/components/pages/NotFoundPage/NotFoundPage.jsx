import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Link to="/">go back</Link>
      <p>404</p>
      <p>NotFoundPage</p>
    </div>
  );
};

export default NotFoundPage;
