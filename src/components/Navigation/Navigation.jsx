import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import css from './Navigation.module.css';
import '../index.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink to="/">
        <HomeIcon
          sx={{
            fontSize: '40px',
            color: 'primary.dark',
            transition: 'all 0.3s ease',
            marginRight:'15px',
            '&:hover': { color: 'primary.light' },
          }}
        />
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className="contactLink">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
