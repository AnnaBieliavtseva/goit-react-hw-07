import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import AppTheme from '../Shared-theme/AppTheme';
import Content from './Content';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import LoginForm from '../LoginForm/LoginForm';

export default function SignInSide(props) {
  const isLoggediIn = useSelector(selectIsLoggedIn)
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

     
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            justifyContent: 'center',
            gap: { xs: 6, sm: 12, },
            p: 2,
            mx: 'auto',
          }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            sx={{
              justifyContent: 'center',
              gap: { xs: 6, sm: 4, lg:16  },
              p: { xs: 2, sm: 4 },
              m: 'auto',
            }}
          >
            <Content />
            {!isLoggediIn && <LoginForm />}
          </Stack>
        </Stack>
   
    </AppTheme>
  );
}
