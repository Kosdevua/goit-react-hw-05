import { NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css';
const Layout = () => {
  return (
    <div className={s.layout_wrapper}>
      <div>Layout</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
export default Layout;
