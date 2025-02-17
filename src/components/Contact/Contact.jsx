import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contactContainer}>
      <div>
        <h3 className={css.contactTitle}>
          <span>
            <FaUser className={css.contactIcon} />
          </span>
          {name}
        </h3>
        <p className={css.contactText}>
          <span>
            <FaPhone className={css.contactIcon} />
          </span>
          {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}
