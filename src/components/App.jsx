// import { useDispatch, useSelector } from 'react-redux';
import { lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout';
import SignInSide from './SignInSide/SignInSide';

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
const TasksPage = lazy(() => {
  console.log('tas');

  return import('../pages/TasksPage/TasksPage');
});

function App() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <SignInSide/>

    // <div className="container">
    //   <Layout>
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />
    //       <Route
    //         path="/register"
    //         element={
    //           <RestrictedRoute
    //             redirectTo="/tasks"
    //             component={<RegisterPage />}
    //           />
    //         }
    //       />
    //       <Route
    //         path="/login"
    //         element={
    //           <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
    //         }
    //       />
    //       <Route
    //         path="/tasks"
    //         element={
    //           <PrivateRoute redirectTo="/login" component={<TasksPage />} />
    //         }
    //       />
    //     </Routes>
    //   </Layout>
    // </div>
  );
}

export default App;
