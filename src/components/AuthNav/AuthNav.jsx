import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css'

export const AuthNav = () => {
  return (
    <div className={css.container}>
      <NavLink to="/register" className={css.link}>
        Sign up
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Sign in
      </NavLink>
    </div>
  );
};
