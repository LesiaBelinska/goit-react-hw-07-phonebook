import ContactForm from "./ContactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import Filter from "./Filter/Filter.jsx";

import s from "./App.module.css";

const App = () => {
   
  return (
    <div className={s.App}>
      <div className={s.Phonebook}>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    </div>
  )
};

export default App;


// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import { nanoid } from "nanoid";

// import ContactForm from "./ContactForm/ContactForm.jsx";
// import ContactList from "./ContactList/ContactList.jsx";
// import Filter from "./Filter/Filter.jsx";

// import s from "./App.module.css";

// const App = () => {

//   const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
//   const [filter, setFilter] = useState('');


//   useEffect(() => {
//     window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);


  // const addNewContact = (name, number) => {
  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   }

  //   const normalazedNewContactName = newContact.name.toLocaleLowerCase();

  //   if (contacts.find(contact => contact.name.toLocaleLowerCase() === normalazedNewContactName)) {
  //     alert(`${newContact.name} is already in contacts`)
  //     return;
  //   };


  //   setContacts(prevContacts =>
  //     [newContact, ...prevContacts]
  //   );
  // };


//   const changeFilter = (event) => {
//     setFilter(event.currentTarget.value);
//   };


  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLocaleLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(normalizedFilter),
  //   )
  // };


//   const deleteContact = contactId => {
//     setContacts(prevState => (prevState.filter(contact => contact.id !== contactId)
//     ))
//   };
   
//   return (
//     <div className={s.App}>
//       <div className={s.Phonebook}>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={addNewContact} contacts={contacts} />
//         <h2>Contacts</h2>
//         <Filter value={filter}
//           onChange={changeFilter}
//         />
//         <ContactList
//           contacts={getFilteredContacts()} onDeleteContact={deleteContact} />
//       </div>
//     </div>
//   )
// };

// export default App;