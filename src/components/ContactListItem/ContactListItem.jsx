import PropTypes from 'prop-types';

import s from "./ContactListItem.module.css";

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
    return (
        <li className={s.item}>{name}: {number}
            <button className={s.button} type="button"
                onClick={() => onDeleteContact(id)}>
                Delete
            </button></li>
    )
};

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};