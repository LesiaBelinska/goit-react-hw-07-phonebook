import { Toaster } from "react-hot-toast";

import CreateContact from "./CreateContact/CreateContact.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import Filter from "./Filter/Filter.jsx";

import s from "./App.module.css";

const App = () => {
   
  return (
    <div className={s.App}>
      <Toaster />
      <div className={s.Phonebook}>
        <h1>Phonebook</h1>
        <CreateContact/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    </div>
  )
};

export default App;