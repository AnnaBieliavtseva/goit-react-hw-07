import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink to="/">
        <HomeIcon sx={{ fontSize: '36px', color: 'primary.dark' }} />
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
