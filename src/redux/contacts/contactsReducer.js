import { combineReducers } from "@reduxjs/toolkit";

import filterReducer from "./filter";
import itemsReducer from "./items";
import { contactStatus } from "./status";
import { contactError } from "./error";

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  status: contactStatus,
  error: contactError,
});

export default contactsReducer;
