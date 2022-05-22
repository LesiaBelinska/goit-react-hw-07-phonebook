import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';

import {addContact} from "../../redux/contacts-actions.js";
import s from "./ContactForm.module.css";

const schema = yup.object().shape({
  name: yup.string().required("enter a name, this is a required field"),
  number: yup.string().min(8).max(13).required("enter a phone number, this is a required field"),
});

const initialValues = {
  name: '',
  number: '',
};

const nameInputId = nanoid();
const numberInputId = nanoid();

const ContactForm = () => {

const contacts = useSelector(state => state.contacts);
const dispatch = useDispatch();


  const onSubmit = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    }

    const normalazedNewContactName = newContact.name.toLocaleLowerCase();

    if (contacts.find(contact => contact.name.toLocaleLowerCase() === normalazedNewContactName)) {
      alert(`${newContact.name} is already in contacts`)
      return;
    };

    dispatch(addContact(newContact))
  };


  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.name, values.number);
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
        <label htmlFor={numberInputId} className={s.label}>Number</label>
        <Field
          className={s.input}
          type="tel"
          name="number"
          id={numberInputId}
        />
        <ErrorMessage className={s.error} name="number" component="div" />
        <button className={s.button} type='submit'>Add contact</button>
      </Form>
    </Formik>
  )
  
};

export default ContactForm;




// class ContactForm extends Component {

//     state = {
//         name: '',
//         number: '',
//     };

  // nameInputId = nanoid();
  // numberInputId = nanoid();

//     handleChange = (event) => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     const { name, number } = this.state;
//     event.preventDefault();
    // this.props.onSubmit(name, number);
//     this.reset();
//   };
    
//   reset = () => {
//     this.setState({
//       name: '',
//       number: ''
//     })
//   };

//   render() {
//     const handleSubmit = this.handleSubmit;
//     const handleChange = this.handleChange;
//     const nameInputId = this.nameInputId;
//     const numberInputId = this.nameInputId;
//     const { name, number } = this.state;
//       return (
//         <form onSubmit={handleSubmit}>
          // <label htmlFor={nameInputId}>Name</label>
          // <input
          //   type="text"
          //   name="name"
          //   id={nameInputId}
          //   value={name}
          //   onChange={handleChange}
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          //   autoComplete="off"
          //   required />
          // <label htmlFor={numberInputId}>Number</label>
          // <input
          //   type="tel"
          //   name="number"
          //   id={numberInputId}
          //   value={number}
          //   onChange={handleChange}
          //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          //   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          //   required
          // />
          // <button type='submit'>Add contact</button>
//         </form>
//       );
//   };
// };

//  export default ContactForm;

