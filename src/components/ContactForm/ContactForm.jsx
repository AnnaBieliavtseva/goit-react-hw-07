// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import {
  Box,
  Button,
   FormControl,
  FormLabel,
  styled,
  TextField,
  Typography,
  Stack,
} from '@mui/material';
import MuiCard from '@mui/material/Card';

// const FeedbackSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   number: Yup.string()
//     .min(3, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
// });

// const initialValues = {
//   id: nanoid(),
//   name: '',
//   number: '',
// };

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  transition: 'all 0.3s ease',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow:
    theme.palette.mode === 'dark'
      ? 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px'
      : 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
}));

export default function ContactForm() {
  //   const dispatch = useDispatch();

  //   const nameFieldId = useId();
  //   const phoneFieldId = useId();

  //   const handleSubmit = (values, actions) => {
  //     dispatch(
  //       addContact({
  //         name: values.name,
  //         number: values.number,
  //       })
  //     );
  //     actions.resetForm();
  //   };
  //   return (
  //     <Formik
  //       initialValues={initialValues}
  //       onSubmit={handleSubmit}
  //       validationSchema={FeedbackSchema}
  //     >
  //       <div className={css.contactFormContainer}>
  //         <Form className={css.contactForm}>
  //           <label htmlFor={nameFieldId} className={css.contactFormLabel}>
  //             Name
  //           </label>
  //           <Field
  //             type="text"
  //             name="name"
  //             id={nameFieldId}
  //             className={css.contactFormInput}
  //           ></Field>
  //           <ErrorMessage
  //             name="name"
  //             component="span"
  //             className={css.errorMessage}
  //           />
  //           <label htmlFor={phoneFieldId} className={css.contactFormLabel}>
  //             Number
  //           </label>
  //           <Field
  //             type="text"
  //             name="number"
  //             id={phoneFieldId}
  //             className={css.contactFormInput}
  //           ></Field>
  //           <ErrorMessage
  //             name="number"
  //             component="span"
  //             className={css.errorMessage}
  //           />
  //           <button type="submit" className={css.contactFormBtn}>
  //             Add contact
  //           </button>
  //         </Form>
  //       </div>
  //     </Formik>
  //   );

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
        m: 'auto',
      }}
    >
      <Card variant="outlined">
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
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 2,
          }}
        >
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

          <Button
            type="submit"
            fullWidth
            variant="outlined"
            onClick={validateInputs}
            sx={theme => ({
              backgroundColor:
                theme.palette.mode === 'dark' ? 'primary.main' : 'info.dark',
              color: theme.palette.text.primary,
              '&:hover': {
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? 'primary.dark'
                    : 'primary.light',
              },
              transition: 'all 0.3s ease',
            })}
          >
            Add contact
          </Button>
        </Box>
      </Card>
    </Stack>
  );
}
