import { Link, Outlet } from "react-router-dom";
import s from "./Layout.module.css";
const Layout = () => {
  return (
    <div className={s.layout_wrapper}>
      <div>Layout</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default Layout;
