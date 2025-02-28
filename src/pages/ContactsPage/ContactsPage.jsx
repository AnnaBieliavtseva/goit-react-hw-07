import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { selectLoading } from '../../redux/contacts/selectors';
import Loader from '../../components/Loader/Loader';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import DocumentTitle from '../../components/DocumentTitle';
import css from './ContactsPage.module.css';
import SearchBox from '../../components/SearchBox/SearchBox';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <DocumentTitle>ContactsPage</DocumentTitle>
      <div className={css.thumb}>
        <ContactForm />
        <SearchBox />
      </div>
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
}
