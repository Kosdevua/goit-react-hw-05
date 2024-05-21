import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigation.module.css';
import { Suspense } from 'react';

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
      <Suspense fallback={<p>Loading ...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
