// import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import AppTheme from './Shared-theme/AppTheme';
import { refreshUser } from '../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/selectors';


// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import SearchBox from './SearchBox/SearchBox';
// import { useEffect } from 'react';
// import { fetchContacts } from '../redux/contactsOps';
// import Loader from './Loader/Loader';
// import { selectError, selectIsLoading } from '../redux/contactsSlice';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => {
  console.log('loading');

  return import('../pages/RegisterPage/RegisterPage');
});
const LoginPage = lazy(() => {
  console.log('aaaa');

  return import('../pages/LoginPage/LoginPage');
});
const ContactsPage = lazy(() => {
  console.log('tas');

  return import('../pages/ContactsPage/ContactsPage');
});

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ?(<b>Refreshing</b>) : (

    <div className="container">
      <AppTheme>
        <CssBaseline></CssBaseline>

        <Stack
          direction="column"
          component="main"
          sx={[
            {
              justifyContent: 'center',
              height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
              marginTop: '15px',
              minHeight: '100%',
            },
            theme => ({
              '&::before': {
                content: '""',
                display: 'block',
                position: 'fixed',
                zIndex: -1,
                inset: 0,
                backgroundImage:
                  'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                ...theme.applyStyles('dark', {
                  backgroundImage:
                    'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
                }),
              },
            }),
          ]}
        >
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
                }
              />
            </Routes>
          </Layout>
        </Stack>
      </AppTheme>
    </div>
  );
}

export default App;
