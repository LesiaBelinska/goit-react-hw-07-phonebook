import { configureStore } from "@reduxjs/toolkit";
import {
persistStore,
persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
//import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts-reducer";

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'], //blacklist - зберігати окрім такого поля, whitelist - зберігати тільки такі поля
};

export const persistedReducer = persistReducer(
    contactsPersistConfig,
    contactsReducer,
);

export const store = configureStore({
    
    reducer: persistedReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    },
    // прослойка, для виводу у консоль
    // middleware: getDefaultMiddleware =>
    //     [...getDefaultMiddleware(), logger],
});

export const persistor = persistStore(store);

