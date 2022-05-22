import PropTypes from 'prop-types';

import { useDeleteContactMutation } from 'redux/contactsSlice';
import s from "./ContactListItem.module.css";

const ContactListItem = ({ id, name, number }) => {

    const [deleteContact, result] = useDeleteContactMutation();
    return (
        <li className={s.item}>{name}: {number}
            <button className={s.button} type="button"
                onClick={() => deleteContact(id)}
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
    //onDeleteContact: PropTypes.func.isRequired,
};