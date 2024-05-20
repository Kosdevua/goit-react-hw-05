import { NavLink } from 'react-router-dom';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div>
      <NavLink className={s.btn_wrapper} to="/">
        <button>go back</button>
      </NavLink>
      <p>404</p>
      <p>NotFoundPage</p>
    </div>
  );
};

export default NotFoundPage;
