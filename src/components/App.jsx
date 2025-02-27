// import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout';
import { refreshUser } from '../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/selectors';
import AppThemeMy from './AppThemeMy';


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

  return isRefreshing ? (
    <b>Refreshing</b>
  ) : (
    <div className="container">
   
      <AppThemeMy>{}
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
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Routes>
        </Layout>
      </AppThemeMy>
  
    </div>
  );
}

export default App;
