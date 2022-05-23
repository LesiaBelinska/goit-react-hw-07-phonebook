import { useSelector } from 'react-redux';

import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useGetContactsQuery } from 'redux/contactsSlice';


const ContactList = () => {
    const { data: contacts } = useGetContactsQuery();
    //console.log('data:', data);
    
    const filter = useSelector(state => state.filter);
    
    const filteredContacts = contacts?.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
    

    return (
        <ul>
            {contacts && filteredContacts.map(({ id, name, phone }) => {
                return (
                    <ContactListItem
                        key={id}
                        id={id}
                        name={name}
                        number={phone}
                    />
                )
            })}
        </ul>
    )
};

export default ContactList;



//BEFORE

// import { useSelector, useDispatch } from 'react-redux';

// import ContactListItem from 'components/ContactListItem/ContactListItem';
// import { deleteContact } from "../../redux/contacts-actions.js";

// const ContactList = () => {

//     const contacts = useSelector(state => state.contacts);
//     const filter = useSelector(state => state.filter);
//     const dispatch = useDispatch();
//     const filteredContacts = contacts?.filter(contact =>
//         contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));

//     return (
//         <ul>
//             {filteredContacts.map(({ id, name, number }) => {
//                 return (
//                     <ContactListItem
//                         key={id}
//                         id={id}
//                         name={name}
//                         number={number}
//                         onDeleteContact={(contactId)=>dispatch(deleteContact(contactId))}
//                     />
//                 )
//             })}
//         </ul>
//     )
// };

// export default ContactList;

