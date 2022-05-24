import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

import { useGetContactsQuery } from 'redux/contactsSlice.js';
import s from "./ContactForm.module.css";

const schema = yup.object().shape({
  name: yup.string().required("enter a name, this is a required field"),
  phone: yup.string().min(8).max(13).required("enter a phone number, this is a required field"),
});


const nameInputId = nanoid();
const phoneInputId = nanoid();

const ContactForm = ({ initialValues = {
  name: '', phone: '',}, onSubmit, buttonText }) => {

  
  const { data: contacts } = useGetContactsQuery();


  const handleSubmit = async (values, { resetForm }) => {
     if (contacts.find(contact => contact.name.toLocaleLowerCase() === values.name.toLocaleLowerCase())){
       toast.error(`${values.name} is already in contacts`)
        return
     }
   await onSubmit(values);
    resetForm();
  };


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}>
      <Form className={s.form} autoComplete='off'>
        <label htmlFor={nameInputId} className={s.label}>Name</label>
        <Field
          className={s.input}
          type="text"
          name="name"
          id={nameInputId}
        />
        <ErrorMessage className={s.error} name="name" component="div" />
        <label htmlFor={phoneInputId} className={s.label}>Number</label>
        <Field
          className={s.input}
          type="tel"
          name="phone"
          id={phoneInputId}
        />
        <ErrorMessage className={s.error} name="phone" component="div" />
        <button className={s.button} type='submit'>{buttonText}</button>
      </Form>
    </Formik>
  );
  
}

export default ContactForm;

ContactForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,

};

