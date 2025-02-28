import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import AppTheme from '../Shared-theme/AppTheme';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import ContactBtn from '../Button/ContactBtn';
import ContactCard from '../Card/ContactCard';
import '../../components/index.css';
import ContactFormBox from '../Box/ContactFormBox';
import { Box } from '@mui/material';

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  marginTop: '35px',
  padding: theme.spacing(0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
}));

export default function SignUp(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState('');

  const dispatch = useDispatch();

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const name = document.getElementById('name');

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

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage('Name is required.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!validateInputs()) return;

    const formData = {
      name: event.currentTarget.name.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    dispatch(register(formData))
      .unwrap()
      .then(() => console.log('Registration successful'))
      .catch(err => {
        if (err.code === 11000) {
          setEmailError(true);
          setEmailErrorMessage('This email is already in use.');
        } else {
          console.error('Registration failed:', err);
        }
      });

  
    event.currentTarget.reset();
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <SignUpContainer direction="column" justifyContent="space-between">
        <ContactCard variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={theme => ({
              width: '100%',
              fontSize: 'clamp(2rem, 10vw, 2.15rem)',
              color:
                theme.palette.mode === 'dark'
                  ? 'primary.light'
                  : 'primary.dark',
              transition: 'color 0.3s ease',
            })}
          >
            Sign up
          </Typography>
          <ContactFormBox onHandleSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="name">Full name</FormLabel>
              <TextField
                autoComplete="name"
                name="name"
                required
                autoFocus
                fullWidth
                id="name"
                placeholder="Jon Snow"
                error={nameError}
                helperText={nameErrorMessage}
                color={nameError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="your@email.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                error={emailError}
                helperText={emailErrorMessage}
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>

            <ContactBtn type="submit" handleClick={validateInputs}>
              Sign up
            </ContactBtn>
          </ContactFormBox>
          <Divider>
            <Typography sx={{ color: 'text.secondary' }}>or</Typography>
          </Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ textAlign: 'center' }}>
              Already have an account?{' '}
              <NavLink to="/login" className="contactLink">
                Sign In
              </NavLink>
            </Typography>
          </Box>
        </ContactCard>
      </SignUpContainer>
    </AppTheme>
  );
}
