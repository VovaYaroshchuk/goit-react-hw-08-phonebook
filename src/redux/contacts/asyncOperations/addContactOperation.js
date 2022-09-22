import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact } from "../mockAPI";
import { toast } from "react-toastify";

export const addContactOperation = createAsyncThunk(
  "items/addContact",
  async (contact, thunkAPI) => {
    const response = await addContact(contact);
    if (response.status !== 201) {
      return thunkAPI.rejectWithValue({ code: response.status, message: response.statusText });
    }
    return response.data;
  },
  {
    condition: (contact, { getState, extra }) => {
      const { contacts } = getState();

      const contactList = (contacts && contacts.items) ? contacts.items : [];
      
      const { name: newName } = contact; 
      const normalizedNewName = newName.toLowerCase(); 

      if ( contactList.some( (contact) => {
        return contact.name.toLowerCase() === normalizedNewName;
      }
      )) {
        toast.error(`${newName} is already in contacts.`, {autoClose: 2000}); //new error message with react-toastify
        return false; 
      };
    },
  }
);