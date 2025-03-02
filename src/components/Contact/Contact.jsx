import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { Stack } from '@mui/material';
import ContactBtn from '../Button/ContactBtn';
import ContactCard from '../Card/ContactCard';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      sx={{
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: { xs: 6, sm: 4, lg: 16 },
        p: { xs: 1, sm: 2 },
        m: 'auto',
      }}
    >
      <ContactCard
        variant="outlined"
        sx={{ width: { xs: '280px', md: '300px' } }}
      >
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
        <ContactBtn
          type="button"
          handleClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </ContactBtn>
      </ContactCard>
    </Stack>
  );
}
