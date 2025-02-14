import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts.items);
  // const filter = useSelector(state => state.filter.filters.name);
  // const filteredContacts = contacts.filter(item =>
  //   item.name.toLowerCase().includes(filter.toLowerCase())
  // );
  // if (!filteredContacts.length) {
  //   return <h2 style={{ textAlign: 'center', marginTop: 10 }}>There are no contacts yet</h2>;
  // }
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
}
