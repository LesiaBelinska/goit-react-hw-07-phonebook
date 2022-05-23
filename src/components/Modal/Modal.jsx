import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import toast from "react-hot-toast";

import { useGetContactByIdQuery, useUpdateContactMutation } from "redux/contactsSlice.js";
import ContactForm from "components/ContactForm/ContactForm.jsx";
import s from "./Modal.module.css";

export const Modal = ({ onClose, id }) => {
    
    const { data: contact } = useGetContactByIdQuery(id);
    const [updateMaterial, result] = useUpdateContactMutation();
    
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    });

    
    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    };
    

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    const handleUpdateContact = async fields => {
        try {
            await updateMaterial({ id: id, ...fields })
            onClose();
        }
        catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (result.isSuccess) {
            toast.success(`changes was saved`);
        }
        return
      
    }, [result.isSuccess])


    return createPortal(
        <div className={s.Overlay}
            onClick={handleBackdropClick}>
            <div className={s.Modal}>
                {contact && (
                    <ContactForm
                    initialValues={{ name: contact.name, phone: contact.phone }}
                    onSubmit={handleUpdateContact}
                    buttonText='Save' />)}
            </div>
        </div>,
        document.querySelector('#modal-root'),
    )
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
}