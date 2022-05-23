import { useAddContactMutation } from 'redux/contactsSlice.js';
import toast from 'react-hot-toast';

import ContactForm from "components/ContactForm/ContactForm.jsx";


const CreateContact = () => {

    const [addContact] = useAddContactMutation();
    
    const handleAddContact = async (values) => {
    try {
      await addContact(values);
      toast.success(`contact "${values.name}" was saved`)
    } catch (error) {
      toast.error('error, contact was not saved')
      console.log(error)
    }
  };
    
    return(
        <>
            <ContactForm onSubmit={handleAddContact} buttonText='Add contact'/>
        </>
    )
}

export default CreateContact;