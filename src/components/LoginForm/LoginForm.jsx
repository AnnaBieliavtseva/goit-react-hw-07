import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import ContactBtn from '../Button/ContactBtn';
import ContactCard from '../Card/ContactCard';
import ContactFormBox from '../Box/ContactFormBox';
import '../../components/index.css';
import toast from 'react-hot-toast';

export default function LoginForm() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (emailError || passwordError) {
      return;
    }
    const data = new FormData(event.currentTarget);
    dispatch(
      logIn({ email: data.get('email'), password: data.get('password') })
    )
      .unwrap()
      .then(() => {
        toast.success('Successfully logged in');
      })
      .catch(() => {
        toast.error('Invalid email or password. Please try again.');
      });

    event.currentTarget.reset();
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <ContactCard variant="outlined">
      <Typography
        component="h1"
        variant="h4"
        sx={theme => ({
          width: '100%',
          fontSize: 'clamp(2rem, 10vw, 2.15rem)',
          color:
            theme.palette.mode === 'dark' ? 'primary.light' : 'primary.dark',
          transition: 'color 0.3s ease',
        })}
      >
        Sign in
      </Typography>
      <ContactFormBox onHandleSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={emailError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormLabel htmlFor="password">Password</FormLabel>
          </Box>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            fullWidth
            variant="outlined"
            color={passwordError ? 'error' : 'primary'}
          />
        </FormControl>

        <ContactBtn type="submit" handleClick={validateInputs}>
          Sign in
        </ContactBtn>
        <Typography sx={{ textAlign: 'center' }}>
          Don&apos;t have an account?{' '}
          <span>
            <NavLink to="/register" className="contactLink">
              Sign up
            </NavLink>
          </span>
        </Typography>
      </ContactFormBox>
    </ContactCard>
  );
}
