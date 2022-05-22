import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice.js';
import { filterSlice } from './filterSlice.js';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

// import { configureStore } from "@reduxjs/toolkit";
// import contactsReducer from "./contacts-reducer";

// export const store = configureStore({
    
//     reducer: contactsReducer,
// });

