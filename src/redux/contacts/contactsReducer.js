import { combineReducers } from "@reduxjs/toolkit";

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import filterReducer from "./filter";
import itemsReducer from "./items";

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

//using nested persistReducer to store only contacts/items, not contacts/filter
const persistContactsConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
}

const persistedContactsReducer = persistReducer(persistContactsConfig, contactsReducer);

export default persistedContactsReducer;