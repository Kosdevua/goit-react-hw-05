import { NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <div>Layout</div>
      <hr />
      <nav className={s.layout_wrapper}>
        <NavLink to="/" className={({ isActive }) => (isActive ? `${s.navLink} ${s.active}` : s.navLink)}>
          Home
        </NavLink>
        <NavLink to="/movies" className={({ isActive }) => (isActive ? `${s.navLink} ${s.active}` : s.navLink)}>
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
