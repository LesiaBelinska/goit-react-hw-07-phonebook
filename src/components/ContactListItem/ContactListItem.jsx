import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { useDeleteContactMutation } from 'redux/contactsSlice';
import { Modal } from 'components/Modal/Modal.jsx';
import s from "./ContactListItem.module.css";

const ContactListItem = ({ id, name, number }) => {

    const [deleteContact, result] = useDeleteContactMutation();
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    
    const onDeleteContact = () => deleteContact(id);

    useEffect(() => {
        if (result.isSuccess) {
            toast.success(`contact was deleted`);
        }
        return
      
    }, [result.isSuccess])
    

    return (
        <li className={s.item}>{name}: {number}
            <div className={s.btnGroup}>
                <button className={s.button} type="button"
                onClick={onDeleteContact}
                disabled={result.isLoading}
            >
                Delete
            </button>
            <button
                className={s.button}
                onClick={toggleModal}>Update</button>
            </div>
        {showModal &&
                <Modal
                onClose={toggleModal}
                id={id}
                />}
        </li>
    )
}

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};