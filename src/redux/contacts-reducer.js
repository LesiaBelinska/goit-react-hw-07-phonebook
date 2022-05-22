import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { addContact, deleteContact, changeFilter } from "./contacts-actions.js";


const contactsReducer = createReducer([], {
    [addContact]: (state, action) => {
        return [...state, action.payload]
    },
    [deleteContact]: (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
    },
});


const filterReducer = createReducer('', {
    [changeFilter]: (_, action) => {
        return action.payload
    },
});

export default combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});
