import PropTypes from 'prop-types';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

import { useDeleteContactMutation } from 'redux/contactsSlice';
import s from "./ContactListItem.module.css";

const ContactListItem = ({ id, name, number }) => {

    const [deleteContact, result] = useDeleteContactMutation();
    
    const onDeleteContact = () => deleteContact(id);

    useEffect(() => {
        if (result.isSuccess) {
            toast.success(`contact was deleted`);
        }
        return
      
    }, [result.isSuccess])
    

    return (
        <li className={s.item}>{name}: {number}
            <button className={s.button} type="button"
                onClick={onDeleteContact}
                disabled={result.isLoading}
            >
                Delete
            </button></li>
    )
}

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};