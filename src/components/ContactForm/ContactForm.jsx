import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { addContact } from '../../redux/contactsOps';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Error: Name should be at least 3 characters long!')
    .max(50, 'Error: Too long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Error: Number should be at least 3 characters long!')
    .max(50, 'Error: Too long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleAddContact = (values, { resetForm }) => {
    const duplicateContact = contacts.find(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (duplicateContact) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      ...values,
    };

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAddContact}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field className={css.field} type="text" name="name" id="name" />
        <ErrorMessage name="name" component="div" className={css.error} />
        <label htmlFor="number">Number</label>
        <Field className={css.field} type="text" name="number" id="number" />
        <ErrorMessage name="number" component="div" className={css.error} />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
