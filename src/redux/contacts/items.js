import { createSlice } from "@reduxjs/toolkit";


import { getContactsOperation, addContactOperation, deleteContactOperation } from "./asyncOperations";

export const contactItemsSlice = createSlice({
  name: "items",
  initialState: null,
  reducers: {
  },
  extraReducers: {
    [getContactsOperation.fulfilled]: (items, action) => {
      return action.payload; 
    },
    [getContactsOperation.rejected]: (items, action) => {
      if (action.error.code === "ERR_BAD_REQUEST") {
        return []; 
      }
      return items;
    },

    [addContactOperation.fulfilled]: (items, action) => {
      if (!items) { 
        return [action.payload];
      }
      return [...items, action.payload]; 
    },
    [deleteContactOperation.fulfilled]: (items, action) => {
      const { id } = action.payload; 
      return items.filter((contact) => {
        return contact.id !== id;
      });
    },
  }
});

export const selectItems = (state) => {
  return state.contacts.items;
}

export const { addContact, deleteContact } = contactItemsSlice.actions;

export default contactItemsSlice.reducer;