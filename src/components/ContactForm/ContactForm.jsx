import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import {
  Box,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Stack,
} from '@mui/material';
import ContactBtn from '../Button/ContactBtn';
import ContactCard from '../Card/ContactCard';
import ContactFormBox from '../Box/ContactFormBox';

export default function ContactForm() {
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const dispatch = useDispatch();

  const validateInputs = () => {
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');

    let isValid = true;

    if (!name.value || name.value.length < 3) {
      setNameError(true);
      setNameErrorMessage('Name must be at least 3 characters long.');
      isValid = false;
    } else if (name.value.length > 25) {
      setNameError(true);
      setNameErrorMessage('Name must be no longer than 25 characters.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }

    if (!phone.value || phone.value.length < 3) {
      setPhoneError(true);
      setPhoneErrorMessage('Phone must be at least 3 characters long.');
      isValid = false;
    } else if (phone.value.length > 25) {
      setPhoneError(true);
      setPhoneErrorMessage('Phone must be no longer than 25 characters.');
      isValid = false;
    } else {
      setPhoneError(false);
      setPhoneErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (nameError || phoneError) {
      return;
    }
    const data = new FormData(event.currentTarget);
    dispatch(addContact({ name: data.get('name'), number: data.get('phone') }));

    event.currentTarget.reset();
  };

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      sx={{
        justifyContent: 'center',
        gap: { xs: 6, sm: 4, lg: 16 },
        p: { xs: 2, sm: 4 },
        m: '0',
      }}
    >
      <ContactCard variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={theme => ({
            width: '100%',
            fontSize: 'clamp(2rem, 10vw, 2.15rem)',
            color:
              theme.palette.mode === 'dark' ? 'primary.light' : 'primary.dark',
            transition: 'color 0.3s ease',
          })}
        >
          Add contact
        </Typography>
        <ContactFormBox onHandleSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <TextField
              id="name"
              name="name"
              placeholder="Enter name"
              error={nameError}
              helperText={nameErrorMessage}
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={nameError ? 'error' : 'primary'}
            />
          </FormControl>
          <FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <FormLabel htmlFor="phone">Phone number</FormLabel>
            </Box>
            <TextField
              error={phoneError}
              helperText={phoneErrorMessage}
              name="phone"
              placeholder="Enter phone number"
              id="phone"
              required
              fullWidth
              variant="outlined"
              color={phoneError ? 'error' : 'primary'}
            />
          </FormControl>
          <ContactBtn type="submit" handleClick={validateInputs}>
            Add contact
          </ContactBtn>
        </ContactFormBox>
      </ContactCard>
    </Stack>
  );
}
