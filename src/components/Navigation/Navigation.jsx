import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigation.module.css';

const Layout = () => {
  return (
    <div>
      <nav className={s.layout_wrapper}>
        <NavLink to="/" className={({ isActive }) => (isActive ? `${s.navLink} ${s.active}` : s.navLink)}>
          Home
        </NavLink>
        <NavLink to="/movies" className={({ isActive }) => (isActive ? `${s.navLink} ${s.active}` : s.navLink)}>
          Movies
        </NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
