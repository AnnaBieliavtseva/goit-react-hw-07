import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { Stack } from '@mui/material';

export const AuthNav = () => {
  return (
    <Stack direction="row" useFlexGap paddingTop='10px' spacing={{ xs: 1, sm: 3, md: 4 }}>
     
      <NavLink to="/register" className={css.link}>
        Sign up
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Sign in
      </NavLink>
    
    </Stack>
  );
};
