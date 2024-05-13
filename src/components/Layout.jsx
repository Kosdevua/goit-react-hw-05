import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>Layout</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;
