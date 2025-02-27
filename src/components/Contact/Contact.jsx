import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import MuiCard from '@mui/material/Card';
import { Stack, styled } from '@mui/material';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  transition: 'all 0.3s ease',
//   [theme.breakpoints.up('sm')]: {
//     width: '450px',
//   },
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow:
    theme.palette.mode === 'dark'
      ? 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px'
      : 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
}));

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      sx={{
          justifyContent: 'center',
          flexWrap:'wrap',
        gap: { xs: 6, sm: 4, lg: 16 },
        p: { xs: 1, sm: 2 },
          m: 'auto',
        width: { xs: '280px',},
      }}
    >
      <Card>
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
      </Card>
    </Stack>
  );
}
