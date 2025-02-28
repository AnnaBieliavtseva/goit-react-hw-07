import { NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';
import '../index.css';

export const AuthNav = () => {
  return (
    <Stack
      direction="row"
      useFlexGap
      paddingTop="10px"
      spacing={{ xs: 1, sm: 3, md: 4 }}
    >
      <NavLink to="/register" className="contactLink">
        Sign up
      </NavLink>
      <NavLink to="/login" className="contactLink">
        Sign in
      </NavLink>
    </Stack>
  );
};
