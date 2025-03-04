import { selectFilteredContacts } from '../../redux/filters/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  

  if (!filteredContacts.length) {
    return (
      <h2 style={{ textAlign: 'center', marginTop: 10 }}>
        There are no contacts yet
      </h2>
    );
  }
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => {
          return (
            
          <li key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
}
