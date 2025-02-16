import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  id: nanoid(),
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <div className={css.contactFormContainer}>
        <Form className={css.contactForm}>
          <label htmlFor={nameFieldId} className={css.contactFormLabel}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.contactFormInput}
          ></Field>
          <ErrorMessage
            name="name"
            component="span"
            className={css.errorMessage}
          />
          <label htmlFor={phoneFieldId} className={css.contactFormLabel}>
            Number
          </label>
          <Field
            type="text"
            name="number"
            id={phoneFieldId}
            className={css.contactFormInput}
          ></Field>
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
          <button type="submit" className={css.contactFormBtn}>
            Add contact
          </button>
        </Form>
      </div>
    </Formik>
  );
};
export default ContactForm;
